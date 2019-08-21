// 防抖
function debounce(func, context, params, delay) {
  var timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(context, params)
    }, delay)
  }
}

window.onmousemove = debounce((a) => {
  console.log(a)
}, window, [1], 500)


// 节流
function throttle(func, context, params, delay) {
  var last = 0
  return () => {
    var now = Date.now()
    if (now - last > delay) {
      last = now
      setTimeout(() => {
        func.apply(context, params)
      }, delay)
    }
  }
}

// 第二种节流
function throttle(func, context, params, delay) {
  var timer = null
  return () => {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      func.apply(context, params)
      timer = null
    }, delay)
  }
}

window.onresize = throttle((a) => {
  console.log(a)
}, window, [2], 500)