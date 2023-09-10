import { Outlet } from 'react-router-dom'
import { PodcastCard } from '../../components/podcastCard'
import { usePodcast } from '../../hooks/usePodcast'

export const PodcastPage = () => {
  const { podcastDetail } = usePodcast()
  return (
    <section className='podcast-page'>
      <aside className='podcast-page__aside'>
        <PodcastCard {...podcastDetail} />
      </aside>
      <main className='podcast-page__main'>
        <Outlet />
      </main>
    </section>

  )
}
