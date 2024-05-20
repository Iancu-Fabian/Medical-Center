import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const InventoryList = () => {
  const [inventory, setInventory] = useState([]);

  

  const fetchInventory = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/inventory', {mode:'cors'});
      const data = await response.json();
      setInventory(data);
    } catch (error) {
      console.error('Eroare la obținerea listei de doctori:', error);
    }
  };


  useEffect(() => {
    fetchInventory();
  }, []);


  return (
    <div>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Condition</th>
      <th scope="col">Medical center</th>
    </tr>
  </thead>
  <tbody>
   {inventory.map((inv, index) => (
            <tr key={index}>
    <th scope="row">{inv.medicament_id}</th>
    <td>{inv.medicament_name}</td>
    <td>{inv.quantity}</td>
    <td>{inv.disease}</td>
    <td>{inv.medical_center_id}</td>
  </tr>
))}
  </tbody>
</table>
    </div>


    
  );
}

