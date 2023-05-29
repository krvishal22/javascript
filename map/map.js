// Polyfill for map

// map is used in array so to replicate map we need our customMap which can be access by any array

function arrayMethod() {
  return "hello";
}
Array.prototype.arrayProperties = arrayMethod;
let arr = [1, 2, 3, 4, 5];
console.log(arr.arrayProperties()); // any array will have access to arrayProperties


// Custom Map implementation
function customMapMethod(cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
}

Array.prototype.customMap = customMapMethod;


// this is the operation which we want to be done for each array element
const cb = (item) => {
  return item * 2;
};
console.log(arr.customMap(cb));