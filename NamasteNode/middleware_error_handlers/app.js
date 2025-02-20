import express from "express";

const app = express();

//middleware order (wrong)
/*
app.use("/",(req,res)=>{
    res.send("Hello form server");
})

app.use("/getUser",(req,res)=>{
    res.send("Here is user List");
})
 */

//as the order matter so in this case the first wildcard / will be matched and we will always get the 
//response for the default route which is /


//middleware order (correct)
/*
app.use("/getUser",(req,res,next)=>{
    res.send("Here is user List");
    //next();
})
app.use("/",(req,res)=>{
    res.send("Hello form server");
})
*/
//now this is workign fine wehn we are hitting any route then first it will be mactched and resposen is send

//error handling
app.use("/",(err,req,res,next)=>{
   if(err){
    res.status(500).send("Something went wrong in teh server!")
   }
})

app.use("/getUser",(req,res)=>{
    //try {
        throw new Error("Hello error");
    //} catch (err) {
      //  console.log(err)
       // res.status(500).send(err.message)
   // }
})

app.use("/",(err,req,res,next)=>{
    if(err){
     res.status(500).send("Something went wrong in teh server!")
    }
 })
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
