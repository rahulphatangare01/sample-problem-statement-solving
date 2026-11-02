// Problem Statement: Convert to Sentence Case (No Built-in Methods)

// Problem:
// Write a function toSentenceCase(str) that converts a given sentence so that:
// The first character of the sentence becomes uppercase
// All other characters become lowercase

// Input:  "hello world"
// Output: "Hello world"
let str = "hello world";
export const sentenceCase = (str) => {
  let result = "";
  let newWord = true;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === " ") {
      result += ch;
      newWord = true;
    } else if (newWord && ch >= "a" && ch <= "z") {
      let upper = String.fromCharCode(ch.charCodeAt(0) - 32);
      result += upper;
      newWord = false;
    } else {
      result += ch;
      newWord = false;
    }
  }
  return result;
};

console.log(`Sentense Case: ${str} to ${sentenceCase(str)}`);
