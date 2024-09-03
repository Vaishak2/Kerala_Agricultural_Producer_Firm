import React from 'react'

function SupportsGrid() {
  return (
    <div className='bg-[#FFFFFF] sm:mx-8 sm:h-[375px]'>
      <div className='sm:w-[1304px] sm:h-[262px] mx-[36px] my-auto flex grid-cols-4'>
        <div className='sm:w-[306px] bg-green-200'>1</div>
        <div className='sm:w-[339px] bg-yellow-100'>2</div>
        <div className='sm:w-[353px] bg-green-200'>3</div>
        <div className='sm:w-[306px] bg-yellow-100'>4</div>
      </div>
    </div>
  )
}

export default SupportsGrid
