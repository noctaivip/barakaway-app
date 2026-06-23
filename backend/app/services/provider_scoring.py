from math import exp
from typing import List, Dict


def normalize_distance(distance_meters: float) -> float:
    """
    Converts distance into score 0..1
    closer provider → higher score
    """
    km = distance_meters / 1000
    return exp(-km / 5)


def normalize_rating(rating: float, rating_count: int) -> float:
    """
    Rating weight with confidence factor
    """
    if rating is None:
        return 0.5

    confidence = min(rating_count / 50, 1)
    normalized = rating / 5

    return normalized * confidence + 0.5 * (1 - confidence)


def normalize_load(active_jobs: int) -> float:
    """
    Provider load factor
    fewer active jobs → higher score
    """
    if active_jobs <= 0:
        return 1.0

    return 1 / (1 + active_jobs)


def compute_provider_score(provider: Dict) -> float:
    """
    Computes final dispatch score
    """

    distance_score = normalize_distance(provider["distance"])
    rating_score = normalize_rating(
        provider.get("rating"),
        provider.get("rating_count", 0),
    )
    load_score = normalize_load(provider.get("active_jobs", 0))

    score = (
        distance_score * 0.45 +
        rating_score * 0.35 +
        load_score * 0.20
    )

    return score


def rank_providers(providers: List[Dict]) -> List[Dict]:
    """
    Sort providers by dispatch score
    """

    for provider in providers:
        provider["dispatch_score"] = compute_provider_score(provider)

    providers.sort(
        key=lambda p: p["dispatch_score"],
        reverse=True
    )

    return providers