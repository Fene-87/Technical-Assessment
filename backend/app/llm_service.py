import openai
import os
from app.config import settings

openai.api_key = settings.OPENAI_API_KEY

def ask_llm(prompt: str) -> str:
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content