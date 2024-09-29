import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
               return  <div className='masker '>
                <div className='w-fit flex items-end overflow-hidden'>
                { index === 1 && 
                (<motion.div 
                initial={{width: 0}} 
                animate={{width: "9vw"}} 
                transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                >
                <img className=' mr-[1vw] w-[9vw] rounded-md h-[6.5vw] relative top-[1.2vm]' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>)}
                <h1 className='uppercase text-[9vw] font-[Founders_Grotesk] leading-[6.75vw] font-regular tracking-tighter'>{item}</h1>    
                </div>
           </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies",
              "From the first pitch to IPO"
            ].map((item, index) => (
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))
            }
            <div className='start flex items-center gap-2'>
                <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm uppercase'>Start the project</div>
                <div className='w-10 h-10 border-[1px] flex items-center justify-center rounded-full'>
                <span className='rotate-45'>
                <FaArrowUpLong />
                </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage