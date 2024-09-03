import React from 'react'
import trackter from '../../../Assets/logos/trackter.png'

function SupportsGrid() {
  return (
    <div className='bg-[#FFFFFF] sm:mx-8 sm:h-[375px] sm:pt-[56px]'>
      <div className='sm:w-[1304px] sm:h-[262px] sm:mx-[36px] flex grid-cols-4'>
        <div className='sm:w-[306px] bg-green-200'>
            <img src={trackter} className='sm:h-[64px] sm:w-[64px] mx-auto'></img>
            <div>Agricultural support</div>
        </div>
        <div className='sm:w-[339px] bg-yellow-100'>2</div>
        <div className='sm:w-[353px] bg-green-200'>3</div>
        <div className='sm:w-[306px] bg-yellow-100'>4</div>
      </div>
    </div>
  )
}

export default SupportsGrid
