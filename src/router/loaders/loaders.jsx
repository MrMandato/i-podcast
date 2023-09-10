
import { dataWithTimestamp, getLocalStorage, removeItemAferXtime, setLocalStorage } from "../../utils/commons"
import { getPodcasts, getEpisodes } from "../../services/podcast"
import { podcastListKey, removeLocalStorageTime } from '../../constants/keys'

export const homeLoader = async () => {
  try {
    removeItemAferXtime(podcastListKey, removeLocalStorageTime)
    const dataFromStorage = getLocalStorage(podcastListKey)
    if (dataFromStorage) return dataFromStorage?.data

    const podcastElements = await getPodcasts()
    setLocalStorage(podcastListKey, dataWithTimestamp(podcastElements))

    return podcastElements
  } catch (error) {
    console.error('Error in home loader:', error)
    return []
  }
}

export const podcastLoader = async ({ params }) => {
  try {
    removeItemAferXtime(`PODCAST-DETAIL-${params.podcastId}`, removeLocalStorageTime)
    const dataFromStorage = getLocalStorage(`PODCAST-DETAIL-${params.podcastId}`)
    if (dataFromStorage) return dataFromStorage?.data

    const episodesInfo = await getEpisodes(params.podcastId)
    setLocalStorage(`PODCAST-DETAIL-${params.podcastId}`, dataWithTimestamp(episodesInfo))

  } catch (error) {
    console.error('Error in podcast loader:', error)
    return []
  }

}