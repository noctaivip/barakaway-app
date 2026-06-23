# Light MVP API Bridge

Light MVP remains the production UI. Visual files were not redesigned.

What was connected:
- PWA sends JSON request payload to `TASKSLOCAL_API_BASE`.
- Backend accepts `POST /requests`.
- Backend returns normalized `request_id`, `status`, `dispatch` metadata and first offer cards.
- Frontend keeps local fallback if backend is unavailable.
- CORS is enabled for `taskslocal.app`, `www.taskslocal.app`, Cloudflare Pages and localhost.

Frontend config:
```js
localStorage.setItem('TASKSLOCAL_API_BASE', 'https://api.taskslocal.app')
```

Local backend:
```bash
cd backend
cp .env.example .env
docker compose up -d --build
```

Then set:
```js
localStorage.setItem('TASKSLOCAL_API_BASE', 'http://localhost:8000')
```

Next production step:
- deploy backend to `api.taskslocal.app`;
- run Alembic initial migration;
- replace mock fallback offers with real provider query/dispatch results.
