
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'
import 'leaflet/dist/leaflet.css'

const MapDisplay = ({ startPosition, endPosition }) => {
  return (
    <div className="map-container">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="leaflet-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
      </MapContainer>
    </div>
  )
}

export default MapDisplay
