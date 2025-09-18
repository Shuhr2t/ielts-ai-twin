
from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from passlib.hash import bcrypt
from app.db import SessionLocal
from app.core.security import decode_token
from app import models

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_current_user(authorization: str | None = None, db: Session = Depends(get_db)) -> models.User:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Missing token")
    token = authorization.split(" ", 1)[1]
    payload = decode_token(token)
    if not payload:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    user = db.query(models.User).get(payload.get("sub"))
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user
