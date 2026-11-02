// Problem Statement: Check if Two Strings Are Anagrams (No Built-in Methods)

// Problem:
//Write a function isAnagram(str1, str2) that returns:
// true → if both strings are anagrams
// false → otherwise
// Two strings are anagrams if they contain the same characters with the same frequency, but possibly in a different order.

// Example 1
// Input: "listen", "silent"
// Output: true

// Example 2
// Input: "rat", "car"
// Output: false

let str1 = "listen";
let str2 = "silent";
export const checkAnagram = (str1, str2) => {
  let freq = {};

  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];
    if (!freq[ch]) return false;
    freq[ch] -= 1;
  }
  return true;
};

console.log(
  `Check two Word is Anangram : ${str1} & ${str2} :-  ${checkAnagram(
    str1,
    str2
  )}`
);
