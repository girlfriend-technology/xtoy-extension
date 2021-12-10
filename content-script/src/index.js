import replaceLinks from './replace-links'
import walkTree from './walk-tree'

replaceLinks(document.querySelectorAll('a[href]'))
walkTree(document.body)
