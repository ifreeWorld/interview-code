/**
 * 给定一个字符串， 比如lensProp(a, obj) 返回 'obj.a'的值
 * @param {*} lens 
 * @param {*} obj 
 */
function lensProp(lens, obj) {
  var arr = lens.split('.')
  var result = arr.reduce((prev, cur) => {
    if (prev === undefined) {
      return undefined
    } else {
      return prev[cur]
    }
  }, obj)
  return result
}

const a = lensProp("a", { a: 1 }); // 1
const b = lensProp("b", { a: 1 }); // undefined
const c = lensProp("a.b", { a: { b: "c" } }); // c
const d = lensProp("a.b.c.d.e.f", { a: { b: "c" } }); // undefined

console.log(a);
console.log(b);
console.log(c);
console.log(d);
