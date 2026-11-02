// Problem Statement

// Write a function reverseString(str) that returns a new string with the characters in reverse order.

// Example

// Input :  "hello"
// Output : "olleh"
const arr = "hello";
export const reverseString = (str) => {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

console.log("Reverse String", arr, "to", reverseString(arr));
