/* global browser */

const hasBrowser = typeof browser !== 'undefined' 

export const setStorage = (data) => {
  if (!hasBrowser) {
    return Promise.resolve({})
  }
  return browser.storage.local.set({ data })
}

export const getStorage = () => {
  if (!hasBrowser) {
    return Promise.resolve({})
  }
  return browser.storage.local.get('data').then(data => {
    return data
  })
}

export default {
  getStorage,
  setStorage
}
