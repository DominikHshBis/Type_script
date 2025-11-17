from fastapi import APIRouter

item_router = APIRouter()

@item_router.get("/2")
def get_data():
    return {"message":"lalalala"}

#@item_router.post("/Items/")
#def create_item(item:item):
  #  return {"item": item}



