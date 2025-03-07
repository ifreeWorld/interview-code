/**
 * 实现一个promiseTimeout函数，方法接收2个参数，第一个参数是promise，第二个参数是number类型
 * 作用：
 * 1、若promise在第二个参数的时间内，没有完成（处于pending状态），就返回一个rejected的promise，其reason为new Error('promise timeout')
 * 2、若promise在第二个参数的时间内，完成了（没有处于pending状态），就返回这个promise
 */
var promiseTimeout = (promise, timeout) => {
  var timePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('promise timeout');
      reject(new Error('promise timeout'));
    }, timeout);
  });
  return Promise.race([promise, timePromise])
    .then((res) => {
      console.log(res);
    })
    .catch((r) => {
      console.log(r);
    });
};

var promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});

promiseTimeout(promise, 500); // return promise(new Error('promise timeout'))
promiseTimeout(promise, 1500); // return promise(正确的)
