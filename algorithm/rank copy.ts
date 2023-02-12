function swap(arr: number[], left: number, right: number) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function bubble(arr: number[]) {
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('冒泡', bubble(arr));

function singleBubble(arr: number[]) {
  for (var i = arr.length - 1; i >= 0; i--) {
    let flag = false;
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        flag = true;
      }
    }
    if (!flag) {
      return arr;
    }
  }
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('单向冒泡', singleBubble(arr));

function doubleBubble(arr: number[]) {
  var start = 0;
  var end = arr.length - 1;
  while (start < end) {
    var flag = false;
    for (var i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        flag = true;
      }
    }
    end--;
    for (var j = end; j > start; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        flag = true;
      }
    }
    if (flag) {
      return arr;
    }
  }
  return arr;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('双向冒泡', doubleBubble(arr));

function select(arr: number[]) {
  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    swap(arr, min, i);
  }
  return arr;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('选择', select(arr));

function insert(arr: number[]) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
      } else {
        break;
      }
    }
  }
  return arr;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('插入', insert(arr));

function binaryInsert(arr: number[]) {
  for (var i = 1; i < arr.length; i++) {
    var start = 0;
    var end = i - 1;
    while (start <= end) {
      var mid = parseInt((start + end) / 2 + '');
      if (arr[mid] > arr[i]) {
        end = mid - 1;
      } else if (arr[mid] < arr[i]) {
        start = mid + 1;
      }
    }
    for (var j = i - 1; j >= start; j--) {
      swap(arr, j, j + 1);
    }
  }
  return arr;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('折半插入', binaryInsert(arr));

function shellSort(arr: number[]) {
  var gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (var i = gap; i < arr.length; i++) {
      for (var j = i - 1 - gap; j >= 0; j--) {
        if (arr[j + 1] < arr[j]) {
          swap(arr, j, j + 1);
        } else {
          break;
        }
      }
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('希尔排序', shellSort(arr));

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  var left = 0;
  var right = arr.length - 1;
  var basic = 0;
  while (left < right) {
    while (left < right && arr[right] >= arr[basic]) {
      right--;
    }
    while (left < right && arr[left] <= arr[basic]) {
      left++;
    }
    if (left === right) {
      swap(arr, basic, left);
    } else {
      swap(arr, left, right);
    }
  }
  return quickSort(arr.slice(0, left))
    .concat(arr.slice(left, right + 1))
    .concat(quickSort(arr.slice(right + 1)));
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('快速排序', quickSort(arr));

function merge(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  var mid = parseInt(arr.length / 2 + '');
  return mergeSort(merge(arr.slice(0, mid)), merge(arr.slice(mid)));
}

function mergeSort(a: number[], b: number[]): number[] {
  var i = 0;
  var j = 0;
  var result = [];
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    result.push(a[i]);
    i++;
  }
  while (j < b.length) {
    result.push(b[j]);
    j++;
  }
  return result;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('归并排序', merge(arr));
export {};
