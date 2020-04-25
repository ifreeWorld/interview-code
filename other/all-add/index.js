/**
 * 从给定的无序、不重复的数组 arr 中，取出 count 个数，使其相加和 为 sum
 * @param {*} arr 数组
 * @param {*} sum 总数
 * @param {*} count 取出数量
 */
function enumArr(arr, sum, count) {
  var allResult = []
  var data = []
  getAllArr(arr, count, [], allResult)
  allResult.forEach(item => {
    if (item.reduce((prev, next) => {
      return prev + next
    }, 0) === sum) {
      data.push(item)
    }
  })
  return data
}

function getAllArr(arr, count, result, allResult, idx = 0) {
  if (count > 0) {
    for (var i = idx; i < arr.length; i++) {
      var temp = [...result]
      temp.push(arr[i])
      if (count === 1) {
        allResult.push(temp)
      }
      getAllArr(arr, count - 1, temp, allResult, i + 1)
    }
  }
  
  return allResult
}


var arr = enumArr([1,2,3,4,5,6],8,2)
console.log(arr)


Object.getPrototypeOf