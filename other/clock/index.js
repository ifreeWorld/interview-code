/**
 * 求分针和时针的夹角
 * 总共360度，12个刻度，每个是30度
 * 一小时，时针走30度，分针走360度
 * h小时，时针走30 * h + (m / 60) * 30
 * m分钟，分针走(m / 60) * 360
 * 
 * @param {Number} h 小时
 * @param {Number} m 分钟
 */
function getValue(h, m) {
  var hvalue = 30 * h + (m / 60) * 30
  var mvalue = (m / 60) * 360
  return Math.abs(mvalue - hvalue)
}
