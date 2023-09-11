import { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getTrackFormat, getDateFormat, getDuration } from '../../utils/episode'
import './episodeItem.css'

export const EpisodeItem = memo(({
  trackName,
  releaseDate,
  trackTimeMillis,
  description,
  episodeUrl,
  trackId }) => {
  const track = getTrackFormat(trackName)
  const releaseDateFormat = getDateFormat(releaseDate)
  const durationFormat = getDuration(trackTimeMillis)
  return (
    <Link to={`episode/${trackId}`} state={{ trackName, description, episodeUrl }}>
      <div className="episode-item">
        <p className='episode-item__title'>{track}</p>
        <p className='episode-item__date'>{releaseDateFormat}</p>
        <p className='episode-item__duration'>{durationFormat}</p>
      </div>
    </Link>
  )
})

EpisodeItem.propTypes = {
  trackName: PropTypes.string,
  releaseDate: PropTypes.string,
  trackTimeMillis: PropTypes.number,
  description: PropTypes.string,
  episodeUrl: PropTypes.string,
  trackId: PropTypes.number
}

EpisodeItem.displayName = 'EpisodeItem'
