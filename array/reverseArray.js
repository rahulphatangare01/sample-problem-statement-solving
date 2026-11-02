// Problem statement.

//Write a function reverseArray(arr) that takes an array of numbers and returns a new array containing the same elements but in reverse order.

// Example
// Input =  [10, 20, 30, 40, 50]
// Output =  [50, 40, 30, 20, 10]
const arr = [2, 7, 11, 15];

export const reverseArray = (arr) => {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse[reverse.length] = arr[i];
  }
  return reverse;
};

console.log("Reverse Array :", arr, "to:", reverseArray(arr));
