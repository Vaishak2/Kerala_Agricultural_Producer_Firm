import React from 'react';
import BgVector from "../../../Assets/bg vector.png"
import Exclamtion from "../../../Assets/Icon/Exclamation2.svg"
import ClientImage from "../../../Assets/client Image.png"

function ClientSays() {
  return (
    <div>
      <div className='sm:w-[764px] mx-auto sm:mt-[88px]'>
        <h1 className='sm:text-5xl sm:font-medium'>What’s Our Clients Say</h1>
        <p className='sm:text-[16px] sm:leading-8 sm:font-light sm:mt-6'>Elit ultricies adipiscing ornare. Rutrum sapien aliquet mollis. Pretium condimentum. Cursus elit hac fames laoreet non nec facilisis quis dui.</p>
      </div>
      <div className='flex'>
      <div>
        <div className='sm:translate-x-[199px] sm:translate-y-[24px] sm:w-fit'><img src={Exclamtion} alt="" /></div>

        <div>
          <div className='sm:w-[443px] bg-[#5D8424] sm:h-[368px] rounded-t-[32px] rounded-bl-[32px] text-white sm:pt-12'>

            <div className=''>
              <h1 className='sm:text-[20px]'>Madhav Anil</h1>
              <h2 className='sm:text-[16px] sm:leading-6 sm:font-light sm:mt-1'>Manager</h2>
              <p className='sm:w-[347px] mx-auto sm:text-[16px] sm:leading-8 sm:font-light sm:mt-8'>The freshness and flavor of the product is extraordinary. You can taste the care and attention that goes into every crop. It's the best farm-to-table experience we've ever had.</p>
            </div>
            <img className='sm:w-[169px] sm:h-[166px] sm:translate-x-[126px] sm:translate-y-[-141px]' src={BgVector} alt="" />

          </div>
        </div>
        <div>
          <img  className='sm:w-[79px] sm:h-[79px] sm:translate-x-[185px] sm:translate-y-[-48px]' src={ClientImage} alt="" />
        </div>
      </div>
      <div>
        <div className='sm:translate-x-[199px] sm:translate-y-[24px] sm:w-fit'><img src={Exclamtion} alt="" /></div>

        <div>
          <div className='sm:w-[443px] bg-[#5D8424] sm:h-[368px] rounded-t-[32px] rounded-bl-[32px] text-white sm:pt-12'>

            <div className=''>
              <h1 className='sm:text-[20px]'>Madhav Anil</h1>
              <h2 className='sm:text-[16px] sm:leading-6 sm:font-light sm:mt-1'>Manager</h2>
              <p className='sm:w-[347px] mx-auto sm:text-[16px] sm:leading-8 sm:font-light sm:mt-8'>The freshness and flavor of the product is extraordinary. You can taste the care and attention that goes into every crop. It's the best farm-to-table experience we've ever had.</p>
            </div>
            <img className='sm:w-[169px] sm:h-[166px] sm:translate-x-[126px] sm:translate-y-[-141px]' src={BgVector} alt="" />

          </div>
        </div>
        <div>
          <img  className='sm:w-[79px] sm:h-[79px] sm:translate-x-[185px] sm:translate-y-[-48px]' src={ClientImage} alt="" />
        </div>
      </div>
      <div>
        <div className='sm:translate-x-[199px] sm:translate-y-[24px] sm:w-fit'><img src={Exclamtion} alt="" /></div>

        <div>
          <div className='sm:w-[443px] bg-[#5D8424] sm:h-[368px] rounded-t-[32px] rounded-bl-[32px] text-white sm:pt-12'>

            <div className=''>
              <h1 className='sm:text-[20px]'>Madhav Anil</h1>
              <h2 className='sm:text-[16px] sm:leading-6 sm:font-light sm:mt-1'>Manager</h2>
              <p className='sm:w-[347px] mx-auto sm:text-[16px] sm:leading-8 sm:font-light sm:mt-8'>The freshness and flavor of the product is extraordinary. You can taste the care and attention that goes into every crop. It's the best farm-to-table experience we've ever had.</p>
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
