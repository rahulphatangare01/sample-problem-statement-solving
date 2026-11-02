// Problem Statement:
//Write a function isPalindrome(str) that returns:
//true if the given string is a palindrome
// false otherwise
// A palindrome is a string that reads the same backward and forward.

//  Example 1
// Input : "level"
// Output : true

// Example 2
// Input :"hello"
// Output : false
const str = "level";
export const checkPalindrome = (str) => {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(str, "Is Palindrome :", checkPalindrome(str));
