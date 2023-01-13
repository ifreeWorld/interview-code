function createTask(ms) {
  return () => {
    console.log('start', ms);
    return new Promise((r) =>
      setTimeout(() => {
        console.log('end', ms);
        r(ms);
      }, ms)
    );
  };
}
const tasks = Array(5)
  .fill(null)
  .map((_, i) => createTask(i * 1000));

Promise.all(tasks.map((task) => task())).then(console.log);

// start 0
// start 1000
// start 2000
// start 3000
// start 4000
// end 0
// end 1000
// end 2000
// end 3000
// end 4000
// [0, 1000, 2000, 3000, 4000]

var count = 1;
var test = function () {
  console.log('start');
  setTimeout(() => {
    console.log(this.count, 11);
  }, 10);

  setTimeout(function () {
    console.log(this.count);
  }, 0);

  new Promise((resolve) => {
    resolve();
  }).then(() => {
    console.log('promise');
  });
  console.log('end');
};

test.call({ count: 2 });

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

async1();

new Promise((resolve) => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
});

console.log('script end');

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
