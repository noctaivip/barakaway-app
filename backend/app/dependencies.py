from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.auth import oauth2_scheme, decode_access_token
from app.db.session import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_rls_db(db: Session = Depends(get_db)) -> Session:
    # В текущей архитектуре RLS не используется.
    # Это просто прокси к обычной сессии.
    return db


def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = decode_access_token(token)

    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
        )

    return payload