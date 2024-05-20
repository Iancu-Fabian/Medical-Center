import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Patients.module.css';

export const Patients = () => {
  const [patients, setPatients] = useState([]);

  

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/patients', {mode:'cors'});
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Eroare la obținerea listei de doctori:', error);
    }
  };


  useEffect(() => {
    fetchPatients();
  }, []);


  return (
    <div>
      <div className ={styles.tableWrap}>
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
    <td>{patient.d_firstname+' '+patient.d_lastname}</td>
    <td>{patient.room_number}</td>
    <td>{patient.p_phone}</td>
    <td>{patient.diagnose}</td>
    <td>{patient.medical_center_id}</td>

  </tr>
))}
  </tbody>
</table>
</div>
    </div>


    
  );
}

