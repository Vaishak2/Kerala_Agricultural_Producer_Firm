import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftScrollArrow from '../../../Assets/Icon/Group 14.png'
import RightScrollArrow from '../../../Assets/Icon/Group 13.png'
import ButtonArrow from "../../../Assets/Icon/arrow_outward.svg";
import blogImg1 from "../../../Assets/images/blogImages/blogImg1.png"
import blogImg2 from "../../../Assets/images/blogImages/blogImg2.png"
import blogImg3 from "../../../Assets/images/blogImages/blogImg3.png"
import './BlogsCarousel.css'


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
    slidesToShow: 3,
    slidesToScroll: 1,
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

function BlogsCarousel() {
    return (
        <div className='sm:mx-8'>
            <div className='text-[48px] font-medium sm:mt-[104px]'>Our Blogs</div>
            <div className='sm:w-[798px] mx-auto text-[16px] leading-8 font-light sm:mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard</div>


            <div className="slider-container sm:mt-[56px]">
                <Slider {...settings}>

                    <div className='sm:w-[443px]'>
                        <img src={blogImg1} className='h-[290px] rounded-lg'></img>
                        <div className='text-[#A7A7A7] text-[16px] text-left mt-6'>10 May 2024</div>
                        <div className='sm:h-[60px] text-[24px] font-semibold text-left sm:leading-[29px] sm:mt-4'>Advantages of Paper Trading for the Beginning Investor</div>
                        <div className='sm:h-[40px] text-[16px] font-light text-left sm:leading-[19px] sm:mt-4 sm:w-[256px]'>Paper Trading refers to the practice of simulating stock trading without...</div>
                        <button className='sm:w-[201px] sm:h-[56px] bg-[#5D8424] sm:mt-6'>
                            <span className='text-white text-[16px] font-normal ml-auto'>Read More</span>
                            <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
                        </button>
                    </div>

                    <div className='sm:w-[443px]'>
                        <img src={blogImg2} className='h-[290px] rounded-lg'></img>
                        <div className='text-[#A7A7A7] text-[16px] text-left mt-6'>10 May 2024</div>
                        <div className='sm:h-[60px] text-[24px] font-semibold text-left sm:leading-[29px] sm:mt-4'>Advantages of Paper Trading for the Beginning Investor</div>
                        <div className='sm:h-[40px] text-[16px] font-light text-left sm:leading-[19px] sm:mt-4 sm:w-[256px]'>Paper Trading refers to the practice of simulating stock trading without...</div>
                        <button className='sm:w-[201px] sm:h-[56px] bg-[#5D8424] sm:mt-6'>
                            <span className='text-white text-[16px] font-normal ml-auto'>Read More</span>
                            <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
                        </button>
                    </div>

                    <div className='sm:w-[443px]'>
                        <img src={blogImg3} className='h-[290px] rounded-lg'></img>
                        <div className='text-[#A7A7A7] text-[16px] text-left mt-6'>10 May 2024</div>
                        <div className='sm:h-[60px] text-[24px] font-semibold text-left sm:leading-[29px] sm:mt-4'>Advantages of Paper Trading for the Beginning Investor</div>
                        <div className='sm:h-[40px] text-[16px] font-light text-left sm:leading-[19px] sm:mt-4 sm:w-[256px]'>Paper Trading refers to the practice of simulating stock trading without...</div>
                        <button className='sm:w-[201px] sm:h-[56px] bg-[#5D8424] sm:mt-6'>
                            <span className='text-white text-[16px] font-normal ml-auto'>Read More</span>
                            <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
                        </button>
                    </div>

                </Slider>
            </div>

        </div>
    )
}

export default BlogsCarousel
