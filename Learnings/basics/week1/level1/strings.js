

function findIndexOf(str,target){
    console.log("Index",str.indexOf(target));  //return the index of first cahrater of the taget it find form the given string 
    console.log("lastIndex",str.lastIndexOf(target));   //if there is multiple target found it will return the last index of the target  

}
findIndexOf("Chayandev Bera Bera","Bera");  

//str.length not a function

function getSlice(str,start,end){
  console.log("slice",str.slice(start,end)); //not inclue the last index 
  console.log("subtstr",str.substr(start,end));  //this substr is depricated the last one is hte lenght
}

getSlice("Chayandev Bera",2,3)

//replace the string

const str="Hello js"
console.log(str.replace("Hello","Holla"));  //if not found the string to replace it will just return as it was

//split :- split hte string with a delimeter

const value="Im learnign fullstask and cyber sec"
//suppose the task is tho ge the words 
const words=value.split(" ") //it will split the senetenece with the delimeter " "

const words1=value.split(",")  //if hte deleimeter is no found then it will just return the same
const words2=value.split("a") 

console.log(value);
console.log(words);
console.log(words1);
console.log(words2);


// Basicaly spli will omi thte delimeter and separate the words in string

//trrim 

const value1="    Chayan    " 

console.log(value1.trim())   //to trimt eh extra sapce in beignging or end


