import React from 'react'
import ourVision from '../../../Assets/logos/ourVision.png'
import ourMission from '../../../Assets/logos/ourMission.png'

function OurVisionAbout() {
  return (
    <div className='sm:px-8 px-4'>
    <div className='bg-[#5D8424] sm:rounded-[64px] rounded-[32px] w-full h-auto mt-[72px] py-[32px] px-4  sm:w-full sm:h-[563px] sm:mt-[104px] sm:p-[60px]'>
      <div className='flex'>
        <img src={ourMission} alt="Mission" className='sm:w-[48px] sm:h-[48px] h-[40px] w-[40px]' />
        <h1 className='font-normal sm:text-[40px] text-[24px] ml-[11px] sm:ml-6 text-white'>Our Mission</h1>
      </div>
      <div className='flex sm:mt-[24px] mt-[16px] ml-[50px] sm:ml-[64px] '>
        <p className='text-white text-justify font-light text-[18px] sm:text-[28px]'>Sow with us, Reap with trust</p>
      </div>
      <div className="mx-auto justify sm:w-[1264px] w-[332px] mt-[32px]  sm:mt-[44px] opacity-[20%] border-b"></div>

      <div className='flex sm:mt-[54px] mt-[32px]'>
        <img src={ourVision} alt="Vision" className='sm:w-[48px] sm:h-[48px] w-[40px] h-[40px]' />
        <h1 className='font-normal text-[24px] sm:text-[40px] ml-[11px] sm:ml-6 text-white'>Our Vision</h1>
      </div>
      <div className='flex sm:mt-[24px] mt-[16px] ml-[50px] sm:ml-[64px] text-white font-light text-[18px] sm:text-[28px] leading-[32px] sm:tracking-normal tracking-wide  sm:leading-[44px] text-start w-[80%] sm:w-[1115px]'>
        <p className=''>Empowering farmers to thrive by providing comprehensive agricultural support,including access to quality inputs, fair market prices, advanced technologies, and financial services, while fostering a sustainable and resilient agricultural ecosystem.</p>
      </div>
    </div>
    </div>
  )
}

export default OurVisionAbout
