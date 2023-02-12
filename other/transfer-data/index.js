// 写一个函数实现以下数据转换：
// {a: {b: {c:1}}, d:[1,2]}
// 转换成：
// {'a.b.c': 1,  'd[0]':1, 'd[1]':2}
function swap(obj) {
  var result = {};
  for (var key in obj) {
    loop(obj, key, key, result);
  }
  console.log(result);
}

function loop(obj, key, str, result) {
  if (typeof obj[key] !== 'object' || obj[key] === null) {
    result[str] = obj[key];
  } else if (Array.isArray(obj[key])) {
    obj[key].forEach((item, index) => {
      loop(obj[key], index, `${str}[${index}]`, result);
    });
  } else {
    for (var k in obj[key]) {
      loop(obj[key], k, `${str}.${k}`, result);
    }
  }
}
swap({ a: { b: { c: 1 } }, d: [1, 2] });
