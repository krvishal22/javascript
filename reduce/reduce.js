// Polyfill for Reduce

function customReduceMethod(reduceCb, acc) {
  let res = acc;
  for (let i = 0; i < this.length; i++) {
    res = reduceCb(res, this[i]);
  }
  return res;
}
Array.prototype.cutomReduce = customReduceMethod;

const reduceCb = (sum, item) => {
  return (sum += item);
};
console.log(arr.cutomReduce(reduceCb, 0));

// even u can use reduce as a map

const reduceCbAsMap = (obj, item) => {
  obj = [...obj, item * 3];
  return obj;
};
console.log(arr.cutomReduce(reduceCbAsMap, []));
