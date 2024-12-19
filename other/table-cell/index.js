// 表格合并，如上两行长度和列数不一定的表格合并
// const arr1 = [5, 4]
// const arr2 = [4, 3]
// arr1 arr2 合并后得到如下
// arr = [1, 1, 2, 2]

// 实现合并算法

function merge(a, b) {
  let indexA = 0;
  let indexB = 0;
  let rest = 0;
  let valueA = a[indexA];
  let valueB = b[indexB];
  const result = [];
  while (valueA !== undefined || valueB !== undefined) {
    if (valueA === undefined) {
      if (rest !== 0) {
        result.push(rest);
        rest = 0;
      } else {
        result.push(valueB);
      }
      indexB++;
      valueB = b[indexB];
      continue;
    }
    if (valueB === undefined) {
      if (rest !== 0) {
        result.push(rest);
        rest = 0;
      } else {
        result.push(valueA);
      }
      indexA++;
      valueA = a[indexA];
      continue;
    }
    if (valueA <= valueB) {
      rest = valueB - valueA;
      result.push(valueA);
      b[indexB] = rest;
      indexA++;
    } else {
      rest = valueA - valueB;
      result.push(valueB);
      a[indexA] = rest;
      indexB++;
    }
    valueA = a[indexA];
    valueB = b[indexB];
  }
  return result;
}

const arr1 = [5, 4];
const arr2 = [4, 3];

console.log(merge(arr1, arr2));
