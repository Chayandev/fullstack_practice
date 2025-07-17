import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

const corsOptions={
  origin:"http://127.0.0.1:5500"
}

app.use(express.json());
app.use(cors(corsOptions));

const myLogger = (req, res, next) => {
  console.log(`Request received: ${req.method} ${req.path}`);
  next(); // Pass control to the next middleware or route handlerl̥
};

// app.use(myLogger);

// setInterval(()=>{
//     console.log("Hello")
// },100);

// app.get("/user",(req,res)=>{
//     res.send("User Data");
// })

// app.post("/user",(req,res)=>{
//     res.json({recived:req.body});
// })

app.get("/search",(req,res)=>{
    console.log(req.query.keywords);
     res.json({ message: "Received", query: req.query });
})

app.post("/comment",(req,res)=>{
  console.log(req.body.comment);
  res.json({message:"Comment Added",commnet:req.body.comment});
})

app.use("/", (req, res) => {
  res.send("Hello Server");
});
app.listen(PORT, () => {
  console.log("Server is listning on post 3000");
});
