from sqlalchemy.orm import Session
from sqlalchemy import text

from app.models.service_request import ServiceRequest


def accept_request(db: Session, request_id: int, provider_id: int):
    """
    Atomic accept for service request.

    Only one provider can successfully accept a request.
    """

    result = db.execute(
        text(
            """
            UPDATE service_requests
            SET
                provider_id = :provider_id,
                status = 'ACCEPTED'
            WHERE
                id = :request_id
                AND status = 'SEARCHING'
            RETURNING id
            """
        ),
        {
            "request_id": request_id,
            "provider_id": provider_id
        }
    ).fetchone()

    if not result:
        return None

    request = (
        db.query(ServiceRequest)
        .filter(ServiceRequest.id == request_id)
        .first()
    )

    db.commit()

    return request