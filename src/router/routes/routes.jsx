import { HomePage } from '../../pages/homePage'
import { PodcastPage } from '../../pages/podcastPage/PodcastPage'
import { PodcastLayout } from '../../layout/podcastLayout'
import { EpisodeLayout } from '../../layout/episodeLayout'
import { homeLoader, podcastLoader } from '../loaders'

export const homeRoute = {
  path: '/',
  element: <HomePage />,
  loader: homeLoader

}

const podcastRoute = {
  path: '/podcast/:podcastId',
  element: <PodcastPage />,
  children: [
    {
      path: '',
      element: <PodcastLayout />,
      loader: podcastLoader
    },
    {
      path: 'episode/:episodeId',
      element: <EpisodeLayout />
    }

  ]
}


export default [
  homeRoute,
  podcastRoute
]