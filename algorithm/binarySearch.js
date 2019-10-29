// 二分查找
function binarySearch(arr, item, start, end) {
  var mid = parseInt((start + end) / 2)
  if (arr[mid] === item) {
    return mid
  } else if (arr[mid] < item) {
    return binarySearch(arr, item, mid + 1, end)
  } else if (arr[mid] > item) {
    return binarySearch(arr, item, start, mid - 1)
  }

  return false
}


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
var arr = [1,2,4,6,8,10,22]
console.log(binarySearch(arr, 4, 0, 6))

// 
function find(list, value) {
  var start = 0
  var end = list.length - 1
  return binarySearch(list, value, start, end)
}

function binarySearch(list, value, start, end) {
  var middle = Math.floor((start + end) / 2)
  if (list[middle] === value) {
    return middle
  } else if (list[middle] < list[end]) {
    // 说明右边是有序的
    if (value > list[middle] && value <= list[end]) {
      return binarySearch(list, value, middle + 1, end)
    } else {
      return binarySearch(list, value, start, middle - 1)
    }
  } else {
    // 说明左边是有序的
    if (value < list[middle] && value >= list[start]) {
      return binarySearch(list, value, start, middle - 1)
    } else {
      return binarySearch(list, value, middle + 1, end)
    }
  }
}

console.log(find([7,8,9,1,2,3,4], 9))