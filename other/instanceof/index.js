function selfinstanceof(obj, func) {
  if (typeof obj !== 'object') {
    return false;
  }
  var proto = obj.__proto__;
  while (true) {
    if (proto === null) {
      return false;
    }
    if (proto === func.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
}

function A() {}

var a = new A();
var b = {};
console.log(selfinstanceof(a, A));
console.log(selfinstanceof(b, A));

console.log(selfinstanceof(() => {}, Object));
console.log((() => {}) instanceof Object);
