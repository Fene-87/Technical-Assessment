import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

print("Available Gemini Models:")
for model in genai.list_models():
    print(f"- {model.name} → {model.supported_generation_methods}")
