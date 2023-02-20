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
//     this.index = 0;
//     this.doneCount = 0;
//     this.maxNum = maxNum;
//   }
//   addTask(delay, value) {
//     const task = () => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(value);
//         }, delay * 1000);
//       });
//     };
//     this.tasks.push(task);
//   }
//   async run() {
//     if (this.index >= this.tasks.length) {
//       return;
//     }
//     const temp = this.index;
//     const task = this.tasks[temp];
//     this.index++;
//     try {
//       const res = await task();
//       console.log(res);
//     } catch (e) {
//       console.log(e);
//     } finally {
//       this.doneCount++;
//       if (this.doneCount === this.tasks.length) {
//         return;
//       } else {
//         this.run();
//       }
//     }
//   }
//   start() {
//     for (var i = 0; i < Math.min(this.tasks.length, this.maxNum); i++) {
//       this.run();
//     }
//   }
// }
// var scheduler = new Scheduler(2);
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
    this.maxNum = 2;
    this.tasks = [];
    this.runningCount = 0;
    this.index = 0;
  }
  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      promiseCreator.resolve = resolve;
      this.tasks.push(promiseCreator);
      if (this.runningCount < this.maxNum) {
        this.run();
      }
    });
  }
  async run() {
    if (this.index === this.tasks.length) {
      return;
    }
    let temp = this.index;
    const task = this.tasks[temp];
    this.runningCount++;
    this.index++;
    try {
      const res = await task();
      task.resolve(res);
    } finally {
      this.runningCount--;
      if (this.runningCount < this.maxNum) {
        this.run();
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

addTask(4000, 4);
addTask(2000, 2);
addTask(3000, 3);
addTask(1000, 1);
