// 二分查找
function binarySearch(arr, item) {
  const start = 0;
  const end = arr.length - 1;
  const result = loop(arr, item, start, end);
  return result;
}

function loop(arr, item, start, end) {
  if (start === end) {
    return;
  }
  const mid = parseInt((start + end) / 2);
  if (arr[mid] === item) {
    return mid;
  } else if (arr[mid] < item) {
    return loop(arr, item, mid + 1, end);
  } else if (arr[mid] > item) {
    return loop(arr, item, start, mid - 1);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4));

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

function binarySearch(arr, target) {
  const start = 0;
  const end = arr.length - 1;
  return loop(arr, target, start, end);
}

function loop(arr, target, start, end) {
  const mid = parseInt((start + end) / 2);
  if (start === end && arr[mid] !== target) {
    return -1;
  }

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < arr[end]) {
    // 右边有序
    if (arr[mid] < target && target <= arr[end]) {
      return loop(arr, target, mid + 1, end);
    } else {
      return loop(arr, target, start, mid - 1);
    }
  } else {
    // 左边有序
    if (arr[start] <= target && target < arr[mid]) {
      return loop(arr, target, start, mid - 1);
    } else {
      return loop(arr, target, mid + 1, end);
    }
  }
}
console.log(binarySearch([4, 5, 6, 7, 0, 1, 2], 0));
console.log(binarySearch([4, 5, 6, 7, 0, 1, 2], 3));
