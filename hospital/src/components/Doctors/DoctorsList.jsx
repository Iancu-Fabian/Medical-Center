import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './DoctorsList.module.css';

export const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  

  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/doctors', {mode:'cors'});
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Eroare la obținerea listei de doctori:', error);
    }
  };


  useEffect(() => {
    fetchDoctors();
  }, []);


  return (
    <div>
      <div className ={styles.tableWrap}>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Card ID</th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Specialization</th>
      <th scope="col">Medical center ID</th>
    </tr>
  </thead>
  <tbody>
   {doctors.map((doctor, index) => (
            <tr key={index}>
    <th scope="row">{doctor.doctor_id}</th>
    <td>{doctor.card_id}</td>
    <td>{doctor.firstname}</td>
    <td>{doctor.lastname}</td>
    <td>{doctor.phone}</td>
    <td>{doctor.email}</td>
    <td>{doctor.address}</td>
    <td>{doctor.specialization}</td>
    <td>{doctor.medical_center_id}</td>
  </tr>
))}
  </tbody>
</table>
</div>
    </div>


    
  );
}

