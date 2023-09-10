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
