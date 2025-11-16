from fastapi import FastAPI
#from models import Item_model
from python_api.routes.get_router import router

app = FastAPI()
app.include_router(router=router, prefix="/d")
#app.include_router(router=router)



