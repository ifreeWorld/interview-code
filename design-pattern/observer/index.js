// 发布订阅模式
// 概念：发布订阅模式又叫观察者模式，它定义对象间的一对多的依赖关系，当一个对象的状态变化时，所有订阅了他的对象都会得到通知。在JS中我们一般用事件去处理
// 应用场景：简单的模块与模块之间的数据交互
// 优点：支持简单的广播通信，实现数据交互很方便
// 缺点：过多的使用会让代码的可读性变差，会到处去找订阅和发布的关系，维护发布和订阅的关系也需要耗费一定的内存
class Observer {
  constructor() {
    this.cache = {}
  }
  on(key, callback) {
    if (!this.cache[key]) {
      this.cache[key] = []
    }
    this.cache[key].push(callback)
  }
  trigger(key, ...params) {
    var callbacks = this.cache[key]
    callbacks.forEach(callback => {
      callback(...params)
    })
  }
  remove(key) {
    this.cache[key] = null
    delete this.cache[key]
  }
}
var observer = new Observer()
export default observer
