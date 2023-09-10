import { Outlet } from 'react-router-dom'
import { PodcastCard } from '../../components/podcastCard'
import { usePodcast } from '../../hooks/usePodcast'
import './podcastPage.css'
import { useHandlerSpinner } from '../../hooks/useHandlerSpinner/useHandlerSpinner'

export const PodcastPage = () => {
  const { podcastDetail } = usePodcast()
  useHandlerSpinner()
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
