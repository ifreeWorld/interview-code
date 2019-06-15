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


var arr = [1,2,4,6,8,10,22]
console.log(binarySearch(arr, 4, 0, 6))