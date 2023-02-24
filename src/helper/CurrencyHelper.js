export const currencyFormat = function (value, separator, prefix) {
  var decimalSeparator = separator === '.' ? ',' : '.'
  // var num = value.toString().replace(/\$,/g, '')
  var num = Number(value)
  if (isNaN(num)) {
    num = '0'
  }

  var sign = (num == (num = Math.abs(num))) // eslint-disable-line
  num = Math.floor(num * 100 + 0.50000000001)
  var decimal = num % 100
  num = Math.floor(num / 100).toString()

  if (decimal < 10) {
    decimal = '0' + decimal
  }
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + separator + num.substring(num.length - (4 * i + 3))
  }

  return (((sign) ? '' : '-') + prefix + num + decimalSeparator + decimal)
}

export const currencyAbbreviate = function (value, minValue, maxDecimal) {
  var num = Number(value).toFixed(0)

  if (isNaN(num)) {
    num = 0
  }

  if (num >= minValue) {
    var suffixes = ['', 'rb', 'jt', 'mil', 'tri'] // Use this for indonesia abbrev
    // var suffixes = ['', 'K', 'M', 'B', 'T'] // Use this for global abbrev

    var suffixIndex = Math.floor((('' + num).length - 1) / 3)

    var abbreviatedValue = parseFloat(suffixIndex !== 0 ? (num / Math.pow(1000, suffixIndex)) : num)
    abbreviatedValue = (maxDecimal >= 0 ? abbreviatedValue.toFixed(maxDecimal) : abbreviatedValue.toFixed(2))

    return 'Rp ' + abbreviatedValue + suffixes[suffixIndex]
  } else {
    return currencyFormat(num, '.', 'Rp')
  }
}
