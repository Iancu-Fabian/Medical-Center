import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Patients.module.css';

export const Patients = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    p_firstname: '',
    p_lastname: '',
    cnp: '',
    identification_number: '',
    doctor_id: 0,
    diagnose: '',
    room_number: 0,
    p_phone: '',
    p_address: '',
    medical_center_id: ''
  });
  const [patients, setPatients] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/patients', { mode: 'cors' });
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Eroare la obținerea listei de pacienți:', error);
    }
  };

  const handleInsert = () => {
    setIsUpdate(false);
    setFormData({
      p_firstname: '',
      p_lastname: '',
      cnp: '',
      identification_number: '',
      doctor_id: 0,
      diagnose: '',
      room_number: 0,
      p_phone: '',
      p_address: '',
      medical_center_id: ''
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/patients', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 201) {
        fetchPatients();
      } else {
        toast.error('Eroare la adăugarea pacientului în inventar.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Eroare: ${error.response.data.message}`);
      } else {
        toast.error('Eroare la salvarea pacientului în inventar.');
      }
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
    fetchPatients();
  }, []);

  return (
    <div>
      <div className={styles.tableWrap}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">CNP</th>
              <th scope="col">Identification number</th>
              <th scope="col">Check In</th>
              <th scope="col">Doctor</th>
              <th scope="col">Room number</th>
              <th scope="col">Phone</th>
              <th scope="col">Diagnose</th>
              <th scope="col">Medical center</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <th scope="row">{patient.patient_id}</th>
                <td>{patient.p_firstname}</td>
                <td>{patient.p_lastname}</td>
                <td>{patient.cnp}</td>
                <td>{patient.identification_number}</td>
                <td>{patient.check_in}</td>
                <td>{patient.d_firstname + ' ' + patient.d_lastname}</td>
                <td>{patient.room_number}</td>
                <td>{patient.p_phone}</td>
                <td>{patient.diagnosis}</td>
                <td>{patient.medical_center_id}</td>
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
            <Form.Group controlId="p_firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="p_firstname"
                value={formData.p_firstname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="p_lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="p_lastname"
                value={formData.p_lastname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="cnp">
              <Form.Label>CNP</Form.Label>
              <Form.Control
                type="text"
                name="cnp"
                value={formData.cnp}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="identification_number">
              <Form.Label>Identification number</Form.Label>
              <Form.Control
                type="text"
                name="identification_number"
                value={formData.identification_number}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="doctor_id">
              <Form.Label>Doctor ID</Form.Label>
              <Form.Control
                type="number"
                name="doctor_id"
                value={formData.doctor_id}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="room_number">
              <Form.Label>Room number</Form.Label>
              <Form.Control
                type="number"
                name="room_number"
                value={formData.room_number}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="p_phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="p_phone"
                value={formData.p_phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="diagnose">
              <Form.Label>Diagnose</Form.Label>
              <Form.Control
                type="text"
                name="diagnose"
                value={formData.diagnose}
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

      <ToastContainer />
    </div>
  );
};

export default Patients;
