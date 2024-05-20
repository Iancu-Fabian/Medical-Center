import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);

  

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/appointments', {mode:'cors'});
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Eroare la obținerea listei de doctori:', error);
    }
  };


  useEffect(() => {
    fetchAppointments();
  }, []);


  return (
    <div>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Patient</th>
      <th scope="col">Doctor</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
   {appointments.map((app, index) => (
            <tr key={index}>
    <th scope="row">{app.appointment_id}</th>
    <td>{app.patient_id}</td>
    <td>{app.doctor_id}</td>
    <td>{app.appointment_date}</td>
  </tr>
))}
  </tbody>
</table>
    </div>


    
  );
}

