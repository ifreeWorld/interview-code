const weakmap = new WeakMap();
function cloneDeep(obj: unknown): unknown {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    if (weakmap.has(obj)) {
      return weakmap.get(obj);
    }
    const result: unknown[] = [];
    weakmap.set(obj, result);
    obj.forEach((item: unknown) => {
      result.push(cloneDeep(item));
    });
    return result;
  } else {
    if (weakmap.has(obj)) {
      return weakmap.get(obj);
    }
    const result: Record<string, any> = {};
    weakmap.set(obj, result);
    Object.keys(obj).forEach((key) => {
      const v = (obj as Record<string, unknown>)[key];
      result[key] = cloneDeep(v);
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
// @ts-ignore
obj1.g = obj1;

const obj2 = cloneDeep(obj1);
console.log('obj1', obj1);
console.log('obj2', obj2);
obj1.b.e.f = [4, 5];
// @ts-ignore
obj1.b.c = {
  g: 2,
};
// @ts-ignore
obj1.g = 3;
console.log('obj1', obj1);
console.log('obj2', obj2);
