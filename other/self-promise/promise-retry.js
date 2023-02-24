// 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject

function retry(func, times) {
  // var count = 0;

  // function loop(resolve, reject) {
  //   if (count < times) {
  //     func().then((res) => {
  //       count++;
  //       if (res === 1) {
  //         resolve(res);
  //       } else {
  //         loop(resolve, reject);
  //       }
  //     });
  //   } else {
  //     resolve(-1);
  //   }
  // }
  // return new Promise((resolve, reject) => {
  //   loop(resolve, reject);
  // });
  return new Promise(async (resolve, reject) => {
    while (times > 0) {
      const res = await func();
      if (res === 1) {
        resolve(res);
        break;
      } else {
        times--;
      }
    }
    resolve(-1);
  });
}

function request() {
  return new Promise((resolve, reject) => {
    var v = Math.random();
    console.log('v', v);
    if (v > 0.5) {
      resolve(1);
    } else {
      resolve(-1);
    }
  });
}

retry(request, 3).then((res) => {
  console.log(res);
});
