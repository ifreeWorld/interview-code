// 二分查找
function binarySearch(arr: number[], num: number) {
  var start = 0;
  var end = arr.length - 1;
  return loop(arr, start, end, num);
}

function loop(arr: number[], start: number, end: number, num: number): number {
  var mid = parseInt((start + end) / 2 + '');
  if (arr[mid] === num) {
    return mid;
  } else if (arr[mid] < num) {
    return loop(arr, mid + 1, end, num);
  } else {
    return loop(arr, start, mid - 1, num);
  }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 2));

/**
 * 变种二分查找（循环有序列表的查找）
 * 
假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
 */
/**
 * 变种二分查找（循环有序列表的查找）
 * 
假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
 */

// 变种二分查找
function binarySearch2(arr: number[], num: number) {
  var start = 0;
  var end = arr.length - 1;
  return loop2(arr, start, end, num);
}

function loop2(arr: number[], start: number, end: number, num: number): number {
  if (start === end && arr[end] !== num) {
    return -1;
  }
  var mid = parseInt((start + end) / 2 + '');
  if (arr[mid] === num) {
    return mid;
  } else if (arr[mid] < arr[end]) {
    if (arr[mid] < num && num <= arr[end]) {
      return loop2(arr, mid + 1, end, num);
    } else {
      return loop2(arr, start, mid - 1, num);
    }
  } else {
    if (arr[mid] > num && num >= arr[start]) {
      return loop2(arr, start, mid - 1, num);
    } else {
      return loop2(arr, mid + 1, end, num);
    }
  }
}
console.log(binarySearch2([4, 5, 6, 7, 0, 1, 2], 0));
console.log(binarySearch2([4, 5, 6, 7, 0, 1, 2], 3));

export {};
