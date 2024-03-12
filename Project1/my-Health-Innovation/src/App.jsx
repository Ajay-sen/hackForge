import React from 'react';
import Navbar from './components/Navbar';
//import Signup from './components/signup';
import Home from './components/Home';
import About from './components/About';
//import Nutrient from './components/Nutrient';
import Doctors from './components/Doctors';
import Workout from './components/Workout';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Signin from './components/Signin1';
import Signup from './components/Signup1';


const App=()=>{
  return (
    <>
      {/* <Navbar/> */}
     
      <main>
        {/* <div id="home" >
          <Home/>
        </div>

        <div id="about" >
          <About/>
        </div>
        
        <div id="nutrition">
          <Nutrient/>
        </div>

        <div id="doctors">
          <Doctors/>
        </div>

        <div id="workout">
          <Workout/>
        </div> */}
      {/* <Dashboard/>; */}
      
      {/* <Signin/>; */}
      <Signup/>;
        
      </main>

      {/* <Footer/>; */}
    </>
  )
}

export default App;