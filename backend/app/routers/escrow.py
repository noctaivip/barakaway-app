from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text

from app.database import get_db
from app.services.escrow_engine import create_escrow, transition_escrow

router = APIRouter(prefix="/escrow", tags=["escrow"])


@router.post("/create")
def escrow_create(
    service_request_id: int,
    client_id: int,
    provider_id: int,
    gross_amount: float,
    platform_fee_amount: float,
    provider_amount: float,
    currency: str = "USD",
    db: Session = Depends(get_db),
):
    escrow_id = create_escrow(
        db=db,
        service_request_id=service_request_id,
        client_id=client_id,
        provider_id=provider_id,
        gross_amount=gross_amount,
        platform_fee=platform_fee_amount,
        provider_amount=provider_amount,
        currency=currency,
    )

    return {
        "escrow_id": escrow_id,
        "status": "INIT",
    }


@router.post("/{escrow_id}/authorize")
def escrow_authorize(
    escrow_id: int,
    db: Session = Depends(get_db),
):
    transition_escrow(
        db=db,
        escrow_id=escrow_id,
        new_state="PAYMENT_AUTHORIZED",
    )

    return {
        "escrow_id": escrow_id,
        "status": "PAYMENT_AUTHORIZED",
    }


@router.post("/{escrow_id}/start")
def escrow_start(
    escrow_id: int,
    db: Session = Depends(get_db),
):
    transition_escrow(
        db=db,
        escrow_id=escrow_id,
        new_state="IN_ESCROW",
    )

    return {
        "escrow_id": escrow_id,
        "status": "IN_ESCROW",
    }


@router.post("/{escrow_id}/release")
def escrow_release(
    escrow_id: int,
    db: Session = Depends(get_db),
):
    transition_escrow(
        db=db,
        escrow_id=escrow_id,
        new_state="RELEASED",
    )

    return {
        "escrow_id": escrow_id,
        "status": "RELEASED",
    }


@router.post("/{escrow_id}/refund")
def escrow_refund(
    escrow_id: int,
    db: Session = Depends(get_db),
):
    transition_escrow(
        db=db,
        escrow_id=escrow_id,
        new_state="REFUNDED",
    )

    return {
        "escrow_id": escrow_id,
        "status": "REFUNDED",
    }


@router.post("/{escrow_id}/dispute")
def escrow_dispute(
    escrow_id: int,
    db: Session = Depends(get_db),
):
    transition_escrow(
        db=db,
        escrow_id=escrow_id,
        new_state="DISPUTE_OPENED",
    )

    return {
        "escrow_id": escrow_id,
        "status": "DISPUTE_OPENED",
    }


@router.get("/{escrow_id}")
def escrow_status(
    escrow_id: int,
    db: Session = Depends(get_db),
):
    row = db.execute(
        text(
            """
            SELECT
                id,
                service_request_id,
                client_id,
                provider_id,
                gross_amount,
                platform_fee_amount,
                provider_amount,
                currency,
                status,
                created_at
            FROM escrows
            WHERE id = :escrow_id
            """
        ),
        {"escrow_id": escrow_id},
    ).fetchone()

    if not row:
        return {"error": "escrow_not_found"}

    return dict(row._mapping)