/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isValid(c) {
  return c >= "a" && c <= "z";
}

function isPalindrome(str) {
  const newstr = str.toLowerCase();
  let l = 0,
    r = newstr.length - 1;
  while (l < r) {
    if (!isValid(newstr[l])) {
      l++;
    } else if (!isValid(newstr[r])) {
      r--;
    } else {
      if (newstr[l] !== newstr[r]) {
        return false;
      }
      l++;
      r--;
    }
  }
  return true;
}

// console.log(isPalindrome("Nan"));

module.exports = isPalindrome;
