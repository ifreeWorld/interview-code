function binarySearch3(arr: number[], num: number) {
  const start = 0;
  const end = arr.length - 1;
  return loop33(arr, start, end, num);
}

function loop33(
  arr: number[],
  start: number,
  end: number,
  num: number
): number {
  if (start === end && arr[start] !== num) {
    return -1;
  }
  var mid = parseInt((start + end) / 2 + '');
  if (arr[mid] === num) {
    return mid;
  } else if (arr[mid] >= arr[start]) {
    if (arr[mid] > num && num >= arr[start]) {
      return loop33(arr, start, mid - 1, num);
    } else {
      return loop33(arr, mid + 1, end, num);
    }
  } else {
    if (arr[mid] < num && num <= arr[end]) {
      return loop33(arr, mid + 1, end, num);
    } else {
      return loop33(arr, start, mid - 1, num);
    }
  }
}
console.log(binarySearch3([4, 5, 6, 7, 0, 1, 2], 0));
console.log(binarySearch3([4, 5, 6, 7, 0, 1, 2], 3));
