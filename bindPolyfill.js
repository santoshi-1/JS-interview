let name = {
  firstName: "Santoshi",
  lastName: "Karuturi",
};

let printMyName = function (message) {
  console.log(this.firstName + " " + this.lastName + " " + message);
};

Function.prototype.myBind = function (...args) {
  // this represents printMyName
  let obj = this;
  return function (...funcArgs) {
    let params = args.slice(1);
    obj.apply(args[0], [...params, ...funcArgs]);
  };
};

let bindFunction = printMyName.myBind(name);
bindFunction("Hello");
