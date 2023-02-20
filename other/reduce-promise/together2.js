/**
 * 实现一个并发请求函数concurrencyRequest(urls, maxNum)，要求如下：
  • 要求最大并发数 maxNum
  • 每当有一个请求返回，就留下一个空位，可以增加新的请求
  • 所有请求完成后，结果按照 urls 里面的顺序依次打出（发送请求的函数可以直接使用fetch即可）
  作者：黑土豆
  链接：https://juejin.cn/post/7163522138698153997
  来源：稀土掘金
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
function concurrencyRequest(urls, maxNum) {
  return new Promise((resolve) => {
    let index = 0;
    let count = 0;
    const result = [];

    async function request() {
      if (index === urls.length) {
        return;
      }
      const temp = index;
      const url = urls[temp];
      console.log('start', url);
      index++;

      try {
        const res = await fetch(url);
        result[temp] = res;
      } catch (error) {
        result[temp] = error;
      } finally {
        count++;
        console.log('end', url);
        if (count === urls.length) {
          resolve(result);
        } else {
          request();
        }
      }
    }
    for (var i = 0; i < Math.min(urls.length, maxNum); i++) {
      request();
    }
  });
}

const urls = [];
for (var j = 1; j <= 20; j++) {
  urls.push(`https://jsonplaceholder.typicode.com/todos/${j}`);
}

concurrencyRequest(urls, 3).then((res) => {
  console.log('done', res);
});

// 换成promise settimeout的测试用例如下：
function concurrencyRequest(tasks, maxNum) {
  let count = 0;
  let index = 0;
  let result = [];

  async function request() {
    if (index === tasks.length) {
      return;
    }
    const temp = index;
    const task = tasks[temp];
    // console.log('start', temp);
    index++;
    try {
      const res = await task();
      result[temp] = res;
    } catch (e) {
      result[temp] = e;
    } finally {
      count++;
      // console.log('end', temp);
      if (count === tasks.length) {
        console.log('done', result);
      } else {
        request();
      }
    }
  }

  for (var i = 0; i < Math.min(maxNum, tasks.length); i++) {
    request();
  }
}

const tasks = [];
for (let j = 1; j <= 20; j++) {
  tasks.push(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(j);
        resolve(j);
      }, 1000);
    });
  });
}

concurrencyRequest(tasks, 3);
