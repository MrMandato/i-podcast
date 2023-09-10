import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPodcastsInfo } from '../../services/podcast'
import { usePodcast } from '../../hooks/usePodcast'

export const PodcastCard = ({ image, artist, title, summary }) => {
  const { podcastId } = useParams()
  const [cardData, setCardData] = useState({})
  const { setpodcastDetail } = usePodcast()
  useEffect(() => {
    console.log(podcastId)
    if ([image, artist, title, summary]
      .includes(undefined)) {
      setCardData(getPodcastsInfo(podcastId))
      console.log('console.info: get podcast from localStorage')
      return
    }

  }, [])

  useEffect(() => {
    setpodcastDetail(cardData)
  }, [cardData])


  console.log('card data', cardData)

  return (
    <div className='podcast-card'>
      <img src={image} alt={title} />
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

