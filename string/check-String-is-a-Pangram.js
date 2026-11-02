// Problem Statement: Check if a String is a Pangram

// Problem :

// A pangram is a sentence that contains all 26 letters of the English alphabet at least once.
// Your task is to write a program that checks whether a given string is a pangram.
// You must ignore uppercase/lowercase differences, but only alphabet letters matter (ignore numbers, spaces, punctuation).

// Example:1
// Input : "The quick brown fox jumps over the lazy dog"
// Output : true

// Example:2
// Input : "hello world"
// Output : false

let str = "The quick brown fox jumps over the lazy dog";
export const isPanagram = (str) => {
  str = str.toLowerCase();
  let seen = new Array(26).fill(false);
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      let index = code - 97;

      if (!seen[index]) {
        seen[index] = true;
        total++;
      }
    }
  }
  return total === 26;
};

// console.log(`Check is Panagram:  ${str} to ${isPanagram(str)} `);
