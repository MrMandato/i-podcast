import { useMemo } from 'react'
import { PodcastList } from '../../components/podcastList'
import { SearchField } from '../../components/searchField'
import { useInput } from '../../hooks/useInput'
import { useLoaderData } from 'react-router-dom'
import { filterPodcast } from '../../utils/podcast/podcast.util'


export const HomePage = () => {
  const [{ value, onChange }] = useInput('')
  const podcastElements = useLoaderData()
  const podcastFilter = useMemo(() => filterPodcast(podcastElements, value), [value, podcastElements?.length])

  return (
    <main className="i-podcast__homepage">
      <SearchField placeholder={'Filter podcasts...'} label={'100'} value={value} onChange={onChange} />
      <PodcastList podcastElements={podcastFilter} />
    </main>
  )
}
