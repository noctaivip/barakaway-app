from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import models
from app.auth import require_role
from app.dependencies import get_rls_db
from app.services.provider_availability import (
    get_provider_presence,
    set_provider_offline,
    set_provider_online,
    touch_provider_presence,
)

router = APIRouter()


@router.get("/provider-only")
def provider_endpoint(
    current_user: models.User = Depends(require_role("provider")),
    db: Session = Depends(get_rls_db),
):
    return {"message": "provider access granted", "user_id": current_user.id}


@router.post("/providers/online")
def provider_online(
    current_user: models.User = Depends(require_role("provider")),
    db: Session = Depends(get_rls_db),
):
    updated = set_provider_online(db, current_user.id)

    if not updated:
        raise HTTPException(status_code=404, detail="provider_profile_not_found")

    return {
        "status": "online",
        "provider_user_id": current_user.id,
    }


@router.post("/providers/offline")
def provider_offline(
    current_user: models.User = Depends(require_role("provider")),
    db: Session = Depends(get_rls_db),
):
    updated = set_provider_offline(db, current_user.id)

    if not updated:
        raise HTTPException(status_code=404, detail="provider_profile_not_found")

    return {
        "status": "offline",
        "provider_user_id": current_user.id,
    }


@router.post("/providers/heartbeat")
def provider_heartbeat(
    current_user: models.User = Depends(require_role("provider")),
    db: Session = Depends(get_rls_db),
):
    updated = touch_provider_presence(db, current_user.id)

    if not updated:
        raise HTTPException(status_code=404, detail="provider_profile_not_found")

    return {
        "status": "heartbeat_updated",
        "provider_user_id": current_user.id,
    }


@router.get("/providers/me/presence")
def provider_presence(
    current_user: models.User = Depends(require_role("provider")),
    db: Session = Depends(get_rls_db),
):
    presence = get_provider_presence(db, current_user.id)

    if not presence:
        raise HTTPException(status_code=404, detail="provider_profile_not_found")

    return {
        "provider_profile_id": presence["id"],
        "provider_user_id": presence["user_id"],
        "is_online": presence["is_online"],
        "is_busy": presence["is_busy"],
        "active_jobs": int(presence["active_jobs"] or 0),
        "silent_mode": bool(presence["silent_mode"] or False),
        "last_seen_at": (
            presence["last_seen_at"].isoformat()
            if presence["last_seen_at"]
            else None
        ),
        "location_updated_at": (
            presence["location_updated_at"].isoformat()
            if presence["location_updated_at"]
            else None
        ),
    }