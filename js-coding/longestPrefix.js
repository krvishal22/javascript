// Given an array of string find the commmon longest prefix

let arr = ["gamble", "gamble", "gamble"];
function findPrefixLength(str1, str2) {
  let commonPrefix = "";
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) break;
    else commonPrefix = commonPrefix + str1[i];
  }
  return commonPrefix;
}
const longestCommonPrefix = (arr) => {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res = findPrefixLength(res, arr[i]);
  }
  return res;
};
let ans = longestCommonPrefix(arr);
console.log("res", ans);



// using map or foreach and reduce
