// 随机将数组打乱
var arr = [1,2,3,4,5,6,7]

arr.sort(() => {
  return Math.random() > 0.5 ? 1 : -1
})

console.log(arr)


// 随机从长度为n的数组中取出m个元素，要保证每个元素取出来的概率相等
/* 我们先从数组中取出一个元素，这个元素的概率是1/n
   然后我们再从新数组中再取出一个元素，这个元素的概率是(1/(n-1)) * ((n-1)/n) = 1/n
   其中后面的((n-1)/n)是第一次取第一个元素的时候，第二个元素没被取出去的概率为((n-1)/n) */
function random(arr, num) {
  var result = []
  var index = 0
  while(index < num) {
    var randomIndex = Math.round(Math.random() * (arr.length - 1))
    console.log(randomIndex)
    var temp = arr.splice(randomIndex, 1)
    result = result.concat(temp)
    index++
  }
  return result
}

var arr = [1,2,3,4,5,6]
var result = random(arr, 3)
console.log(result)
