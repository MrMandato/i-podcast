import { useLocation } from 'react-router-dom'
import { EpisodeCard } from '../../components/episodeCard'

export const EpisodeLayout = () => {
  const { state: episodeInfo } = useLocation()
  return (
    <section className='episode-layout'>
      <EpisodeCard {...episodeInfo} />
    </section>

  )
}
