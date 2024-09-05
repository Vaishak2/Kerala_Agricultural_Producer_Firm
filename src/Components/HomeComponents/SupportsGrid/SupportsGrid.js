import React from 'react'
import trackter from '../../../Assets/logos/trackter.png'
import persantage from '../../../Assets/logos/persantage.png'
import plant from '../../../Assets/logos/plant.png'
import hands from '../../../Assets/logos/hands.png'

function SupportsGrid() {
    return (
        <div className='bg-[#FFFFFF] sm:mx-8 sm:h-[375px] w-[396px] sm:w-[1376px] mx-auto sm:mt-[40px] mt-8 sm:pt-[56px] rounded-2xl'>
            <div className='sm:w-[1304px] w-[396px]  ml-4 sm:h-[262px] sm:mx-[36px] sm:flex sm:grid-cols-4 py-[55px]'>
                <div className='sm:w-[306px] w-[274px] sm:ml-0 ml-[61px] sm:border-r-[1px] '>
                    <div className='sm:w-[274px] w-[274px] sm:ml-0  sm:h-[230px] sm:mt-4'>
                        <img src={trackter} className='sm:h-[64px] h-[48px] sm:w-[64px] w-[48px] mx-auto'></img>
                        <div className='text-[24px] font-medium mt-4'>Agricultural support</div>
                        <div className='text-[16px] font-light leading-8 sm:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard</div>
                    </div>
                </div>

                <div className='border sm:hidden block w-[264px] mx-auto my-8'></div>

                <div className='sm:w-[339px]  w-[274px] sm:ml-0 ml-[64px] sm:border-r-[1px]  '>
                    <div className='sm:w-[274px] w-[274px]   sm:h-[230px] sm:mt-4 sm:mx-auto'>
                        <img src={persantage} className='sm:h-[64px] h-[48px] w-[48px] sm:w-[64px] mx-auto'></img>
                        <div className='text-[24px] font-medium mt-4'>Fair market prices</div>
                        <div className='text-[16px] font-light leading-8 sm:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard</div>
                    </div>
                </div>

                <div className='border sm:hidden block w-[264px] mx-auto my-8'></div>

                <div className='sm:w-[353px]  w-[274px] sm:ml-0 ml-[61px] sm:border-r-[1px]'>
                    <div className='sm:w-[274px] w-[274px]   sm:h-[230px] sm:mt-4 mx-auto sm:mx-auto'>
                        <img src={plant} className='sm:h-[64px] h-[48px] w-[48px] sm:w-[64px] mx-auto'></img>
                        <div className='text-[24px] font-medium mt-4'>Advanced technologies</div> 
                        <div className='text-[16px] font-light leading-8 sm:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard</div>
                    </div>
                </div>

                <div className='border sm:hidden block w-[264px] mx-auto my-8'></div>

                <div className='sm:w-[306px]'>
                <div className='sm:w-[274px] w-[274px] ml-[64px]  sm:h-[230px] sm:mt-4 sm:ml-auto'>
                        <img src={hands} className='sm:h-[64px] h-[48px] w-[48px] sm:w-[64px] mx-auto'></img>
                        <div className='text-[24px] font-medium mt-4'>Financial services</div>
                        <div className='text-[16px] font-light leading-8 sm:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportsGrid
