const apiDomain = 'http://localhost:8000/api/'
const prefix = 'beta/'

export const shopUrl = apiDomain + prefix + 'stores/'
export const productUrl = apiDomain + prefix + 'products/'
export const productCategoryUrl = apiDomain + prefix + 'categories/product'
export const shopCategoryUrl = apiDomain + prefix + 'categories/shop/'

export const headers = {
  Authorization: 'Bearer ' + localStorage.getItem('access_token')
}

export const getHeaders = function (extraHeader = {}) {
  const main = {
    Authorization: 'Bearer ' + localStorage.getItem('access_token')
  }

  const newHeader = Object.assign(main, extraHeader)

  return newHeader
}
