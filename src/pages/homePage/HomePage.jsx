import { useMemo, useEffect } from 'react'
import { PodcastList } from '../../components/podcastList'
import { SearchField } from '../../components/searchField'
import { useInput } from '../../hooks/useInput'
import { useLoaderData } from 'react-router-dom'
import { filterPodcast } from '../../utils/podcast/podcast.util'
import { useHandlerSpinner } from '../../hooks/useHandlerSpinner/useHandlerSpinner'

export const HomePage = () => {
  const [{ value, onChange }] = useInput('')
  const podcastElements = useLoaderData()
  const podcastFilter = useMemo(() => filterPodcast(podcastElements, value), [value, podcastElements?.length])
  useHandlerSpinner()

  return (
    <main className="i-podcast__homepage">
      <SearchField placeholder={'Filter podcasts...'} label={podcastFilter?.length} value={value} onChange={onChange} />
      <PodcastList podcastElements={podcastFilter} />
    </main>
  )
}
