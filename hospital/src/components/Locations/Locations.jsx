import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    </div>


    
  );
}

