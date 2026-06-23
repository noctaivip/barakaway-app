from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field, conint
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.db.session import get_db

router = APIRouter()

REQUEST_SEARCHING = "searching"
REQUEST_ASSIGNED = "assigned"
REQUEST_IN_PROGRESS = "in_progress"
REQUEST_COMPLETED = "completed"
REQUEST_RATED = "rated"

_FALLBACK_REQUESTS: Dict[int, Dict[str, Any]] = {}
_FALLBACK_OFFERS: Dict[int, List[Dict[str, Any]]] = {}
_FALLBACK_RATINGS: Dict[int, Dict[str, Any]] = {}


class ServiceRequestCreate(BaseModel):
    client_id: int = 1
    description: str = Field(..., min_length=1)
    category: str = "general"
    service_type: str
    urgency: Optional[str] = None
    radius_km: float = 10
    budget: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None


class OfferRespondPayload(BaseModel):
    provider_id: int
    price: Optional[str] = None
    eta: Optional[int] = None


class SelectProviderPayload(BaseModel):
    provider_id: int


class CompleteRequestPayload(BaseModel):
    provider_id: Optional[int] = None


class RatingPayload(BaseModel):
    client_id: int = 1
    provider_id: int
    rating: conint(ge=1, le=5)
    comment: Optional[str] = None


def _store_fallback_request(
    request_id: int,
    payload: ServiceRequestCreate,
    offers: Optional[List[Dict[str, Any]]] = None,
) -> List[Dict[str, Any]]:
    fallback_offers = offers or _mock_offers(payload.service_type)
    _FALLBACK_REQUESTS[request_id] = {
        "id": request_id,
        "status": REQUEST_SEARCHING,
        "provider_id": None,
        "service_type": payload.service_type,
        "category": payload.category,
        "radius_km": payload.radius_km,
        "dispatch_wave": 1,
        "broadcast_wave": 1,
        "next_wave_at": None,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    _FALLBACK_OFFERS[request_id] = fallback_offers
    return fallback_offers


def _fallback_offer_for_provider(request_id: int, provider_id: int) -> Optional[Dict[str, Any]]:
    for offer in _FALLBACK_OFFERS.get(request_id, []):
        if int(offer.get("provider_id") or 0) == provider_id:
            return offer
    return None


def _fallback_status(request_id: int) -> Optional[Dict[str, Any]]:
    request = _FALLBACK_REQUESTS.get(request_id)
    if not request:
        return None
    return dict(request)


def _mock_offers(service_type: str) -> List[Dict[str, Any]]:
    return [
        {
            "id": "backend-1",
            "provider_id": 1,
            "name": "Алексей М.",
            "service": service_type,
            "rating": "4.9",
            "reviews": 247,
            "eta": 18,
            "price": "150 000 сум",
            "experience": "8 лет",
            "completed": 1264,
            "verified": True,
            "docs": True,
            "lastOrder": "2 часа назад",
            "completionRate": "98%",
            "cancelRate": "1%",
            "recentRating": "4.9",
            "status": "Отклик получен",
            "specialization": ["Аварийный выезд", "Диагностика", "Ремонт на месте", "Замена деталей"],
            "reviewsList": [
                ["Анна Р.", "5.0", "Приехал быстро, всё объяснил и аккуратно сделал."],
                ["Михаил С.", "4.9", "Цена совпала с договорённостью, работа без задержек."],
                ["Олег Т.", "5.0", "Хороший специалист, буду обращаться снова."],
            ],
        },
        {
            "id": "backend-2",
            "provider_id": 2,
            "name": "Руслан К.",
            "service": service_type,
            "rating": "4.8",
            "reviews": 189,
            "eta": 24,
            "price": "250 000 сум",
            "experience": "6 лет",
            "completed": 842,
            "verified": True,
            "docs": True,
            "lastOrder": "5 часов назад",
            "completionRate": "96%",
            "cancelRate": "2%",
            "recentRating": "4.8",
            "status": "Отклик получен",
            "specialization": ["Плановый ремонт", "Срочные заявки", "Установка", "Профилактика"],
            "reviewsList": [
                ["Дилшод А.", "5.0", "Быстро ответил и приехал вовремя."],
                ["Елена К.", "4.8", "Работа качественная, стоимость адекватная."],
                ["Сергей П.", "4.7", "Всё сделал, дал рекомендации."],
            ],
        },
    ]


def _table_exists(db: Session, table_name: str) -> bool:
    row = db.execute(
        text("SELECT to_regclass(:table_name) AS table_name"),
        {"table_name": table_name},
    ).fetchone()
    return bool(row and row.table_name)


def _create_initial_dispatch_offers(
    db: Session,
    request_id: int,
    service_type: str,
    limit: int = 10,
) -> List[Dict[str, Any]]:
    if not _table_exists(db, "provider_profiles") or not _table_exists(db, "dispatch_offers"):
        return []

    batch_id = None
    if _table_exists(db, "dispatch_batches"):
        batch = db.execute(
            text(
                """
                INSERT INTO dispatch_batches (request_id, wave, sent_at, status)
                VALUES (:request_id, 1, NOW(), 'sent')
                RETURNING id
                """
            ),
            {"request_id": request_id},
        ).fetchone()
        batch_id = int(batch.id) if batch else None

    providers = db.execute(
        text(
            """
            SELECT id, user_id, service_type, active_jobs, is_busy, is_online, is_available
            FROM provider_profiles
            WHERE COALESCE(is_available, TRUE) = TRUE
              AND COALESCE(is_busy, FALSE) = FALSE
              AND (service_type IS NULL OR service_type = :service_type)
            ORDER BY COALESCE(active_jobs, 0) ASC, id ASC
            LIMIT :limit
            """
        ),
        {"service_type": service_type, "limit": limit},
    ).fetchall()

    offers: List[Dict[str, Any]] = []
    for index, provider in enumerate(providers):
        offer_id = None
        if batch_id is not None:
            offer = db.execute(
                text(
                    """
                    INSERT INTO dispatch_offers
                        (batch_id, request_id, provider_id, status, created_at, sent_at)
                    VALUES
                        (:batch_id, :request_id, :provider_id, 'sent', NOW(), NOW())
                    RETURNING id
                    """
                ),
                {
                    "batch_id": batch_id,
                    "request_id": request_id,
                    "provider_id": int(provider.id),
                },
            ).fetchone()
            offer_id = int(offer.id) if offer else None

        offers.append(
            {
                "id": offer_id or f"provider-{provider.id}",
                "provider_id": int(provider.id),
                "provider_user_id": int(provider.user_id),
                "name": f"Специалист #{provider.id}",
                "service": service_type,
                "rating": "4.8",
                "reviews": 0,
                "eta": 20 + index * 4,
                "price": "По договорённости",
                "experience": "Профиль проверен",
                "completed": 0,
                "verified": True,
                "docs": True,
                "status": "Запрос отправлен",
            }
        )

    return offers


def _get_offer_for_provider(db: Session, request_id: int, provider_id: int):
    if not _table_exists(db, "dispatch_offers"):
        return None
    return db.execute(
        text(
            """
            SELECT id, request_id, provider_id, status
            FROM dispatch_offers
            WHERE request_id = :request_id
              AND provider_id = :provider_id
            ORDER BY id DESC
            LIMIT 1
            FOR UPDATE
            """
        ),
        {"request_id": request_id, "provider_id": provider_id},
    ).fetchone()


def _ensure_rating_table(db: Session) -> None:
    db.execute(
        text(
            """
            CREATE TABLE IF NOT EXISTS provider_ratings (
                id BIGSERIAL PRIMARY KEY,
                request_id BIGINT NOT NULL,
                client_id BIGINT NOT NULL,
                provider_id BIGINT NOT NULL,
                rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
                comment TEXT,
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                UNIQUE (request_id, client_id, provider_id)
            )
            """
        )
    )


@router.post("/requests")
def create_request(payload: ServiceRequestCreate, db: Session = Depends(get_db)):
    latitude = payload.latitude if payload.latitude is not None else 41.31108
    longitude = payload.longitude if payload.longitude is not None else 69.24056

    try:
        result = db.execute(
            text(
                """
                INSERT INTO service_requests
                (
                    client_id, description, service_type, latitude, longitude,
                    category, radius_km, status, next_wave_at, dispatch_wave,
                    broadcast_wave, created_at
                )
                VALUES
                (
                    :client_id, :description, :service_type, :latitude, :longitude,
                    :category, :radius_km, 'searching', NOW(), 1, 1, NOW()
                )
                RETURNING id
                """
            ),
            {
                "client_id": payload.client_id,
                "description": payload.description,
                "service_type": payload.service_type,
                "latitude": latitude,
                "longitude": longitude,
                "category": payload.category,
                "radius_km": payload.radius_km,
            },
        )
        row = result.fetchone()
        request_id = int(row.id)
        offers = _create_initial_dispatch_offers(db, request_id, payload.service_type)
        db.commit()
        storage = "database"
    except Exception:
        db.rollback()
        request_id = int(datetime.now(timezone.utc).timestamp())
        storage = "fallback"
        offers = _store_fallback_request(request_id, payload)

    return {
        "request_id": request_id,
        "status": REQUEST_SEARCHING,
        "storage": storage,
        "dispatch": {
            "mode": "wave",
            "first_wave": "instant",
            "radius_km": payload.radius_km,
        },
        "offers": offers or _mock_offers(payload.service_type),
    }


@router.get("/requests/{request_id}")
def get_request_status(request_id: int, db: Session = Depends(get_db)):
    fallback = _fallback_status(request_id)
    if fallback:
        return fallback

    request = db.execute(
        text(
            """
            SELECT id, status, provider_id, next_wave_at, dispatch_wave, broadcast_wave
            FROM service_requests
            WHERE id = :request_id
            """
        ),
        {"request_id": request_id},
    ).fetchone()

    if not request:
        raise HTTPException(status_code=404, detail="request_not_found")

    return dict(request._mapping)


@router.get("/requests/{request_id}/offers")
def get_request_offers(request_id: int, service_type: str = "Сантехника", db: Session = Depends(get_db)):
    if request_id in _FALLBACK_OFFERS:
        return {"request_id": request_id, "offers": _FALLBACK_OFFERS[request_id]}

    if _table_exists(db, "dispatch_offers"):
        rows = db.execute(
            text(
                """
                SELECT id, provider_id, status
                FROM dispatch_offers
                WHERE request_id = :request_id
                ORDER BY id ASC
                """
            ),
            {"request_id": request_id},
        ).fetchall()
        if rows:
            return {
                "request_id": request_id,
                "offers": [
                    {
                        "id": int(row.id),
                        "provider_id": int(row.provider_id),
                        "name": f"Специалист #{row.provider_id}",
                        "service": service_type,
                        "rating": "4.8",
                        "reviews": 0,
                        "eta": 20 + index * 4,
                        "price": "По договорённости",
                        "experience": "Профиль проверен",
                        "completed": 0,
                        "verified": True,
                        "docs": True,
                        "status": row.status,
                    }
                    for index, row in enumerate(rows)
                ],
            }

    return {"request_id": request_id, "offers": _mock_offers(service_type)}


@router.post("/requests/{request_id}/offers/respond")
def respond_to_request(request_id: int, payload: OfferRespondPayload, db: Session = Depends(get_db)):
    fallback_offer = _fallback_offer_for_provider(request_id, payload.provider_id)
    if fallback_offer is not None:
        fallback_offer["status"] = "responded"
        if payload.price:
            fallback_offer["price"] = payload.price
        if payload.eta is not None:
            fallback_offer["eta"] = payload.eta
        return {"request_id": request_id, "provider_id": payload.provider_id, "status": "responded", "storage": "fallback"}

    offer = _get_offer_for_provider(db, request_id, payload.provider_id)
    if not offer:
        raise HTTPException(status_code=404, detail="offer_not_found")
    if offer.status not in {"sent", "responded"}:
        raise HTTPException(status_code=409, detail="offer_not_open")

    db.execute(
        text("UPDATE dispatch_offers SET status = 'responded' WHERE id = :offer_id"),
        {"offer_id": offer.id},
    )
    db.commit()
    return {"request_id": request_id, "provider_id": payload.provider_id, "status": "responded"}


@router.post("/requests/{request_id}/select")
def select_provider(request_id: int, payload: SelectProviderPayload, db: Session = Depends(get_db)):
    fallback = _FALLBACK_REQUESTS.get(request_id)
    if fallback is not None:
        if fallback.get("status") not in {REQUEST_SEARCHING, REQUEST_ASSIGNED}:
            raise HTTPException(status_code=409, detail="request_not_selectable")
        if fallback.get("provider_id") and int(fallback["provider_id"]) != payload.provider_id:
            raise HTTPException(status_code=409, detail="already_assigned")
        fallback["status"] = REQUEST_ASSIGNED
        fallback["provider_id"] = payload.provider_id
        for offer in _FALLBACK_OFFERS.get(request_id, []):
            offer["status"] = "selected" if int(offer.get("provider_id") or 0) == payload.provider_id else "rejected"
        return {"request_id": request_id, "provider_id": payload.provider_id, "status": REQUEST_ASSIGNED, "storage": "fallback"}

    try:
        request = db.execute(
            text(
                """
                SELECT id, status, provider_id
                FROM service_requests
                WHERE id = :request_id
                FOR UPDATE
                """
            ),
            {"request_id": request_id},
        ).fetchone()
        if not request:
            raise HTTPException(status_code=404, detail="request_not_found")
        if request.status not in {REQUEST_SEARCHING, REQUEST_ASSIGNED}:
            raise HTTPException(status_code=409, detail="request_not_selectable")
        if request.provider_id and int(request.provider_id) != payload.provider_id:
            raise HTTPException(status_code=409, detail="already_assigned")

        if _table_exists(db, "provider_profiles"):
            provider = db.execute(
                text(
                    """
                    SELECT id, is_busy
                    FROM provider_profiles
                    WHERE id = :provider_id
                    FOR UPDATE
                    """
                ),
                {"provider_id": payload.provider_id},
            ).fetchone()
            if not provider:
                raise HTTPException(status_code=404, detail="provider_not_found")
            if provider.is_busy and request.provider_id != payload.provider_id:
                raise HTTPException(status_code=409, detail="provider_busy")

        if _table_exists(db, "dispatch_offers"):
            db.execute(
                text(
                    """
                    UPDATE dispatch_offers
                    SET status = CASE WHEN provider_id = :provider_id THEN 'selected' ELSE 'rejected' END,
                        accepted_at = CASE WHEN provider_id = :provider_id THEN NOW() ELSE accepted_at END
                    WHERE request_id = :request_id
                    """
                ),
                {"request_id": request_id, "provider_id": payload.provider_id},
            )

        db.execute(
            text(
                """
                UPDATE service_requests
                SET status = 'assigned', provider_id = :provider_id
                WHERE id = :request_id
                """
            ),
            {"request_id": request_id, "provider_id": payload.provider_id},
        )

        if _table_exists(db, "provider_profiles"):
            db.execute(
                text(
                    """
                    UPDATE provider_profiles
                    SET is_busy = TRUE,
                        active_jobs = COALESCE(active_jobs, 0) + 1
                    WHERE id = :provider_id
                    """
                ),
                {"provider_id": payload.provider_id},
            )

        db.commit()
        return {"request_id": request_id, "provider_id": payload.provider_id, "status": REQUEST_ASSIGNED}
    except HTTPException:
        db.rollback()
        raise
    except Exception as exc:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"select_failed: {exc}")


@router.post("/requests/{request_id}/accept")
def accept_request(request_id: int, provider_id: int, db: Session = Depends(get_db)):
    return select_provider(request_id, SelectProviderPayload(provider_id=provider_id), db)


@router.post("/requests/{request_id}/start")
def start_request(request_id: int, db: Session = Depends(get_db)):
    fallback = _FALLBACK_REQUESTS.get(request_id)
    if fallback is not None:
        if fallback.get("status") != REQUEST_ASSIGNED:
            raise HTTPException(status_code=409, detail="request_must_be_assigned")
        fallback["status"] = REQUEST_IN_PROGRESS
        return {"request_id": request_id, "provider_id": fallback.get("provider_id"), "status": REQUEST_IN_PROGRESS, "storage": "fallback"}

    result = db.execute(
        text(
            """
            UPDATE service_requests
            SET status = 'in_progress'
            WHERE id = :request_id
              AND status = 'assigned'
            RETURNING id, provider_id, status
            """
        ),
        {"request_id": request_id},
    ).fetchone()
    if not result:
        db.rollback()
        raise HTTPException(status_code=409, detail="request_must_be_assigned")
    db.commit()
    return {"request_id": int(result.id), "provider_id": int(result.provider_id), "status": result.status}


@router.post("/requests/{request_id}/complete")
def complete_request(request_id: int, payload: CompleteRequestPayload = CompleteRequestPayload(), db: Session = Depends(get_db)):
    fallback = _FALLBACK_REQUESTS.get(request_id)
    if fallback is not None:
        if fallback.get("status") not in {REQUEST_ASSIGNED, REQUEST_IN_PROGRESS, REQUEST_COMPLETED}:
            raise HTTPException(status_code=409, detail="request_not_completable")
        provider_id = payload.provider_id or fallback.get("provider_id")
        if not provider_id:
            raise HTTPException(status_code=409, detail="provider_not_assigned")
        fallback["status"] = REQUEST_COMPLETED
        fallback["provider_id"] = provider_id
        return {"request_id": request_id, "provider_id": int(provider_id), "status": REQUEST_COMPLETED, "storage": "fallback"}

    try:
        request = db.execute(
            text(
                """
                SELECT id, status, provider_id
                FROM service_requests
                WHERE id = :request_id
                FOR UPDATE
                """
            ),
            {"request_id": request_id},
        ).fetchone()
        if not request:
            raise HTTPException(status_code=404, detail="request_not_found")
        if request.status not in {REQUEST_ASSIGNED, REQUEST_IN_PROGRESS, REQUEST_COMPLETED}:
            raise HTTPException(status_code=409, detail="request_not_completable")

        provider_id = payload.provider_id or request.provider_id
        if not provider_id:
            raise HTTPException(status_code=409, detail="provider_not_assigned")

        db.execute(
            text("UPDATE service_requests SET status = 'completed' WHERE id = :request_id"),
            {"request_id": request_id},
        )

        if _table_exists(db, "provider_profiles"):
            db.execute(
                text(
                    """
                    UPDATE provider_profiles
                    SET is_busy = FALSE,
                        active_jobs = GREATEST(COALESCE(active_jobs, 1) - 1, 0)
                    WHERE id = :provider_id
                    """
                ),
                {"provider_id": provider_id},
            )

        db.commit()
        return {"request_id": request_id, "provider_id": int(provider_id), "status": REQUEST_COMPLETED}
    except HTTPException:
        db.rollback()
        raise
    except Exception as exc:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"complete_failed: {exc}")


@router.post("/requests/{request_id}/rating")
def rate_request(request_id: int, payload: RatingPayload, db: Session = Depends(get_db)):
    fallback = _FALLBACK_REQUESTS.get(request_id)
    if fallback is not None:
        if fallback.get("status") != REQUEST_COMPLETED:
            raise HTTPException(status_code=409, detail="request_must_be_completed")
        if fallback.get("provider_id") and int(fallback["provider_id"]) != payload.provider_id:
            raise HTTPException(status_code=409, detail="provider_mismatch")
        rating_id = len(_FALLBACK_RATINGS) + 1
        _FALLBACK_RATINGS[request_id] = {
            "id": rating_id,
            "request_id": request_id,
            "client_id": payload.client_id,
            "provider_id": payload.provider_id,
            "rating": int(payload.rating),
            "comment": payload.comment,
            "created_at": datetime.now(timezone.utc).isoformat(),
        }
        fallback["status"] = REQUEST_RATED
        return {
            "request_id": request_id,
            "provider_id": payload.provider_id,
            "rating_id": rating_id,
            "rating": int(payload.rating),
            "status": REQUEST_RATED,
            "storage": "fallback",
        }

    try:
        request = db.execute(
            text(
                """
                SELECT id, status, provider_id
                FROM service_requests
                WHERE id = :request_id
                FOR UPDATE
                """
            ),
            {"request_id": request_id},
        ).fetchone()
        if not request:
            raise HTTPException(status_code=404, detail="request_not_found")
        if request.status != REQUEST_COMPLETED:
            raise HTTPException(status_code=409, detail="request_must_be_completed")
        if request.provider_id and int(request.provider_id) != payload.provider_id:
            raise HTTPException(status_code=409, detail="provider_mismatch")

        _ensure_rating_table(db)
        rating_row = db.execute(
            text(
                """
                INSERT INTO provider_ratings
                    (request_id, client_id, provider_id, rating, comment)
                VALUES
                    (:request_id, :client_id, :provider_id, :rating, :comment)
                ON CONFLICT (request_id, client_id, provider_id)
                DO UPDATE SET rating = EXCLUDED.rating,
                              comment = EXCLUDED.comment,
                              created_at = NOW()
                RETURNING id, rating
                """
            ),
            {
                "request_id": request_id,
                "client_id": payload.client_id,
                "provider_id": payload.provider_id,
                "rating": payload.rating,
                "comment": payload.comment,
            },
        ).fetchone()
        db.commit()
        return {
            "request_id": request_id,
            "provider_id": payload.provider_id,
            "rating_id": int(rating_row.id),
            "rating": int(rating_row.rating),
            "status": "rated",
        }
    except HTTPException:
        db.rollback()
        raise
    except Exception as exc:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"rating_failed: {exc}")
