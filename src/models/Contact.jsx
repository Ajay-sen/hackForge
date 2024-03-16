import React , {useState} from "react";

const Contact=({closeForm})=>{

   

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
            <div className="popup-form absolute mt-12 text-black">
                <form className='w=80 md:w-96  space-y-5 bg-white p-5 rounded-xl border-2 border-green-500 '>
                    <h1 className="text-4xl font-semibold text-center">Contact Us!</h1>
                    <div className="flex flex-col">
                        <input type="text" name="userName" id="userName" placeholder="Username" className="py-3 px-2 bg-[#c8f2c6] rounded-lg"/>
                    </div>

                    <div className="flex flex-col">
                        <input type="email" name="userEmail" id="userEmail" placeholder="Your Email" className="py-3 px-2 bg-[#c8f2c6] rounded-lg"/>
                    </div>

                    <div className="flex flex-col">
                        <input type="password" name="userPassword" id="userPassword" placeholder="Password" className="py-3 px-2 bg-[#c8f2c6] rounded-lg"/>
                       
                    </div>

                    <div className="flex flex-col">
                        <input type="number" name="userNumber" id="userNumber" placeholder="Phone No." className="py-3 px-2 bg-[#c8f2c6] rounded-lg"/>
                    </div>

                    <div className=' bg-brightColor text-white h-7 text-center rounded-md hover:bg-hoverColor transition duration-300 ease-in-out'>Submit</div>
                    <div className= "bg-backgroundColor text-white px-10  h-7 rounded-md active:bg-green-500 text-center" onClick={closeForm}>Close</div>

                </form>
            </div>
        </div>
    )
}

export default Contact;