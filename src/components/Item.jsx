import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'
import TextField from './TextField'
import Button from './Button'

export default function Item({ item, addTag, removeTag }) {
  const { id, name, created_at } = item
  const [tagValue, setTagValue] = useState('')
  const { tags } = item
  const handleAddTag = () => {
    addTag(id, tagValue)
    setTagValue('')
  }
  return (
    <div className='item'>
      <div className='item-info'>
        <span className='name'>{name}</span>
        <span className='value'>Field:{created_at}</span>
      </div>
      <div className='item-tags'>
        {tags?.length > 0
          ? tags.map((tag, index) => (
              <Tag
                key={index}
                name={tag}
                onCloceBtn={() => removeTag(id, tagValue)}
              />
            ))
          : null}
      </div>
      <div className='item-input'>
        <TextField
          value={tagValue}
          onChange={(e) => setTagValue(e.target.value)}
        />
      </div>
      <div className='item-add-btn'>
        <Button
          name='Add Tag'
          onClick={handleAddTag}
          disabled={tags?.length >= 5 ? true : false}
          className={tags?.length >= 5 ? 'disabled' : null}
        />
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  addTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
}
