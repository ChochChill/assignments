/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let l = 0;
  let h = str.length - 1;
  // Compares character until they are equal
  while (l <= h) {
    let getAtl = str[l];
    let getAth = str[h];

    // If there is another symbol in left
    // of sentence
    if (!(getAtl >= "a" && getAtl <= "z")) l++;
    // If there is another symbol in right
    // of sentence
    else if (!(getAth >= "a" && getAth <= "z")) h--;
    // If characters are equal
    else if (getAtl == getAth) {
      l++;
      h--;
    }

    // If characters are not equal then
    // sentence is not palindrome
    else return false;
  }

  // Returns true if sentence is palindrome
  return true;
}
module.exports = isPalindrome;
