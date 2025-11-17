from fastapi import APIRouter

grund_router = APIRouter()

@grund_router.get("/")
def read_root():
    return {"message: das ende ist nah"}

