import React from 'react'
import greenImage from '../../../Assets/greenImage.png'
import Group from '../../../Assets/Group.png'

function AboutUsHome() {
  return (

    <div className="sm:w-[1347px] flex">
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
          Where nature and innovation meet to bring you the finest agricultural products. Our farm is dedicated to 
          sustainable practices that respect the environment while delivering high-quality, fresh produce to our customers.
          With a passion for the land and a commitment to excellence, we grow a diverse range of crops that nourish our community.
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
              <button className=" bg-[#5D8424] text-[#F5F5DC] font-normal text-[16px] sm:h-[56px] sm:w-[200px] rounded-[48px]">
                View More
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
