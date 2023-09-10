import { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getTrackFormat, getDateFormat, getDuration } from '../../utils/episode'


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
  trackName: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  trackTimeMillis: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  episodeUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired
}

EpisodeItem.displayName = 'EpisodeItem'
