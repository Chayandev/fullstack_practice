/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count=0;
    let vowels=['a','e','i','o','u','A','E','I','O','U'];
  for(e of str) {
      if(vowels.includes(e))
        count++;
    }
   return count;
}
console.log(countVowels("Chayamn"));
module.exports = countVowels;