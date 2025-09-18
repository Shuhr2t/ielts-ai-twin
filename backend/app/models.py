
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, JSON, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(255), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    plan = Column(String(50), default="free")
    created_at = Column(DateTime, default=datetime.utcnow)
    reports = relationship("Report", back_populates="user")

class Report(Base):
    __tablename__ = "reports"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    type = Column(String(20))          # speaking | writing
    subtype = Column(String(20))       # part1|part2|part3|task1|task2
    title = Column(String(255))
    created_at = Column(DateTime, default=datetime.utcnow)
    overall_band = Column(String(10))
    criteria = Column(JSON)            # dict of scores
    text = Column(Text)                # transcript or essay
    audio_url = Column(String(255))
    public = Column(Boolean, default=True)

    user = relationship("User", back_populates="reports")

class Prompt(Base):
    __tablename__ = "prompts"
    id = Column(Integer, primary_key=True)
    type = Column(String(20))          # speaking|writing
    subtype = Column(String(20))       # part1|part2|part3|task1|task2
    title = Column(String(255))
    category = Column(String(50))
    content = Column(Text)
    tags = Column(String(255))
