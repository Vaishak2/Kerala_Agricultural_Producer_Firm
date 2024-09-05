import React from 'react'
import bottomBanner from '../../../Assets/bottomBanner.png'
import bottomBanner2 from '../../../Assets/BottomBannerImg.png'

function BottomBanner() {
  return (
    <div>
    <div className='hidden sm:block sm:mx-[32px]'>
        <img src={bottomBanner}
         alt=""
         className='sm:mt-[104px]' />
    </div>
    <div className='sm:hidden block sm:mx-[32px] '>
        <img  src={bottomBanner2}
         alt=""
         className='sm:mt-[104px] w-[396px] h-[164px] mx-auto mt-[72px]' />
    </div>
    </div>

  )
}

export default BottomBanner