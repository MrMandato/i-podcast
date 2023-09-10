import { memo } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { usePodcast } from '../../hooks/usePodcast'
import './podcastItem.css'

export const PodcastItem = memo(({
  'im:image': [, , { label: image }],
  'im:name': { label: title },
  'im:artist': { label: artist },
  summary,
  id: { attributes: { 'im:id': podcastId } }
}) => {
  const navigate = useNavigate()
  const { setpodcastDetail } = usePodcast()

  const handlerOnclick = () => {
    const podcastSelected = { image, title, artist, summary: summary.label, podcastId }
    setpodcastDetail(podcastSelected)
    navigate(`/podcast/${podcastId}`)
  }
  return (
    <button className='podcast-item' onClick={handlerOnclick} >
      <div className='podcast-item__container'>
        <img className='podcast-item__avatar' src={image} alt={title} />
        <p className='podcast-item__title'>{title}</p>
        <p className='podcast-item__artist'>{artist}</p>
      </div>
    </button >
  )
})

PodcastItem.propTypes = {
  'im:image': PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired
  })).isRequired,
  'im:name': PropTypes.shape({
    label: PropTypes.string.isRequired
  }).isRequired,
  'im:artist': PropTypes.shape({
    label: PropTypes.string.isRequired
  }).isRequired,
  summary: PropTypes.string.isRequired,
  id: PropTypes.shape({
    attributes: PropTypes.shape({
      'im:id': PropTypes.string.isRequired
    })
  })
}

PodcastItem.displayName = 'PodcastItem'
