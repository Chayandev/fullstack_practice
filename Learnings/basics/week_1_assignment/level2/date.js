let currentDate=new Date();



console.log(currentDate.getDate());  // it will just return the day
console.log(currentDate.getDay());
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()+1);   // this basicaly assume the month form 0th so to get the exact we need to add 1


//calculate the time taking to run a fucntion

let beforeRun=new Date();
console.log(beforeRun.getTime());
function runCOde(){
     let a =0;
     for(let i=0;i<10000;i++){
        a=a+i;
     }
     
}
let afterRun=new Date();
console.log(afterRun.getTime());

console.log(afterRun-beforeRun) //give the time taken a fucntio to run in ms
