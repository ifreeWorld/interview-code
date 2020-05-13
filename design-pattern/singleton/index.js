// 单例模式
// 概念：指的是一个类只需要一个实例，会暴露一个方法获取唯一的实例
// 应用场景：登录弹窗，界面永远只会有一个登录弹窗
// 优点：一个类只有一个变量，可以适用于一些特定的业务场景
// 缺点：不适用于需要经常变化的对象，开发的时候用到单例模式要记住不能通过new直接调用

// es5
function Singleton(name) {
  this.name = name
  this.instance = null
}

Singleton.prototype.getName = function() {
  console.log(this.name)
}

Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name)
  }
  return this.instance
}

var a = Singleton.getInstance('a')
var b = Singleton.getInstance('b')
console.log(a === b)

//es6
class Singleton {
  constructor(name) {
    this.name = name
    this.instance = null
  }
  getName() {
    console.log(this.name)
  }
  static getInstance(name) {
    if (this.instance) {
      this.instance = new Singleton(name)
    }
    return this.instance
  }
}
var a = Singleton.getInstance('a')
var b = Singleton.getInstance('b')
console.log(a === b)