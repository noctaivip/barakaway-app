# TasksLocal Production PWA

Production-clean package.

## Assets

Single source of truth:

- `assets/icons/icon-192.png`
- `assets/icons/icon-512.png`
- `assets/screenshots/screen-1.png`

No duplicated versioned image files are used. Cache busting is handled by query version `20260623-03` and no-store headers.

## Deploy

Upload the contents of this `1/` folder to the repository root.
After deployment open `/clear-cache.html`, reset cache, then open `/`.


## Production merge note

This package keeps the Light MVP frontend as the source of truth for UI/UX. The previous Full App was not copied wholesale. Only the backend-relevant FastAPI/Alembic/dispatch files were added under `/backend` for staged integration.
