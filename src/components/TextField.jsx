import React from 'react'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'

export default function TextField({
  value = '',
  placeholder = 'Placeholder',
  onChange,
  onSubmit,
  type = 'text',
}) {
  const handleKeyDown = (event) => {
    if (type === 'search' && event.key === 'Enter') {
      onSubmit()
    }
  }
  return (
    <div
      className={type === 'search' ? 'search-input' : ''}
      style={{
        border: type === 'search' ? '1px solid #cbced0' : '',
        borderRadius: type === 'search' ? '7px' : '',
        paddingLeft: type === 'search' ? '10px' : '',
      }}
    >
      {type === 'search' ? (
        <FaSearch className='search-icon' onClick={onSubmit} />
      ) : null}
      <input
        style={{ border: type === 'search' ? 'none' : '' }}
        value={value}
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

TextField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  type: PropTypes.string,
}
