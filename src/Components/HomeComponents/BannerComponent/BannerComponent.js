import React from 'react';
import BlackButtonArrow from "../../../Assets/Icon/arrow_outward_Black.svg";

function BannerComponent() {
  return (
   <div className='sm:bg-banner-image bg-Responsive-banner bg-cover sm:w-[1376px] w-[396px] sm:h-[651px] h-[545px] sm:mx-auto ml-4 sm:mt-4'>
   <div className=' sm:pt-[205px] pt-[270px] sm:pl-[108px] pl-8 '>
   <h1 className='border sm:text-[12px] sm:leading-[18px] sm:font-normal text-white sm:w-[128px] w-[129px] px-4 text-[12px] rounded-[16px]'>Believe in Quality !</h1>
  <div className='sm:text-[100px] sm:leading-[99px] text-[40px] leading-10 text-white text-justify '>
  Sow With us,<br />Reap with Trust
  </div>
  <h1 className='sm:text-[24px] sm:leading-[29px] mt-2 text-[16px] w-[250px] sm:w-full font-light text-justify text-white sm:mt-4 sm:font-light'>Harvesting nature’s bounty with care and dedication.</h1>
   
  <button className='GetInTouchBtn flex  bg-white sm:mt-12 mt-8 sm:px-12 px-6 sm:py-4 py-3'>
          <span className='text-black'>Get In Touch</span>
          <img className='sm:w-6 sm:h-6' src={BlackButtonArrow} alt="Button Arrow" />
        </button>
   </div>
    
   </div> 
  )
}

export default BannerComponent
