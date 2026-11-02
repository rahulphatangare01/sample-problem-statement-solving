// Problem Statement: Character Frequency in a Sentence (No Built-in Methods)

//Problem:
//Write a function charFrequency(str) that returns an object showing how many times each character
//  appears in the given sentence.

// Input: "hello"
//Output:{  h: 1,  e: 1,  l: 2,  o: 1}

let str = "hello world";

export const charFrequency = (str) => {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === " ") continue;
    if (freq[ch] === undefined) {
      freq[ch] = 1;
    } else {
      freq[ch] += 1;
    }
  }
  return freq;
};
console.log(`Character Frequency : ${str} to: ${charFrequency(str)}`);
