/* leetcode question no - 242 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original 
letters exactly once. */

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const firstString = new Array(26).fill(0);
  const secondString = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    firstString[s.codePointAt(i) - 97]++;
    secondString[t.codePointAt(i) - 97]++;
  }
  for (let i = 0; i < 26; i++) {
    if (firstString[i] !== secondString[i]) return false;
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "bat"));
