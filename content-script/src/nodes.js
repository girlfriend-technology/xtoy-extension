import { IGNORE_CLASSES, IGNORE_TAGS } from './constants/ignores'

export const shouldIgnoreNode = (node) => {
  const tagName = node.tagName ? node.tagName.toLowerCase() : ''
  const classList = node.classList || ''
  return IGNORE_TAGS.includes(tagName) || IGNORE_CLASSES.includes(classList)
}

export default {
  shouldIgnoreNode
}
