// // Problem Statement

// // Given an array of integers and a target value, return the indices of the two numbers such that they add up to
// //  the target.
// // Assume exactly one solution exists and the same element may not be reused.

// // Example
// // arr = [2, 7, 11, 15], target = 9
// // Output: [0, 1]  // since 2 + 7 = 9

// //  Solution 1

// const arr = [2, 7, 11, 15];
// const target = 9;

// export const twoSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };
// console.log(`Two Sum `, twoSum(arr, target));

// export const optimizedTwoSum = (arr, target) => {
//   const map = {}; //  store index:store
//   for (let i = 0; i < arr.length; i++) {
//     let needed = target - arr[i];
//     if (map[needed] !== undefined) {
//       return [map[needed], i];
//     }
//     map[arr[i]] = i;
//   }
//   return [];
// };
// console.log("Optimize TwoSum", optimizedTwoSum(arr, target));

// // Problem Statement

// // Given an array of integers and a target value, return the indices of the two numbers such that they add up to
// //  the target.
// // Assume exactly one solution exists and the same element may not be reused.

// // Example
// // arr = [2, 7, 11, 15], target = 9
// // Output: [0, 1]  // since 2 + 7 = 9

// //  Solution 1

// const arr = [2, 7, 11, 15];
// const target = 9;

// export const twoSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };
// console.log(`Two Sum `, twoSum(arr, target));

// export const optimizedTwoSum = (arr, target) => {
//   const map = {}; //  store index:store
//   for (let i = 0; i < arr.length; i++) {
//     let needed = target - arr[i];
//     if (map[needed] !== undefined) {
//       return [map[needed], i];
//     }
//     map[arr[i]] = i;
//   }
//   return [];
// };
// console.log("Optimize TwoSum", optimizedTwoSum(arr, target));
