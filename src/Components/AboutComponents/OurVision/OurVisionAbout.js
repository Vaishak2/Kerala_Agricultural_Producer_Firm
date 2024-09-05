import React from 'react'
import ourVision from '../../../Assets/logos/ourVision.png'
import ourMission from '../../../Assets/logos/ourMission.png'

function OurVisionAbout() {
  return (
    <div className='bg-[#5D8424] sm:rounded-[64px] sm:w-[1376px] sm:h-[563px] sm:mt-[104px] sm:mx-[32px] sm:p-[60px]'>
      <div className='flex'>
        <img src={ourMission} alt="Mission" className='sm:w-[48px] sm:h-[48px]' />
        <h1 className='font-normal text-[40px] sm:ml-6 text-white'>Our Mission</h1>
      </div>
      <div className='flex sm:mt-[24px] sm:ml-[64px] '>
        <p className='text-white font-light text-[28px]'>Sow with us, Reap with trust</p>
      </div>
      <div className="mx-auto justify sm:w-[1264px]  sm:mt-[44px] opacity-[20%] border-b"></div>

      <div className='flex sm:mt-[54px]'>
        <img src={ourVision} alt="Vision" className='sm:w-[48px] sm:h-[48px]' />
        <h1 className='font-normal text-[40px] sm:ml-6 text-white'>Our Vision</h1>
      </div>
      <div className='flex sm:mt-[24px] sm:ml-[64px] text-white font-light text-[28px] sm:leading-[44px] text-justify sm:w-[1115px]'>
        <p className=''>
          Empowering farmers to thrive by providing comprehensive agricultural support,including 
           access to quality inputs, fair market prices, advanced technologies, and financial services,
           while fostering a sustainable and resilient agricultural ecosystem.
        </p>
      </div>
    </div>
  )
}

export default OurVisionAbout
