from datetime import datetime
from sqlalchemy.orm import Session
from sqlalchemy import select

from app.models import ServiceRequest


def run_sla_enforcement(db: Session):
    now = datetime.utcnow()

    requests = (
        db.execute(
            select(ServiceRequest)
            .where(
                ServiceRequest.status == "open",
                ServiceRequest.acceptance_deadline <= now,
            )
            .with_for_update(skip_locked=True)
        )
        .scalars()
        .all()
    )

    for request in requests:
        handle_expired_request(db, request)


def handle_expired_request(db: Session, request: ServiceRequest):
    if request.broadcast_wave > request.max_waves:
        request.status = "expired"
        request.expired_at = datetime.utcnow()
        db.commit()
        return

    # trigger next wave
    request.next_wave_at = datetime.utcnow()
    db.commit()