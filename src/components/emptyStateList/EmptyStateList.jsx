import PropTypes from 'prop-types'
import './emptyStateList.css'
export const EmptyStateList = ({ message = 'list is empty' }) => {
  return (
    <div className='empty-state h3'>
      <p className='empty-state__message'>{message}</p>
    </div>
  )
}

EmptyStateList.propTypes = {
  message: PropTypes.string
}
