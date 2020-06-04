function getMostWord(str) {
  var temp = str.trim()
  var list = temp.match(/[A-z]+/g)
  var map = {}
  list.forEach(item => {
    if (!map[item]) {
      map[item] = 0
    }
    map[item] += 1
  })

  var result = []
  for (var key in map) {
    result.push(
      {
        count: map[key],
        key: key
      }
    )
  }

  result.sort((a, b) => {
    return a.count - b.count < 0 ? 1 : -1
  })
  return result[0].key
}

var a = 'wangzilong wangzilong, 123kld,kjlpoq,lakd'
console.log(getMostWord(a))