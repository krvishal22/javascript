// Polyfill for bind

let myInfo = {
  name: "Vishal",
  city: "Bangalore",
};

function callMe(state, country) {
  console.log(
    "Hi! my name is " +
      this.name +
      " and my city is " +
      this.city +
      " and state is " +
      state +
      " and country is " +
      country
  );
}
let callBinded = callMe.bind(myInfo, "Karnataka");
callBinded("India");

function customBindMethod(...args) {
  let fn = this;
  const params = args.slice(1);
  return function (...args2){
    // call cannot be used as it doesn't take array as an parameter and we are not sure about the number of parameter
    fn.apply(args[0], [...params, ...args2]) // fn.apply(obj, params) i.e. we have pull out object
  }
}

Function.prototype.customBind = customBindMethod;
let callBinded2 = callMe.customBind(myInfo, "Karnataka");
callBinded2("India");
