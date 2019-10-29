/**
 * 周期执行某个函数 n 次
 * @param {*} func 
 * @param {*} delay 
 * @param {*} count 
 * @param {*} immediate 
 */
function repeat(func, delay, count, immediate) {
  var times = 0
  var timer = null
  if (immediate) {
    times++
    func()
    timer = setInterval(() => {
      if (times < count) {
        func()
        times++
      } else {
        clearInterval(timer)
      }
    }, delay)
  } else {
    timer = setInterval(() => {
      if (times < count) {
        func()
        times++
      } else {
        clearInterval(timer)
      }
    }, delay)
  }
}

repeat(() => {
  console.log(111)
}, 3000, 3, false)