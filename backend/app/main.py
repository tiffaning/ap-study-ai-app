from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # <-- use the environment variable here!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/mcq")
def get_mcq():
    return {
        "question": "What is 2 + 2?",
        "options": ["1", "2", "3", "4"],
        "answer": "4",
        "explanation": "2 + 2 equals 4."
    }
