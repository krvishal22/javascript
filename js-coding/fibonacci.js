function fibonacci(num) {
  let firstValue = 0;
  let secondValue = 1;
  let temp;
  while (num) {
    console.log(firstValue);
    temp = firstValue;
    firstValue = secondValue;
    secondValue = temp + secondValue;
    num--;
  }
}
fibonacci(8);


console.log("------------------------------");


function recursiveFibonacci(num) {
  if (num === 0 || num === 1) return num;
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}
function printFibonacciSeries(num) {
  if (num > 0) console.log("0");
  if (num > 1) console.log("1");
  for (let i = 2; i < num; i++) {
    console.log(recursiveFibonacci(i));
  }
}
printFibonacciSeries(8);
