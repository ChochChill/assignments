/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let str1CharacterArray = Array.from(str1.toLowerCase());
  let str2CharacterArray = Array.from(str2.toLowerCase());

  str1CharacterArray.sort();
  str2CharacterArray.sort();

  for (let i = 0; i < str1CharacterArray.length; i++) {
    if (str1CharacterArray[i] !== str2CharacterArray[i]) {
      return false;
    }
  }
  return true;
}
module.exports = isAnagram;
