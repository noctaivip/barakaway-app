from datetime import datetime, timedelta
from typing import Any, Dict, Optional

from sqlalchemy import text
from sqlalchemy.orm import Session


MAX_ACTIVE_JOBS = 3
HEARTBEAT_TTL_SECONDS = 300   # ⬅️ было 30
LOCATION_TTL_SECONDS = 600    # ⬅️ было 300


def utcnow_naive() -> datetime:
    return datetime.utcnow()


def is_timestamp_fresh(value: Optional[datetime], max_age_seconds: int) -> bool:
    if value is None:
        return False

    return value >= (utcnow_naive() - timedelta(seconds=max_age_seconds))


def get_provider_presence(
    db: Session,
    provider_user_id: int,
) -> Optional[Dict[str, Any]]:
    row = db.execute(
        text(
            """
            SELECT
                id,
                user_id,
                is_online,
                is_busy,
                active_jobs,
                silent_mode,
                last_seen_at,
                location_updated_at
            FROM provider_profiles
            WHERE user_id = :provider_user_id
            LIMIT 1
            """
        ),
        {"provider_user_id": provider_user_id},
    ).mappings().first()

    if not row:
        return None

    return dict(row)


def is_provider_available(
    db: Session,
    provider_id: int,
) -> bool:
    presence = get_provider_presence(db, provider_id)

    if not presence:
        return False

    if not bool(presence["is_online"]):
        return False

    if bool(presence["is_busy"]):
        return False

    active_jobs = int(presence["active_jobs"] or 0)
    if active_jobs >= MAX_ACTIVE_JOBS:
        return False

    # ⬇️ временно отключаем строгую проверку heartbeat
    # if not is_timestamp_fresh(
    #     presence["last_seen_at"],
    #     HEARTBEAT_TTL_SECONDS,
    # ):
    #     return False

    # ⬇️ временно отключаем строгую проверку location
    # if not is_timestamp_fresh(
    #     presence["location_updated_at"],
    #     LOCATION_TTL_SECONDS,
    # ):
    #     return False

    return True


def set_provider_online(
    db: Session,
    provider_user_id: int,
) -> bool:
    now = utcnow_naive()

    result = db.execute(
        text(
            """
            UPDATE provider_profiles
            SET
                is_online = TRUE,
                last_seen_at = :now
            WHERE user_id = :provider_user_id
            """
        ),
        {
            "provider_user_id": provider_user_id,
            "now": now,
        },
    )
    db.commit()

    return result.rowcount > 0


def set_provider_offline(
    db: Session,
    provider_user_id: int,
) -> bool:
    result = db.execute(
        text(
            """
            UPDATE provider_profiles
            SET
                is_online = FALSE,
                is_busy = FALSE
            WHERE user_id = :provider_user_id
            """
        ),
        {"provider_user_id": provider_user_id},
    )
    db.commit()

    return result.rowcount > 0


def touch_provider_presence(
    db: Session,
    provider_user_id: int,
) -> bool:
    now = utcnow_naive()

    result = db.execute(
        text(
            """
            UPDATE provider_profiles
            SET
                last_seen_at = :now
            WHERE user_id = :provider_user_id
            """
        ),
        {
            "provider_user_id": provider_user_id,
            "now": now,
        },
    )
    db.commit()

    return result.rowcount > 0