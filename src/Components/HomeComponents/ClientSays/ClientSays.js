import React from 'react';
import BgVector from "../../../Assets/bg vector.png"
import Exclamtion from "../../../Assets/Icon/Exclamation2.svg"
import blackExclamtion from "../../../Assets/Icon/blackExclamtion.svg"
import ClientImage from "../../../Assets/client Image.png"

function ClientSays() {
  return (
    <div className='bg-[#ffff] sm:mt-0 mt-[77px] sm:ml-0 pt-[72px] px-4 sm:pt-[88px] '>
      <div className='sm:w-[764px] w-full sm:mx-auto  '>
        <h1 className='sm:text-5xl text-[32px] sm:font-medium'>What’s Our Clients Say</h1>
        <p className='sm:text-[16px] text-[16px] sm:leading-8 font-light mt-4 sm:mt-6'>Hear directly from our valued clients about their experiences with our
agricultural services. Their feedback highlights our commitment to quality
and impact.
</p>
      </div>
      <div className='flex columns-3 gap-6 sm:mx-auto sm:justify-center justify-center sm:mt-14 mt-12 '>
      <div className='hidden sm:block'>
        <div className=' sm:translate-x-[199px] sm:translate-y-[24px] sm:w-fit'><img src={blackExclamtion} alt="" /></div>

        <div>
          <div className='sm:w-[443px] bg-[#F8F8F8] sm:h-[368px] rounded-t-[32px] rounded-bl-[32px] text-black sm:pt-12'>

            <div className=''>
              <h1 className='sm:text-[20px]'>Vijay Ashok</h1>
              <h2 className='sm:text-[16px] sm:leading-6 sm:font-light sm:mt-1'>Manager</h2>
              <p className='sm:w-[347px] mx-auto sm:text-[16px] sm:leading-8 sm:font-light sm:mt-8'>“KGAPCO's services have transformed our agriculture. Their commitment to sustainability and technology delivers exceptional results. We are proud to partner with them.”</p>
            </div>
            <img className='sm:w-[169px] sm:h-[166px] sm:translate-x-[126px] sm:translate-y-[-141px]' src={BgVector} alt="" />

          </div>
        </div>
        <div>
          <img  className='sm:w-[79px] sm:h-[79px] sm:translate-x-[140px] sm:translate-y-[-48px]' src={ClientImage} alt="" />
        </div>
      </div>
      <div>
        <div className='sm:translate-x-[199px] translate-x-[151px] translate-y-[24px] w-fit'><img src={Exclamtion} alt="" /></div>

        <div>
          <div className='sm:w-[443px] w-full bg-[#5D8424] h-[368px] rounded-t-[32px] rounded-bl-[32px] text-white sm:pt-12 pt-12'>

            <div className=''>
              <h1 className='sm:text-[20px]'>Madhav Anil</h1>
              <h2 className='sm:text-[16px] sm:leading-6 sm:font-light sm:mt-1'>Manager</h2>
              <p className='w-[347px]  mx-auto sm:text-[16px] text-[16px] sm:leading-8 leading-8 font-light mt-8'>“KGAPCO has transformed our business. Their innovative approach to agriculture has improved efficiency and quality. We've seen major gains in productivity and profitability, and we highly recommend their services.”</p>
            </div>
            <img className='w-[169px] h-[166px] translate-x-[126px] translate-y-[-141px]' src={BgVector} alt="" />

          </div>
        </div>
        <div>
          <img  className='w-[79px] h-[79px] sm:translate-x-[185px] translate-x-[141px] translate-y-[-48px]' src={ClientImage} alt="" />
        </div>
      </div>
      <div className='hidden sm:block'>
        <div className='sm:translate-x-[199px] sm:translate-y-[24px] sm:w-fit'><img src={blackExclamtion} alt="" /></div>

        <div>
          <div className='sm:w-[443px] bg-[#F8F8F8] sm:h-[368px] rounded-t-[32px] rounded-bl-[32px] text-black sm:pt-12'>

            <div className=''>
              <h1 className='sm:text-[20px]'>John Alexander</h1>
              <h2 className='sm:text-[16px] sm:leading-6 sm:font-light sm:mt-1'>Manager</h2>
              <p className='sm:w-[347px] mx-auto sm:text-[16px] sm:leading-8 sm:font-light sm:mt-8'>“KGAPCO's products are unmatched in freshness and flavor. Their dedication to excellence is evident in everything they do, from the quality seeds to their outstanding support. It's the best farm-to-table experience we've ever had.”</p>
            </div>
            <img className='sm:w-[169px] sm:h-[166px] sm:translate-x-[126px] sm:translate-y-[-141px]' src={BgVector} alt="" />

          </div>
        </div>
        <div>
          <img  className='sm:w-[79px] sm:h-[79px] sm:translate-x-[185px] sm:translate-y-[-48px]' src={ClientImage} alt="" />
        </div>
      </div>
      </div>

    </div>
  )
}

export default ClientSays
