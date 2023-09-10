export const isEmptyArray = (array) => {
  if (!Array.isArray(array)) return false
  return array.length === 0
}

export const dataWithTimestamp = (data) => ({
  data,
  lastUpdate: new Date().getTime()
})

export const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))

export const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const removeItemLocalStorage = (key) => window.localStorage.removeItem(key);

export const removeItemAferXtime = (key, xtimeInSecond = 10) => {
  const lastUpdate = getLocalStorage(key)?.lastUpdate
  if (!lastUpdate) return
  const currentTime = new Date().getTime()
  const timeDiff = currentTime - lastUpdate
  const secondDiff = Math.floor(timeDiff / (1000))

  if (secondDiff > xtimeInSecond) {
    console.info('i-podcast:local storage was deleted')
    removeItemLocalStorage(key)
  }
}

export const generateId = () => {
  const random = Math.random().toString(36).substring(2)
  const date = Date.now().toString(36)
  return date + random
}