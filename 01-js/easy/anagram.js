/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function areArraysEqual(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((value, index) => value === array2[index])
  );
}

function isAnagram(str1, str2) {
  const charArray1 = str1.toLowerCase().split("");
  charArray1.sort();
  const charArray2 = str2.toLowerCase().split("");
  charArray2.sort();
  return areArraysEqual(charArray1, charArray2);
}

// console.log(isAnagram("hello", "world"));

module.exports = isAnagram;
