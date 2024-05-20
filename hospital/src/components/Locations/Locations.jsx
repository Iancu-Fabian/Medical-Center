import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl: iconUrl,
  shadowUrl: iconShadowUrl,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

export const LocationsList = () => {
  const [locations, setLocations] = useState([]);

  

  const fetchLocations = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/centers', {mode:'cors'});
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error('Eroare la obținerea listei de doctori:', error);
    }
  };

  const handleMarkerClick1 = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/C%C4%83min+Leu+A/@44.4338206,26.0540088,17z/data=!4m12!1m5!3m4!2zNDXCsDU2JzM1LjUiTiAyNMKwNTgnMDAuNSJF!8m2!3d45.9432!4d24.9668!3m5!1s0x40b201db2e1c6995:0x6ed521e82cb68d45!8m2!3d44.4340961!4d26.0552768!16s%2Fg%2F12hwh8gq5?entry=ttu`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleMarkerClick2 = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/Spitalul+Clinic+de+Psihiatrie+%E2%80%9EProfesor+Doctor+Alexandru+Obregia%E2%80%9D/@44.4483122,26.0164911,12.53z/data=!4m6!3m5!1s0x40b1fe6c93b025bd:0x39239ef1fee1da77!8m2!3d44.3873798!4d26.1271342!16s%2Fg%2F1tfh34dj?entry=ttu`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleMarkerClick3 = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/Reteaua+de+Sanatate+REGINA+MARIA+-+Policlinica+Centrala+Craiova/@44.3230307,23.7935958,17z/data=!3m1!4b1!4m6!3m5!1s0x4752d7738b115e27:0x175cb134bf186dfa!8m2!3d44.3230269!4d23.7961707!16s%2Fg%2F1hc3g1dr1?entry=ttu`;
    window.open(googleMapsUrl, '_blank');
  };


  useEffect(() => {
    fetchLocations();
  }, []);


  return (
    <div>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
   {locations.map((center, index) => (
            <tr key={index}>
    <th scope="row">{center.medical_center_id}</th>
    <td>{center.medical_center_name}</td>
    <td>{center.medical_center_city}</td>
  </tr>
))}
  </tbody>
</table>
    <MapContainer center={[44.4168886,24.9172066]} zoom={9} style={{ height: "60vh", width: "99%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[44.4340206,26.055578]} eventHandlers={{ click: handleMarkerClick1 }}>
        <Popup>
          <a href="https://www.google.com/maps?q=45.9432,24.9668" target="_blank" rel="noopener noreferrer">Click aici pentru a deschide în Google Maps</a>
        </Popup>
      </Marker>
      <Marker position={[44.3859, 26.1246]} eventHandlers={{ click: handleMarkerClick2 }}>
        <Popup>
          <a href="https://www.google.com/maps?q=45.9432,24.9668" target="_blank" rel="noopener noreferrer">Click aici pentru a deschide în Google Maps</a>
        </Popup>
      </Marker>
      <Marker position={[44.3230307,23.7935958]} eventHandlers={{ click: handleMarkerClick3 }}>
        <Popup>
          <a href="https://www.google.com/maps?q=45.9432,24.9668" target="_blank" rel="noopener noreferrer">Click aici pentru a deschide în Google Maps</a>
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  

    
  );
}




