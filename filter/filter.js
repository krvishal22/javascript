// polyfill for filter
function customFilterMethod(filterCb) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      if (filterCb(this[i])) res.push(this[i]);
    }
    return res;
  }
  Array.prototype.cutomfilter = customFilterMethod;
  
  
  const filterCb = (item) => {
    return !(item % 2);
  };
  console.log(arr.cutomfilter(filterCb));