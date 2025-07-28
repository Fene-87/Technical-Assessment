# from openai import OpenAI
# import os
# from app.config import settings

# client = OpenAI(api_key=settings.OPENAI_API_KEY)

# def ask_llm(prompt: str) -> str:
#     try:
#         response = client.chat.completions.create(
#             model="gpt-3.5-turbo",
#             messages=[{"role": "user", "content": prompt}]
#         )
#         return response.choices[0].message.content
#     except Exception as e:
#         print(f"Error calling OpenAI API: {e}")
#         raise

# backend/app/llm_service.py
import google.generativeai as genai
from app.config import settings

# Configure with your Gemini API key
genai.configure(api_key=settings.GEMINI_API_KEY)

# Create a Gemini model using the correct v1 model path
model = genai.GenerativeModel("models/gemini-1.5-flash")

def ask_llm(prompt: str) -> str:
    try:
        print(f"Sending prompt to Gemini: {prompt}")
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        print(f"Error calling Gemini API: {e}")
        raise
