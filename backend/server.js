const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Cavaler19",
  database: "centru_medical",
  connectionLimit: 10
});

const users = [
  { username: 'admin', password: 'admin' } 
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Date gresite' });
  }
});



app.get('/api/doctors', (req, res) => {
  pool.query('SELECT * FROM doctor', (err, results) => {
    res.json(results);
    console.log(err);
  });
});

app.get('/api/doctorstotal', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  pool.query('SELECT COUNT(*) FROM doctor', (err, results) => {
    res.json(results);
  });
});

app.get('/api/patientstotal', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  pool.query('SELECT COUNT(*) FROM patient', (err, results) => {
    res.json(results);
  });
});

app.get('/api/appointmentstotal', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  pool.query('SELECT COUNT(*) FROM appointment', (err, results) => {
    res.json(results);
  });
});

app.get('/api/inventorytotal', (req, res) => {
  pool.query('SELECT COUNT(*) FROM inventory', (err, results) => {
    res.json(results);
  });
});

app.get('/api/centerstotal', (req, res) => {
  pool.query('SELECT COUNT(*) FROM medical_center', (err, results) => {
    res.json(results);
  });
});

app.get('/api/stafftotal', (req, res) => {
  pool.query('SELECT COUNT(*) FROM staff', (err, results) => {
    res.json(results);
  });
});

app.get('/api/patients', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  pool.query('SELECT * FROM patient JOIN doctor ON patient.doctor_id = doctor.doctor_id', (err, results) => {
    res.json(results);
  });
});

app.get('/api/patients_doctors', (req, res) =>{
  pool.query('SELECT * FROM patient JOIN doctor ON patient.doctor_id = doctor.doctor_id', (err, results) => {
    res.json(results);
  });
})


app.get('/api/inventory', (req, res) => {
  pool.query('SELECT DATEDIFF(expiration_date, CURDATE()) AS zile_ramase, inventory.* FROM inventory', (err, results) => {
    res.json(results);
  });
});


app.get('/api/appointments', (req, res) => {
  pool.query('SELECT * FROM appointment JOIN patient ON appointment.patient_id = patient.patient_id JOIN doctor ON appointment.doctor_id = doctor.doctor_id', (err, results) => {
    res.json(results);
  });
});

app.get('/api/centers', (req, res) => {
  pool.query('SELECT * FROM medical_center', (err, results) => {
    res.json(results);
  });
});

app.get('/api/staff', (req, res) => {
  pool.query('SELECT * FROM staff', (err, results) => {
    res.json(results);
  });
});

app.get('/api/latestappointments', (req, res) => {
  pool.query('SELECT * FROM appointment JOIN patient ON appointment.patient_id = patient.patient_id JOIN doctor ON appointment.doctor_id = doctor.doctor_id ORDER BY appointment_date DESC LIMIT 4', (err, results) => {
    res.json(results);
  });
});

app.get('/api/diagnoses', (req, res) => {
  pool.query('SELECT diagnosis, COUNT(*) as num_cases FROM patient GROUP BY diagnosis ORDER BY num_cases DESC LIMIT 3;', (err, results) => {
    res.json(results);
  });
});

app.post('/api/inventory', (req, res) => {
  const { medicament_id, medicament_name, quantity, disease, medical_center_id } = req.body;
  const query = 'INSERT INTO inventory (medicament_id, medicament_name, quantity, disease, medical_center_id) VALUES (?, ?, ?, ?, ?)';
  pool.query(query, [medicament_id, medicament_name, quantity, disease, medical_center_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Item adăugat cu succes!' });
  });
});

app.post('/api/patients', (req, res) => {
  const { p_firstname, p_lastname, cnp, identification_number, doctor_id, diagnosis, room_number, p_phone, p_address, medical_center_id } = req.body;
  const query = 'INSERT INTO patient (p_firstname, p_lastname, cnp, identification_number, doctor_id, diagnosis, room_number, p_phone, p_address, medical_center_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  pool.query(query, [p_firstname, p_lastname, cnp, identification_number, doctor_id, diagnosis, room_number, p_phone, p_address, medical_center_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Item adăugat cu succes!' });
  });
});

app.put('/api/inventory/:id', (req, res) => {
  const { id } = req.params;
  const { medicament_name, quantity, disease, medical_center_id } = req.body;
  const query = 'UPDATE inventory SET medicament_name = ?, quantity = ?, disease = ?, medical_center_id = ? WHERE medicament_id = ?';
  pool.query(query, [medicament_name, quantity, disease, medical_center_id, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Item actualizat cu succes!' });
  });
});

app.delete('/api/inventory/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM inventory WHERE medicament_id = ?';
  pool.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Item șters cu succes!' });
  });
});


app.listen(3000, () => {
  console.log('Serverul rulează pe portul 3000');
});