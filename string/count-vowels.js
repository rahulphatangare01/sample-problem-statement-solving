// Problem Statement - Count Vowels in a String Without Using Built-in Methods.

// Problem:
// Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) present in the given string.

// Example

//Input: "hello"
// Output: 2    // (‘e’, ‘o’)
let str = "hello";
export const countVowels = (str) => {
  let vowels = "a,e,i.o,u";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(`Vowels Count in word : ${str} : count : ${countVowels(str)}`);
