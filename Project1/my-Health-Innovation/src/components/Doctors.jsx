import React,{useRef} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';



const Doctors=()=>{
    
    
    const data=[
        {
            img: "/src/assets/img/doc1.webp",
            name:"Dr. Sarena",
            specialist:"Orthopedia Surgeon",
        },
        {
            img: "/src/assets/img/doc2.webp",
            name:"Dr. Julian",
            specialist:"Cardiologist",
        },
        {
            img: "/src/assets/img/doc4.webp",
            name:"Dr. william",
            specialist:"Pediatrician",
        },
        {
            img: "/src/assets/img/doc3.avif",
            name:"Dr. Camila",
            specialist:"Pediatrician",
        }
    ]

    const slider=useRef(null);

    const settings = {
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 500,
        arrow:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                   initialSlide:2
                },
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    initialSlide:2
                }
            }

        ]
      };

    return(
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
        <div  className=" flex flex-col items-center justify-between mb-10 lg:mb-0">
             <h1 className=" text-4xl font-semibold text-center ">Our Doctors</h1>
              <p className=" mt-2 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="flex gap-3 mt-4 lg:mt-0">
                    <button  className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]" onClick={()=>slider.current.slickPrev()}>
                         <FaArrowLeft size={20}/>
                     </button>
                     <button className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]" onClick={()=>slider.current.slickNext()}>
                        <FaArrowRight size={20}/>
                    </button>
         </div>
         <div className="mt-5 ">
            <Slider ref={slider}{...settings}>
                {data.map((e,index)=>(
                    <div className=" h-[350px] text-black rounded-xl mb-2 cursor-pointer" key={index}>
                        <div>
                            <img src={e.img} alt="img" className="h-60 rounded-t-xl w-full"/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                            <h3 className="pt-2">{e.specialist}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
         </div>
         </div>
    )
}

export default Doctors;

