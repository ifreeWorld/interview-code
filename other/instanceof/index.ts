function selfInstanceof(a: any, A: any) {
  if (typeof a !== 'object') {
    return false;
  }
  const prototype = A.prototype;
  let proto = a.__proto__;
  while (true) {
    if (prototype === proto) {
      return true;
    } else if (proto === null) {
      return false;
    }
    proto = proto.__proto__;
  }
}

console.log(selfInstanceof({}, Object));
