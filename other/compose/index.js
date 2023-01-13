// 方法一
function compose(...fns) {
  return (...params) => {
    var result = params;
    for (var i = fns.length - 1; i >= 0; i--) {
      var func = fns[i];
      result = func(result);
    }
    return result;
  };
}

// 方法二
function compose(...arr) {
  return (...params) => {
    return arr.reduceRight((prev, next) => {
      return next(prev);
    }, params);
  };
}

function A(m, n) {
  return m + n + 'a';
}

function B(m, n) {
  return m + n + 'b';
}

function C(m, n) {
  return m + n + 'c';
}

var func = compose(A, B, C);
console.log(func('1', '2'));
