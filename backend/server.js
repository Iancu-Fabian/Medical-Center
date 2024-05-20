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
  pool.query('SELECT * FROM patient', (err, results) => {
    res.json(results);
  });
});

app.get('/api/patients_doctors', (req, res) =>{
  pool.query('SELECT * FROM patient JOIN doctor ON patient.doctor_id = doctor.doctor_id', (err, results) => {
    res.json(results);
  });
})


app.get('/api/inventory', (req, res) => {
  pool.query('SELECT * FROM inventory', (err, results) => {
    res.json(results);
  });
});

app.get('/api/appointments', (req, res) => {
  pool.query('SELECT * FROM appointment', (err, results) => {
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
  pool.query('SELECT * FROM appointment ORDER BY appointment_date DESC LIMIT 10', (err, results) => {
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Serverul rulează pe portul 3000');
});