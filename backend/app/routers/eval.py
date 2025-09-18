
from fastapi import APIRouter, UploadFile, File, Form, Depends
from sqlalchemy.orm import Session
from app.deps import get_db, get_current_user
from app import models

router = APIRouter(prefix="/eval", tags=["evaluation"])

@router.post("/speaking")
async def eval_speaking(
    subtype: str = Form(...),
    title: str = Form(""),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    user = Depends(get_current_user)
):
    # TODO: save file, call Whisper + GPT. Stub output for now.
    transcript = "[stub transcript]"
    criteria = {"fluency": 7.0, "vocab": 6.5, "grammar": 6.0, "pronunciation": 6.5}
    overall = "6.5"
    report = models.Report(
        user_id=user.id, type="speaking", subtype=subtype, title=title,
        overall_band=overall, criteria=criteria, text=transcript,
        audio_url="/media/stub.wav", public=True
    )
    db.add(report); db.commit(); db.refresh(report)
    return report

@router.post("/writing")
async def eval_writing(
    subtype: str = Form(...),
    title: str = Form(""),
    text: str = Form(...),
    db: Session = Depends(get_db),
    user = Depends(get_current_user)
):
    criteria = {"task_achievement": 7.0, "coherence": 6.5, "vocab": 6.5, "grammar": 6.0}
    overall = "6.5"
    report = models.Report(
        user_id=user.id, type="writing", subtype=subtype, title=title,
        overall_band=overall, criteria=criteria, text=text, public=True
    )
    db.add(report); db.commit(); db.refresh(report)
    return report
