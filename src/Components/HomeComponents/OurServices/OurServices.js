import React, { useEffect, useState } from 'react';
import FillArrow from "../../../Assets/Icon/Fill_Arrow.svg";
import UnFillArrow from "../../../Assets/Icon/unFill_Arrow.svg";
import Service1 from "../../../Assets/service image new.png"
import Service2 from "../../../Assets/service2.png"
import { Link } from 'react-router-dom';

function OurServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex2, setHoveredIndex2] = useState(null);

  const services = [
    "Procurement of Agricultural crops with fixed return to the farmer",
    "Distribution of Agri support products",
    "Distribution of seeds",
    "Procurement of Agricultural crops with fixed return to the farmer",
    "Empowering the Agriculture with advanced technology and innovative support"
  ];
  const services2 = [
    "Sampoorna Samrudhi (Fixed Contribution Scheme)",
    "Agri Samrudhi (Recurring Contributions Scheme)",
    "Vyapar Shakthi Yojana (Business Loan)",
    "Mahila Shakthi Yojana (Group Loan)",

  ];
 
  return (
    <div className='sm:mt-[108px] mt-[72px]'>
      <div className='sm:w-[798px] w-[396px] sm:mx-auto ml-4'>
        <div className='sm:text-[48px] text-[32px] sm:font-medium sm:leading-[99px] leading-[99px]'>Our services</div>
        <p className='sm:text-[16px] text-[16px] sm:font-light sm:leading-8 leading-[28px] text-[#2A2E35]'>
        Transform your agricultural practices with KGAPCO Our expert services in crop
procurement and seed distribution are designed to support your farming needs
effectively
        </p>
      </div>
      <div className='flex'>
        <div className='sm:mt-16 mt-12 sm:ml-8 ml-4'>
          <h1 className='text-justify font-medium sm:text-[32px] text-[22px] sm:leading-[57px] leading-[22px]'>Agri support Services</h1>
          <div className='sm:mt-[205px] mt-6 sm:ml-[57px] sm:hidden block'>
            <img className='sm:w-[490px] w-[396px] h-[322px] sm:h-[322px]' src={Service1} alt="" />
          </div>
          {services.map((service, index) => (
            <Link to={"services"}>
            <div
              key={index}
              className='flex sm:w-[793px] w-[396px] bg-white cursor-pointer rounded-t-[32px] pr-[14px] rounded-br-[32px] sm:p-3 py-5 justify-between sm:mt-6'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className='sm:ml-8 ml-8 my-auto sm:text-[18px] text-[16px] text-start sm:w-[597px] w-[236px]'>{service}</p>
              <img src={hoveredIndex === index ? FillArrow : UnFillArrow} alt="Arrow Icon" />
            </div>
            </Link>
          ))}
          
        </div>
        <div className='hidden sm:block sm:mt-[205px] sm:ml-[57px]'>
            <img className='sm:w-[490px] sm:h-[322px]' src={Service1} alt="" />
          </div>
      </div>
      <div className='flex'>
      <div className=' hidden sm:block sm:mt-[205px] sm:ml-[57px]'>
            <img className='sm:w-[490px] sm:h-[322px]' src={Service2} alt="" />
          </div>
        <div className='sm:mt-16 mt-12 sm:ml-8 sm:mb-20 ml-4'>
          <h1 className='text-justify font-medium sm:text-[32px] text-[22px] sm:leading-[57px] leading-[22px]'> Our Financial Services</h1>
          <div className='sm:mt-[205px] mt-6 sm:ml-[57px] sm:hidden block '>
            <img className='sm:w-[490px] w-[396px] h-[322px] sm:h-[322px]' src={Service2} alt="" />
          </div>
          {services2.map((service, index) => (
            <Link to={"services"}>
            <div
              key={index}
              className='flex sm:w-[793px] w-[396px] bg-white rounded-t-[32px] pr-[14px] rounded-br-[32px] sm:p-3 py-5 justify-between sm:mt-6 leading-6'
              onMouseEnter={() => setHoveredIndex2(index)}
              onMouseLeave={() => setHoveredIndex2(null)}
            >
              <p className='sm:ml-8 ml-8 my-auto sm:text-[18px] text-[16px] text-start sm:w-[597px] w-[236px]'>{service}</p>
              <img src={hoveredIndex2 === index ? FillArrow : UnFillArrow} alt="Arrow Icon" />
            </div>
            </Link>
          ))}
          
        </div>
        
      </div>
    </div>
  );
}

export default OurServices;
