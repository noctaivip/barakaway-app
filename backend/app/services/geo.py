from sqlalchemy.orm import Session
from sqlalchemy import text


def find_nearby_providers(
    db: Session,
    latitude: float,
    longitude: float,
    radius_km: float = 10,
    limit: int = 50,
):
    """
    Finds providers within a radius using PostGIS ST_DWithin.
    Results sorted by distance.
    """

    radius_meters = radius_km * 1000

    query = text(
        """
        SELECT
            pp.id,
            pp.user_id,
            ST_Distance(
                pp.location,
                ST_SetSRID(ST_MakePoint(:lon, :lat), 4326)::geography
            ) AS distance
        FROM provider_profiles pp
        WHERE
            pp.is_available = TRUE
        AND
            ST_DWithin(
                pp.location,
                ST_SetSRID(ST_MakePoint(:lon, :lat), 4326)::geography,
                :radius
            )
        ORDER BY distance ASC
        LIMIT :limit
        """
    )

    result = db.execute(
        query,
        {
            "lat": latitude,
            "lon": longitude,
            "radius": radius_meters,
            "limit": limit,
        },
    )

    return result.fetchall()