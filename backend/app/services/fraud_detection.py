from sqlalchemy.orm import Session
from sqlalchemy import text
from datetime import datetime, timedelta


MAX_REQUESTS_PER_MINUTE = 5
MAX_PROVIDER_ACCEPTS_PER_MINUTE = 10


def is_request_rate_limited(
    db: Session,
    client_id: int,
) -> bool:
    """
    Prevent request spam from clients.
    """

    window_start = datetime.utcnow() - timedelta(minutes=1)

    query = text(
        """
        SELECT COUNT(*)
        FROM service_requests
        WHERE client_id = :client_id
        AND created_at >= :window_start
        """
    )

    count = db.execute(
        query,
        {
            "client_id": client_id,
            "window_start": window_start,
        },
    ).scalar()

    return count >= MAX_REQUESTS_PER_MINUTE


def is_provider_accept_rate_limited(
    db: Session,
    provider_id: int,
) -> bool:
    """
    Prevent provider accept spam.
    """

    window_start = datetime.utcnow() - timedelta(minutes=1)

    query = text(
        """
        SELECT COUNT(*)
        FROM request_broadcasts
        WHERE provider_id = :provider_id
        AND sent_at >= :window_start
        """
    )

    count = db.execute(
        query,
        {
            "provider_id": provider_id,
            "window_start": window_start,
        },
    ).scalar()

    return count >= MAX_PROVIDER_ACCEPTS_PER_MINUTE


def detect_location_spoofing(
    last_lat: float,
    last_lon: float,
    new_lat: float,
    new_lon: float,
) -> bool:
    """
    Basic detection of unrealistic location jump.
    """

    # very simple distance check (degrees)
    distance = abs(last_lat - new_lat) + abs(last_lon - new_lon)

    if distance > 2:
        return True

    return False


def is_request_suspicious(
    description: str,
) -> bool:
    """
    Simple text anomaly check.
    """

    if description is None:
        return True

    if len(description) < 3:
        return True

    if len(description) > 1000:
        return True

    return False