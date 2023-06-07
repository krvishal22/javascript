/* leetcode question no-1512  
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.


Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed. */

var numIdenticalPairs = function (nums) {
  let eachNumberCount = nums.reduce((acc, num) => {
    if (acc[num]) acc[num]++;
    else acc[num] = 1;
    return acc;
  }, {});
  let res = 0;
  for (const [, value] of Object.entries(eachNumberCount)) {
    if (value !== 1) {
      res += (value * (value - 1)) / 2;
    }
  }
  return res;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
