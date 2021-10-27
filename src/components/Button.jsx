import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ name, onClick, disabled, className }) {
  return (
    <button
      className={`default-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}
