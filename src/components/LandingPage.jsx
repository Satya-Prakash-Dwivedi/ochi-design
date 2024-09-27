import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
               return  <div className='masker '>
                <div className='w-fit flex items-end overflow-hidden'>
                { index === 1 && (<div className=' mr-[1vw] w-[8vw] rounded-md h-[6.5vw] relative top-[1.2vm] bg-red-500'></div>)}
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