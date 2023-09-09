import { HomePage } from '../../pages/homePage'
import { PodcastPage } from '../../pages/podcastPage/PodcastPage'
import { PodcastLayout } from '../../layout/podcastLayout'
import { EpisodeLayout } from '../../layout/episodeLayout'

const homeRoute = {
  path: '/',
  element: <HomePage />
}

const podcastRoute = {
  path: '/podcast/:podcastId',
  element: <PodcastPage />,
  children: [
    {
      path: '',
      element: <PodcastLayout />
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