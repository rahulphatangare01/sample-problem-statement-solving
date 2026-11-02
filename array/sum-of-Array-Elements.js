//Problem Statement:  Sum of Array Elements

// Problem 1:
// Given an array of numbers, your task is to calculate and return the sum of all the elements present in the array.
// Solve this without using built-in methods like reduce().

// Example
// Input : [4, 7, 1, 3]
// Output : 15

let arr = [2, 4, 6, 8];
export const SumOFArr = (arr) => {
  if (arr.length === 0) return null;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(`Sum of Array : ${arr}: Sum: ${SumOFArr(arr)}`);
