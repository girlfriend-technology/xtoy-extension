import { appearsToBeRegExp, stringToRegex } from './regex'
import { getStorage } from './storage'

const replaceText = (node) => {
  getStorage().then(({ data }) => {
    let text = node.nodeValue
    data.forEach(({ enabled, links, x, y }) => {
      if (links || !enabled) {
        return
      }
      if (appearsToBeRegExp(x)) {
        text = text.replace(stringToRegex(x), y)
      } else {
        text = text.replace(x, y)
      }
    })
    node.nodeValue = text
  })
}

export default replaceText
