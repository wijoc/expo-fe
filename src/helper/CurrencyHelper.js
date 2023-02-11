export const currencyFormat = function (value, separator, prefix) {
  var decimalSeparator = separator === '.' ? ',' : '.'
  var num = value.toString().replace(/\$,/g, '')
  if (isNaN(num)) {
    num = '0'
  }

  var sign = (num == (num = Math.abs(num))) // eslint-disable-line
  num = Math.floor(num * 100 + 0.50000000001)
  var cents = num % 100
  num = Math.floor(num / 100).toString()

  if (cents < 10) {
    cents = '0' + cents
  }
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + separator + num.substring(num.length - (4 * i + 3))
  }

  return (((sign) ? '' : '-') + prefix + num + decimalSeparator + cents)
}
