// 简易版本防抖
function debounce(func, context, params, delay, immediate) {
  var timer = null
  if (immediate) {
    var flag = true
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
      if (flag) {
        func.apply(context, params)
        flag = false
      }
      timer = setTimeout(() => {
        flag = true
      }, delay)
    }
    
  } else {
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(context, params)
      }, delay)
    }
  }
}

window.onmousemove = debounce((a) => {
  console.log(a)
}, window, [1], 500, true)

// 加强版防抖
function debounce(func, delay, immediate) {
  var timer = null
  var context
  var args
  var later = () => {
    return setTimeout(() => {
      timer = null
      if (!immediate) {
        func.apply(context, args)
      }
    }, delay)
  }

  return (...params) => {
    if (timer) {
      clearTimeout(timer)
      timer = later()
    } else {
      timer = later()
      if (immediate) {
        func.apply(context, args)
      } else {
        context = this
        args = params
      }
    }
  }
}

window.onmousemove = debounce(() => {
  console.log(1111)
}, 500, true)

// 节流
function throttle(func, delay) {
  var last = 0
  var timer = null
  return (...params) => {
    var now = new Date()
    if (now - last > delay) {
      last = now
      timer = setTimeout(() => {
        func.apply(this, params)
      })
    }
  }
}
window.onmousemove = throttle(() => {
  console.log(1111)
}, 500)

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
