// // sum of two dupicate

// 4. Contains Duplicate (217)
// Problem: Return true if any number appears more than once.

// 📘 Logic:
// Use a Set to track seen numbers.

// 🧪 Input:
// [1,2,3,1]

// 📤 Output:
// true

function duplicate(num) {
  const seen = new Set();
  for (let nums of num) {
    if (seen.has(nums)) {
      return true;
    }
    seen.add(nums);
  }
  return false;
}
console.log("the sum of duplicate ", duplicate([1, 2, 3, 6, 4]));

// ✅ 1. Two Sum
// Problem: Find two numbers that add up to a target.

// 📘 Logic:
// Use a hash map to store numbers and their indices as you iterate.

// 🧪 Input:
// nums = [2,7,11,15], target = 9

// 📤 Output:
// [0,1]

// js
// Copy
// Edit

function hasTarget(num, target) {
  const map = new Map();
  for (let i = 0; i < num.length; i++) {
    let differ = target - num[i];
    if (map.has(differ)) {
      return [map.get(differ), i];
    }
    map.set(num[i], i);
  }
  return [];
}
console.log("the sum of duplicate ", hasTarget([1, 2, 3, 6, 4], 7));

// ✅ 2. Best Time to Buy and Sell Stock (121)
// Problem: Max profit by buying and selling once.

// 📘 Logic:
// Track minimum price so far and max profit on each step.

// 🧪 Input:
// [7,1,5,3,6,4]

// 📤 Output:
// 5

function profitMax(price) {
  let min = price[0];
  let profit = 0;
  for (let i = 1; i < price.length; i++) {
    profit = Math.max(profit, price[i] - min);
    min = Math.min(min, price[i]);
  }
  return profit;
}
console.log("the profit  ", profitMax([1, 2, 3, 6, 4]));

// ✅ 3. Merge Sorted Array (88)
// Problem: Merge two sorted arrays into one in-place.

// 📘 Logic:
// Start merging from the end.

// 🧪 Input:
// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

// 📤 Output:
// [1,2,2,3,5,6]

function mergeList(num1, m, num2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && num1[i] > num2[j]) {
      num1[k--] = num1[i--];
    } else num1[k--] = num2[j--];
  }
  return num1;
  // return ;
}

console.log("the merge list  ", mergeList([1, 4, 6, 9], 4, [2, 5, 8], 3));
// let nums1 = [1,2,3,0,0,0];
// let nums2 = [2,5,6];
// mergeList(nums1, 3, nums2, 3);
// console.log(nums1); // Output: [1,2,2,3,5,6]

// 4. Contains Duplicate (217)
// Problem: Return true if any number appears more than once.

// 📘 Logic:
// Use a Set to track seen numbers.

// 🧪 Input:
// [1,2,3,1]

// 📤 Output:
// true

function containDuplicate(num) {
  const seen = new Set();
  for (let nums of num) {
    if (seen.has(nums)) return true;
    else seen.add(nums);
  }
  return false;
}

console.log(containDuplicate([1, 2, 3, 1])); // Output: true

// 5. Product of Array Except Self (238)
// Problem: Return product of array except self without using division.

// 📘 Logic:
// Calculate left and right products separately.

// 🧪 Input:
// [1,2,3,4]

// 📤 Output:
// [24,12,8,6]

function productSelf(num) {
  let res = Array(num.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 0; i < num.length; i++) {
    res[i] *= left;
    left *= num[i];
  }
  for (let i = num.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= num[i];
  }
  return res;
}
console.log(productSelf([1,2,3,4])); // Output: true

// ✅ 6. Maximum Subarray (53)
// Problem: Find contiguous subarray with maximum sum.

// 📘 Logic:
// Use Kadane’s Algorithm to track current and max sum.

// 🧪 Input:
// [-2,1,-3,4,-1,2,1,-5,4]

// 📤 Output:
// 6

function currentMax(num) {
  let max = num[0];
  let curr = num[0];
  for (let i = 0; i < num.length; i++) {
    curr = Math.max(num[i], num[i] + curr);
    max = Math.max(max, curr);
  }
  return max;
}

console.log(currentMax([-4, -1, 5, -3, 6, 2, 5])); // Output: true

// 7. 3Sum (15)
// Problem: Find all unique triplets that sum to 0.

// 📘 Logic:
// Sort and use two-pointer approach.

// 🧪 Input:
// [-1,0,1,2,-1,-4]

// 📤 Output:
// [[-1,-1,2],[-1,0,1]]

function triplet(num) {
  num.sort((a, b) => a - b);
  let resullt = [];
  for (let i = 0; i < num.length - 2; i++) {
    if (i > 0 && num[i] === num[i - 1]) continue;
    let left = i + 1;
    let right = num.length - 1;
    while (left < right) {
      let sum = num[left] + num[right] + num[i];
      if (sum === 0) {
        resullt.push([num[left], num[right], num[i]]);
        left++;
        right--;
        while (left < right && num[left] === num[left - 1]) left++;
        while (left < right && num[right] === num[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return resullt;
}

// console.log(triplet)

console.log("Triplets that sum to 0:", triplet([-1, 0, 1, 2, -1, -4]));

// 8. Merge Intervals (56)
// Problem: Merge overlapping intervals.

// 📘 Logic:
// Sort by start and merge if current overlaps previous.

// 🧪 Input:
// [[1,3],[2,6],[8,10],[15,18]]

// 📤 Output:
// [[1,6],[8,10],[15,18]]

function mergeOverlap(num) {
  num.sort((a, b) => a[0] - b[0]);
  let res = [num[0]];
  for (let i = 1; i < num.length; i++) {
    let prev = res[res.length - 1];
    if (num[i][0] <= prev[1]) {
      prev[1] = Math.max(prev[1], num[i][1]);
    } else {
      res.push(num[i]);
    }
  }
  return res;
}

console.log(
  "merging",
  mergeOverlap([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // Output: [[1,6],[8,10],[15,18]]

// 9. Container With Most Water (11)
// Problem: Find two lines that together with x-axis form container with most water.

// 📘 Logic:
// Use two-pointer approach from both ends.

// 🧪 Input:
// [1,8,6,2,5,4,8,3,7]

// 📤 Output:
// 49

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

console.log("Max Area", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49

// ✅ 10. Rotate Image (48)
// Problem: Rotate matrix by 90 degrees clockwise in-place.

// 📘 Logic:
// First transpose, then reverse each row.

// 🧪 Input:
// [[1,2,3],[4,5,6],[7,8,9]]

// 📤 Output:
// [[7,4,1],[8,5,2],[9,6,3]]

function Rotate(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let row of matrix) {
    row.reverse();
  }
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
Rotate(matrix);
console.log(matrix); // Output: [[7,4,1],[8,5,2],[9,6,3]]


// ✅ Problem Statement:
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// 📌 Anagram: A word or phrase formed by rearranging the letters of another.
// ➡️ Example: s = "listen", t = "silent" → ✅ True


function Anagram(s,t){
  if(s.length!==t.length){
    return false;
  }
  return s.split('').sort().join('')==t.split('').sort().join('');
}
const s = "listen";
const t = "silent";

console.log(`Is "${t}" an anagram of "${s}"? →`, Anagram(s, t)); // Output: true
