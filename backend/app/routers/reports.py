
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.schemas import ReportCreate, ReportOut
from app.deps import get_db, get_current_user
from app import models

router = APIRouter(prefix="/reports", tags=["reports"])

@router.get("/", response_model=List[ReportOut])
def list_reports(db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    return db.query(models.Report).filter(models.Report.user_id == user.id).order_by(models.Report.created_at.desc()).all()

@router.get("/{report_id}", response_model=ReportOut)
def get_report(report_id: int, db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    r = db.query(models.Report).filter(models.Report.id == report_id, models.Report.user_id == user.id).first()
    if not r:
        raise HTTPException(status_code=404, detail="Report not found")
    return r

@router.post("/", response_model=ReportOut)
def create_report(data: ReportCreate, db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    r = models.Report(user_id=user.id, **data.model_dump())
    db.add(r)
    db.commit()
    db.refresh(r)
    return r
