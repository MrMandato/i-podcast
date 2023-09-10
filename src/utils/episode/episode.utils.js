export const getTrackFormat = (trackName) => {
  /* const [episodeNumber, episodeName] = trackName.split('|')
  return [episodeNumber, episodeName.replace(/"/g, '')] */
  return trackName.replace(/"/g, '')
}

export const getDateFormat = (dateWithoutFormat) => {
  const date = new Date(dateWithoutFormat)
  const dateFormat = new Intl.DateTimeFormat('en-US').format(date)
  return dateFormat
}

export const getDuration = (timeMillis) => {
  if (!timeMillis) return 'N/A'
  const seg = Math.floor((timeMillis / 1000) % 60)
  const min = Math.floor((timeMillis / (1000 * 60)) % 60)
  const hour = Math.floor((timeMillis / (1000 * 60 * 60)) % 24)

  const minSegFormat = `${min.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${seg.toLocaleString(undefined, { minimumIntegerDigits: 2 })}`

  if (hour === 0) {
    return minSegFormat
  }

  return `${hour.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${minSegFormat}`

}