from __future__ import annotations

from datetime import datetime, timedelta, timezone
from typing import Any, Dict, List, Optional, Set

from sqlalchemy.orm import Session

from app.models.dispatch import DispatchBatch, DispatchOffer
from app.models.service_request import ServiceRequest
from app.services.geo import find_nearby_providers
from app.services.provider_availability import is_provider_available
from app.services.provider_scoring import rank_providers
from app.services.wave_dispatch import build_dispatch_waves, get_wave_providers


SEARCH_RADIUS_KM_DEFAULT = 10
SEARCH_LIMIT = 50

WAVE_DELAY_SECONDS = {
    1: 60,
    2: 60,
    3: None,
}

BATCH_EXPIRY_SECONDS = {
    1: 300,
    2: 300,
    3: 300,
}

OFFER_EXPIRY_SECONDS = 300
TERMINAL_NO_PROVIDER_STATUS = "failed_no_providers"
MAX_WAVE_NUMBER = max(WAVE_DELAY_SECONDS.keys())


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


def get_dispatchable_requests(
    db: Session,
    limit: int = 100,
) -> List[ServiceRequest]:
    now = utcnow()

    return (
        db.query(ServiceRequest)
        .filter(ServiceRequest.status == "searching")
        .filter(ServiceRequest.next_wave_at.isnot(None))
        .filter(ServiceRequest.next_wave_at <= now.replace(tzinfo=None))
        .order_by(ServiceRequest.next_wave_at.asc(), ServiceRequest.id.asc())
        .limit(limit)
        .all()
    )


def get_request_for_update(
    db: Session,
    request_id: int,
) -> Optional[ServiceRequest]:
    return (
        db.query(ServiceRequest)
        .filter(ServiceRequest.id == request_id)
        .with_for_update()
        .first()
    )


def get_last_batch(
    db: Session,
    request_id: int,
) -> Optional[DispatchBatch]:
    return (
        db.query(DispatchBatch)
        .filter(DispatchBatch.request_id == request_id)
        .order_by(DispatchBatch.wave.desc(), DispatchBatch.id.desc())
        .first()
    )


def get_next_wave_number(
    db: Session,
    request_id: int,
) -> int:
    last_batch = get_last_batch(db, request_id)

    if not last_batch:
        return 1

    return int(last_batch.wave) + 1


def has_wave_capacity(wave_number: int) -> bool:
    return wave_number in WAVE_DELAY_SECONDS


def get_already_offered_provider_ids(
    db: Session,
    request_id: int,
) -> Set[int]:
    rows = (
        db.query(DispatchOffer.provider_id)
        .filter(DispatchOffer.request_id == request_id)
        .all()
    )

    return {int(row[0]) for row in rows}


def expire_open_offers_and_batches(
    db: Session,
    request_id: int,
    now: datetime,
) -> Dict[str, int]:
    open_offers = (
        db.query(DispatchOffer)
        .filter(DispatchOffer.request_id == request_id)
        .filter(DispatchOffer.status == "sent")
        .all()
    )

    for offer in open_offers:
        offer.status = "expired"
        offer.expired_at = now

    open_batches = (
        db.query(DispatchBatch)
        .filter(DispatchBatch.request_id == request_id)
        .filter(DispatchBatch.status.in_(["searching", "sent"]))
        .all()
    )

    for batch in open_batches:
        batch.status = "expired"
        batch.expires_at = now

    return {
        "offers": len(open_offers),
        "batches": len(open_batches),
    }


def get_request_radius_km(request: ServiceRequest) -> float:
    if request.radius_km and request.radius_km > 0:
        return float(request.radius_km)

    if request.search_radius and request.search_radius > 0:
        return float(request.search_radius) / 1000.0

    return float(SEARCH_RADIUS_KM_DEFAULT)


def build_provider_candidate_pool(
    db: Session,
    request: ServiceRequest,
) -> List[Dict[str, Any]]:
    radius_km = get_request_radius_km(request)

    nearby_rows = find_nearby_providers(
        db=db,
        latitude=float(request.latitude),
        longitude=float(request.longitude),
        radius_km=radius_km,
        limit=SEARCH_LIMIT,
    )

    already_offered_provider_profile_ids = get_already_offered_provider_ids(
        db=db,
        request_id=int(request.id),
    )

    candidates: List[Dict[str, Any]] = []

    for row in nearby_rows:
        provider_profile_id = int(row.id)
        provider_user_id = int(row.user_id)
        distance = float(row.distance)

        if provider_profile_id in already_offered_provider_profile_ids:
            continue

        if not is_provider_available(db, provider_user_id):
            continue

        candidates.append(
            {
                "id": provider_profile_id,
                "provider_id": provider_profile_id,
                "user_id": provider_user_id,
                "distance": distance,
                "rating": getattr(row, "rating", None),
                "rating_count": getattr(row, "rating_count", 0) or 0,
                "active_jobs": getattr(row, "active_jobs", 0) or 0,
            }
        )

    if not candidates:
        return []

    return rank_providers(candidates)


def get_wave_provider_profile_ids(
    ranked_candidates: List[Dict[str, Any]],
    wave_number: int,
) -> List[int]:
    waves = build_dispatch_waves(ranked_candidates)
    wave_candidates = get_wave_providers(waves, wave_number)

    return [int(item["provider_id"]) for item in wave_candidates]


def create_dispatch_batch(
    db: Session,
    request_id: int,
    wave_number: int,
    status: str,
    now: datetime,
) -> DispatchBatch:
    expiry_seconds = BATCH_EXPIRY_SECONDS.get(wave_number)

    batch = DispatchBatch(
        request_id=request_id,
        wave=wave_number,
        sent_at=now,
        expires_at=(
            now + timedelta(seconds=expiry_seconds)
            if expiry_seconds is not None
            else None
        ),
        status=status,
    )

    db.add(batch)
    db.flush()

    return batch


def create_dispatch_offers(
    db: Session,
    batch_id: int,
    request_id: int,
    provider_profile_ids: List[int],
    now: datetime,
) -> List[DispatchOffer]:
    offers: List[DispatchOffer] = []

    for provider_profile_id in provider_profile_ids:
        offer = DispatchOffer(
            batch_id=batch_id,
            request_id=request_id,
            provider_id=provider_profile_id,
            status="sent",
            created_at=now,
            sent_at=now,
            expired_at=now + timedelta(seconds=OFFER_EXPIRY_SECONDS),
        )
        db.add(offer)
        offers.append(offer)

    db.flush()
    return offers


def schedule_next_wave(
    request: ServiceRequest,
    current_wave: int,
    now: datetime,
) -> None:
    delay_seconds = WAVE_DELAY_SECONDS.get(current_wave)

    request.broadcast_wave = current_wave
    request.dispatch_wave = current_wave

    if delay_seconds is None:
        request.next_wave_at = None
        return

    request.next_wave_at = (now + timedelta(seconds=delay_seconds)).replace(tzinfo=None)


def mark_dispatch_finished(
    request: ServiceRequest,
    wave_number: int,
    terminal_status: Optional[str] = None,
) -> None:
    request.broadcast_wave = wave_number
    request.dispatch_wave = wave_number
    request.next_wave_at = None

    if terminal_status is not None:
        request.status = terminal_status


def dispatch_next_wave(
    db: Session,
    request_id: int,
) -> Dict[str, Any]:
    now = utcnow()

    request = get_request_for_update(db, request_id)

    if request is None:
        return {"ok": False, "action": "missing_request", "request_id": request_id}

    if request.status != "searching":
        return {
            "ok": False,
            "action": "request_not_searching",
            "request_id": int(request.id),
            "status": request.status,
        }

    if request.next_wave_at is None:
        return {
            "ok": False,
            "action": "dispatch_finished",
            "request_id": int(request.id),
        }

    if request.latitude is None or request.longitude is None:
        request.next_wave_at = None
        db.commit()

        return {
            "ok": False,
            "action": "missing_coordinates",
            "request_id": int(request.id),
        }

    next_wave_at = request.next_wave_at
    if next_wave_at.tzinfo is None:
        next_wave_at = next_wave_at.replace(tzinfo=timezone.utc)

    if next_wave_at > now:
        return {
            "ok": False,
            "action": "not_due_yet",
            "request_id": int(request.id),
            "next_wave_at": next_wave_at.isoformat(),
        }

    wave_number = get_next_wave_number(db, int(request.id))

    if not has_wave_capacity(wave_number):
        mark_dispatch_finished(
            request=request,
            wave_number=wave_number - 1,
            terminal_status=TERMINAL_NO_PROVIDER_STATUS,
        )
        db.commit()

        return {
            "ok": True,
            "action": "finalized_no_providers",
            "request_id": int(request.id),
            "wave": wave_number - 1,
            "status": request.status,
        }

    expired_stats = {"offers": 0, "batches": 0}

    if wave_number > 1:
        expired_stats = expire_open_offers_and_batches(
            db=db,
            request_id=int(request.id),
            now=now,
        )

    ranked_candidates = build_provider_candidate_pool(
        db=db,
        request=request,
    )

    provider_profile_ids = get_wave_provider_profile_ids(
        ranked_candidates=ranked_candidates,
        wave_number=wave_number,
    )

    if not provider_profile_ids:
        batch = create_dispatch_batch(
            db=db,
            request_id=int(request.id),
            wave_number=wave_number,
            status="empty",
            now=now,
        )

        if wave_number >= MAX_WAVE_NUMBER:
            mark_dispatch_finished(
                request=request,
                wave_number=wave_number,
                terminal_status=TERMINAL_NO_PROVIDER_STATUS,
            )
            db.commit()

            return {
                "ok": True,
                "action": "finalized_no_providers",
                "request_id": int(request.id),
                "batch_id": int(batch.id),
                "wave": wave_number,
                "offers_created": 0,
                "expired_previous_offers": expired_stats["offers"],
                "expired_previous_batches": expired_stats["batches"],
                "status": request.status,
                "next_wave_at": None,
            }

        schedule_next_wave(request, wave_number, now)
        db.commit()

        return {
            "ok": True,
            "action": "empty_wave",
            "request_id": int(request.id),
            "batch_id": int(batch.id),
            "wave": wave_number,
            "offers_created": 0,
            "expired_previous_offers": expired_stats["offers"],
            "expired_previous_batches": expired_stats["batches"],
            "next_wave_at": (
                request.next_wave_at.isoformat()
                if request.next_wave_at
                else None
            ),
        }

    batch = create_dispatch_batch(
        db=db,
        request_id=int(request.id),
        wave_number=wave_number,
        status="sent",
        now=now,
    )

    offers = create_dispatch_offers(
        db=db,
        batch_id=int(batch.id),
        request_id=int(request.id),
        provider_profile_ids=provider_profile_ids,
        now=now,
    )

    if wave_number >= MAX_WAVE_NUMBER:
        request.broadcast_wave = wave_number
        request.dispatch_wave = wave_number
        request.next_wave_at = None
    else:
        schedule_next_wave(request, wave_number, now)

    db.commit()

    return {
        "ok": True,
        "action": "wave_dispatched",
        "request_id": int(request.id),
        "batch_id": int(batch.id),
        "wave": wave_number,
        "offers_created": len(offers),
        "provider_profile_ids": provider_profile_ids,
        "expired_previous_offers": expired_stats["offers"],
        "expired_previous_batches": expired_stats["batches"],
        "next_wave_at": (
            request.next_wave_at.isoformat()
            if request.next_wave_at
            else None
        ),
    }


def run_dispatch(
    db: Session,
    request_id: int,
    lat: float | None = None,
    lng: float | None = None,
) -> Dict[str, Any]:
    return dispatch_next_wave(db=db, request_id=request_id)