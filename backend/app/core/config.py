
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "IELTS AI Twin"
    SECRET_KEY: str = "change-me"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24
    DB_URL: str = "sqlite:///./app.db"
    CORS_ORIGINS: list[str] = ["http://localhost:5173"]
    OPENAI_API_KEY: str | None = None

settings = Settings()
