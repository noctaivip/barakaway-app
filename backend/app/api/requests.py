from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.db.session import get_db

router = APIRouter()


class ServiceRequestCreate(BaseModel):
    client_id: int = 1
    description: str = Field(..., min_length=1)
    category: str = "general"
    service_type: str
    urgency: Optional[str] = None
    radius_km: float = 10
    budget: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None


def _mock_offers(service_type: str) -> List[Dict[str, Any]]:
    return [
        {
            "id": "backend-1",
            "name": "Алексей М.",
            "service": service_type,
            "rating": "4.9",
            "reviews": 247,
            "eta": 18,
            "price": "150 000 сум",
            "experience": "8 лет",
            "completed": 1264,
            "verified": True,
            "docs": True,
            "lastOrder": "2 часа назад",
            "completionRate": "98%",
            "cancelRate": "1%",
            "recentRating": "4.9",
            "status": "Лучший ETA",
            "specialization": ["Аварийный выезд", "Диагностика", "Ремонт на месте", "Замена деталей"],
            "reviewsList": [
                ["Анна Р.", "5.0", "Приехал быстро, всё объяснил и аккуратно сделал."],
                ["Михаил С.", "4.9", "Цена совпала с договорённостью, работа без задержек."],
                ["Олег Т.", "5.0", "Хороший специалист, буду обращаться снова."],
            ],
        },
        {
            "id": "backend-2",
            "name": "Руслан К.",
            "service": service_type,
            "rating": "4.8",
            "reviews": 189,
            "eta": 24,
            "price": "250 000 сум",
            "experience": "6 лет",
            "completed": 842,
            "verified": True,
            "docs": True,
            "lastOrder": "5 часов назад",
            "completionRate": "96%",
            "cancelRate": "2%",
            "recentRating": "4.8",
            "status": "Ожидает выбора",
            "specialization": ["Плановый ремонт", "Срочные заявки", "Установка", "Профилактика"],
            "reviewsList": [
                ["Дилшод А.", "5.0", "Быстро ответил и приехал вовремя."],
                ["Елена К.", "4.8", "Работа качественная, стоимость адекватная."],
                ["Сергей П.", "4.7", "Всё сделал, дал рекомендации."],
            ],
        },
    ]


@router.post("/requests")
def create_request(payload: ServiceRequestCreate, db: Session = Depends(get_db)):
    """
    Public request endpoint used by the Light MVP PWA.

    It accepts JSON from the frontend, stores the request if the database schema is
    available, and returns a normalized response the PWA can render immediately.
    """
    latitude = payload.latitude if payload.latitude is not None else 41.31108
    longitude = payload.longitude if payload.longitude is not None else 69.24056

    try:
        result = db.execute(
            text(
                """
                INSERT INTO service_requests
                (
                    client_id,
                    description,
                    service_type,
                    latitude,
                    longitude,
                    category,
                    radius_km,
                    status,
                    next_wave_at,
                    dispatch_wave,
                    broadcast_wave,
                    created_at
                )
                VALUES
                (
                    :client_id,
                    :description,
                    :service_type,
                    :latitude,
                    :longitude,
                    :category,
                    :radius_km,
                    'searching',
                    NOW(),
                    0,
                    0,
                    NOW()
                )
                RETURNING id
                """
            ),
            {
                "client_id": payload.client_id,
                "description": payload.description,
                "service_type": payload.service_type,
                "latitude": latitude,
                "longitude": longitude,
                "category": payload.category,
                "radius_km": payload.radius_km,
            },
        )
        row = result.fetchone()
        db.commit()
        request_id = int(row.id)
        storage = "database"
    except Exception:
        db.rollback()
        request_id = int(datetime.now(timezone.utc).timestamp())
        storage = "fallback"

    return {
        "request_id": request_id,
        "status": "searching",
        "storage": storage,
        "dispatch": {
            "mode": "wave",
            "first_wave": "instant",
            "radius_km": payload.radius_km,
        },
        "offers": _mock_offers(payload.service_type),
    }


@router.get("/requests/{request_id}")
def get_request_status(request_id: int, db: Session = Depends(get_db)):
    request = db.execute(
        text(
            """
            SELECT id, status, provider_id, next_wave_at, dispatch_wave, broadcast_wave
            FROM service_requests
            WHERE id = :request_id
            """
        ),
        {"request_id": request_id},
    ).fetchone()

    if not request:
        raise HTTPException(status_code=404, detail="request_not_found")

    return dict(request._mapping)


@router.get("/requests/{request_id}/offers")
def get_request_offers(request_id: int, service_type: str = "Сантехника"):
    return {
        "request_id": request_id,
        "offers": _mock_offers(service_type),
    }


@router.post("/requests/{request_id}/accept")
def accept_request(request_id: int, provider_id: int, db: Session = Depends(get_db)):
    try:
        with db.begin():
            request_row = db.execute(
                text(
                    """
                    SELECT id, status, provider_id
                    FROM service_requests
                    WHERE id = :request_id
                    FOR UPDATE
                    """
                ),
                {"request_id": request_id},
            ).fetchone()

            if not request_row:
                raise HTTPException(status_code=404, detail="request_not_found")

            if request_row.status == "assigned":
                if request_row.provider_id == provider_id:
                    return {"request_id": request_id, "provider_id": provider_id, "status": "assigned"}
                raise HTTPException(status_code=409, detail="already_assigned")

            db.execute(
                text(
                    """
                    UPDATE service_requests
                    SET status = 'assigned', provider_id = :provider_id
                    WHERE id = :request_id
                    """
                ),
                {"request_id": request_id, "provider_id": provider_id},
            )

        return {"request_id": request_id, "provider_id": provider_id, "status": "assigned"}
    except HTTPException:
        raise
    except Exception as exc:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"accept_failed: {exc}")


@router.post("/requests/{request_id}/complete")
def complete_request(request_id: int, db: Session = Depends(get_db)):
    db.execute(
        text(
            """
            UPDATE service_requests
            SET status = 'completed'
            WHERE id = :request_id
            """
        ),
        {"request_id": request_id},
    )
    db.commit()

    return {"request_id": request_id, "status": "completed"}
