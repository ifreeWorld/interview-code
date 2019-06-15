Array.prototype.selfMap = function(func) {
  var arr = this
  var result = []
  arr.reduce(function(total,cur,idx,src){
    if (idx === 1) {
      result.push(func(total, idx - 1))
    }
    result.push(func(cur, idx))
  })
  return result
}

var arr = [1,2,3,4]

var result = arr.selfMap(item => item + 2)
