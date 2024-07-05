let obj={
    name:"Chayandev",
    roll:"CSE2021059",
    sec:"CSE-A"
}

let keys=Object.keys(obj);
let values=Object.values(obj);
let entries=Object.entries(obj)   //return all the key-value pair in arrray form;
let hasProperty=obj.hasOwnProperty("title");   //to check if there is a propery of the objext

console.log(keys);
console.log(values);
console.log(entries);
console.log(hasProperty);

//copy object

let newObj=Object.assign({},obj,{course:"Btech"});

console.log(newObj);