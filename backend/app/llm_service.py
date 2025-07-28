import google.generativeai as genai
from app.config import settings
import re

genai.configure(api_key=settings.GEMINI_API_KEY)

model = genai.GenerativeModel("models/gemini-1.5-flash")

# def ask_llm(prompt: str) -> str:
#     try:
#         print(f"Sending prompt to Gemini: {prompt}")
#         response = model.generate_content(prompt)
#         return response.text.strip()
#     except Exception as e:
#         print(f"Error calling Gemini API: {e}")
#         raise

def ask_llm(prompt: str) -> str:
    try:
        # Check for common greetings directly, before LLM call
        if re.search(r"\b(hi|hello|hey|greetings)\b", prompt.lower()):
            return "👋 Hello! I'm here to help evaluate startup ideas. Feel free to describe your idea and I’ll give you some insights."

        if not is_valid_startup_idea(prompt):
            return "⚠️ Please provide a valid startup idea or a greeting to proceed."

        print(f"Sending prompt to Gemini: {prompt}")
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        print(f"Error calling Gemini API: {e}")
        raise

def is_valid_startup_idea(prompt: str) -> bool:
    classifier_prompt = f"""
    Classify the following user message as one of three categories: 
    (1) a greeting, (2) a startup idea, or (3) neither.

    If it's a greeting or startup idea, respond with "YES". 
    If it's neither, respond with "NO" only.

    Message: "{prompt}"
    """

    model = genai.GenerativeModel("models/gemini-1.5-flash")
    classification = model.generate_content(classifier_prompt).text.strip().lower()
    return "yes" in classification