import React from 'react'
import trackter from '../../../Assets/logos/trackter.png'
import persantage from '../../../Assets/logos/persantage.png'
import plant from '../../../Assets/logos/plant.png'
import hands from '../../../Assets/logos/hands.png'

function SupportsGrid() {
    return (
        <div className='bg-[#FFFFFF] sm:mx-8 sm:h-[375px] sm:pt-[56px] rounded-2xl'>
            <div className='sm:w-[1304px] sm:h-[262px] sm:mx-[36px] flex grid-cols-4'>
                <div className='sm:w-[306px] border-r-[1px]'>
                    <div className='sm:w-[274px] sm:h-[230px] sm:mt-4'>
                        <img src={trackter} className='sm:h-[64px] sm:w-[64px] mx-auto'></img>
                        <div className='text-[24px] font-medium mt-4'>Agricultural support</div>
                        <div className='text-[16px] font-light leading-8 sm:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard</div>
                    </div>
                </div>
                <div className='sm:w-[339px] border-r-[1px]'>
                    <div className='sm:w-[274px] sm:h-[230px] sm:mt-4 sm:mx-auto'>
                        <img src={persantage} className='sm:h-[64px] sm:w-[64px] mx-auto'></img>
                        <div className='text-[24px] font-medium mt-4'>Fair market prices</div>
                        <div className='text-[16px] font-light leading-8 sm:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard</div>
                    </div>
                </div>
                <div className='sm:w-[353px] border-r-[1px]'>
                    <div className='sm:w-[274px] sm:h-[230px] sm:mt-4 sm:mx-auto'>
                        <img src={plant} className='sm:h-[64px] sm:w-[64px] mx-auto'></img>
                        <div className='text-[24px] font-medium mt-4'>Advanced technologies</div>
                        <div className='text-[16px] font-light leading-8 sm:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard</div>
                    </div>
                </div>
                <div className='sm:w-[306px]'>
                <div className='sm:w-[274px] sm:h-[230px] sm:mt-4 ml-auto'>
                        <img src={hands} className='sm:h-[64px] sm:w-[64px] mx-auto'></img>
                        <div className='text-[24px] font-medium mt-4'>Financial services</div>
                        <div className='text-[16px] font-light leading-8 sm:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportsGrid
