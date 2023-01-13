// 循环引用weakmap做垃圾回收
const map = new WeakMap();
/**
 * 深拷贝
 * @param {*} obj
 */
function cloneDeep(obj) {
  // 不是对象，直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (map.has(obj)) {
    return map.get(obj);
  }
  var result = Array.isArray(obj) ? [] : {};
  map.set(obj, result);
  // 是数组
  if (Array.isArray(obj)) {
    obj.forEach((item) => {
      result.push(cloneDeep(item));
    });
    return result;
  } else {
    // 不是数组，说明是对象
    Object.keys(obj).forEach((key) => {
      result[key] = cloneDeep(obj[key]);
    });
    return result;
  }
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
