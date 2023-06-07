/* There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, 
return the final value of X after performing all the operations. */

const finalValueAfterOperations = function (operations) {
  const result = operations.reduce((acc, str) => {
    if (str === "X++" || str === "++X") acc = acc + 1;
    else {
      acc = acc - 1;
    }
    return acc;
  }, 0);
  return result;
};


const finalValueAfterOperationsModify = function (operations) {
  const result = operations.reduce((acc, str) => {
    // why to compare whole string 
    if (str[1] === "+") acc += 1;
    else {
      acc -= 1;
    }
    return acc;
  }, 0);
  return result;
};

console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
console.log(finalValueAfterOperationsModify(["X++", "++X", "--X", "X--"]));