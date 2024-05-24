import { isEmptyArray } from "../commons"

export const filterPodcast = (podcastElements, search) => {
  if (isEmptyArray(podcastElements)) return []
  return podcastElements
    .filter(({ 'im:name': { label: title }, 'im:artist': { label: artist } }) => (
      title.toLowerCase().includes(search) || artist.includes(search)) /* TODO: fix el filtro  agregando toLowerCase()) */
    )
}

