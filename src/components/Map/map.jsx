
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';


const customIcon = new L.Icon({
  iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png', 
  iconSize: [40, 40],
  iconAnchor: [20, 40], 
});

const MapDisplay = ({ coordinates }) => {

  
  return (
    <div className="map-container">
    <MapContainer center={[51.505, -0.09]} zoom={13} className="leaflet-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coordinates && <Marker position={coordinates} icon={customIcon} />}
    </MapContainer>
  </div>
  )
}

export default MapDisplay
