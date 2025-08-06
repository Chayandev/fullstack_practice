from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
app = FastAPI()


@app.get("/")
def index():
    return {"message": "Hello form FastApi"}


@app.get("/home")
def data():
    return {"message": "Home Page"}


@app.get("/about")
def data():
    return {"message": "About Page"}

 # we can conclude that , name of the function is not important or can be same
 # the only thing is that the decorator which will be diffrent , nad based on that the call will be made
 # The fucntion aftet teh decorator is called path operation function
 # The decorator called path operation decorator and the path is given to the next of it


# Dynacmic Routing
@app.get("/blog/{id}")
def show(id: int):
    # fetch the blog based with id=id
    return {"data": f"Blog of {id}"}


@app.get("/blog/{id}/comments")
def comments(id: int):
    # fetch comments of blog with id=id
    return {"data": {"1", "2"}}


# Routing order matters here as-well

# Query parameter
# fast api si smart enogh to get which is path and which is query parameter
@app.get("/blogs")
def getBlog(limit: int = 10, published: bool = False, sort: Optional[str] = None):
    if (published):
        return {"message": f"{limit} published blogs form db"}
    else:
        return {"message": f"{limit} blogs form db"}


# Pydantic Request Body

class Blog(BaseModel):
    title: str
    body: str
    published: Optional[bool]


@app.post("/blog")
def addPost(request: Blog):
    return {"message": f"Blog is created with title as {request.title}"}


# Change the default port using only runig hte main.py
# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=9000)

# else we can execute this command
# uvicorn main:app --reload --port 9000
