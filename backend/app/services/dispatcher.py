from sqlalchemy.orm import Session

from app.services.geo import find_nearby_providers
from app.services.provider_scoring import rank_providers
from app.services.wave_dispatch import build_dispatch_waves
from app.services.provider_availability import is_provider_available


def dispatch_request(
    db: Session,
    latitude: float,
    longitude: float,
    radius_km: float = 10,
):
    """
    Full dispatch pipeline.

    1 geo search
    2 availability filter
    3 provider scoring
    4 wave building
    """

    # 1 GEO SEARCH
    providers = find_nearby_providers(
        db=db,
        latitude=latitude,
        longitude=longitude,
        radius_km=radius_km,
    )

    providers = [dict(p) for p in providers]

    # 2 AVAILABILITY FILTER
    available_providers = []

    for provider in providers:

        if is_provider_available(
            db=db,
            provider_id=provider["user_id"],
        ):
            available_providers.append(provider)

    if not available_providers:
        return []

    # 3 PROVIDER SCORING
    ranked_providers = rank_providers(available_providers)

    # 4 WAVE DISPATCH
    waves = build_dispatch_waves(ranked_providers)

    return waves