// Problem Statement :Find the Longest Word in a Sentence

// Problem :
// Given a sentence (a string containing multiple words), your task is to find and return the longest word in the sentence.
// A word is defined as characters separated by spaces.
// If two words have the same maximum length, return the first one.

// Example: 1
// Input : "I love programming"
// output : "programming"

// Example:2
//Input :"The quick brown fox jumped over the lazy dog"
// Output :"jumped"

let str = "I love programming";

export const longestWords = (str) => {
  let currentWord = "";
  let longestWord = "";

  for (let i = 0; i < str.length; i++) {
    currentWord += str[i];
    if (str[i] === " " || i === str.length - 1) {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = " ";
    }
  }
  return longestWord;
};

console.log(`Longest Word in sentese: ${str} to ${longestWords(str)}`);
