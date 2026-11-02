// Problem Statement: Find Minimum Number in an Array

// Problem
// Given an array of numbers, your task is to find and return the smallest (minimum) value in the array.
// You must solve this without using built-in methods like Math.min().

//  Example
// Input : [8, 3, 12, 1, 9]
// Output: 1

const arr = [3, 1, 9, 4, 7];

export const findMinValue = (arr) => {
  if (arr.length === 0) return null;

  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log(`Minimum Value in Array ${arr}: min Value : ${findMinValue(arr)}`);
