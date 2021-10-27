import React from 'react'
import PropTypes from 'prop-types'
import { IoIosClose } from 'react-icons/io'

export default function Tag({ name, onCloceBtn }) {
  return (
    <span className='tag'>
      {name}
      <i onClick={onCloceBtn}>
        <IoIosClose size={25} />
      </i>
    </span>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  onCloceBtn: PropTypes.func,
}
