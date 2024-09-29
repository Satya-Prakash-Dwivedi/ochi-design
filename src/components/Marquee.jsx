import React from 'react'
import {motion} from 'framer-motion'


function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#004D43] rounded-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat : Infinity, duration: 10}} className='text-[17vh] leading-none font-["Fonders_Grotesk_X-Condensed] uppercase pt-10 mb-[7vw] font-semibold pr-20'>We are Ochi
            </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat : Infinity, duration: 10}} className='text-[17vh] leading-none font-["Fonders_Grotesk_X-Condensed] uppercase pt-10 mb-[7vw] font-semibold pr-20'> We are Ochi
            </motion.h1 >
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat : Infinity, duration: 10}} className='text-[17vh] leading-none font-["Fonders_Grotesk_X-Condensed] uppercase pt-10 mb-[7vw] font-semibold pr-20'> We are Ochi
            </motion.h1 >
        </div>
    </div>
  )
}

export default Marquee