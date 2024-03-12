import React from 'react'
import img from "../assets/img/about.jpg"

const About=()=>{
    return (
        <div className="min-h-screen flex  flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <div className="w-full lg:w-1/2 space-y-4">
                <h1 className="text-4xl font-semibold text-center lg:text-start">About Us!</h1>
                <p className="text-justify lg:text-start">Health Innovation Hospital stands as a beacon of modern healthcare excellence in the heart of the community it serves. With a commitment to innovation and patient-centered care, the hospital has earned a sterling reputation for its state-of-the-art facilities and top-notch medical professionals. </p>

                <p className="text-justify lg:text-start">The hospital's state-of-the-art facilities are another source of pride. Featuring the latest in medical technology, the hospital offers a wide range of services, from routine check-ups to complex surgeries. Patients can rest assured that they are receiving the best possible care, as the hospital's medical teams are equipped with the tool</p>

                <p className="text-justify lg:text-start">Beyond its technical prowess, Health Innovation Hospital is also deeply committed to patient satisfaction. The hospital's staff go above and beyond to ensure that every patient feels comfortable and cared for, from the moment they arrive to the moment they leave. This focus on patient-centered care has earned the hospital a reputation for excellence, and has made it a trusted choice for medical care in the community.</p>
            </div>
            <div className="w-full lg:w-1/2 ">
                <img src={img} alt=""/>
            </div>
        </div>
    )
}

export default About