A simple full-stack app using FastAPI + Next.js + TailwindCSS to answer user queries with LLM (OpenAI).

## Setup

### Backend
```bash
cd backend
# Create virtual environment
python3 -m venv .venv
source .venv/bin/activate  # or .venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Start server
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Tech Stack
- Backend: Python + FastAPI
- Frontend: Next.js + TailwindCSS
- LLM: OpenAI GPT-3.5 (Free tier)

## Prompting Examples
See `llm_service.py` for structured prompt templates.