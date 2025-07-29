from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router as query_router

app = FastAPI(title="LLM Assistant API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "https://technical-assessment-five.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(query_router)