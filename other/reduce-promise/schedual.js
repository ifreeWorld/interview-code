/**
const scheduler = new Scheduler(2)
scheduler.addTask(1, '1');   // 1s后输出’1'
scheduler.addTask(2, '2');  // 2s后输出’2'
scheduler.addTask(1, '3');  // 2s后输出’3'
scheduler.addTask(1, '4');  // 3s后输出’4'
scheduler.start();
https://juejin.cn/post/6913493585363599373
 */

// class Scheduler {
//   constructor(maxNum) {
//     this.tasks = [];
//     this.maxNum = maxNum;
//     this.runningCount = 0;
//   }
//   addTask(delay, str) {
//     this.tasks.push(() => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log(str);
//           resolve();
//         }, delay * 1000);
//       });
//     });
//   }
//   async run() {
//     if (this.runningCount < this.maxNum) {
//       const task = this.tasks.shift();
//       this.runningCount++;
//       task().then(() => {
//         this.runningCount--;
//         if (this.tasks.length !== 0) {
//           this.run();
//         }
//       });
//     }
//   }
//   start() {
//     for (let i = 0; i < Math.min(this.maxNum, this.tasks.length); i++) {
//       this.run();
//     }
//   }
// }
// const scheduler = new Scheduler(2);
// scheduler.addTask(1, '1'); // 1s后输出’1'
// scheduler.addTask(2, '2'); // 2s后输出’2'
// scheduler.addTask(1, '3'); // 2s后输出’3'
// scheduler.addTask(1, '4'); // 3s后输出’4'
// scheduler.start();

/**
 * https://juejin.cn/post/6844903896356225038
 * 带并发限制的异步调度器，保证同时最多运行2个任务
 */
// 方法一
class Scheduler {
  constructor() {
    this.tasks = [];
    this.maxNum = 2;
    this.runningCount = 0;
  }
  add(fn) {
    return new Promise((resolve) => {
      fn.resolve = resolve;
      this.tasks.push(fn);
      if (this.runningCount < this.maxNum) {
        this.loop();
      }
    });
  }
  async loop() {
    if (this.tasks.length === 0) {
      return;
    }
    var task = this.tasks.shift();
    this.runningCount++;
    try {
      const res = await task();
      task.resolve();
    } finally {
      this.runningCount--;
      if (this.runningCount < this.maxNum) {
        this.loop();
      }
    }
  }
}

const timeout = (time) => {
  return new Promise((resolve, reject) => {
    // setTimeout(resolve, time); // 与下面一样
    setTimeout(() => {
      resolve();
    }, time);
  });
};

var scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(800, 4);
addTask(400, 2);
addTask(300, 3);
addTask(100, 1);
