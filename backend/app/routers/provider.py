from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import models
from app.auth import require_role
from app.dependencies import get_rls_db

router = APIRouter()


@router.get("/provider-only")
def provider_endpoint(
    current_user: models.User = Depends(require_role("provider")),
    db: Session = Depends(get_rls_db),
):
    return {"message": "provider access granted"}