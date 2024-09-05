import React from 'react'
import greenImage from '../../../Assets/greenImage.png'
import Group from '../../../Assets/Group.png'
import ButtonArrow from "../../../Assets/Icon/arrow_outward.svg"

function AboutUsHome() {
  return (

    <div className="sm:w-[1347px] sm:mt-[104px] sm:mx-[32px] flex">
      <div className="">
        <img
          src={greenImage}
          alt="greenimg"
          className="rounded-lg object-cover sm:w-[559px] sm:h-[571px]"
        />
      </div>

      <div className='sm:ml-6 sm:mt-[25px] sm:w-[764px] sm:text-justify' >
        <h2 className='text-5xl font-medium text-[#2A2E35]'>About Us</h2>
        <p className="font-light text-[#2A2E35] text-[16px] sm:mt-6 sm:leading-8">
          At , KGAPCO we’re dedicated to advancing agriculture with innovative solutions and
          high-quality products. Our core values of sustainability, integrity, and customer focus drive us to
          support farmers and promote sustainable farming practices.
        </p>

        <div className='flex'>

          <div>
            <div className="sm:mt-[56px]">
              <span className="flex items-center justify-center   bg-[#FFFFFF] text-[#2A2E35] text-[20px] font-medium sm:w-[155px] sm:h-[40px] rounded-[40px]">
                Our Mission
              </span>
              <h3 className="sm:mt-[24px] font-light text-[#2A2E35] text-5xl">
                Saw with us, <br />
                <span className="tex-5xl font-normal">Reap with trust.</span>
              </h3>
            </div>
            <div className='sm:mt-[56px]'>
              <button className=" bg-[#5D8424] text-[#F5F5DC] font-normal text-[16px] sm:h-[56px] sm:w-[200px] rounded-[48px] sm:py-4 sm:px-12">
                View More
                <img className='sm:w-6 sm:h-6' src={ButtonArrow} alt="Button Arrow" />
              </button>
            </div>
          </div>

          <div className='sm:ml-[54px]'>
            <img
              src={Group}
              alt="groupImg"
              className='sm:w-[330px] sm:h-[330px]'
            />
          </div>

        </div>
      </div>
    </div>



  )
}

export default AboutUsHome
