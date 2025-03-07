// function all(arr) {
//   let result = new Array(arr.length);
//   let flag = 0;
//   return new Promise((resolve, reject) => {
//     arr.forEach((item, i) => {
//       item
//         .then((res) => {
//           result[i] = res;
//           flag++;
//           if (flag === arr.length) {
//             resolve(result);
//           }
//         })
//         .catch((e) => {
//           result[i] = e;
//           flag++;
//           if (flag === arr.length) {
//             reject(result);
//           }
//         });
//     });
//   });
// }

// var promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });

// var promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('error');
//   }, 2000);
// });

// all([promise2, promise1])
//   .then((res) => {
//     console.log('fulfilled', res);
//   })
//   .catch((res) => {
//     console.log('rejected', res);
//   });

// function race(arr) {
//   return new Promise((resolve, reject) => {
//     arr.forEach((item) => {
//       item
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((e) => {
//           reject(e);
//         });
//     });
//   });
// }

// var promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });

// var promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('error');
//   }, 2000);
// });

// race([promise1, promise2])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

function allSettled(arr) {
  const FULFILLED = 'fulfilled';
  const REJECTED = 'rejected';
  const result = [];
  let flag = 0;
  return new Promise((resolve, reject) => {
    arr.forEach((item, index) => {
      item
        .then((res) => {
          result[index] = {
            status: FULFILLED,
            data: res,
          };
          flag++;
          if (flag === arr.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          result[index] = {
            status: REJECTED,
            reason: e,
          };
          flag++;
          if (flag === arr.length) {
            reject(result);
          }
        });
    });
  });
}

function allSettled(arr) {
  const FULFILLED = 'fulfilled';
  const REJECTED = 'rejected';
  const result = [];
  let flag = 0;
  return new Promise((resolve, reject) => {
    arr.forEach((item, index) => {
      item
        .then((res) => {
          result[index] = {
            status: FULFILLED,
            data: res,
          };
          flag++;
          if (flag === arr.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          result[index] = {
            status: REJECTED,
            reason: e,
          };
          flag++;
          if (flag === arr.length) {
            resolve(result);
          }
        });
    });
  });
}

var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

var promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error');
  }, 2000);
});

allSettled([promise2, promise1])
  .then((res) => {
    console.log('resolve', res);
  })
  .catch((res) => {
    console.log('reject', res);
  });
