from enum import Enum
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import ServiceRequest, User
from app.auth import (
    get_current_client,
    get_current_provider,
    get_current_user,
)


router = APIRouter(
    prefix="/service-requests",
    tags=["Service Requests"],
)


# ---------------------------------
# STATE MACHINE
# ---------------------------------

class RequestStatus(str, Enum):
    created = "created"
    broadcasted = "broadcasted"
    accepted = "accepted"
    in_progress = "in_progress"
    completed = "completed"
    cancelled = "cancelled"
    expired = "expired"


ALLOWED_TRANSITIONS = {
    RequestStatus.created: [RequestStatus.broadcasted, RequestStatus.cancelled],
    RequestStatus.broadcasted: [RequestStatus.accepted, RequestStatus.expired],
    RequestStatus.accepted: [RequestStatus.in_progress, RequestStatus.cancelled],
    RequestStatus.in_progress: [RequestStatus.completed],
    RequestStatus.completed: [],
    RequestStatus.cancelled: [],
    RequestStatus.expired: [],
}


def validate_transition(current_status: str, new_status: RequestStatus):
    if new_status not in ALLOWED_TRANSITIONS.get(RequestStatus(current_status), []):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid state transition: {current_status} -> {new_status}",
        )


# ---------------------------------
# SCHEMAS
# ---------------------------------

class ServiceRequestCreate(BaseModel):
    title: str = Field(..., min_length=3, max_length=200)
    description: str = Field(..., min_length=5, max_length=2000)


class ServiceRequestResponse(BaseModel):
    id: int
    title: str
    description: str
    status: str
    client_id: int
    assigned_provider_id: int | None

    class Config:
        from_attributes = True


# ---------------------------------
# CLIENT: CREATE
# ---------------------------------

@router.post(
    "/",
    response_model=ServiceRequestResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_service_request(
    payload: ServiceRequestCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_client),
):
    request = ServiceRequest(
        title=payload.title,
        description=payload.description,
        client_id=current_user.id,
        status=RequestStatus.created.value,
    )

    db.add(request)
    db.commit()
    db.refresh(request)

    return request


# ---------------------------------
# CLIENT: VIEW OWN
# ---------------------------------

@router.get(
    "/my",
    response_model=List[ServiceRequestResponse],
)
def get_my_requests(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_client),
):
    return (
        db.query(ServiceRequest)
        .filter(ServiceRequest.client_id == current_user.id)
        .all()
    )


# ---------------------------------
# PROVIDER: ACCEPT
# ---------------------------------

@router.post("/{request_id}/accept")
def accept_request(
    request_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_provider),
):
    request = (
        db.query(ServiceRequest)
        .filter(ServiceRequest.id == request_id)
        .first()
    )

    if not request:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Request not found",
        )

    if request.status != RequestStatus.broadcasted.value:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Request must be broadcasted before accepting",
        )

    validate_transition(request.status, RequestStatus.accepted)

    request.status = RequestStatus.accepted.value
    request.assigned_provider_id = current_user.id

    db.commit()
    db.refresh(request)

    return {"message": "Request accepted"}


# ---------------------------------
# GENERIC VIEW WITH ACCESS CONTROL
# ---------------------------------

@router.get(
    "/{request_id}",
    response_model=ServiceRequestResponse,
)
def get_request(
    request_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    request = (
        db.query(ServiceRequest)
        .filter(ServiceRequest.id == request_id)
        .first()
    )

    if not request:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Request not found",
        )

    if request.client_id == current_user.id:
        return request

    if request.assigned_provider_id == current_user.id:
        return request

    raise HTTPException(
        status_code=status.HTTP_403_FORBIDDEN,
        detail="Access denied",
    )