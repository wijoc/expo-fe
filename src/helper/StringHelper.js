export const shortenStr = function (str, limit) {
  const strLimit = isNaN(limit) ? 20 : limit
  let newStr = str.trimLeft().substr(0, 35)

  if (str.trimLeft().length > strLimit) {
    newStr = newStr + '...'
  }
  return newStr
}

export const createSlug = function (str) {
  var strArr = str.replace(/[!@^-_=|;&/\\#,\s\s+()$~%.'":*?<>{}]/g, ' ').replace(/\s\s+/g, ' ').split(' ')
  var slug = ''
  strArr.forEach((element) => {
    if (element && element.length > 0) {
      slug += (slug !== '' ? '-' : '') + element.toLowerCase()
    }
  })

  return slug
}
