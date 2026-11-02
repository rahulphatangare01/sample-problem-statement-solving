// Problem Statement: Average of Array Elements

// Problem

// Given an array of numbers, your task is to calculate the average value of the elements in the array.
// The average is computed as:
// average = (sum of elements) / (number of elements)

// Example
// Input: [5, 10, 15]
// Output :10

let arr = [2, 4, 6, 8];
export const averageOfArr = (arr) => {
  if (arr.length === 0) return null;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
};

console.log(`Average of Array : ${arr} of avarage is ${averageOfArr(arr)}`);
