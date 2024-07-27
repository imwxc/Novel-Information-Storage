# main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/hello-world")
def read_root():
    return {"Hello": "World"}
