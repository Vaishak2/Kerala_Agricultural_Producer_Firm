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
import { Link } from 'react-router-dom';


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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],

  className: "custom-carousel"

};

function ProductsCarousel() {
  return (

    <div className='sm:mx-8'>
      <div className='sm:text-[48px] text-[32px] font-medium sm:mt-[40px] mt-[48px]'>Our Products</div>
      <div className='sm:w-[764px] sm:mx-auto mx-4 text-[16px] sm:leading-8 leading-7 font-light sm:mt-6 mt-4'>Explore our diverse range of high-quality agricultural products, designed to meet the needs of modern farming. From premium seeds to essential agri supplies, we offer solutions that drive success in your agricultural ventures.</div>


      <div className="slider-container sm:mt-[56px] mt-[120px]">
        <Slider {...settings}>
          <div className='sm:w-[326px] w-full sm:h-[374px] h-[386px] bg-[#FFFFFF] rounded-2xl'>
            <img src={productImg1} className='sm:w-[396px] w-full sm:h-[301px] h-[312px] rounded-t-2xl'></img>
            <div className='text-left p-6'>
              <div className='text-[18px] font-medium'>Fertilizer</div>
            </div>
          </div>

          <div className='sm:w-[326px] w-full sm:h-[374px] h-[386px] bg-[#FFFFFF] rounded-2xl'>
            <img src={productImg2} className='sm:w-[396px] w-full sm:h-[301px] h-[312px] rounded-t-2xl'></img>
            <div className='text-left p-6'>
              <div className='text-[18px] font-medium'>Pesticides</div>
            </div>
          </div>

          <div className='sm:w-[326px] w-full sm:h-[374px] h-[386px] bg-[#FFFFFF] rounded-2xl'>
            <img src={productImg3} className='sm:w-[396px] w-full sm:h-[301px] h-[312px] rounded-t-2xl'></img>
            <div className='text-left p-6'>
              <div className='text-[18px] font-medium'>Seeds</div>
            </div>
          </div>

          <div className='sm:w-[326px] w-full sm:h-[374px] h-[386px] bg-[#FFFFFF] rounded-2xl'>
            <img src={productImg4} className='sm:w-[396px] w-full sm:h-[301px] h-[312px] rounded-t-2xl'></img>
            <div className='text-left p-6'>
              <div className='text-[18px] font-medium'>Equipment</div>
            </div>
          </div>


        </Slider>
      </div>

      <Link to={'products'}>
        <button className='sm:w-[200px] w-[165px] sm:h-[56px] h-[48px] mx-auto sm:mt-[56px] mt-[32px] bg-[#5D8424]'>
          <span className='text-white text-[16px] font-normal ml-auto'>More Products</span>
          <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
        </button>
      </Link>
    </div>
  )
}

export default ProductsCarousel
