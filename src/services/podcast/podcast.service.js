export const getPodcasts = async () => {
  try {
    const applePodcastURL = import.meta.env.VITE_APPLE_PODCAST_URL
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
  const podcastURL = `${import.meta.env.VITE_APPLE_PODCAST_EPISODES_URL_PRE}${podcastId}${import.meta.env.VITE_APPLE_PODCAST_EPISODES_URL_POST}`

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
