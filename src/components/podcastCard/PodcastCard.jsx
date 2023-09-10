import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPodcastsInfo } from '../../services/podcast'

export const PodcastCard = ({ image, artist, title, summary }) => {
  const { podcastId } = useParams()
  const [cardData, setCardData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    console.log(podcastId)
    if ([image, artist, title, summary]
      .includes(undefined)) {
      const podcastStorage = getPodcastsInfo(podcastId)
      if (podcastStorage.id === '') {
        navigate("/")
        return
      }
      setCardData(podcastStorage)
      console.log('console.info: get podcast from localStorage')
      return
    }
  }, [])

  return (
    <div className='podcast-card'>
      <img src={image || cardData?.image} alt={title} />
      <p className='podcast-card__title'>{title || cardData?.title}</p>
      <p className='podcast-card__artist'>by:{artist || cardData?.artist}</p>
      <p className='podcast-card__summary'>{summary || cardData?.summary}</p>
    </div>
  )
}

PodcastCard.propTypes = {
  image: PropTypes.string,
  artist: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string
}

PodcastCard.displayName = 'PodcastCard'

