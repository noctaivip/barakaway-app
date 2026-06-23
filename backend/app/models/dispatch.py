from sqlalchemy import (
    Column,
    BigInteger,
    Integer,
    String,
    ForeignKey,
    DateTime,
)

from app.db.base_class import Base


class DispatchBatch(Base):
    __tablename__ = "dispatch_batches"

    id = Column(BigInteger, primary_key=True, index=True)

    request_id = Column(
        BigInteger,
        ForeignKey("service_requests.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    wave = Column(Integer, nullable=False)

    sent_at = Column(DateTime(timezone=True), nullable=True)
    expires_at = Column(DateTime(timezone=True), nullable=True)

    status = Column(
        String,
        nullable=False,
        default="searching",
    )


class DispatchOffer(Base):
    __tablename__ = "dispatch_offers"

    id = Column(BigInteger, primary_key=True, index=True)

    batch_id = Column(
        BigInteger,
        ForeignKey("dispatch_batches.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    request_id = Column(
        BigInteger,
        ForeignKey("service_requests.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    provider_id = Column(
        BigInteger,
        ForeignKey("provider_profiles.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    status = Column(
        String,
        nullable=False,
        default="sent",
    )

    created_at = Column(DateTime(timezone=True), nullable=True)
    sent_at = Column(DateTime(timezone=True), nullable=True)
    accepted_at = Column(DateTime(timezone=True), nullable=True)
    expired_at = Column(DateTime(timezone=True), nullable=True)


class DispatchAttempt(Base):
    __tablename__ = "dispatch_attempts"

    id = Column(BigInteger, primary_key=True, index=True)

    request_id = Column(
        BigInteger,
        ForeignKey("service_requests.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    attempt_number = Column(Integer, nullable=False)
    provider_count = Column(Integer, nullable=False)
    created_at = Column(DateTime(timezone=True), nullable=True)