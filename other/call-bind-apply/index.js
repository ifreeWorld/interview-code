// bind
Function.prototype.selfBind = function () {
  var self = this;
  var params = arguments;
  var context = params[0];
  var args = Array.prototype.slice.call(params, 1);
  return (...rest) => {
    self.apply(context, args.concat(rest));
  };
};

function test(a, b, c) {
  console.log(a, b, c);
}

test.selfBind(window, 1, 2)(3);

// call
Function.prototype.selfCall = function () {
  var params = arguments;
  var context = params[0];
  var args = Array.prototype.slice.apply(params, [1]);
  var self = this;
  return self.apply(context, args);
};

function test(a, b) {
  console.log(a, b);
  return 3;
}

var a = test.selfCall(window, 1, 2);
console.log(a);

// apply
Function.prototype.selfApply = function () {
  var params = arguments;
  var context = params[0];
  var args = Array.prototype.slice.call(params, 1);
  var self = this;
  return eval(`self.call(context, ${args.join(',')})`);
};

function test(a, b) {
  console.log(a, b);
  return 3;
}

var a = test.selfApply(window, [1, 2]);
console.log(a);
