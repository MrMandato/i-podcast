import {
  isEmptyArray,
  dataWithTimestamp,
  getLocalStorage,
  setLocalStorage,
  removeItemLocalStorage,
  removeItemAferXtime
} from './commons.utils'

describe('isEmptyArray', () => {
  test('should return true for an empty array', () => {
    expect(isEmptyArray([])).toBe(true)
  })

  test('should return false for a non-empty array', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false)
  })

  test('should return false for a non-array', () => {
    expect(isEmptyArray('not an array')).toBe(false)
  })

  test('should return false for an undefined', () => {
    expect(isEmptyArray()).toBe(false)
  })
})

describe('dataWithTimestamp', () => {
  test('should return an object with the provided data and a valid timestamp', () => {
    const result = dataWithTimestamp('example data')
    expect(result.data).toBe('example data')
    expect(typeof result.lastUpdate).toBe('number')
  })
})

describe('getLocalStorage', () => {
  test('should return null for a non-existent key', () => {
    expect(getLocalStorage('nonExistentKey')).toBeNull()
  })

  test('should return the parsed value for an existing key in local storage', () => {
    window.localStorage.setItem('key1', JSON.stringify('example value'))
    expect(getLocalStorage('key1')).toBe('example value')
    window.localStorage.removeItem('key1')
  })
})

describe('setLocalStorage', () => {
  test('should set the provided key-value pair in local storage', () => {
    setLocalStorage('key2', 'example value')
    expect(window.localStorage.getItem('key2')).toBe(JSON.stringify('example value'))
    window.localStorage.removeItem('key2')
  })
})

describe('removeItemLocalStorage', () => {
  test('should remove the item with the provided key from local storage', () => {
    window.localStorage.setItem('key3', JSON.stringify('example value'))
    removeItemLocalStorage('key3')
    expect(window.localStorage.getItem('key3')).toBeNull()
  })
})

describe('removeItemAferXtime', () => {
  beforeAll(() => {
    jest.spyOn(window.Date, 'now').mockImplementation(() => 1627898028409) // Mock current time to 1627898028409 (in milliseconds) for consistent results
  })

  afterAll(() => {
    jest.restoreAllMocks() // Restore Date.now() to its original implementation
  })

  test('should do nothing if lastUpdate is not present in local storage', () => {
    removeItemAferXtime('key4')
    expect(window.localStorage.getItem('key4')).toBeNull()
  })

  test('should do nothing if the time difference is less than xtimeInSecond', () => {
    window.localStorage.setItem('key4', JSON.stringify({ lastUpdate: 0 })) // Set lastUpdate to 1627898028400 (in milliseconds)
    removeItemAferXtime('key4')
    expect(window.localStorage.getItem('key4')).not.toBeNull()
    window.localStorage.removeItem('key4')
  })

  test('should remove the item from local storage if the time difference is greater than xtimeInSecond', () => {
    window.localStorage.setItem('key4', JSON.stringify({ lastUpdate: 1627898027390 })) // Set lastUpdate to 1627898027390 (in milliseconds)
    removeItemAferXtime('key4')
    expect(window.localStorage.getItem('key4')).toBeNull()
    window.localStorage.removeItem('key4')
  })
}) 
