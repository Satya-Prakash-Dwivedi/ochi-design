import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black' >
        <h1 className='font-[Neue_Montreal] text-[4vw] tracking-tight leading-[3.5vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach</h1>
                <button className='rounded-full mt-10 flex items-center gap-10 text-white px-10 py-6 bg-zinc-900'>Read More
                    <div className='w-2 h-2 bg-zinc-300 rounded-full'></div>
                </button>
            </div>
            {/* <div className='w-1/2 h-[70vh] rounded-3xl bg-red-600'></div> */}
            <img src="src/Images/1.jpg" alt="" className='w-1/2 h-[70vh] rounded-3xl'/>
        </div>
    </div>
  )
}

export default About