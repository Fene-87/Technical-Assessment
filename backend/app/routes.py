from fastapi import APIRouter
from app.schemas import QueryRequest, QueryResponse
from app.llm_service import ask_llm

router = APIRouter()

@router.post("/query", response_model=QueryResponse)
def query_llm(request: QueryRequest):
    answer = ask_llm(request.question)
    return QueryResponse(answer=answer)