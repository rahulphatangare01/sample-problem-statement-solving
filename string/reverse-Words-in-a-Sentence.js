// Problem Statement: Reverse Words in a Sentence (No Built-in Methods)
//Problem:
// Write a function reverseWords(sentence) that returns a new sentence where the order of words is reversed,
//  but the characters inside each word stay the same.

// Example 1

// Input: "hello world"
// Output: "world hello"

//  Example 2
// Input: "i love javascript"
// Output:"javascript love i"

const str = "hello world";

export const reverseWords = (str) => {
  let word = "";
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      word = str[i] + word;
    } else if (word.length > 0) {
      result += word + " ";
      word = " ";
    }
  }
  if (word.length > 0) {
    result += word;
  }

  return result;
};

console.log(`Reverse Senstense : ${str} to : ${reverseWords(str)}`);
