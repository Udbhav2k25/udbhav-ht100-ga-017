import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'default-secret')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'jwt-secret')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://user:pass@localhost/the_agentic_marketer')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CLAUDE_API_KEY = os.getenv('CLAUDE_API_KEY')
    FLUX_API_KEY = os.getenv('FLUX_API_KEY')
    TAVILY_API_KEY = os.getenv('TAVILY_API_KEY')