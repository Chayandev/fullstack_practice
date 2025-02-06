const express = require("express");

const app = express();

app.use("/second",(req, res, next) => {
  console.log("This is the second middleware");
  res.send("Hello form Second Middleware");
});

app.use("/user",(req,res,next)=>{
    console.log("user middleware")
    res.send("Hello form the user middleware");
})

app.use("/",(req, res, next) => {
  console.log("This is the initial middleware");
   res.send("Hello form Initial Middleware");
 
});

app.listen(5000);


/******

Key notes:

When creating the express server and creating middleware to handle to give diffrent 
response we always need to mention thsose form top to bottom , as in express code executes form 
top to bottom and when one middleware do next(), that means the next middle ware will not be executed 

How It Works:
If a request is made to http://localhost:5000/second, it matches the first middleware (app.use("/second")), and:
"This is the second middleware" is logged.
"Hello from Second Middleware" is sent as a response.
Execution stops because res.send() is called.

If a request is made to http://localhost:5000/, it matches app.use("/"), and:
"This is the initial middleware" is logged.
"Hello from Initial Middleware" is sent as a response.
next() is called, but since there are no more middlewares for /, nothing further happens.


**********/