// https://juejin.cn/post/6844904039566540808
function swap(arr: number[], i: number, j: number) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubble(arr: number[]) {
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}
var arr = [1, 3, 2, 8, 4, 6, 7];
bubble(arr);
console.log('冒泡', arr);

// 单向冒泡
function singlebubble(arr: number[]) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var flag = true;
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        swap(arr, j, j + 1);
      }
    }
    if (flag) {
      return;
    }
  }
}
var arr = [1, 3, 2, 8, 4, 6, 7];
singlebubble(arr);
console.log('单向冒泡', arr);

// 双向冒泡
function doublebubble(arr: number[]) {
  var start = 0;
  var end = arr.length - 1;
  while (start < end) {
    var flag = true;
    // 找到最大值
    for (var i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        flag = false;
      }
    }
    end--;
    // 找到最小值
    for (var j = end; j > start; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        flag = false;
      }
    }
    start++;
    if (flag) {
      return;
    }
  }
}
var arr = [1, 3, 2, 8, 4, 6, 7];
doublebubble(arr);
console.log('双向冒泡', arr);

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
}
var arr = [1, 3, 2, 8, 4, 6, 7];
select(arr);
console.log('选择', arr);

// https://juejin.cn/post/6844903618575859726
function insert(arr: number[]) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      } else {
        break;
      }
    }
  }
}
var arr = [1, 3, 2, 8, 4, 6, 7];
insert(arr);
console.log('插入', arr);

// 折半插入排序 https://juejin.cn/post/6844904039566540808
function binaryInsert(arr: number[]) {
  for (var i = 1; i < arr.length; i++) {
    var start = 0;
    var end = i - 1;
    while (start <= end) {
      var num = (start + end) / 2;
      var mid = parseInt(num + '');
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
}
var arr = [1, 3, 2, 8, 4, 6, 7];
binaryInsert(arr);
console.log('折半插入', arr);

// 希尔排序 https://baijiahao.baidu.com/s?id=1719645128431014366&wfr=spider&for=pc
function shellSort(arr: number[]) {
  var gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (var i = gap; i < arr.length; i++) {
      for (var j = i - gap; j >= 0; j--) {
        if (arr[j] > arr[j + gap]) {
          swap(arr, j, j + gap);
        } else {
          break;
        }
      }
    }
    gap = Math.floor(gap / 2);
  }
}

var arr = [1, 3, 2, 8, 4, 6, 7];
shellSort(arr);
console.log('希尔', arr);

// 快排
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
console.log('快速', quickSort(arr));

// 归并
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
function merge(left: number[], right: number[]) {
  var result = [];
  var i = 0;
  var j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  console.log('result', result);
  return result;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('归并', mergeSort(arr));

/**
 * 堆排序
 */
function heapSort(nums: number[]) {
  buildHeap(nums);
  // 循环n-1次，每次循环后交换堆顶元素和堆底元素并重新调整堆结构
  for (let i = nums.length - 1; i > 0; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]];
    adjustHeap(nums, 0, i);
    console.log(`${nums[i]}作为堆顶元素：`, nums);
  }
  return nums;
}
/**
 * 堆排序辅助方法
 */
function adjustHeap(nums: number[], index: number, size: number) {
  // 交换后可能会破坏堆结构，需要循环使得每一个父节点都大于左右结点
  while (true) {
    let max = index;
    let left = index * 2 + 1; // 左节点
    let right = index * 2 + 2; // 右节点
    if (left < size && nums[max] < nums[left]) max = left;
    if (right < size && nums[max] < nums[right]) max = right;
    // 如果左右结点大于当前的结点则交换，并再循环一遍判断交换后的左右结点位置是否破坏了堆结构（比左右结点小了）
    if (index !== max) {
      [nums[index], nums[max]] = [nums[max], nums[index]];
      index = max;
    } else {
      break;
    }
  }
}
/**
 * 堆排序辅助方法
 */
function buildHeap(nums: number[]) {
  // 注意这里的头节点是从0开始的，所以最后一个非叶子结点是 parseInt(nums.length/2)-1
  let start = parseInt(nums.length / 2 + '') - 1;
  let size = nums.length;
  // 从最后一个非叶子结点开始调整，直至堆顶。
  for (let i = start; i >= 0; i--) {
    adjustHeap(nums, i, size);
  }
}
var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('堆排序', heapSort(arr));

/**
 * 计数排序
 */
function countingSort(nums: number[]) {
  let arr: number[] = [];
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  // 装桶
  for (let i = 0, len = nums.length; i < len; i++) {
    let temp = nums[i];
    arr[temp] = arr[temp] + 1 || 1;
  }
  let index = 0;
  // 还原原数组
  for (let i = min; i <= max; i++) {
    while (arr[i] > 0) {
      nums[index++] = i;
      arr[i]--;
    }
  }
  return nums;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('计数排序', countingSort(arr));

/**
 * 桶排序
 */
function bucketSort(nums: number[]) {
  // 桶的个数，只要是正数即可
  let num = 5;
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  // 计算每个桶存放的数值范围，至少为1，
  let range = Math.ceil((max - min) / num) || 1;
  // 创建二维数组，第一维表示第几个桶，第二维表示该桶里存放的数
  let arr: any[] = Array.from(Array(num)).map(() => Array().fill(0));
  nums.forEach((val) => {
    // 计算元素应该分布在哪个桶
    let index = parseInt((val - min) / range + '');
    // 防止index越界，例如当[5,1,1,2,0,0]时index会出现5
    index = index >= num ? num - 1 : index;
    let temp = arr[index];
    // 插入排序，将元素有序插入到桶中
    let j = temp.length - 1;
    while (j >= 0 && val < temp[j]) {
      temp[j + 1] = temp[j];
      j--;
    }
    temp[j + 1] = val;
  });
  // 修改回原数组
  let res = [].concat.apply([], arr);
  nums.forEach((val, i) => {
    nums[i] = res[i];
  });
  return nums;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('桶排序', bucketSort(arr));

/**
 * 基数排序
 */
function radixSort(array: number[]) {
  let length = array.length;

  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序
  if (!Array.isArray(array) || length <= 1) return;

  let bucket = [],
    max = array[0],
    loop;

  // 确定排序数组中的最大值
  for (let i = 1; i < length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  // 确定最大值的位数
  loop = (max + '').length;

  // 初始化桶
  for (let i = 0; i < 10; i++) {
    bucket[i] = [];
  }

  for (let i = 0; i < loop; i++) {
    for (let j = 0; j < length; j++) {
      let str = array[j] + '';

      if (str.length >= i + 1) {
        let k = parseInt(str[str.length - 1 - i]); // 获取当前位的值，作为插入的索引
        // @ts-ignore
        bucket[k].push(array[j]);
      } else {
        // 处理位数不够的情况，高位默认为 0
        // @ts-ignore
        bucket[0].push(array[j]);
      }
    }

    array.splice(0, length); // 清空旧的数组

    // 使用桶重新初始化数组
    for (let i = 0; i < 10; i++) {
      let t = bucket[i].length;

      for (let j = 0; j < t; j++) {
        array.push(bucket[i][j]);
      }

      bucket[i] = [];
    }
  }

  return array;
}

var arr = [1, 3, 2, 8, 4, 6, 7];
console.log('基数排序', radixSort(arr));

// export {};
