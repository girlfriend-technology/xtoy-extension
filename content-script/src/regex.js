export const appearsToBeRegExp = (x) => x.match(/^\/.*\/[gimsuy]*?/)

export const stringToRegex = (x) => {
  const lastIndexOfSlash = x.lastIndexOf('/')
  const expression = x.substring(1, lastIndexOfSlash)
  const flags = x.substring(lastIndexOfSlash + 1, x.length)
  return new RegExp(expression, flags)
}

export default {
  appearsToBeRegExp,
  stringToRegex
}
