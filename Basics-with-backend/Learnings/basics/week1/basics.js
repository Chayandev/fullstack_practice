// console.log("Hello Js!")

// //console.log(a)


// // const gender=prompt("Enter your Gender:")
// // console.log(gender.toLocaleLowerCase())

// // if(gender.toLowerCase()=="male"){
// //     console.log("Hello male how are you!")
// // }else{
// //     console.log("Hello female how are you!")
// // }


// //

// // let hello = "ahdfh"

// // if (hello == true) {
// //     console.log("true")
// // } else {
// //     console.log("no true")
// // }
// // if (hello == false) {
// //     console.log("False")
// // }
// // else {
// //     console.log("no fasle")
// // }

// let arr = [1, 2, 3, 4, 5, 6, 8];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

// //objects

// const user1={
//     firstname:"Chayandev",
//     lastName:"Bera",
//     gender:"male",

// }

// console.log(user1["gender"])

// //fucntion

// function sum(a,b){
//     return a+b
// }

// const value=sum(8,7);
// console.log(value)

//callbacks
function sum(a, b, functionToCallNext) {
    console.log('functionToCallNext:', functionToCallNext); // Add this line to debug
    let result = a + b;
    functionToCallNext(result);
}

function displayResult(value) {
    console.log(value);
}

sum(1, 2, displayResult); // Outputs: 3


/*settimeout: its a funtion to call a funtion 
after a cirtain duration while im giving to argument
 one is fucntion another is time */
 function hello(){
    console.log("hello")
 }

 setTimeout(hello,3*1000); //it will the fucntion after 3 sec , this is internaly hava a sleep absically for wait 

 /*setInterval is the fucntion which sets the interval after which one fucntion will 
 be called again and again*/

 setInterval(hello,2*1000)

