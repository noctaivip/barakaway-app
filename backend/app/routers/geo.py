from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text

from app.database import get_db

router = APIRouter()


@router.get("/providers/nearby")
def nearby_providers(
    lat: float,
    lon: float,
    radius_km: int = 5,
    db: Session = Depends(get_db),
):
    """
    Returns providers within radius.
    """

    radius_meters = radius_km * 1000

    query = text(
        """
        SELECT
            user_id,
            ST_Distance(
                location,
                ST_SetSRID(ST_MakePoint(:lon,:lat),4326)::geography
            ) AS distance
        FROM provider_profiles
        WHERE
            location IS NOT NULL
        AND
            is_available = true
        AND
            ST_DWithin(
                location,
                ST_SetSRID(ST_MakePoint(:lon,:lat),4326)::geography,
                :radius
            )
        ORDER BY distance
        LIMIT 20
        """
    )

    result = db.execute(
        query,
        {
            "lat": lat,
            "lon": lon,
            "radius": radius_meters,
        },
    ).fetchall()

    providers = []

    for row in result:
        providers.append(
            {
                "provider_id": row.user_id,
                "distance_meters": float(row.distance),
            }
        )

    return providers