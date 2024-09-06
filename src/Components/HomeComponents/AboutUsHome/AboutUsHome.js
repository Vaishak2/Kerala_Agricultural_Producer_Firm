import React from 'react'
import greenImage from '../../../Assets/greenImage.png'
import Group from '../../../Assets/Group.png'
import ButtonArrow from "../../../Assets/Icon/arrow_outward.svg"
import { Link } from 'react-router-dom'

function AboutUsHome() {
  return (

    <div className="sm:w-full justify-around sm:mt-[104px] mt-[72px] sm:mx-0 mx-2 sm:flex sm:px-8 ">
      <div className="">
        <img
          src={greenImage}
          alt="greenimg"
          className="rounded-lg object-cover sm:w-[559px] w-full sm:h-[571px] h-[304px]"
        />
      </div>


       <div className='sm:ml-6 sm:mt-[25px] mt-8 sm:w-[764px] w-full sm:text-center' >
        <h2 className='sm:text-5xl text-[32px] font-medium text-[#2A2E35]'>About Us</h2>
        <p className="font-light text-[#2A2E35] text-[16px] sm:mt-6 mt-4 sm:leading-8 sm:text-justify text-justify px-4">
          Where nature and innovation meet to bring you the finest agricultural products. Our farm is dedicated to 
          sustainable practices that respect the environment while delivering high-quality, fresh produce to our customers.
          With a passion for the land and a commitment to excellence, we grow a diverse range of crops that nourish our community.

        </p>

        <div className='flex'>


        <div>
            <div className="sm:mt-[56px] mt-8">
              <span className="flex items-center justify-center   bg-[#FFFFFF] text-[#2A2E35] text-[20px] font-medium sm:w-[155px] w-[141px] h-[40px] rounded-[40px]">
                Our Mission
              </span>
              <h3 className="sm:mt-[24px] mt-[24px] text-start font-light text-[#2A2E35] sm:text-5xl text-[32px]">
                  Saw with us, <br />
                <span className="sm:text-5xl text-[32px] sm:font-normal font-semibold">Reap with trust.</span>

              </h3>
            </div>
            <div className='sm:mt-[56px] mt-[24px]'>
             <Link to='/aboutUs'>
                <button className=" bg-[#5D8424] text-[#F5F5DC] font-normal text-[16px] sm:h-[56px] sm:w-[200px] rounded-[48px] sm:py-4 py-3 px-6  sm:px-12">
                  View More
                  <img className='sm:w-6 sm:h-6' src={ButtonArrow} alt="Button Arrow" />
                </button>
             </Link>
            </div>
          </div>


        <div className='sm:ml-[54px] ml-[20px] mt-[22px]'>
          <img 
          src={Group}
          alt="groupImg" 
            className='sm:w-[330px] w-[148px] h-[148px] sm:h-[330px]'
          />
        </div>


        </div>
      </div>
    </div>



  )
}

export default AboutUsHome
