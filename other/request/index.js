/**
 * ajax封装promise
 * @param {*} url 
 * @param {*} method 
 */
function ajax(url, method) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest()
    request.open(method, url, true)
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        resolve(request.responseText)
      }
    }
    if (method.toLocaleLowerCase() === 'post') {
      request.setRequestHeader(
        'Content-Type',
        'application/x-www-form-urlencoded'
      )
    }
    request.send()
  })
}

ajax(
  'https://das01v.bda.shjt2.360es.cn/zuul/data-visualize-common/group/list',
  'get'
).then(res => {
  console.log(res)
})

