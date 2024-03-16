import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can send a request to your server to save the user's details
  }

  const handleFileChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="profile-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#b3e594', padding: '20px', borderRadius: '10px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        <input type="file" onChange={handleFileChange} style={{ 
    marginBottom: '10px',
    padding: '5px',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '1px 1px 5px #888888'
  }} />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ 
    marginBottom: '10px',
    padding: '5px',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '1px 1px 5px #888888'
  }} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ 
    marginBottom: '10px',
    padding: '5px',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '1px 1px 5px #888888'
  }} />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} style={{ 
    marginBottom: '10px',
    padding: '5px',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '1px 1px 5px #888888'
  }} />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ 
    marginBottom: '10px',
    padding: '5px',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '1px 1px 5px #888888'
  }} />
        <button type="submit" style={{ 
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#6c8e4a',
    color: 'white',
    cursor: 'pointer'
  }}>Save</button>
      </form>
      {profilePic && <img src={profilePic} alt="Profile" style={{ width: '200px', borderRadius: '10px' }}/>}
    </div>
  );
}

export default Profile;