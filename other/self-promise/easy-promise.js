var PENDING = 'pending'
var RESOLVED = 'resolved'
var REJECTED = 'rejected'

function MyPromise(fn) {
  this.currentState = PENDING
  this.value = ''
  this.resolvedCallBacks = []
  this.rejectedCallBacks = []

  this.resolve = value => {
    setTimeout(() => {
      this.currentState = RESOLVED
      this.value = value
      this.resolvedCallBacks.forEach(f => {
        f(value)
      })
    })
  }
  this.reject = e => {
    setTimeout(() => {
      this.currentState = REJECTED
      this.value = e
      this.rejectedCallBacks.forEach(f => {
        f(e)
      })
    })
  }

  try {
    fn(this.resolve, this.reject)
  } catch (e) {
    this.reject(e)
  }
}

MyPromise.prototype.then = function(fn) {
  this.resolvedCallBacks.push(fn)
  return this
}
MyPromise.prototype.catch = function(fn) {
  this.rejectedCallBacks.push(fn)
  return this
}

MyPromise.prototype.all = (promises) => {
  var len = promises.length
  var flag = 0
  var resArr = new Array(len)
  return new MyPromise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then((res) => {
        flag++
        resArr[i] = res
        if (flag === len) {
          resolve(resArr)
        }
      }).catch((e) => {
        flag++
        resArr[i] = e
        if (flag === len) {
          reject(resArr)
        }
      })
    })
  })
}

MyPromise.prototype.race = (promises) => {
  var len = promises.length
  return new MyPromise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(resolve, reject);
    })
  })
}

var promise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log(1)
    reject(1)
  }, 1000)
})

var promise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log(2)
    reject('error')
  }, 2000)
})

MyPromise.prototype.all([promise1, promise2]).then((res) => {
  console.log(res)
}).catch((res) => {
  console.log(res)
})

MyPromise.prototype.race([promise1, promise2]).then((res) => {
  console.log(res)
}).catch((res) => {
  console.log(res)
})
