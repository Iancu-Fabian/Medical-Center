import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { DoctorsList } from './components/Doctors/DoctorsList';
import { Patients } from './components/Patients/Patients';
import { AppointmentsList } from './components/Appointments/Appointments';
import { InventoryList } from './components/Inventory/Inventory';
import { LocationsList } from './components/Locations/Locations';
import { AuthProvider, AuthContext } from './components/Login/AuthContext';
import Login from './components/Login/Login';
import './fonts.css';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};



function App() {
  
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patients"
            element={
              <ProtectedRoute>
                <PatientsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <AppointmentsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctors"
            element={
              <ProtectedRoute>
                <DoctorsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inventory"
            element={
              <ProtectedRoute>
                <InventoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/locations"
            element={
              <ProtectedRoute>
                <LocationsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function DashboardPage() {
  
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.container2}>
        <h1 className={styles.title}> Dashboard  </h1>
        <Dashboard />
       
      </div>
    </div>
  )
}

function PatientsPage() {
  
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.container2}>
        <h1 className={styles.title}> Patients  </h1>
        <Patients/>
      </div>
    </div>
  )
}

function InventoryPage() {
  
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.container2}>
        <h1 className={styles.title}> Inventory </h1>
        <InventoryList/>
      </div>
    </div>
  )
}

function AppointmentsPage() {
  
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.container2}>
        <h1 className={styles.title}> Appointments  </h1>
        <AppointmentsList/>
      </div>
    </div>
  )
}

function DoctorsPage() {
  
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.container2}>
        <h1 className={styles.title}> Doctors  </h1>
          <DoctorsList/>
      </div>
     
    </div>
  )
}

function LocationsPage() {
  
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.container2}>
        <h1 className={styles.title}> Locations  </h1>
        <LocationsList/>
      </div>
    </div>
  )
}


export default App
