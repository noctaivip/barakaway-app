import logging
import time
from datetime import datetime, timezone
from typing import Any, Dict, List

from sqlalchemy import text

from app.db.session import SessionLocal
from app.services.dispatch_engine import (
    MAX_WAVE_NUMBER,
    TERMINAL_NO_PROVIDER_STATUS,
    dispatch_next_wave,
    get_dispatchable_requests,
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | dispatch-worker | %(message)s",
)

logger = logging.getLogger("dispatch-worker")

POLL_INTERVAL_SECONDS = 2
BATCH_LIMIT = 100


def utcnow_naive() -> datetime:
    return datetime.now(timezone.utc).replace(tzinfo=None)


def expire_due_offers_and_batches() -> Dict[str, int]:
    db = SessionLocal()

    try:
        now = utcnow_naive()

        expired_offers = db.execute(
            text(
                """
                UPDATE dispatch_offers
                SET
                    status = 'expired',
                    expired_at = :now
                WHERE status = 'sent'
                  AND expired_at IS NOT NULL
                  AND expired_at <= :now
                RETURNING id
                """
            ),
            {"now": now},
        ).fetchall()

        expired_batches = db.execute(
            text(
                """
                UPDATE dispatch_batches
                SET
                    status = 'expired',
                    expires_at = :now
                WHERE status IN ('sent', 'searching')
                  AND expires_at IS NOT NULL
                  AND expires_at <= :now
                RETURNING id
                """
            ),
            {"now": now},
        ).fetchall()

        db.commit()

        return {
            "offers": len(expired_offers),
            "batches": len(expired_batches),
        }

    except Exception:
        logger.exception("Failed to expire due offers/batches")
        try:
            db.rollback()
        except Exception:
            pass
        return {"offers": 0, "batches": 0}

    finally:
        try:
            db.close()
        except Exception:
            pass


def finalize_terminal_requests() -> int:
    db = SessionLocal()

    try:
        finalized = db.execute(
            text(
                """
                UPDATE service_requests sr
                SET status = :terminal_status
                WHERE sr.status = 'searching'
                  AND sr.provider_id IS NULL
                  AND sr.next_wave_at IS NULL
                  AND COALESCE(sr.dispatch_wave, 0) >= :max_wave
                  AND NOT EXISTS (
                      SELECT 1
                      FROM dispatch_offers dof
                      WHERE dof.request_id = sr.id
                        AND dof.status IN ('sent', 'accepted')
                  )
                RETURNING sr.id
                """
            ),
            {
                "terminal_status": TERMINAL_NO_PROVIDER_STATUS,
                "max_wave": MAX_WAVE_NUMBER,
            },
        ).fetchall()

        db.commit()
        return len(finalized)

    except Exception:
        logger.exception("Failed to finalize terminal requests")
        try:
            db.rollback()
        except Exception:
            pass
        return 0

    finally:
        try:
            db.close()
        except Exception:
            pass


def process_due_requests() -> int:
    db = SessionLocal()

    try:
        requests = get_dispatchable_requests(
            db=db,
            limit=BATCH_LIMIT,
        )

        if not requests:
            return 0

        request_ids: List[int] = [int(request.id) for request in requests]

    except Exception:
        logger.exception("Failed to load dispatchable requests")
        try:
            db.close()
        except Exception:
            pass
        return 0

    finally:
        try:
            db.close()
        except Exception:
            pass

    processed = 0

    for request_id in request_ids:
        db = SessionLocal()

        try:
            result: Dict[str, Any] = dispatch_next_wave(
                db=db,
                request_id=request_id,
            )
            processed += 1
            log_dispatch_result(result)

        except Exception:
            logger.exception(
                "Dispatch processing failed for request_id=%s",
                request_id,
            )
            try:
                db.rollback()
            except Exception:
                pass

        finally:
            try:
                db.close()
            except Exception:
                pass

    return processed


def log_dispatch_result(result: Dict[str, Any]) -> None:
    action = result.get("action")
    request_id = result.get("request_id")
    wave = result.get("wave")
    batch_id = result.get("batch_id")

    if action == "wave_dispatched":
        logger.info(
            "Wave dispatched | request_id=%s | wave=%s | batch_id=%s | offers_created=%s | providers=%s | next_wave_at=%s",
            request_id,
            wave,
            batch_id,
            result.get("offers_created"),
            result.get("provider_profile_ids"),
            result.get("next_wave_at"),
        )
        return

    if action == "empty_wave":
        logger.info(
            "Empty wave | request_id=%s | wave=%s | batch_id=%s | next_wave_at=%s",
            request_id,
            wave,
            batch_id,
            result.get("next_wave_at"),
        )
        return

    if action == "finalized_no_providers":
        logger.info(
            "Request finalized | request_id=%s | wave=%s | status=%s",
            request_id,
            wave,
            result.get("status"),
        )
        return

    if action in {
        "missing_request",
        "request_not_searching",
        "dispatch_finished",
        "not_due_yet",
        "no_more_waves",
        "missing_coordinates",
    }:
        logger.info(
            "Dispatch skipped | request_id=%s | action=%s | wave=%s | details=%s",
            request_id,
            action,
            wave,
            result,
        )
        return

    logger.info(
        "Dispatch result | request_id=%s | result=%s",
        request_id,
        result,
    )


def run() -> None:
    logger.info("Dispatch worker started")

    while True:
        try:
            expired_stats = expire_due_offers_and_batches()
            finalized_count = finalize_terminal_requests()
            processed = process_due_requests()

            logger.info(
                "Dispatch cycle complete | processed=%s | expired_offers=%s | expired_batches=%s | finalized_requests=%s",
                processed,
                expired_stats["offers"],
                expired_stats["batches"],
                finalized_count,
            )

        except KeyboardInterrupt:
            logger.info("Dispatch worker stopped")
            break

        except Exception:
            logger.exception("Unhandled error in dispatch worker loop")

        time.sleep(POLL_INTERVAL_SECONDS)


if __name__ == "__main__":
    run()