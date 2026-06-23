from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import providers
from app.routers import provider_location
from app.routers import escrow
from app.routers import realtime
from app.routers import geo
from app.routers import auth  # ДОБАВЛЕНО

from app.api.requests import router as requests_router


app = FastAPI(
    title="TaskLocal API",
    version="1.0.0",
    description="TaskLocal Dispatch Platform Backend",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://taskslocal.app",
        "https://www.taskslocal.app",
        "https://taskslocal-app.pages.dev",
        "http://localhost:8000",
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/health")
def health():
    return {"status": "ok"}


# Register routers
app.include_router(requests_router)
app.include_router(providers.router)
app.include_router(provider_location.router)
app.include_router(escrow.router)
app.include_router(realtime.router)
app.include_router(geo.router)
app.include_router(auth.router)  # ДОБАВЛЕНО