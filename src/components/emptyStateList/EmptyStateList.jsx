import PropTypes from 'prop-types'

export const EmptyStateList = ({ message = 'list is empty' }) => {
  return (
    <div className='empty-state'>
      <p className='empty-state__message'>{message}</p>
    </div>
  )
}

EmptyStateList.propTypes = {
  message: PropTypes.string
}
