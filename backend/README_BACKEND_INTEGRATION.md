# TasksLocal Backend extracted from Full App

This folder contains only the useful backend layer extracted from the previous Full App archive.

Included:
- FastAPI application (`app/`)
- SQLAlchemy models
- dispatch / wave / SLA service modules
- worker modules
- Alembic config and migration scaffold
- Dockerfile, docker-compose, requirements

Excluded intentionally:
- `venv/`
- `__pycache__/`
- Flutter/mobile build artifacts
- media/test folders
- secrets and runtime cache files

Frontend remains the Light MVP PWA. Use this backend as the API/dispatch engine donor.

Suggested next integration order:
1. Stabilize Alembic initial migration.
2. Expose production API endpoints for service requests.
3. Connect Light MVP `TASKSLOCAL_API_BASE` to backend.
4. Replace mock providers with real dispatch results.
5. Add provider auth, availability, SLA, escrow.
