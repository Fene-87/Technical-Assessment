# Prompts Used in LLM-Powered Startup Validator

This document outlines the structure and logic of prompts used when interacting with the Gemini API to evaluate startup ideas.

---

## 1. Main Startup Validation Prompt

### Input from user:
> "I want to create an app that helps farmers detect diseases using their phone cameras."

### Transformed Prompt to LLM:
> "Evaluate the viability of the following startup idea and provide insights on the following aspects:
> - Market fit
> - Scalability
> - Cost considerations
> - Environmental viability
>
> Startup Idea: I want to create an app that helps farmers detect diseases using their phone cameras."

---

## 2. Greeting/Non-startup Prompt Handling

If the user prompt is:
> "Hi there!"

Then the application directly returns:
> "👋 Hello! I'm here to help evaluate startup ideas. Feel free to describe your idea and I’ll give you some insights."

---

## 3. Invalid or Off-topic Prompt

When the input doesn't match a valid startup idea or a greeting, the system returns:
> "🤔 Please enter a valid startup idea so I can help you evaluate it effectively."

---

## Notes
- Prompts are dynamically handled using regex and logic in `llm_service.py`
- Only startup-like sentences or greetings are processed
