//callback fucntion 

const { resolve } = require("path");


/**
 * async:Js is single threaded so dont have acess to everything imidiately
 *  there are some taks it need to wait for
 * 
 * some async functions:-
 * Reading a file
 * sending network request
 * setTimeOut( )
 */
/*
in case of the async fucntion call js will do other work ,
and when the call is maded or done that will be esecuted 
in that case here the event loop pales a big role , the event l
oop will continueeously chekc the callback queue to ge thte fucntion
which is finished after its async call and after that will go to the 
call back queue and then event loop will take it to the callstack to 
being exxecuted
*/



//promie :- just a sysntactical sugar to the cal back functionc all

function promisifiedMyOwnSetTimeOut(duration){
     const p = new Promise(function(resolve){
         setTimeout(resolve,duration);
    });
     return p;
}

const ans=promisifiedMyOwnSetTimeOut(1000);
ans.then(function(){
     console.log("Timeout is done!");
});

