//Problem Statement : Find Maximum Number in an Array

//  Problem
// Given an array of numbers, your task is to find and return the largest (maximum) value present in the array.
// You must solve the problem without using built-in methods like Math.max().

// 📘 Example
// Input : [3, 17, 9, 25, 14]
// Output : 25

const arr = [3, 1, 9, 4, 7];

export const FindMaxValue = (str) => {
  if (arr.length === 0) return null;

  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(`Maximum Value in Array ${arr}: Max Value: ${FindMaxValue(arr)}`);
