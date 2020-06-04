function jsonp(url, name, success) {
  var script = document.createElement('script')
  script.src = url
  window[name] = function(data) {
    success(data)
  }

  document.body.appendChild(script)
}

jsonp('https://webconf.douyucdn.cn/resource/common/fans_medal_web_v2.json', 'DYConfigCallback', function(data) {
  console.log(data)
})

<script src="http://www.baidu.com?callback=aaa"></script>
<script>
window.aaa = function(data) {
  console.log(data)
}
</script>
