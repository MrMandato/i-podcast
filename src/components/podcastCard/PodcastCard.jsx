import PropTypes from 'prop-types'

export const PodcastCard = ({ image, artist, title, summary }) => {
  return (
    <div className='podcast-card'>
      <img src={image} alt={title} />
      <p className='podcast-card__title'>{title}</p>
      <p className='podcast-card__artist'>by:{artist}</p>
      <p className='podcast-card__summary'>{summary}</p>
    </div>
  )
}

PodcastCard.propTypes = {
  image: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

PodcastCard.displayName = 'PodcastCard'

