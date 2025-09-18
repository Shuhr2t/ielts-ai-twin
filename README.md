
# IELTS‑AI Twin — Full‑Stack Starter (React + FastAPI)

## Dev quick start
### Backend
```
cd backend
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r app/requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend
```
cd frontend
npm i
npm run dev
```

Open http://localhost:5173

## Env
- Frontend can set `VITE_API_URL` to your deployed backend URL.
- Backend env in `app/core/config.py` (e.g., `SECRET_KEY`, `DB_URL`).

## Deploy (Railway + Vercel)
1) Push this repo to GitHub.
2) Railway: New Project → Deploy from GitHub → set Start Command: `uvicorn app.main:app --host 0.0.0.0 --port 8000` and add Python build.
3) Expose port 8000. Note your backend URL.
4) Vercel: New Project → Import the `frontend/` folder → set ENV `VITE_API_URL` to your Railway backend URL → Deploy.
