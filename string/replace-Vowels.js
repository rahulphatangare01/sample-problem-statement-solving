// Problem Statemet : Replace Vowels with * (no replace, no regex)

// Problem

//Write a program that takes a string as input and returns a new string where every vowel (a, e, i, o, u → both lowercase and uppercase) is replaced with an asterisk *.
// You must not use built-in replace() or any regular expressions.

// Example

// Input: "hello world"
// Output: "h*ll* w*rld"

let str = "hello world";

export const replaceVowels = (str) => {
  let result = "";
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    let isVowels = false;
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        isVowels = true;
        break;
      }
    }
    if (isVowels) {
      result += "*";
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(`Replace Vowels: ${str} to ${replaceVowels(str)}`);
