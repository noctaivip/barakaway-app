"""lifecycle persistence tables and provider rating stats

Revision ID: 20260623_15
Revises:
Create Date: 2026-06-23
"""

from alembic import op
import sqlalchemy as sa


revision = "20260623_15"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "request_status_history",
        sa.Column("id", sa.BigInteger(), primary_key=True, nullable=False),
        sa.Column("request_id", sa.BigInteger(), sa.ForeignKey("service_requests.id", ondelete="CASCADE"), nullable=False),
        sa.Column("from_status", sa.String(), nullable=True),
        sa.Column("to_status", sa.String(), nullable=False),
        sa.Column("actor_type", sa.String(), nullable=False, server_default="system"),
        sa.Column("actor_id", sa.BigInteger(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=True, server_default=sa.text("NOW()")),
    )
    op.create_index("ix_request_status_history_request_id", "request_status_history", ["request_id"])
    op.create_index("ix_request_status_history_to_status", "request_status_history", ["to_status"])

    op.create_table(
        "provider_ratings",
        sa.Column("id", sa.BigInteger(), primary_key=True, nullable=False),
        sa.Column("request_id", sa.BigInteger(), sa.ForeignKey("service_requests.id", ondelete="CASCADE"), nullable=False),
        sa.Column("client_id", sa.BigInteger(), nullable=False),
        sa.Column("provider_id", sa.BigInteger(), sa.ForeignKey("provider_profiles.id", ondelete="CASCADE"), nullable=False),
        sa.Column("rating", sa.Integer(), nullable=False),
        sa.Column("comment", sa.Text(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=True, server_default=sa.text("NOW()")),
        sa.CheckConstraint("rating BETWEEN 1 AND 5", name="ck_provider_ratings_rating_range"),
        sa.UniqueConstraint("request_id", "client_id", "provider_id", name="uq_provider_ratings_request_client_provider"),
    )
    op.create_index("ix_provider_ratings_request_id", "provider_ratings", ["request_id"])
    op.create_index("ix_provider_ratings_client_id", "provider_ratings", ["client_id"])
    op.create_index("ix_provider_ratings_provider_id", "provider_ratings", ["provider_id"])

    op.add_column("provider_profiles", sa.Column("completed_jobs", sa.Integer(), nullable=True, server_default="0"))
    op.add_column("provider_profiles", sa.Column("rating_count", sa.Integer(), nullable=True, server_default="0"))
    op.add_column("provider_profiles", sa.Column("rating_sum", sa.Integer(), nullable=True, server_default="0"))
    op.add_column("provider_profiles", sa.Column("average_rating", sa.Float(), nullable=True, server_default="0"))


def downgrade() -> None:
    op.drop_column("provider_profiles", "average_rating")
    op.drop_column("provider_profiles", "rating_sum")
    op.drop_column("provider_profiles", "rating_count")
    op.drop_column("provider_profiles", "completed_jobs")
    op.drop_index("ix_provider_ratings_provider_id", table_name="provider_ratings")
    op.drop_index("ix_provider_ratings_client_id", table_name="provider_ratings")
    op.drop_index("ix_provider_ratings_request_id", table_name="provider_ratings")
    op.drop_table("provider_ratings")
    op.drop_index("ix_request_status_history_to_status", table_name="request_status_history")
    op.drop_index("ix_request_status_history_request_id", table_name="request_status_history")
    op.drop_table("request_status_history")
