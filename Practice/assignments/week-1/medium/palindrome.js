/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove spaces, punctuation marks (except underscores), and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9\s_]/g, "").toLowerCase();

  // Check if the cleaned string is a palindrome
  for (let i = 0, j = cleanStr.length - 1; i <= j; i++, j--) {
      if (cleanStr[i] !== cleanStr[j]) {
          return false;
      }
  }

  return true;
}

module.exports = isPalindrome;
