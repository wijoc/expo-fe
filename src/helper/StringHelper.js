export const ShortenStr = function (str, limit) {
  const strLimit = isNaN(limit) ? 20 : limit
  let newStr = str.trimLeft().substr(0, 35)

  if (str.trimLeft().length > strLimit) {
    newStr = newStr + '...'
  }
  return newStr
}
