from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router as query_router

app = FastAPI(title="LLM Assistant API Technical Assessment")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(query_router)