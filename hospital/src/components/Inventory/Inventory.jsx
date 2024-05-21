import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from "./Inventory.module.css";
import axios from 'axios';

export const InventoryList = () => {
  const [inventory, setInventory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    medicament_id: '',
    medicament_name: '',
    quantity: '',
    disease: '',
    medical_center_id: ''
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const fetchInventory = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/inventory', {mode:'cors'});
      const data = await response.json();
      setInventory(data);
    } catch (error) {
      console.error('Eroare la obținerea listei de medicamente:', error);
    }
  };

  const handleInsert = async () => {
    setIsUpdate(false);
    setFormData({
      medicament_id: 0,
      medicament_name: '',
      quantity: '',
      disease: '',
      medical_center_id: ''
    });
    setShowModal(true);
  };

  const handleUpdate = (id) => {
    const itemToUpdate = inventory.find(item => item.medicament_id === id);
    setFormData({
      medicament_id: itemToUpdate.medicament_id,
      medicament_name: itemToUpdate.medicament_name,
      quantity: itemToUpdate.quantity,
      disease: itemToUpdate.disease,
      medical_center_id: itemToUpdate.medical_center_id
    });
    setUpdateId(id);
    setIsUpdate(true);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/inventory/${id}`);
      if (response.status === 200) {
        fetchInventory();
      } else {
        console.error('Eroare la ștergerea itemului din inventar.');
      }
    } catch (error) {
      console.error('Eroare la ștergerea itemului din inventar:', error);
    }
  };

  const handleSave = async () => {
    try {
      if (isUpdate) {
        const response = await axios.put(`http://localhost:3000/api/inventory/${updateId}`, formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.status === 200) {
          fetchInventory();
        } else {
          console.error('Eroare la actualizarea itemului în inventar.');
        }
      } else {
        const response = await axios.post('http://localhost:3000/api/inventory', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.status === 201) {
          fetchInventory();
        } else {
          console.error('Eroare la adăugarea itemului în inventar.');
        }
      }
    } catch (error) {
      console.error('Eroare la salvarea itemului în inventar:', error);
    } finally {
      setShowModal(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div>
      <div className={styles.tableWrap}>
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
                  <Button variant="primary" className="me-2" onClick={() => handleUpdate(inv.medicament_id)}>Update</Button>
                  <Button variant="danger" onClick={() => handleDelete(inv.medicament_id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="success" onClick={handleInsert}>Insert</Button>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isUpdate ? 'Update Item' : 'Insert Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="medicament_name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="medicament_name"
                value={formData.medicament_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="disease">
              <Form.Label>Disease</Form.Label>
              <Form.Control
                type="text"
                name="disease"
                value={formData.disease}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="medical_center_id">
              <Form.Label>Medical Center ID</Form.Label>
              <Form.Control
                type="number"
                name="medical_center_id"
                value={formData.medical_center_id}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>{isUpdate ? 'Update' : 'Insert'}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};