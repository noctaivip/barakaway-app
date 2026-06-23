from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import text
from sqlalchemy.orm import Session

from app import models
from app.auth import require_role
from app.dependencies import get_rls_db
from app.services.fraud_detection import detect_location_spoofing

router = APIRouter()


def utcnow_naive() -> datetime:
    return datetime.now(timezone.utc).replace(tzinfo=None)


@router.post("/providers/location")
def update_provider_location(
    latitude: float,
    longitude: float,
    current_user: models.User = Depends(require_role("provider")),
    db: Session = Depends(get_rls_db),
):
    previous = db.execute(
        text(
            """
            SELECT
                ST_Y(location::geometry) AS lat,
                ST_X(location::geometry) AS lon
            FROM provider_profiles
            WHERE user_id = :provider_user_id
            """
        ),
        {"provider_user_id": current_user.id},
    ).fetchone()

    if previous and previous.lat is not None and previous.lon is not None:
        if detect_location_spoofing(
            previous.lat,
            previous.lon,
            latitude,
            longitude,
        ):
            raise HTTPException(
                status_code=400,
                detail="location_spoofing_detected",
            )

    now = utcnow_naive()

    result = db.execute(
        text(
            """
            UPDATE provider_profiles
            SET
                location = ST_SetSRID(ST_MakePoint(:lon, :lat), 4326)::geography,
                last_location = ST_SetSRID(ST_MakePoint(:lon, :lat), 4326)::geography,
                location_updated_at = :now,
                last_seen_at = :now
            WHERE user_id = :provider_user_id
            """
        ),
        {
            "provider_user_id": current_user.id,
            "lat": latitude,
            "lon": longitude,
            "now": now,
        },
    )

    if result.rowcount == 0:
        db.rollback()
        raise HTTPException(status_code=404, detail="provider_profile_not_found")

    db.commit()

    return {
        "status": "location_updated",
        "provider_user_id": current_user.id,
        "latitude": latitude,
        "longitude": longitude,
        "location_updated_at": now.isoformat(),
    }