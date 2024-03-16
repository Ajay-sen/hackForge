import React from 'react';
import Profile from '../layouts/Profile';
import AppointmentBlock from '../layouts/AppointmentBlock';
// import './Dashboard.css';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div>
        <div>
            <Navbar/>;
        </div>
    <div className="dashboard" style={{  minHeight:'100vh', display: 'flex', justifyContent: 'space-around', padding: '120px', backgroundColor:  "#85c682" }}>
      <Profile />
      <AppointmentBlock />
    </div>
    </div>
  );
}
// '#d0f0c0'

export default Dashboard;