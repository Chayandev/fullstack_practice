//anonymous function

// the fucon which dont have name that is anonymous fucntion


function caculate(a,b,callback){
    let sa=callback(a)
    let sb=callback(b);

    return a+b;
}
caculate(2,3,function(n){
    return n * n;
});  //anonymous square impelementation


//commmon async funcitons
// setTimeout , fs.readFIle, Fetch - to fetch some data  end point

const fs= require("fs");// filesystem module
const { resolve } = require("path");

fs.readFile("a.txt",'utf-8',function(err,data){
   console.log(data);
});

console.log("hi there");


/*
  ****
  Event Loop :- Whenre There is any asynchnous call in the code , the event loop's job is to
  check everytime that any asynchnous fucntion got finished and come in callback Queue or not if 
  there is any fucntion in the callback queue then that will be puted in call stack when js thead is free

  ******
   
  ** the use of call back is in the async programin or fucntion not in sync .

*/



/*

***
*Promises :- it is just a class that makes callbacks and async fucntions slightly more readable,  whenver u create it you need
 to pass in a fucntion as first argument which has resolve as the first argument
//ugly way to create asynchronous fucntion
function myReadFile(cb){
    fs.readFile("a.txt","utf-8",function(err,data{}){
        cb(data);
    })
}

function onDone(data){
    console.log(data);
}

myReadFile(onDone);



//cleaner way to do this
function myReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}

myReadFile().tehn(onDone);

/// promise will be return synchnously but the data will be only returned asynchronouslly 
*/
function myReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}

myReadFile().then(onDone);


//async await

function func(){
    let p = new Promise(function(resolve){
        setTimeout(() => {
            resolve("Hi there");
        }, 1000);
    });
    return p;
};

async function main(){
    let value = await func()  // if i dont write the await then this will only get the promise
    // this means just wait , thread will be waiting here untill complete the promise.
    console.log(value);
}

main();