import PropTypes from 'prop-types'

export const EpisodeCard = ({ trackName, description, episodeUrl }) => {
  return (
    <div className='episode-card'>
      <p className='episode-card__title'>{trackName}</p>
      <p className='episode-card___description'>{description}</p>
      <audio controls className='episode-card__audio'>
        <source src={episodeUrl} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  )
}

EpisodeCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  episodeUrl: PropTypes.string.isRequired
}
