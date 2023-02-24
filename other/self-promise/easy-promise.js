var PENDING = 'pending';
var RESOLVED = 'resolved';
var REJECTED = 'rejected';

function MyPromise(fn) {
  this.currentState = PENDING;
  this.value = '';
  this.resolvedCallBacks = [];
  this.rejectedCallBacks = [];

  this.resolve = (value) => {
    setTimeout(() => {
      this.currentState = RESOLVED;
      this.value = value;
      this.resolvedCallBacks.forEach((f) => {
        f(value);
      });
    });
  };
  this.reject = (e) => {
    setTimeout(() => {
      this.currentState = REJECTED;
      this.value = e;
      this.rejectedCallBacks.forEach((f) => {
        f(e);
      });
    });
  };

  try {
    fn(this.resolve, this.reject);
  } catch (e) {
    this.reject(e);
  }
}

MyPromise.prototype.then = function (fn) {
  this.resolvedCallBacks.push(fn);
  return this;
};
MyPromise.prototype.catch = function (fn) {
  this.rejectedCallBacks.push(fn);
  return this;
};

MyPromise.prototype.all = (promises) => {
  var len = promises.length;
  var flag = 0;
  var resArr = new Array(len);
  return new MyPromise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then((res) => {
        flag++;
        resArr[i] = res;
        if (flag === len) {
          resolve(resArr);
        }
      }).catch((e) => {
        // 注意！！！这里体现出all和allSettled的区别，all是只要一个失败，就直接reject失败
        reject(e);
      });
    });
  });
};

// TODO race实现有问题
MyPromise.prototype.race = (promises) => {
  return new MyPromise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject);
    });
  });
};

MyPromise.prototype.allSettled = function (promises) {
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
    reject('error');
  }, 2000);
});

MyPromise.prototype
  .all([promise1, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });

MyPromise.prototype
  .allSettled([promise1, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
