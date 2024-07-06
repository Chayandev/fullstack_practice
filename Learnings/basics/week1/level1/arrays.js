const arr = [4, 5, 6, 6, 8]

arr.push(3);  //to push value at end
console.log(arr);
arr.pop()  //to pop value form the end
console.log(arr);
arr.shift(); //to pop value form the bigining
console.log(arr);
arr.unshift(4);  //to push a new value in initial
console.log(arr);

const arr2=[2,3,4,5,6]
console.log(arr.concat(arr2)); //to concate array , it will return a new array


arr.forEach(Element=>{
    console.log(Element)
})

function logThings(str){
    console.log(str,"is a number");
}

arr.forEach(logThings);


//map,filter,find sort

