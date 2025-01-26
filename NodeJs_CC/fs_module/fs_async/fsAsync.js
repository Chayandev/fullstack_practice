/*
fs.writeFile(): Writes data to a file , replacing the file if it already exists.
//! sysntax: fs.writeFiel(path,data,options,callback);
//? path: FIle path to write to.
//? data: Content to write.
//? options: Optional. Specifies encoding('utf8"), mode , or falg.
//? callback: A fucntion with an err parameter
*/


const fs=require("fs");

fs.writeFile("data.txt","This is the aysnc filewrite","utf-8",(err)=>{
 if(err) console.log(err);
 else
 console.log("File saved");
})