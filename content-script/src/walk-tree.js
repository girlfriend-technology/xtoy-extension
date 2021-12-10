/* global Node */
import { shouldIgnoreNode } from './nodes'
import replaceText from './replace-text'

const walkTree = (node) => {
  let child
  let next

  if (shouldIgnoreNode(node)) {
    return
  }

  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
    case Node.DOCUMENT_NODE:
    case Node.DOCUMENT_FRAGMENT_NODE:
      child = node.firstChild
      while (child) {
        next = child.nextSibling
        walkTree(child)
        child = next
      }
      break
    case Node.TEXT_NODE:
      replaceText(node)
      break
    default:
      break
  }
}

export default walkTree
