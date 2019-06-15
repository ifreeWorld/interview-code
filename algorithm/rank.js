// 排序公共方法
function swap(arr, left, right) {
  var temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

// 冒泡排序
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

// 插入排序
function insert(arr) {
  for (var i = 1; i < arr.length; i++) {
    var j = i - 1
    var temp = arr[i]
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
}

var array = [2, 1, 5, 2, 3, 9]
insert(array)
console.log(array)

// 选择排序
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