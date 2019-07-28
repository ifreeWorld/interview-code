// 随机将数组打乱
var arr = [1,2,3,4,5,6,7]

arr.sort(() => {
  return Math.random() > 0.5 ? 1 : -1
})

console.log(arr)


// 随机从长度为n的数组中取出m个元素，要保证每个元素取出来的概率相等
/* 我们先从数组中取出一个元素，然后将这个元素和数组第1个元素换位置，这个元素的概率是1/n
   然后我们再从数组的第2个元素到第n个元素中再随机取一个，这个元素的概率是(1/(n-1)) * ((n-1)/n) = 1/n
   其中后面的((n-1)/n)是第一次取第一个元素的时候，第二个元素没被取出去的概率为((n-1)/n) */
function get(arr, m) {
  var n = arr.length
  var i = 0
  while (i < m) {
    var index = Math.round(Math.random() * (n - 1))
    // 交换位置 第i个和第index个
    var temp = arr[index]
    arr[index] = arr[i]
    arr[i] = temp
    i++
  }
  return arr.slice(0, m)
}
var arr = [1,2,3,4,5,6]
get(arr, 3)