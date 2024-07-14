//;we can pass the js object a string to somewhere else bu to sonver this string to excat object again we need JSON

//Jason.parse(..)  this actully do , that it conver the object string as exact object

const obj={
    name:"Chayan",
    roll:"CSE2021059",
    sec:"CSE-A"
}

//this is the normal object summpose we are passign this object a sstring

// const objStr=`{
//     "name":"Chayan",
//     "roll":"CSE2021059",
//     "sec":"CSE-A"
// }`

//we can achive the saem as above useing JSON.stringify(..)

const user=JSON.stringify(obj);


//no lets convert this to object
userObj=JSON.parse(user);
console.log(user);
console.log(userObj);



