from sqlalchemy.orm import Session
from sqlalchemy import text
from datetime import datetime


ESCROW_STATES = {
    "INIT",
    "PAYMENT_AUTHORIZED",
    "IN_ESCROW",
    "RELEASED",
    "REFUNDED",
    "DISPUTE_OPENED",
}


ALLOWED_TRANSITIONS = {
    "INIT": {"PAYMENT_AUTHORIZED"},
    "PAYMENT_AUTHORIZED": {"IN_ESCROW", "REFUNDED"},
    "IN_ESCROW": {"RELEASED", "DISPUTE_OPENED"},
    "DISPUTE_OPENED": {"RELEASED", "REFUNDED"},
    "RELEASED": set(),
    "REFUNDED": set(),
}


def create_escrow(
    db: Session,
    service_request_id: int,
    client_id: int,
    provider_id: int,
    gross_amount: float,
    platform_fee: float,
    provider_amount: float,
    currency: str = "USD",
):
    """
    Creates escrow record with INIT state.
    """

    query = text(
        """
        INSERT INTO escrows (
            service_request_id,
            client_id,
            provider_id,
            gross_amount,
            platform_fee_amount,
            provider_amount,
            currency,
            status,
            created_at
        )
        VALUES (
            :service_request_id,
            :client_id,
            :provider_id,
            :gross_amount,
            :platform_fee,
            :provider_amount,
            :currency,
            'INIT',
            :created_at
        )
        RETURNING id
        """
    )

    result = db.execute(
        query,
        {
            "service_request_id": service_request_id,
            "client_id": client_id,
            "provider_id": provider_id,
            "gross_amount": gross_amount,
            "platform_fee": platform_fee,
            "provider_amount": provider_amount,
            "currency": currency,
            "created_at": datetime.utcnow(),
        },
    )

    escrow_id = result.fetchone()[0]

    log_event(db, escrow_id, "INIT")

    db.commit()

    return escrow_id


def transition_escrow(
    db: Session,
    escrow_id: int,
    new_state: str,
):
    """
    Moves escrow to next state using state machine rules.
    """

    if new_state not in ESCROW_STATES:
        raise ValueError("invalid_state")

    row = db.execute(
        text(
            """
            SELECT status
            FROM escrows
            WHERE id = :escrow_id
            FOR UPDATE
            """
        ),
        {"escrow_id": escrow_id},
    ).fetchone()

    if not row:
        raise ValueError("escrow_not_found")

    current_state = row.status

    if new_state not in ALLOWED_TRANSITIONS[current_state]:
        raise ValueError("invalid_transition")

    db.execute(
        text(
            """
            UPDATE escrows
            SET status = :new_state
            WHERE id = :escrow_id
            """
        ),
        {
            "new_state": new_state,
            "escrow_id": escrow_id,
        },
    )

    log_event(db, escrow_id, new_state)

    db.commit()


def log_event(
    db: Session,
    escrow_id: int,
    event_type: str,
):
    """
    Writes escrow state change to audit log.
    """

    db.execute(
        text(
            """
            INSERT INTO escrow_events (
                escrow_id,
                event_type,
                created_at
            )
            VALUES (
                :escrow_id,
                :event_type,
                :created_at
            )
            """
        ),
        {
            "escrow_id": escrow_id,
            "event_type": event_type,
            "created_at": datetime.utcnow(),
        },
    )