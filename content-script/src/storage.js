/* global browser */

export const getStorage = async () => {
  return browser.storage.local.get('data').then(data => {
    return data
  })
}

export default {
  getStorage
}
