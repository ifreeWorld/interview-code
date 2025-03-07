/**
 * 实现一个简单的响应式
 */
function Observer(a) {
  for (var key in a) {
    if (a.hasOwnProperty(key)) {
      // 一定要先赋值
      var v = a[key];
      Object.defineProperty(a, key, {
        get: () => {
          console.log('get');
          return v;
        },
        set: (val) => {
          console.log('set');
          v = val;
        },
      });
    }
  }
}
var a = {
  b: 1,
  c: 2,
};
Observer(a);
var b = a.b;
a.c = 3;
a.c = 4;

var a = {
  name: '112',
};

var proxy = new Proxy(a, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    // target[key] = value;
    Reflect.set(target, key, value, receiver);
  },
});
console.log(proxy.name);

proxy.name = '23';
console.log(proxy.name);
console.log(a.name);
