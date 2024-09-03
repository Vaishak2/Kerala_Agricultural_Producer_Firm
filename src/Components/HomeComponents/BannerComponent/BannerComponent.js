import React from 'react';
import BlackButtonArrow from "../../../Assets/Icon/arrow_outward_Black.svg";

function BannerComponent() {
  return (
   <div className='bg-banner-image bg-cover sm:w-[1376px] sm:h-[651px] mx-auto sm:mt-4'>
   <div className=' sm:pt-[205px] sm:pl-[108px] '>
   <h1 className='border sm:text-[12px] sm:leading-[18px] sm:font-normal text-white sm:w-[128px] rounded-[16px]'>Believe in Quality !</h1>
  <div className='sm:text-[100px] sm:leading-[99px] text-white text-justify '>
  Sow With us,<br />Reap with Trust
  </div>
  <h1 className='sm:text-[24px] sm:leading-[29px] text-justify text-white sm:mt-4 sm:font-light'>Harvesting nature’s bounty with care and dedication.</h1>
   
  <button className='GetInTouchBtn flex  bg-white sm:mt-12'>
          <span className='text-black'>Get In Touch</span>
          <img className='sm:w-6 sm:h-6' src={BlackButtonArrow} alt="Button Arrow" />
        </button>
   </div>
    
   </div> 
  )
}

export default BannerComponent
