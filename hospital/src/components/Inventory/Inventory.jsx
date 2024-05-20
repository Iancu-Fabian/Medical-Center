import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Inventory.module.css";

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

  const handleInsert = async () => {
    const newItem = {
      medicament_id: 0, // sau orice logică pentru generare ID
      medicament_name: 'New Medicament',
      quantity: 100,
      disease: 'New Disease',
      medical_center_id: 1
    };
    try {
      const response = await fetch('http://localhost:3000/api/inventory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
      });
      if (response.ok) {
        fetchInventory(); // Reîmprospătează lista după inserare
      } else {
        console.error('Eroare la adăugarea itemului în inventar.');
      }
    } catch (error) {
      console.error('Eroare la adăugarea itemului în inventar:', error);
    }
  };

  const handleUpdate = async (id) => {
    const updatedItem = {
      medicament_name: 'Updated Medicament',
      quantity: 200,
      disease: 'Updated Disease',
      medical_center_id: 2
    };
    try {
      const response = await fetch(`http://localhost:3000/api/inventory/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedItem)
      });
      if (response.ok) {
        fetchInventory(); // Reîmprospătează lista după actualizare
      } else {
        console.error('Eroare la actualizarea itemului în inventar.');
      }
    } catch (error) {
      console.error('Eroare la actualizarea itemului în inventar:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/inventory/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        fetchInventory(); // Reîmprospătează lista după ștergere
      } else {
        console.error('Eroare la ștergerea itemului din inventar.');
      }
    } catch (error) {
      console.error('Eroare la ștergerea itemului din inventar:', error);
    }
  };


  useEffect(() => {
    fetchInventory();
  }, []);


  return (
    <div>
      <div className ={styles.tableWrap}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Condition</th>
            <th scope="col">Expires in</th>
            <th scope="col">Medical center</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((inv, index) => (
            <tr key={index}>
              <th scope="row">{inv.medicament_id}</th>
              <td>{inv.medicament_name}</td>
              <td>{inv.quantity}</td>
              <td>{inv.disease}</td>
              <td>{inv.zile_ramase + ' days'}</td>
              <td>{inv.medical_center_id}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => handleUpdate(inv.medicament_id)}>Update</button>
                <button className="btn btn-danger" onClick={() => handleDelete(inv.medicament_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className={styles.buttonContainer}>
        <button type="button" className="btn btn-success" onClick={handleInsert}>Insert</button>
      </div>
    </div>
  );
};

