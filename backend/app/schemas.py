
from pydantic import BaseModel, EmailStr
from typing import Optional, Any
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    plan: str
    class Config:
        from_attributes = True

class ReportCreate(BaseModel):
    type: str
    subtype: str
    title: Optional[str] = None
    overall_band: Optional[str] = None
    criteria: Optional[dict[str, Any]] = None
    text: Optional[str] = None
    audio_url: Optional[str] = None
    public: bool = True

class ReportOut(ReportCreate):
    id: int
    user_id: int
    created_at: datetime
    class Config:
        from_attributes = True
