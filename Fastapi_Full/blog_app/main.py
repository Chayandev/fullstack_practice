from fastapi import FastAPI, Depends, status, Response, HTTPException
import schemas
import models
import database
from sqlalchemy.orm import Session

app = FastAPI()

# ✅ Create tables based on models defined in models.py
models.Base.metadata.create_all(bind=database.engine)


# ✅ Dependency to get a database session
# This ensures each request gets a fresh DB session, and it is closed after use
def get_db():
    db = database.SessionaLocal()
    try:
        yield db
    finally:
        db.close()


# ✅ Root endpoint — just returns a welcome message
@app.get("/")
def home():
    return "Welcome"


# ✅ GET all blogs from the database
@app.get("/blog")
def getall(db: Session = Depends(get_db)):
    # Query using .all() to fetch all rows
    blogs = db.query(models.Blog).all()
    return blogs


# ✅ GET a specific blog by its ID
@app.get("/blog/{id}", status_code=200)
def getBlogById(id: int, response: Response, db: Session = Depends(get_db)):
    # Method 1 (Preferred): Using .filter() and .first()
    blog = db.query(models.Blog).filter(models.Blog.id == id).first()

    # Method 2 (Alternative): Using .filter_by()
    # blog = db.query(models.Blog).filter_by(id=id).first()

    if not blog:
        # Raise HTTP 404 if not found
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Blog with the id {id} is not available"
        )
    return blog


# ✅ DELETE a blog by ID
@app.delete("/blog/{id}", status_code=status.HTTP_204_NO_CONTENT)
def deletePost(id: int, response: Response, db: Session = Depends(get_db)):
    # delete() returns number of rows affected
    blog = db.query(models.Blog).filter(models.Blog.id ==
                                        id).delete(synchronize_session=False)
    db.commit()

    if not blog:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Blog with the id {id} is not available"
        )
    # No content to return (204), so just return nothing


# ✅ UPDATE a blog by ID
@app.put("/blog/{id}", status_code=status.HTTP_202_ACCEPTED)
def updatePost(id: int, request: schemas.Blog, db: Session = Depends(get_db)):
    # Method 1: Using request.model_dump() (pydantic v2)
    updated_rows = db.query(models.Blog).filter(
        models.Blog.id == id).update(request.model_dump())

    # Method 2 (Alternative): Use .filter_by() and update manually
    # blog = db.query(models.Blog).filter_by(id=id).first()
    # if blog:
    #     blog.title = request.title
    #     blog.body = request.body
    #     db.commit()
    #     return {"message": "Updated"}

    db.commit()

    if not updated_rows:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Blog with the id {id} is not available"
        )
    return {"message": "Blog updated successfully"}


# ✅ POST a new blog
@app.post("/blog", status_code=status.HTTP_201_CREATED)
def create(request: schemas.Blog, db: Session = Depends(get_db)):
    # Create a new instance of Blog model from request data
    new_blog = models.Blog(title=request.title, body=request.body)

    db.add(new_blog)         # Add to session
    db.commit()              # Commit transaction
    db.refresh(new_blog)     # Refresh instance with new ID
    return new_blog
