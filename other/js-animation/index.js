var timer1 = null
var timer2 = null

// 实现一个div滑动的动画，由快至慢5s结束
function move1() {
  var box = document.getElementById('box1')
  var start = Date.now()
  timer1 = setInterval(() => {
    var now = Date.now()
    var pass = now - start
    var step = Math.round(Math.abs(pass - 5000) / 100)
    if (pass >= 5000) {
      clearInterval(timer1)
    } else {
      box.style.top = box.offsetTop + step + 'px'
    }
  }, 1000)
}
move1()


// 实现一个div滑动的动画，由快至慢到500px结束
function move2() {
  var box = document.getElementById('box2')
  timer2 = setInterval(() => {
    var step = (500 - box.offsetTop) / 10
    step = step>0?Math.ceil(step):Math.floor(step)
    box.style.top = box.offsetTop + step + 'px'
    
    if (Math.abs(500 - box.offsetTop) <= Math.abs(step)) {
      clearInterval(timer2)
      box.style.top = 500 + 'px'
    }
  }, 500)
}
move2()