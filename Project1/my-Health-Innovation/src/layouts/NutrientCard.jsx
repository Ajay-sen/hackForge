import React from 'react'

const NutrientCard=({icon,title})=>{
    return (
        <div className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
        <div className="bg-[#26c25d] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#e7112e]">{icon}</div>
        <h1 className="font-semibold text-lg">{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet error, officia iure facere omnis explicabo.</p>

        <h3 className="text-backgroundColor cursor-pointer hover:text-black transition duration-300 ease-in-out">Learn More..</h3>
        </div>
    )
}

export default NutrientCard;