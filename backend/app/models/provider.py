from sqlalchemy import Boolean, Column, DateTime, Integer, String

from app.db.base_class import Base


class ProviderProfile(Base):
    __tablename__ = "provider_profiles"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        nullable=False,
        index=True,
    )

    service_type = Column(String, nullable=True)
    status = Column(String, nullable=True)

    is_available = Column(Boolean, nullable=True, default=True)
    silent_mode = Column(Boolean, nullable=True, default=False)
    active_jobs = Column(Integer, nullable=True, default=0)

    is_online = Column(Boolean, nullable=False, default=False)
    is_busy = Column(Boolean, nullable=False, default=False)

    last_seen_at = Column(DateTime, nullable=True)
    location_updated_at = Column(DateTime, nullable=True)

    created_at = Column(DateTime, nullable=True)