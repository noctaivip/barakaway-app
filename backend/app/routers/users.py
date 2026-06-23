from fastapi import APIRouter, Depends

from app.dependencies import get_current_user

router = APIRouter()


@router.get("/users/me")
def read_current_user(current_user=Depends(get_current_user)):
    return {
        "message": "User endpoint working",
        "user": current_user,
    }