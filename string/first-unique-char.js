// Problem Statement: First Unique Character (No Built-in Methods)

// Problem:
// Write a function firstUniqueChar(str) that returns the first character in the string that appears only once.
// If no unique character exists, return: null

// Example:
// Input:"leetcode"
// Output:"l"
let str = "leetcode";
export const firstUniqueChar = (str) => {
  let freq = {};

  // loop char
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (freq[ch] === 1) {
      return str[i];
    }
  }
  return null;
};
console.log(`First Unique Cha of ${str}: ${firstUniqueChar(str)}`);
