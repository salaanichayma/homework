// LocationComponent.js

import React, { useState, useEffect } from 'react'
import _debounce from 'lodash/debounce'
import SearchBarWithDropdown from '../Searchinput/searchinput'
import './MapForm.css'
import getLocations from '../../services/getLocations'

const LocationComponent = () => {
  const [startData, setStartData] = useState([])
  const [endData, setEndData] = useState([])
  const [startSearchText, setStartSearchText] = useState('')
  const [endSearchText, setEndSearchText] = useState('')

  const debouncedStartSearch = _debounce(async (searchText) => {
    const locations = await getLocations(searchText)
    setStartData(locations)
  }, 500)

  const debouncedEndSearch = _debounce(async (searchText) => {
    const locations = await getLocations(searchText)
    setEndData(locations)
  }, 500)

  const handleStartInputChange = (searchText) => {
    setStartSearchText(searchText)
    debouncedStartSearch(searchText)
  }

  const handleEndInputChange = (searchText) => {
    setEndSearchText(searchText)
    debouncedEndSearch(searchText)
  }

  return (
    <form className="form">
      <label className="labelName">
        <span className="required">*</span>Start:
      </label>
      <SearchBarWithDropdown
        placeholder="Start (stop, address, POI)"
        options={startData}
        onChange={handleStartInputChange}
      />
      <label className="labelName">
        <span className="required">*</span>End:
      </label>
      <SearchBarWithDropdown
        placeholder="End (stop, address, POI)"
        options={endData}
        onChange={handleEndInputChange}
      />
    </form>
  )
}

export default LocationComponent
