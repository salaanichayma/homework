import React, {useState} from 'react'
import Header from '../components/Header/header'
import Sidebar from '../components/Menu/Sidebar'
import Footer from '../components/Footer/footer'

import './firstpage.css'

import LocationComponent from '../components/Form/MapForm'
import MapDisplay from '../components/Map/map'

const DataPage = () => {
  const [coordinates, setCoordinates] = useState(null);

  return (
    <>
      <Header />
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <div className="left-side">
            <LocationComponent  setCoordinates={setCoordinates}/>
          </div>
          <div className="right-side">
            <MapDisplay  coordinates={coordinates} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default DataPage
