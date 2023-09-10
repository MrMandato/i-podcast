import { useState } from 'react'
import { podcastContext } from './podcast.context'
import PropTypes from 'prop-types'


export const PodcastProvider = ({ children }) => {
  const [podcastDetail, setpodcastDetail] = useState({})
  return (
    <podcastContext.Provider value={{ podcastDetail, setpodcastDetail }}>
      {children}
    </podcastContext.Provider>
  )
}

PodcastProvider.propTypes = {
  children: PropTypes.node.isRequired
}
