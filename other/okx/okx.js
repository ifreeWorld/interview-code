const inputString = "20240920201001";
// Please format the inputString with two solutions and then design a benchmark test to compare the two solutions' performance.

/* input:
1. the format of inputString is correct, no verification is required; 
2. it means the length of the inputString still is 14.
*/

/* expected output: 
2024Y09M20D 20:10:01
*/

// solution one:
function format1(input) {
  const year = input.substring(0, 4);
  const month = input.substring(4, 6);
  const day = input.substring(6, 8);
  const hour = input.substring(8, 10);
  const minute = input.substring(10, 12);
  const second = input.substring(12, 14);
  return `${year}Y${month}M${day}D ${hour}:${minute}:${second}`;
}
// solution two:
function format2(input) {
  const reg = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
  const result = input.replace(reg, "$1Y$2M$3D $4:$5:$6");
  return result
}

console.log(format1(inputString));
console.log(format2(inputString));

// benchmark test
// You need to design a benchmark to compare the performance of the two solutions.
function benchmark() {
  console.time('format1');
  format1(inputString);
  console.timeEnd('format1');
  console.time('format2');
  format2(inputString);
  console.timeEnd('format2');
}

benchmark();


console.log(0);
setTimeout(() => { console.log(1) }, 110);
setTimeout(() => { console.log(1.1) }, 0);
console.log(1.5);

