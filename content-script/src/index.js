/* global MutationObserver */
import replaceLinks from './replace-links'
import walkTree from './walk-tree'
import debounce from 'lodash/debounce'

const walkTreeDebounced = debounce(walkTree, 100)
const replaceLinksDebounced = debounce(replaceLinks, 100)

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    replaceLinksDebounced(document.querySelectorAll('a[href]'))
    walkTreeDebounced(document.body)
  })
})

observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true
})

replaceLinks(document.querySelectorAll('a[href]'))
walkTree(document.body)
