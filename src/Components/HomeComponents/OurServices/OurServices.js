import React, { useState } from 'react';
import FillArrow from "../../../Assets/Icon/Fill_Arrow.svg";
import UnFillArrow from "../../../Assets/Icon/unFill_Arrow.svg";
import Service1 from "../../../Assets/serviceImage.png"
import Service2 from "../../../Assets/service2.png"

function OurServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
    "Vikas Samrudhi (Fixed Contribution Scheme)"
  ];

  return (
    <div className='sm:mt-[108px]'>
      <div className='sm:w-[798px] mx-auto'>
        <div className='sm:text-[48px] sm:font-medium sm:leading-[99px]'>Our services</div>
        <p className='sm:text-[16px] sm:font-light sm:leading-8 text-[#2A2E35]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard.
        </p>
      </div>
      <div className='flex'>
        <div className='sm:mt-16 sm:ml-8'>
          <h1 className='text-justify sm:font-medium sm:text-[32px] sm:leading-[57px]'>Agri support Services</h1>
          {services.map((service, index) => (
            <div
              key={index}
              className='flex sm:w-[793px] bg-white rounded-t-[32px] rounded-br-[32px] sm:p-3 justify-between sm:mt-6'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className='sm:ml-8 my-auto'>{service}</p>
              <img src={hoveredIndex === index ? FillArrow : UnFillArrow} alt="Arrow Icon" />
            </div>
          ))}
          
        </div>
        <div className='sm:mt-[205px] sm:ml-[57px]'>
            <img className='sm:w-[490px] sm:h-[322px]' src={Service1} alt="" />
          </div>
      </div>
      <div className='flex'>
      <div className='sm:mt-[205px] sm:ml-[57px]'>
            <img className='sm:w-[490px] sm:h-[322px]' src={Service2} alt="" />
          </div>
        <div className='sm:mt-16 sm:ml-8'>
          <h1 className='text-justify sm:font-medium sm:text-[32px] sm:leading-[57px]'> Our Financial Services</h1>
          {services2.map((service, index) => (
            <div
              key={index}
              className='flex sm:w-[793px] bg-white rounded-t-[32px] rounded-br-[32px] sm:p-3 justify-between sm:mt-6'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className='sm:ml-8 my-auto'>{service}</p>
              <img src={hoveredIndex === index ? FillArrow : UnFillArrow} alt="Arrow Icon" />
            </div>
          ))}
          
        </div>
        
      </div>
    </div>
  );
}

export default OurServices;
