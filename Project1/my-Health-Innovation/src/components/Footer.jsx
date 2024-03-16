import React from 'react'

const Footer =()=>{
    return (
        <div className="bg-backgroudColor text-white rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-0 md:px-32 px-5">
                <div className="w-full md:w-1/4">
                    <h1 className=" font-semibold text-xl pb-4">Health Innovation</h1>
                    <p>Our team of dedicated doctors ,each specialized in unique fields   such as othopedics, cardilogy,pediatrics, neurology, dermatokogy. and many more...</p>
                </div>
                {/* <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About us</h1>
                    <nav className="flex flex-col gap-2">
                    <Link to ='about' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' onClick={closeMenu}>About us</Link>
                    </nav>
                </div> */}
               
            </div>
        </div>
    )
}

export default Footer;