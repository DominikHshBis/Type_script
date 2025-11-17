from fastapi import FastAPI
#from models import Item_model
from python_api.routes.get_router import grund_router
from python_api.routes.post_items import item_router

app = FastAPI()
app.include_router(router=grund_router)
app.include_router(router=item_router)
#app.include_router(router=router)

