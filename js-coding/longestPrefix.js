// Given an array of string find the commmon longest prefix

//DFS Approach
let arr = ["gamble", "gamble", "ga"];
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

// BFS Approach

function longestCommonPrefixModified(arr) {
  let res = "";
  let flag = false;
  let i = 0;
  if(arr.length===1)
    return arr[0];
  while (i < arr[0].length) {
    flag = false;
    for (let j = 1; j < arr.length; j++) {
      if (arr[0][i] !== arr[j][i]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      res = res + arr[0][i];
    } else {
      return res;
    }
    i++;
  }
  return res;
}

let res = longestCommonPrefixModified(arr);
console.log("res", res);