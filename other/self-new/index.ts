function selfnew(func: Function, ...params: any[]) {
  var obj = {};
  // @ts-ignore
  obj.__proto__ = func.prototype;
  var result = func.apply(obj, params);
  if (typeof result === 'object' && result !== null) {
    return result;
  } else {
    return obj;
  }
}
