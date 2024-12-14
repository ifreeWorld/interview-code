const str = '1+2+3*4/5-5/6*7+8*9';
const res = parse(str);
// 输出1+2+(3*4/5)-(5/6*7)+8*9
console.log(res);

parse('1+2+3'); // "1+2+3"
parse('1*2+3'); // "(1*2)+3"
parse('1+2*3'); // "1+(2*3)"
parse('1+2*3*4'); // "1+(2*3*4)"
parse('1*2*3+4*5'); // "(1*2*3)+(4*5)"
parse('1+2+3*4/5-5/6*7+8*9'); // "1+2+(3*4/5)-(5/6*7)+8*9"

function parse(str) {
  const result = [];
  let flag = false;
  for (var i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '+' || char === '-') {
      if (flag) {
        result.push(')');
      }
      result.push(char);
      flag = false;
    } else if (char === '*' || char === '/') {
      if (!flag) {
        const j = result.length - 1;
        result.splice(j, 0, '(');
      }
      result.push(char);
      flag = true;
    } else {
      // 数字
      result.push(char);
      if (i === str.length - 1 && flag) {
        result.push(')');
      }
    }
  }
  const rr = result.join('');
  console.log(rr);
  return rr;
}
