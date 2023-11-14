

import React, { useState} from 'react'

import SearchBarWithDropdown from '../Searchinput/searchinput'
import './MapForm.css'
import getLocations from '../../services/getLocations'


const LocationComponent = () => {
  const [startData, setStartData] = useState([])
  const [isLoading, setIsloading] = useState(false)


 

  const handleStartInputChange = async (searchText) => {
    setIsloading(true)
    await getLocations(searchText).then((data)=>{
    setIsloading(false)
    setStartData(data)
    }
    ).catch(()=>{
      setIsloading(false)
    })
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
        isLoading={isLoading}
        required={true}
        
      />
     
    </form>
  )
}

export default LocationComponent
