const express=require('express')
const fs =require('fs')
const app= express();

app.get('/files/:fileName',(req,res)=>{
    const name = req.params.fileName;
    console.log(name)
    fs.readFile(name,'utf-8',(err,data)=>{
        res.json({data})
    })
    //res.json({})
})

app.listen(3000)