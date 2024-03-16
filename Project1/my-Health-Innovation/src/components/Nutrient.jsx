import React from 'react'
import NutrientCard from "../layouts/NutrientCard"
import {RiMicroscopeLine} from "react-icons/ri"
import {MdHealthAndSafety} from "react-icons/md"
import {FaHeartBeat} from "react-icons/fa"


const Nutrient=()=>
{
    const icon1=<RiMicroscopeLine size={35} className="text-backgroundColor"/>
    const icon2=<MdHealthAndSafety size={35} className="text-backgroundColor"/>
    const icon3=<FaHeartBeat size={35} className="text-backgroundColor"/>
    return (
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
            <div className="flex flex-col items-center lg:flex-row justify-between">
                <div>
                    <h1 className="text-4xl font-semibold text-center lg:text-start">Our Nutrients</h1>
                    <p className="mt-2 text-center lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.</p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <button>Explore more...</button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 pt-14">
                <NutrientCard icon={icon1} title="Lab Test"/>
                <NutrientCard icon={icon2} title="Lab Test2"/>
                <NutrientCard icon={icon3} title="Lab Test3"/>
                
            </div>
        </div>
    )
}
export default Nutrient;