
import PropTypes from 'prop-types'

export const SearchField = ({ label, placeholder, value, onChange }) => {
  return (
    <div className='homepage'>
      <form className='homepage__form'>
        <label
          className='homepage__form__label'
          htmlFor="search">
          {label}
        </label>
        <input
          className='homepage__form__input'
          type="text"
          id="search"
          name="search"
          aria-label={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  )
}

SearchField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}
