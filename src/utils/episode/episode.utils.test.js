import {
  getTrackFormat,
  getDateFormat,
  getDuration
} from './episode.utils'

describe('getTrackFormat', () => {
  test('should returns track name without quotes', () => {
    const trackName = '"Episode 1"|"Title"'
    const result = getTrackFormat(trackName)
    expect(result).toEqual('Episode 1|Title')
  })

  test('should returns same track name if the track name do not have quotes ', () => {
    const trackName = 'Episode 1|Title'
    const result = getTrackFormat(trackName)
    expect(result).toEqual(trackName)
  })
})

describe('getDateFormat', () => {
  test('returns formatted date', () => {
    const dateWithoutFormat = '2021-01-01T12:00:00Z'
    const result = getDateFormat(dateWithoutFormat)
    expect(result).toEqual('1/1/2021')
  })
})

describe('getDuration', () => {

  test('returns formatted duration', () => {
    const timeMillis = 3600000
    const result = getDuration(timeMillis)
    expect(result).toEqual('01:00:00')
  })

  test('returns formatted duration without hour', () => {
    const timeMillis = 600000
    const result = getDuration(timeMillis)
    expect(result).toEqual('10:00')
  })

  test('returns N/A if timeMillis is falsy', () => {
    const result = getDuration(null)
    expect(result).toEqual('N/A')
  })
})
