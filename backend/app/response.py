from typing import Any, Optional

def success_response(data: Any, meta: Optional[dict] = None):
    return {
        "success": True,
        "data": data,
        "meta": meta,
        "error": None,
    }

def error_response(message: str, code: int):
    return {
        "success": False,
        "data": None,
        "meta": None,
        "error": {
            "message": message,
            "code": code,
        },
    }