var promise1 = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i)
      resolve(i)
    }, 1000)
  })
}

var promise2 = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i+2)
      resolve(i+2)
    }, 1000)
  })
}
var promise3 = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i+3)
      resolve(i+3)
    }, 1000)
  })
}
var promise4 = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i+4)
      resolve(i+4)
    }, 1000)
  })
}
var promise5 = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i+5)
      resolve(i+5)
    }, 1000)
  })
}
var arr = [promise1, promise2, promise3, promise4, promise5]

arr.reduce((prev, next) => {
  return prev.then((res) => {
     return next(res)
  })
}, Promise.resolve(1))

// 1
// 3
// 6