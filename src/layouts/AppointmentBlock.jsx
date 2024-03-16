const AppointmentBlock = () => {
    const handleAppointment = () => {
      // Here you can add logic to handle the appointment
    }
  
    return (
      <div className="appointment-block" style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Do you want an appointment?</h2>
        <button onClick={handleAppointment}  className=' bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out'>Yes, please!</button>
      </div>
    );
  }
  
  export default AppointmentBlock;