/**
 * 实现一个累加器
 * add(1,2)(3).sumOf()
 * add(1)(2,3).sumOf()
 * add(1)(2)(3).sumOf()
 * add(1,2,3).sumOf()
 */
function add(...params: number[]) {
  function _add(...args: number[]) {
    params = params.concat(args);
    return _add;
  }

  _add.sumOf = function () {
    return params.reduce((prev, next) => {
      return prev + next;
    }, 0);
  };
  return _add;
}
console.log(add(2, 3, 4).sumOf());
console.log(add(2)(3, 4).sumOf());
console.log(add(2)(3)(4).sumOf());
console.log(add(2, 3)(4).sumOf());
console.log(add(2, 3, 4, 5).sumOf());
