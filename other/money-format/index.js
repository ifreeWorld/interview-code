var b = 100000.12345

/**
 * 实现千分制，考虑小数点，小数点后面全部保留
 * @param {*} val 
 */
function format(val) {
  var str = ('' + val).split('.')
  if (!str || str.length === 0) {
    return ''
  }
  var input = str[0]
  var after = str[1] || ''
  var result = []
  var cur = 0
  
  for(var i = input.length - 1; i >= 0; i--) {
    if (cur!== 0 && cur % 3 === 0) {
      result.push(',')
    }
    result.push(input[i])
    cur++
  }
  
  var before = result.reverse().join('')
  
  if (after) {
    before += '.' + after
  }
  
  return before
}

console.log(format(b))
console.log(b.toLocaleString())