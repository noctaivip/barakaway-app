from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import text

from app.db.session import get_db

router = APIRouter()


@router.post("/requests/{request_id}/accept")
def accept_request(
    request_id: int,
    provider_id: int,
    db: Session = Depends(get_db)
):
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

    if request.status != "searching":
        raise HTTPException(status_code=400, detail="request_not_available")

    offer = db.execute(
        text(
            """
            SELECT id, status
            FROM dispatch_offers
            WHERE request_id = :request_id
              AND provider_id = :provider_id
              AND status = 'sent'
            FOR UPDATE
            """
        ),
        {
            "request_id": request_id,
            "provider_id": provider_id,
        },
    ).fetchone()

    if not offer:
        raise HTTPException(status_code=404, detail="offer_not_found")

    provider = db.execute(
        text(
            """
            SELECT id, user_id, is_busy, active_jobs
            FROM provider_profiles
            WHERE id = :provider_id
            FOR UPDATE
            """
        ),
        {"provider_id": provider_id},
    ).fetchone()

    if not provider:
        raise HTTPException(status_code=404, detail="provider_not_found")

    if provider.is_busy:
        raise HTTPException(status_code=400, detail="provider_already_busy")

    accepted_offer = db.execute(
        text(
            """
            UPDATE dispatch_offers
            SET
                status = 'accepted',
                accepted_at = NOW()
            WHERE id = :offer_id
              AND status = 'sent'
            RETURNING id
            """
        ),
        {"offer_id": offer.id},
    ).fetchone()

    if not accepted_offer:
        db.rollback()
        raise HTTPException(status_code=400, detail="offer_not_available")

    assigned_request = db.execute(
        text(
            """
            UPDATE service_requests
            SET
                status = 'assigned',
                provider_id = :provider_id
            WHERE id = :request_id
              AND status = 'searching'
            RETURNING id, provider_id, status
            """
        ),
        {
            "request_id": request_id,
            "provider_id": provider_id,
        },
    ).fetchone()

    if not assigned_request:
        db.rollback()
        raise HTTPException(status_code=400, detail="request_already_taken")

    updated_provider = db.execute(
        text(
            """
            UPDATE provider_profiles
            SET
                is_busy = TRUE,
                active_jobs = COALESCE(active_jobs, 0) + 1
            WHERE id = :provider_id
            RETURNING id, is_busy, active_jobs
            """
        ),
        {"provider_id": provider_id},
    ).fetchone()

    if not updated_provider:
        db.rollback()
        raise HTTPException(status_code=500, detail="provider_state_update_failed")

    db.commit()

    return {
        "request_id": int(assigned_request.id),
        "provider_id": int(assigned_request.provider_id),
        "status": assigned_request.status,
        "provider_state": {
            "provider_id": int(updated_provider.id),
            "is_busy": bool(updated_provider.is_busy),
            "active_jobs": int(updated_provider.active_jobs or 0),
        },
    }