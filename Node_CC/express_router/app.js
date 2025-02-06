const express=require("express");
const adminRouter=require("./Routers/admin.js")
const app=express();

// Middleware for parsing JSON data
//app.use(express.json());

// Middleware for parsing URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(adminRouter);

app.use("/",(req,res)=>{
    res.send("<h1>App Router</h1>")
})

app.listen(5000,(req,res)=>{
    console.log("App is listening on PORT:5000")
})


//body-parser got deprecated , express have it now built in