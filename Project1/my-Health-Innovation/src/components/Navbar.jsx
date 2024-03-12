import React,{useState} from 'react';
import {Link} from "react-scroll";
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
import Contact from "../models/Contact.jsx";

const Navbar=()=>{

    const [menu, setMenu] =useState(false);
    const [showForm,setShowForm]=useState(false);

    const handleChange=()=>{
        setMenu(!menu);
    }

    const closeMenu=()=>{
        setMenu(false);
    }

    const openForm=()=>{
        setShowForm(true);
        setMenu(false);
    }

    const closeForm=()=>{
        setShowForm(false);
    }
    return (
        <div className=' fixed w-full z-10 text-white'>
            <div>
                <div className=' flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-green'>
                    <div className=' flex flex-row items-center cursor-pointer'>
                        <Link to ='home' spy={true} smooth={true} duration={500}>
                            <h1 className=' text-2xl font-semibold text-black'>Health Innovation</h1>
                        </Link>
                    </div>

                    <nav className=' hidden lg:flex flex-row items-center  text-lg font-medium gap-8'>
                        <Link to ='home' spy={true} smooth={true} duration={500} className=' hover:text-hoverColor transition-all cursor-pointer'>Home</Link>
                        <Link to ='nutrition' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>Nutrition</Link>
                        <Link to ='workout' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>Workout</Link>
                        <Link to ='doctors' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>Doctors</Link>
                        <Link to ='appointments' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>Appointments</Link>
                        <Link to ='about' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>About us</Link>
                    </nav>

                    <div className="hidden lg:flex">
                        <button className=' bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out' onClick={openForm}>
                            Contact
                        </button>
                    </div>

                    {showForm && <Contact closeForm={closeForm} />}

                    <div className="lg:hidden flex items-center">
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ):(
                            <AiOutlineMenu size={28} onClick={handleChange} />
                        )}
                        
                    </div>
                </div>
                <div className={`${menu ? "translate-x-0":" translate-x-full"} lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 fond-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-400 ease-in-out`}>
                <Link to ='home' spy={true} smooth={true} duration={500} className=' hover:text-hoverColor transition-all cursor-pointer' onClick={closeMenu}>Home</Link>
                        <Link to ='nutrition' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' onClick={closeMenu}>Nutrition</Link>
                        <Link to ='workout' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' onClick={closeMenu}>Workout</Link>
                        <Link to ='doctors' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' onClick={closeMenu}>Doctors</Link>
                        <Link to ='appointments' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' onClick={closeMenu}>Appointments</Link>
                        <Link to ='about' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' onClick={closeMenu}>About us</Link>

                        <div className="lg:hidden">
                        <button className=' bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out' onClick={openForm}>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar