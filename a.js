// 写一个函数实现以下数据转换：
// {a: {b: {c:1}}, d:[1,2]}
// 转换成：
// {'a.b.c': 1,  'd[0]':1, 'd[1]':2}

function func(param) {
  var temp = {};
  function loop(obj, str) {
    if (typeof obj !== 'object' || obj === null) {
      temp[str] = obj;
    } else if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        loop(item, `${str}[${index}]`);
      });
    } else {
      for (var key in obj) {
        loop(obj[key], `${str}${str ? '.' : ''}${key}`);
      }
    }
  }
  loop(param, '');
  return temp;
}

console.log(func({ a: { b: { c: 1 } }, d: [1, 2] }));
console.log(func({ a: { b: { c: 1 } }, d: [{ e: 1 }, 2] }));
