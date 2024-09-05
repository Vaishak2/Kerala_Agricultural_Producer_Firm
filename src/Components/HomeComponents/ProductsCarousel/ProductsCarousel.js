import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftScrollArrow from '../../../Assets/Icon/left.png'
import RightScrollArrow from '../../../Assets/Icon/right.png'
import ButtonArrow from "../../../Assets/Icon/arrow_outward.svg";
import productImg1 from "../../../Assets/images/productImages/product1.png"
import productImg2 from "../../../Assets/images/productImages/product2.png"
import productImg3 from "../../../Assets/images/productImages/product3.png"
import productImg4 from "../../../Assets/images/productImages/product4.png"
import './ProductsCarousel.css'


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img src={RightScrollArrow}
      className={`${className} custom-next-arrow`}
      style={{ ...style, height: "48px", width: "48px", display: "block" }}
      onClick={onClick}
    >
    </img>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img src={LeftScrollArrow}
      className={`${className} custom-prev-arrow`}
      style={{ ...style, height: "48px", width: "48px", display: "block" }}
      onClick={onClick}
    >
    </img>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768, // Adjust the breakpoint value as needed
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ],

  className: "custom-carousel"

};

function ProductsCarousel() {
  return (
    <div className='sm:mx-8'>
      <div className='text-[48px] font-medium sm:mt-[104px]'>Our Products</div>
      <div className='sm:w-[764px] mx-auto text-[16px] leading-8 font-light sm:mt-6'>Elit ultricies adipiscing ornare. Rutrum sapien aliquet mollis. Pretium condimentum. Cursus elit hac fames laoreet non nec facilisis quis dui.</div>


      <div className="slider-container sm:mt-[56px]">
        <Slider {...settings}>
          <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
            <img src={productImg1} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
            <div className='text-left sm:p-6'>
              <div className='text-[18px] font-medium'>Fertilizer</div>
            </div>
          </div>
          <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
          <img src={productImg2} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
            <div className='text-left sm:p-6'>
              <div className='text-[18px] font-medium'>Pesticides</div>
            </div>
          </div>
          <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
          <img src={productImg3} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
            <div className='text-left sm:p-6'>
              <div className='text-[18px] font-medium'>Seeds</div>
            </div>
          </div>
          <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
          <img src={productImg4} className='sm:w-[326px] sm:h-[301px] rounded-t-2xl'></img>
            <div className='text-left sm:p-6'>
              <div className='text-[18px] font-medium'>Equipment</div>
            </div>
          </div>
          <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
            <div className='sm:w-[326px] sm:h-[301px] bg-[#D9D9D9] rounded-t-2xl'></div>
            <div className='text-left sm:p-6'>
              <div className='text-[18px] font-medium'>Elit ultricies adipiscing </div>
            </div>
          </div>
          <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
            <div className='sm:w-[326px] sm:h-[301px] bg-[#D9D9D9] rounded-t-2xl'></div>
            <div className='text-left sm:p-6'>
              <div className='text-[18px] font-medium'>Elit ultricies adipiscing </div>
            </div>
          </div>
          <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
            <div className='sm:w-[326px] sm:h-[301px] bg-[#D9D9D9] rounded-t-2xl'></div>
            <div className='text-left sm:p-6'>
              <div className='text-[18px] font-medium'>Elit ultricies adipiscing </div>
            </div>
          </div>
          <div className='sm:w-[326px] sm:h-[374px] bg-[#FFFFFF] rounded-2xl'>
            <div className='sm:w-[326px] sm:h-[301px] bg-[#D9D9D9] rounded-t-2xl'></div>
            <div className='text-left sm:p-6'>
              <div className='text-[18px] font-medium'>Elit ultricies adipiscing </div>
            </div>
          </div>

        </Slider>
      </div>

      <button className='sm:w-[200px] sm:h-[56px] mx-auto sm:mt-[56px] bg-[#5D8424]'>
        <span className='text-white text-[16px] font-normal ml-auto'>More Products</span>
        <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
      </button>

    </div>
  )
}

export default ProductsCarousel
