
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.deps import get_db, get_current_user
from app import models

router = APIRouter(prefix="/prompts", tags=["prompts"])

@router.get("/")
def list_prompts(type: str | None = None, subtype: str | None = None, db: Session = Depends(get_db), user=Depends(get_current_user)):
    q = db.query(models.Prompt)
    if type:
        q = q.filter(models.Prompt.type == type)
    if subtype:
        q = q.filter(models.Prompt.subtype == subtype)
    return q.limit(200).all()
