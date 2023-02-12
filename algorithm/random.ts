// 随机从长度为n的数组中取出m个元素，要保证每个元素取出来的概率相等
/* 我们先从数组中取出一个元素，这个元素的概率是1/n
   然后我们再从新数组中再取出一个元素，这个元素的概率是(1/(n-1)) * ((n-1)/n) = 1/n
   其中后面的((n-1)/n)是第一次取第一个元素的时候，第二个元素没被取出去的概率为((n-1)/n) */

function random(arr: unknown[], num: number): unknown[] {
  let result: unknown[] = [];
  const len = arr.length;
  for (let i = 0; i < num; i++) {
    const index = Math.round(Math.random() * (len - i - 1));
    const remove = arr.splice(index, 1);
    result = [...result, ...remove];
  }
  return result;
}

console.log(random([1, 2, 3, 4, 5, 6], 3));
