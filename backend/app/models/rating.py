from sqlalchemy import BigInteger, CheckConstraint, Column, DateTime, ForeignKey, Integer, String, Text, UniqueConstraint

from app.db.base_class import Base


class ProviderRating(Base):
    __tablename__ = "provider_ratings"
    __table_args__ = (
        CheckConstraint("rating BETWEEN 1 AND 5", name="ck_provider_ratings_rating_range"),
        UniqueConstraint("request_id", "client_id", "provider_id", name="uq_provider_ratings_request_client_provider"),
    )

    id = Column(BigInteger, primary_key=True, index=True)
    request_id = Column(BigInteger, ForeignKey("service_requests.id", ondelete="CASCADE"), nullable=False, index=True)
    client_id = Column(BigInteger, nullable=False, index=True)
    provider_id = Column(BigInteger, ForeignKey("provider_profiles.id", ondelete="CASCADE"), nullable=False, index=True)
    rating = Column(Integer, nullable=False)
    comment = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), nullable=True)


class RequestStatusHistory(Base):
    __tablename__ = "request_status_history"

    id = Column(BigInteger, primary_key=True, index=True)
    request_id = Column(BigInteger, ForeignKey("service_requests.id", ondelete="CASCADE"), nullable=False, index=True)
    from_status = Column(String, nullable=True)
    to_status = Column(String, nullable=False, index=True)
    actor_type = Column(String, nullable=False, default="system")
    actor_id = Column(BigInteger, nullable=True)
    created_at = Column(DateTime(timezone=True), nullable=True)
