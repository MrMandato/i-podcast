import { podcastListKey } from "../../constants/keys"
import { getLocalStorage, isEmptyArray } from "../../utils/commons"

export const getPodcasts = async () => {
  const applePodcastURL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

  try {
    const result = await fetch(applePodcastURL)
    const response = await result.json()
    const podcastElements = response.feed.entry
    return podcastElements
  } catch (error) {
    console.error('Error getting podcasts:', error)
    return []
  }
}

export const getEpisodes = async (podcastId) => {
  const podcastURL = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`

  try {
    const result = await fetch(podcastURL)
    const response = await result.json()
    const episodesElements = response.results.slice(1)
    return episodesElements
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
    summary: ''
  }

  if (isEmptyArray(podcasts)) return emptyPodcast
  console.log(podcasts)
  const podcast = podcasts.find(podcasts => podcasts.id.attributes['im:id'] === id)
  const {
    'im:image': [, , { label: image }],
    'im:name': { label: title },
    'im:artist': { label: artist },
    summary: { label }
  } = podcast
  return {
    image, artist, title, summary: label
  }
}
