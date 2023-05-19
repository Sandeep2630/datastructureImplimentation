// let str = "leetcode";
// function nonRepeatingStr(s) {
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     map.set(str[i], map.get(str[i]) + 1 || 1);
//   }
//   console.log(map);
//   for (let i = 0; i < s.length; i++) {
//     if (map.get(str[i]) === 1) return i;
//   }
//   return -1;
// }
// console.log(nonRepeatingStr(str));

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

function intersection(arr1, arr2) {
  const map = new Map();
  const intersection = [];

  // Add elements of the first array to the Map
  arr1.forEach((element) => {
    map.set(element, 1);
  });

  // Check elements of the second array in the Map
  arr2.forEach((element) => {
    if (map.has(element)) {
      intersection.push(element);
    }
  });

  return intersection;
}
console.log(intersection(nums1, nums2));
