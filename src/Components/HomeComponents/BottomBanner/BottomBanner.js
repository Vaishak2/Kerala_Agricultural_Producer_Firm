import React from 'react'
import bottomBanner from '../../../Assets/bottomBanner.png'
import bottomResp from '../../../Assets/Banner-Image/bottomResp.png'

function BottomBanner() {
  return (
    <div className='sm:mx-[32px] mt-[72px] sm:mt-[104px] mx-[16px]'>
      {/* Mobile view */}
      <img 
        src={bottomResp} 
        alt="" 
        className='block  sm:hidden ' 
      />
      
      {/* Desktop view */}
      <img 
        src={bottomBanner} 
        alt="" 
        className='hidden sm:block ' 
      />
    </div>
  )
}

export default BottomBanner
