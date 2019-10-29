// 排序公共方法
function swap(arr, left, right) {
  var temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

/**
 * 冒泡排序
 * 从第一个一直往右边比较，左边比右边大就左右互换位置，一直比到最右边就会把最大的搞到
   最右边，然后再从第一个一直往右边比较，比较到最右边-1个
 * @param {*} arr 
 */
function Bubble(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}

var array = [2, 1, 5, 2, 3, 9]
Bubble(array)
console.log(array)

/**
 * 插入排序
 * 
 * 就是打扑克牌插入然后排序，首先将第0个元素为有序序列，然后从第1个开始，将第i个元素的左边的所有元素倒序遍历，从j=i-1开始遍历，如果j元素比第i个元素大，就j元素后移一位，然后j-1元素再和第i个元素比，直到比第1个元素小，就停下来不后移了，就把j+1元素赋值为第i个元素，就是第i个元素找到了他的位置
 * @param {*} arr 
 */
function insert(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    var temp = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
}

var array = [2, 1, 5, 2, 3, 9]
insert(array)
console.log(array)

/**
 * 选择排序
 * 遍历数组，设置最小值的索引为0，从第0个开始，然后碰到比最小值小的就把最小值的索引改为
 这个索引，然后再遍历第二次，从第1个开始，设置最小值的索引为1，碰到比最小值小的就把最小值的索引改为
 这个索引，以此类推
 * @param {*} arr 
 */
function select(arr) {
  var min = 0
  for (var i = 0; i < arr.length; i++) {
    min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, min, i)
  }
}

var array = [2, 1, 5, 2, 3, 9]
select(array)
console.log(array)

/**
 * 快速排序
 * 先拿到一个基准值，然后给定2个指针，左指针指向数组头部，右指针指向数组尾部；2个指针分别向中间移动，并且左指针的位置要小于右指针的位置，2个指针一旦相等就停止
 * 左指针往中间移动并遍历，找到左指针指向的元素比基准值大的，左指针就停下；
 * 右指针往中间移动并遍历，找到右指针指向的元素比基准值小的，右指针就停下；
 * 然后就调换左指针指向的元素和右指针指向的元素的位置，调换之后2个指针再往中间移动，碰到符合上面的条件就再调换
 * 直到2个指针一旦相等就停止，再进入下一次的递归，递归 头部-左指针位置的数组，递归左指针位置-尾部的数组
 * 
 * 原理就是，每次递归让左边是比基准值小，右边是比基准值大
 * 
 * 注意：如果选取最左边的元素作为基准值，就必须先移动右指针；相反，如果选取最右边的元素作为基准值，就必须先移动左指针
 * （https://segmentfault.com/a/1190000014406198?utm_source=tag-newest）
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  
  var left = 0;
  var right = arr.length - 1
  var basic = 0
  
  while (left < right) {
    // 寻找右边比基准值小的数的下标（选取最左边的元素作为基准值，就必须先移动右指针）
    while (arr[right] >= arr[basic] && left < right) {
      right=right-1;
    }
    // 寻找左边比基准值大的数的下标
    while (arr[left] <= arr[basic] && left < right) {
      left++
    }
    
    // 如果左边等于右边，就把基准值和下标的值换位置
    if (left === right) {
      swap(arr, right, basic)
    } else {
      // 如果左边不等于右边，说明是要把left和right的值换位置
      swap(arr, left, right)
    }
  }
  
  return quickSort(arr.slice(0, left)).concat(arr.slice(left,right+1)).concat(quickSort(arr.slice(right+1)))
}

var array = [2, 1, 5, 2, 3, 9]
var result = quickSort(array)
console.log(result)
