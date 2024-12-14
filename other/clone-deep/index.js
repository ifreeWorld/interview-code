var map = new WeakMap();

function cloneDeep(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }
  var result = Array.isArray(obj) ? [] : {};
  if (Array.isArray(obj)) {
    map.set(obj, result);
    obj.forEach((item) => {
      result.push(cloneDeep(item));
    });
  } else {
    map.set(obj, result);
    for (var key in obj) {
      result[key] = cloneDeep(obj[key]);
    }
  }
  return result;
}

const obj1 = {
  b: {
    c: 1,
    e: {
      f: [2, 3],
    },
  },
};
// 存在循环引用
obj1.g = obj1;

const obj2 = cloneDeep(obj1);
console.log('obj1', obj1);
console.log('obj2', obj2);
obj1.b.e.f = [4, 5];
obj1.b.c = {
  g: 2,
};
obj1.g = 3;
console.log('obj1', obj1);
console.log('obj2', obj2);
