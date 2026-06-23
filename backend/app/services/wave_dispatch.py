from typing import List, Dict


WAVE_CONFIG = [
    {"wave": 1, "size": 3},
    {"wave": 2, "size": 5},
    {"wave": 3, "size": 10},
]


def build_dispatch_waves(providers: List[Dict]) -> List[Dict]:
    """
    Splits ranked providers into broadcast waves.
    """

    waves = []
    cursor = 0

    for config in WAVE_CONFIG:
        wave_size = config["size"]

        chunk = providers[cursor:cursor + wave_size]

        if not chunk:
            break

        waves.append({
            "wave": config["wave"],
            "providers": chunk
        })

        cursor += wave_size

    return waves


def get_wave_providers(waves: List[Dict], wave_number: int) -> List[Dict]:
    """
    Returns providers for specific wave.
    """

    for wave in waves:
        if wave["wave"] == wave_number:
            return wave["providers"]

    return []


def total_providers(waves: List[Dict]) -> int:
    """
    Returns total number of providers across waves.
    """

    count = 0

    for wave in waves:
        count += len(wave["providers"])

    return count