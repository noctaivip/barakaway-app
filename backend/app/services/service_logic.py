from sqlalchemy import text


def accept_request(db, request_id: int, provider_id: int):
    """
    Atomic job acceptance.
    Only one provider can win the request.
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
            "provider_id": provider_id,
            "request_id": request_id,
        },
    )

    row = result.fetchone()

    if not row:
        return False

    db.commit()

    return True