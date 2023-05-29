const arr = [1, 3, 5, 6, 7, 9, 10, 15];

// function binarySearch(arr, val) {
//   let lower = 0;
//   let upper = arr.length - 1;
//   while (lower <= upper) {
//     let middle = Math.floor((lower + upper) / 2);
//     if (val === arr[middle]) return middle;

//     if (val > arr[middle]) {
//       lower = middle + 1;
//     }

//     if (val < arr[middle]) {
//       upper = middle - 1;
//     }
//   }

//   return -1;
// }
// console.log(binarySearch(arr, 7));

// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

//  Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.

// const arr = [1, 2, 3];
// const arr2 = [2, 4];
// function minCommon(arr, arr2) {
//   let i = 0;
//   let j = 0;

//   while (i < arr.length && j < arr2.length) {
//     if (arr[i] === arr[j]) return arr[i];
//   }
// }

// console.log(minCommon());
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// const str = "IV";
// // console.log(str[0]);
// function toRoman(str) {
//   let val = 0;
//   const map = new Map([
//     ["I", 1],
//     ["V", 5],
//     ["X", 10],
//     ["L", 50],
//     ["C", 100],
//     ["D", 500],
//     ["M", 1000],
//   ]);

//   for (let i = 0; i < str.length; i++) {
//     if (map.has(str[i])) {
//       val += map.get(str[i]);
//     }
//   }

//   return val;
// }

// console.log(toRoman(str));

function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let middle = Math.floor(low + (high - low) / 2);
    // console.log(middle);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      high = middle - 1;
    }
    if (target > arr[middle]) {
      low = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 10));
