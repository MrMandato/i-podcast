import { EpisodesList } from '../../components/episodesList'
import { useLoaderData } from 'react-router-dom'

export const PodcastLayout = () => {
  const episodesElements = useLoaderData()

  return (
    <section >
      <EpisodesList episodesElements={episodesElements} />
    </section>

  )
}
