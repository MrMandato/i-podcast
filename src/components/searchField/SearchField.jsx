
import PropTypes from 'prop-types'
import './searchField.css'

export const SearchField = ({ label, placeholder, value, onChange }) => {
  return (
    <div className='search-field'>
      <form className='search-field__form'>
        <label
          className='search-field__form__label'
          htmlFor="search">
          {label}
        </label>
        <input
          autoComplete='off'
          className='search-field__form__input'
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
