/* leetcode question no-1431 
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of 
candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, 
they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies. 

Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
*/

var kidsWithCandies = function (candies, extraCandies) {
  const maxValue = Math.max(...candies);
  const result = candies.reduce((acc, item) => {
    if (item + extraCandies >= maxValue) acc.push(true);
    else acc.push(false);
    return acc;
  }, []);
  return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
