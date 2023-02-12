// https://m.runoob.com/jsref/jsref-map.html

interface Array<T> {
  selfMap<U>(
    this: Array<T>,
    func: (item: T, index: number, a: Array<T>) => U,
    context?: unknown
  ): U[];
  selfReduce<U>(
    func: (prev: U, next: T, index: number, arr: T[]) => U,
    init?: any
  ): U;
}

/**
 * @param func 函数，包含三个参数(item, index, arr)，arr为当前的遍历的arr
 * @param context 回调函数func中的this指向
 */
Array.prototype.selfMap = function (func, context) {
  const arr = this;
  return arr.reduce((prev, next, index, a) => {
    prev.push(func.call(context, next, index, a));
    return prev;
  }, []);
};
interface Array<T> {
  selfMap<U>(
    this: Array<T>,
    func: (item: T, index: number, a: Array<T>) => U,
    context?: unknown
  ): U[];
}

const arr = [1, 2, 3, 4];
const context = 3;

const result = arr.selfMap((item: number, index, a) => {
  console.log('item', item);
  console.log('index', index);
  console.log('a', a);
  return item + context;
}, context);

console.log(result);

var arr = [1, 2, 3, 4];
var a = 3;

var result = arr.selfMap(function (item, index, arr) {
  return item + this;
}, a);
console.log(result);

/**
 * 实现一个reduce函数
 */
Array.prototype.selfReduce = function (func, init) {
  const arr = this;
  let prev = init;
  let index = 0;
  if (init === undefined) {
    prev = arr[0];
    index = 1;
  }
  for (; index < arr.length; index++) {
    prev = func(prev, arr[index], index, arr);
  }
  return prev;
};

var arr2 = [1, 2, 5, 50, 3];
var add1 = arr2.selfReduce(function (prev: number, cur, idx, src) {
  return prev + cur;
}, 100);
var add2 = arr2.selfReduce(function (prev: number, cur, idx, src) {
  return prev + cur;
});
console.log(add1);
console.log(add2);
