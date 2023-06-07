let n = 5;
let arr = [];
let i = 0;
while (i < n) {
  arr.push(i + 1);
  i++;
}

console.log(
  arr.reduce((acc, item) => {
    if (item % 2 === 0) {
      acc.push(item * item);
    }
    return acc;
  }, [])
);
