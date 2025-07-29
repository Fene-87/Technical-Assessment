# LLM-Powered Startup Validator

An application that allows users to input startup ideas and receive AI-generated insights on market fit, scalability, cost concerns, and environmental viability.

---

## 🛠 Tech Stack
- **Frontend**: Next.js + TailwindCSS
- **Backend**: FastAPI
- **LLM**: Gemini 1.5 Flash (Google Generative AI API)

---

## Live Demo

Frontend: https://technical-assessment-five.vercel.app
Backend API: https://technical-assessment-k13j.onrender.com/docs

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/Fene-87/Technical-Assessment.git
cd Technical-Assessment

## Setup

### Backend
```bash
cd backend
# Create virtual environment
python3 -m venv .venv
source .venv/bin/activate  # or .venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
# Copy .env.template to .env in the backend folder:
cp backend/.env.template backend/.env

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
- LLM: Google Gemini 1.5 Flash

## Prompting Examples
See `llm_service.py` for structured prompt templates.