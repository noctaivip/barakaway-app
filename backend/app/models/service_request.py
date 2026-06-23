from sqlalchemy import Column, BigInteger, String, DateTime, Float, Integer

from app.db.base_class import Base


class ServiceRequest(Base):
    __tablename__ = "service_requests"

    id = Column(BigInteger, primary_key=True, index=True)

    client_id = Column(
        BigInteger,
        nullable=False,
        index=True,
    )

    provider_id = Column(
        BigInteger,
        nullable=True,
        index=True,
    )

    description = Column(String, nullable=True)
    category = Column(String, nullable=True)
    service_type = Column(String(50), nullable=True)

    status = Column(String, nullable=True)

    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)

    radius_km = Column(Float, nullable=True)
    search_radius = Column(Integer, nullable=True)

    acceptance_deadline = Column(DateTime(timezone=True), nullable=True)
    next_wave_at = Column(DateTime(timezone=True), nullable=True)

    broadcast_wave = Column(Integer, nullable=True)
    dispatch_wave = Column(Integer, nullable=True)
    created_at = Column(DateTime(timezone=True), nullable=True)