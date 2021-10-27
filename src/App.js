import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TextField from './components/TextField'
import Item from './components/Item'
import { useLocalStorage } from 'react-use'
import mockedData from './mockData'

function App() {
  const [data, setData] = useLocalStorage('data', mockedData)
  const [filterValue, setFilterValue] = useState('')
  const [searchResults, setSearchResults] = useState(data)
  const [searchTerm, setSearchTerm] = useState(null)
  const removeTag = (id, tag) => {
    const itemIndex = data.findIndex((item) => item.id === id)
    const item = { ...data[itemIndex] }
    item.tags.splice(item.tags.indexOf(tag), 1)
    const newData = [...data]
    newData[itemIndex] = item
    setData(newData)
  }
  const addTag = (id, tag) => {
    const itemIndex = data.findIndex((item) => item.id === id)
    const item = { ...data[itemIndex] }
    if (!item.tags) {
      item.tags = [tag]
    } else {
      item.tags.push(tag)
    }
    const newData = [...data]
    newData[itemIndex] = item
    setData(newData)
  }

  useEffect(() => {
    const results = searchTerm
      ? data.filter((item) => {
          return item?.tags?.length > 0 ? item.tags.includes(searchTerm) : false
        })
      : data
    setSearchResults(results)
  }, [data, searchTerm])

  return (
    <div className='App'>
      <div className='container'>
        <div className='search-container'>
          <TextField
            type='search'
            placeholder='Search Tags'
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            onSubmit={() => setSearchTerm(filterValue)}
          />
        </div>
        {searchResults?.length > 0 ? (
          searchResults.map((item, key) => (
            <Item item={item} key={key} addTag={addTag} removeTag={removeTag} />
          ))
        ) : (
          <div>
            Sorry we couldn&apos;t find any record with tag: {searchTerm}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
