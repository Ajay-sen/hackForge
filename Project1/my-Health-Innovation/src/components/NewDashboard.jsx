import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewDashboard = () => {
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);


//   useEffect(() => {
//     const fetchUser = async () => {
//       const response = await axios.get('/api/user');
//       setUser(response.data);
//     };

//     const fetchAppointments = async () => {
//       const response = await axios.get('/api/appointments');
//       setAppointments(response.data);
//     };

//     fetchUser();
//     fetchAppointments();
//   }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('profile_picture', file);

    // const response = await axios.post('/api/user/upload', formData);
    // setUser(response.data);
  };

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="min-h-screen flex flex-col   items-center" style={{ backgroundColor: "#a3f0bd" }}>
      <h1 className="text-4xl text-center mt-32 mb-8">Health Care NewDashboard</h1>
      <div className="flex flex-row items-center mb-8 w-full max-w-2xl">
        <img
          src={selectedImage||user.profile_picture}
          alt="_____profilePic______"
          className="w-48 h-48 rounded-full mr-4 border-black border-2"
        />
        <div>
            <input type="file" name="profile_picture" onChange={handleImageChange} className="block w-full mt-4 mb-4 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
          <p className="text-xl">First Name:{user.first_name}</p>
          <p className="text-xl">Last Name: {user.last_name}</p>
          <p className="text-xl">Date of Birth: {user.dob}</p>
          <p className="text-xl">Gender: {user.gender}</p>
          <p className="text-xl">Blood Group: {user.blood_group}</p>
          <input
            type="file"
            name="profile_picture"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
      <hr/>
      <h2 className="text-3xl text-center mb-8 w-full max-w-2xl">Appointments</h2>
      <div className="flex flex-wrap w-full max-w-2xl">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="w-1/3 mb-8 px-4"
            onClick={() => setSelectedAppointment(appointment)}
          >
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-xl font-semibold mb-2">{appointment.doctor}</p>
              <p>Date: {appointment.date}</p>
              <p>Problem: {appointment.problem}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedAppointment && (
        <div className="mt-8">
          <h2 className="text-3xl text-center mb-8 w-full max-w-2xl">Appointment Details</h2>
          <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-2xl">
            <p className="text-xl font-semibold mb-2">{selectedAppointment.doctor}</p>
            <p>Date: {selectedAppointment.date}</p>
            <p>Problem: {selectedAppointment.problem}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewDashboard;