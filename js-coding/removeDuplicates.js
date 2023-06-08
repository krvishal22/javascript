/* leetcode question no-26
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique 
element appears only once. The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they 
were present in nums initially. The remaining elements of nums are not important as well as the size of nums.

Return k. */

var removeDuplicates = function (nums) {
  let result = nums.reduce((acc, currentValue) => {
    if (nums[acc] !== currentValue) {
      nums[acc + 1] = currentValue;
      acc++;
    }
    return acc;
  }, 0);
  return result + 1;
};

var removeDuplicatesModify = function (nums) {
  let nextIndex = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      nums[nextIndex] = nums[i + 1];
      nextIndex++;
    }
  }
  return nextIndex;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicatesModify([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
