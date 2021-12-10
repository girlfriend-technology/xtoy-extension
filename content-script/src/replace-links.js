import { getStorage } from './storage'
import filter from 'lodash/filter'

const replaceLinks = (links) => {
  getStorage().then(({ data }) => {
    const linksData = filter(data, { enabled: true, links: true })
    linksData.forEach(({ x, y }) => {
      links.forEach(el => {
        el.href = el.href.replace(x, y)
      })
    })
  })
}

export default replaceLinks
