import React from 'react';
import BgVector from "../../../Assets/bg vector.png"
import Exclamtion from "../../../Assets/Icon/Exclamation2.svg"
import blackExclamtion from "../../../Assets/Icon/blackExclamtion.svg"
import ClientImage from "../../../Assets/client Image.png"
import Slider from "react-slick";
import './ClientSays.css'

function ClientSays() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 768, // Adjust the breakpoint value as needed
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  };

  return (
    <div className='bg-[#ffff] sm:mt-0 mt-[77px] text-center sm:ml-0 pt-[72px] pb-[50px] px-4 sm:pt-[88px] '>
      <div className='sm:w-[764px] w-full sm:mx-auto  '>
        <h1 className='sm:text-5xl text-[32px] whitespace-nowrap sm:font-medium'>What’s Our Clients Say</h1>
        <p className='sm:text-[16px] text-[16px] sm:leading-8 font-light mt-4 sm:mt-6'>Hear directly from our valued clients about their experiences with our
          agricultural services. Their feedback highlights our commitment to quality
          and impact.
        </p>
      </div>

      {/* <div className='flex columns-3 gap-6 sm:mx-auto sm:justify-center justify-center sm:mt-14 mt-12 '> */}
        <div className="slider-container">
          <Slider {...settings}>

           
          <div>
              <div className='sm:translate-x-[199px] translate-x-[151px] translate-y-[24px] w-fit'><img src={Exclamtion} alt="" /></div>

              <div>
                <div className='sm:w-[443px] w-full bg-[#F8F8F8] h-[368px] rounded-t-[32px] rounded-bl-[32px] text-white sm:pt-12 pt-12'>

                  <div className=''>
                    <h1 className='sm:text-[20px] text-black'>Madhav Anil</h1>
                    <h2 className='sm:text-[16px] text-black sm:leading-6 sm:font-light sm:mt-1'>Manager</h2>
                    <p className='sm:w-[347px] w-[90%]  mx-auto text-black sm:text-[16px] text-[16px] sm:leading-8 leading-8 font-light mt-8'>“KGAPCO has transformed our business. Their innovative approach to agriculture has improved efficiency and quality. We've seen major gains in productivity and profitability, and we highly recommend their services.”</p>
                  </div>
                  <img className='w-[169px] h-[166px] translate-x-[126px] translate-y-[-141px]' src={BgVector} alt="" />

                </div>
              </div>
              <div>
                <img className='w-[79px] h-[79px] sm:translate-x-[185px] translate-x-[141px] translate-y-[-48px]' src={ClientImage} alt="" />
              </div>
            </div>

            <div>
              <div className='sm:translate-x-[199px] translate-x-[151px] translate-y-[24px] w-fit'><img src={Exclamtion} alt="" /></div>

              <div>
                <div className='sm:w-[443px] w-full bg-[#5D8424] h-[368px] rounded-t-[32px] rounded-bl-[32px] text-white sm:pt-12 pt-12'>

                  <div className=''>
                    <h1 className='sm:text-[20px]'>Madhav Anil</h1>
                    <h2 className='sm:text-[16px] sm:leading-6 sm:font-light sm:mt-1'>Manager</h2>
                    <p className='sm:w-[347px] w-[90%]  mx-auto sm:text-[16px] text-[16px] sm:leading-8 leading-8 font-light mt-8'>“KGAPCO has transformed our business. Their innovative approach to agriculture has improved efficiency and quality. We've seen major gains in productivity and profitability, and we highly recommend their services.”</p>
                  </div>
                  <img className='w-[169px] h-[166px] translate-x-[126px] translate-y-[-141px]' src={BgVector} alt="" />

                </div>
              </div>
              <div>
                <img className='w-[79px] h-[79px] sm:translate-x-[185px] translate-x-[141px] translate-y-[-48px]' src={ClientImage} alt="" />
              </div>
            </div>

            
            <div>
              <div className='sm:translate-x-[199px] translate-x-[151px] translate-y-[24px] w-fit'><img src={Exclamtion} alt="" /></div>

              <div>
                <div className='sm:w-[443px] w-full bg-[#F8F8F8] h-[368px] rounded-t-[32px] rounded-bl-[32px] text-white sm:pt-12 pt-12'>

                  <div className=''>
                    <h1 className='sm:text-[20px] text-black'>Madhav Anil</h1>
                    <h2 className='sm:text-[16px] sm:leading-6 sm:font-light sm:mt-1 text-black'>Manager</h2>
                    <p className='sm:w-[347px] w-[90%]  mx-auto sm:text-[16px] text-[16px] sm:leading-8 leading-8 font-light mt-8 text-black'>“KGAPCO has transformed our business. Their innovative approach to agriculture has improved efficiency and quality. We've seen major gains in productivity and profitability, and we highly recommend their services.”</p>
                  </div>
                  <img className='w-[169px] h-[166px] translate-x-[126px] translate-y-[-141px]' src={BgVector} alt="" />

                </div>
              </div>
              <div>
                <img className='w-[79px] h-[79px] sm:translate-x-[185px] translate-x-[141px] translate-y-[-48px]' src={ClientImage} alt="" />
              </div>
            </div>

            <div>
              <div className='sm:translate-x-[199px] translate-x-[151px] translate-y-[24px] w-fit'><img src={Exclamtion} alt="" /></div>

              <div>
                <div className='sm:w-[443px] w-full bg-[#5D8424] h-[368px] rounded-t-[32px] rounded-bl-[32px] text-white sm:pt-12 pt-12'>

                  <div className=''>
                    <h1 className='sm:text-[20px]'>Madhav Anil</h1>
                    <h2 className='sm:text-[16px] sm:leading-6 sm:font-light sm:mt-1'>Manager</h2>
                    <p className='sm:w-[347px] w-[90%]  mx-auto sm:text-[16px] text-[16px] sm:leading-8 leading-8 font-light mt-8'>“KGAPCO has transformed our business. Their innovative approach to agriculture has improved efficiency and quality. We've seen major gains in productivity and profitability, and we highly recommend their services.”</p>
                  </div>
                  <img className='w-[169px] h-[166px] translate-x-[126px] translate-y-[-141px]' src={BgVector} alt="" />

                </div>
              </div>
              <div>
                <img className='w-[79px] h-[79px] sm:translate-x-[185px] translate-x-[141px] translate-y-[-48px]' src={ClientImage} alt="" />
              </div>
            </div>

          </Slider>
        </div>

      {/* </div> */}

    </div>
  )
}

export default ClientSays
