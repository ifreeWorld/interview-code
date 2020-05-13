// 工厂模式
// 概念：是一种用来创建对象的设计模式，他将具体的业务逻辑写在工厂里面，根据传递不同的类型的值决定创建什么类型的对象
// 应用场景：分析魔方创建组件实例，一般的组件、容器类组件等等
// 优点：实例创建的代码都在一块，方便维护，多用于创建多种不同类型的对象
// 缺点：创建出来的对象都是Factory实例，识别不出来具体的类型，除非在每个对象中都加上一个type的属性来识别

class Factory {
  constructor(type, ...args) {
    if (type && ['man', 'woman', 'superman', 'superwoman'].includes(type)){
      this[type](...args)
    }
  }
  man(name, age) {
    this.sex = 'man'
    this.isSuper = false
    this.name = name
    this.age = age
  }
  woman(name, age) {
    this.sex = 'woman'
    this.isSuper = false
    this.name = name
    this.age = age
  }
  superman(name, age) {
    this.sex = 'man'
    this.isSuper = true
    this.name = name
    this.age = age
  }
  superwoman(name, age) {
    this.sex = 'woman'
    this.isSuper = true
    this.name = name
    this.age = age
  }
}
var man = new Factory('man', 'wangzilong', 27)
var woman = new Factory('woman', 'woman', 28)
var superman = new Factory('superman', 'superman', 29)
var superwoman = new Factory('superwoman', 'superwoman', 30)

console.log(JSON.stringify(man))
console.log(JSON.stringify(woman))
console.log(JSON.stringify(superman))
console.log(JSON.stringify(superwoman))