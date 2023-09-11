import { podcastListKey } from "../../constants/keys"
import { getLocalStorage, isEmptyArray } from "../../utils/commons"

export const getPodcasts = async () => {
  const applePodcastURL = `https://api.allorigins.win/get?url=${window.encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`

  try {
    const response = await fetch(applePodcastURL)
    if (!response.ok) throw new Error('Network response was not ok.')

    const result = await response.json()
    const podcastElements = JSON.parse(result.contents)
    return podcastElements.feed.entry
  } catch (error) {
    console.error('Error getting podcasts:', error)
    return []
  }
}

export const getEpisodes = async (podcastId) => {
  const podcastURL = `https://api.allorigins.win/get?url=${window.encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`

  try {
    const result = await fetch(podcastURL)
    const response = await result.json()
    const episodesElements = JSON.parse(response.contents)
    return episodesElements.results.slice(1)
  } catch (error) {
    console.error('Error getting episodes:', error)
    return []
  }
}
export const getPodcastFromLocalStorage = () => getLocalStorage(podcastListKey)?.data
export const getPodcastsInfo = (id) => {
  const podcasts = getPodcastFromLocalStorage()
  const emptyPodcast = {
    image: '',
    artist: '',
    title: '',
    summary: '',
    id: ''
  }
  if (isEmptyArray(podcasts)) return emptyPodcast

  const podcast = podcasts?.find(podcasts => podcasts.id.attributes['im:id'] === id)

  const {
    'im:image': [, , { label: image }],
    'im:name': { label: title },
    'im:artist': { label: artist },
    summary: { label },
    id: { attributes: { 'im:id': podcastId } }
  } = podcast

  return {
    image, artist, title, summary: label, id: podcastId
  }
}
