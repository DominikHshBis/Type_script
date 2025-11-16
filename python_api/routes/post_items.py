from fastapi import APIRouter

router = APIRouter()

@router.post("/Items/")
def create_item(item:Item):
    return {"item": item}