const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
const PENDING = 'pending';

function MyPromise(fn) {
  this.currentState = PENDING;
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];

  this.resolve = (v) => {
    setTimeout(() => {
      this.currentState = FULFILLED;
      this.resolvedCallbacks.forEach((f) => f(v));
    });
  };
  this.reject = (e) => {
    setTimeout(() => {
      this.currentState = REJECTED;
      this.rejectedCallbacks.forEach((f) => f(e));
    });
  };

  try {
    fn(this.resolve, this.reject);
  } catch (e) {
    this.reject(e);
  }
}

MyPromise.prototype.then = function (cb) {
  this.resolvedCallbacks.push(cb);
  return this;
};

MyPromise.prototype.catch = function (cb) {
  this.rejectedCallbacks.push(cb);
  return this;
};

MyPromise.prototype.all = function (promises) {
  return new MyPromise((resolve, reject) => {
    var result = new Array(promises.length);
    var count = 0;
    promises.forEach((pro, index) => {
      pro
        .then((res) => {
          result[index] = res;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          result[index] = e;
          reject(e);
        });
    });
  });
};

MyPromise.prototype.allsettled = function (promises) {
  return new MyPromise((resolve, reject) => {
    var result = new Array(promises.length);
    var count = 0;
    promises.forEach((pro, index) => {
      pro
        .then((res) => {
          result[index] = {
            status: 'fulfilled',
            data: res,
          };
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          result[index] = {
            status: 'rejected',
            reason: e,
          };
          count++;
          if (count === promises.length) {
            reject(result);
          }
        });
    });
  });
};

var promise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve(1);
  }, 1000);
});

var promise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log(2);
    resolve('error');
  }, 2000);
});

MyPromise.prototype
  .allsettled([promise1, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
