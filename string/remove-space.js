// Problem Statement  Remove All Spaces From a String (No Built-in Methods)

// Problem:
// Write a function removeSpaces(str) that returns a new string with all spaces removed.

// Example:
// Input: "hello world"
// Output: "helloworld"

let str = "hello world";
export const removeSpaces = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
};

console.log(`Remove Space : ${str} to: ${removeSpaces(str)}`);
