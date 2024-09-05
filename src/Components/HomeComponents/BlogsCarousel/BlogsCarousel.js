import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftScrollArrow from '../../../Assets/Icon/left.png'
import RightScrollArrow from '../../../Assets/Icon/right.png'
import ButtonArrow from "../../../Assets/Icon/arrow_outward.svg";
import blogImg1 from "../../../Assets/images/blogImages/blogImg1.png"
import blogImg2 from "../../../Assets/images/blogImages/blogImg2.png"
import blogImg3 from "../../../Assets/images/blogImages/blogImg3.png"
import './BlogsCarousel.css'
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
        <div className='sm:px-8 bg-[#FFFFFF] sm:mt-[104px] sm:pb-[84px]'>
            <div className='text-[48px] font-medium sm:pt-[104px]'>Our Blogs</div>
            <div className='sm:w-[798px] mx-auto text-[16px] leading-8 font-light sm:mt-6'>Stay informed with our agricultural blog, featuring expert tips, industry insights, and practical advice to enhance your farming operations and drive success.</div>


            <div className="slider-container sm:mt-[56px]">
                <Slider {...settings}>

                    <div className='sm:w-[443px]'>
                        <img src={blogImg1} className='h-[290px] rounded-lg'></img>
                        <div className='text-[#A7A7A7] text-[16px] text-left mt-6'>10 May 2024</div>
                        <div className='sm:h-[60px] text-[24px] font-semibold text-left sm:leading-[29px] sm:mt-4'>Exploring the Future of Farming: Top Agricultural Software...</div>
                        <div className='sm:h-[40px] text-[16px] font-light text-left sm:leading-[19px] sm:mt-4 sm:w-[256px]'>Uncover the best software solutions for today's tech-savvy farmers.</div>
                        <Link to='/blogs/blogdetails1'>
                            <button className='sm:w-[201px] sm:h-[56px] bg-[#5D8424] sm:mt-6'>
                                <span className='text-white text-[16px] font-normal ml-auto'>Read More</span>
                                <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
                            </button>
                        </Link>
                    </div>

                    <div className='sm:w-[443px]'>
                        <img src={blogImg2} className='h-[290px] rounded-lg'></img>
                        <div className='text-[#A7A7A7] text-[16px] text-left mt-6'>10 May 2024</div>
                        <div className='sm:h-[60px] text-[24px] font-semibold text-left sm:leading-[29px] sm:mt-4'>The Importance of Choosing the Right Types of Seed Storage...</div>
                        <div className='sm:h-[40px] text-[16px] font-light text-left sm:leading-[19px] sm:mt-4 sm:w-[256px]'>Learn the importance of proper seed storage and handling equipment...</div>
                        <Link to='/blogs/blogdetails2'>
                            <button className='sm:w-[201px] sm:h-[56px] bg-[#5D8424] sm:mt-6'>
                                <span className='text-white text-[16px] font-normal ml-auto'>Read More</span>
                                <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
                            </button>
                        </Link>
                    </div>

                    <div className='sm:w-[443px]'>
                        <img src={blogImg3} className='h-[290px] rounded-lg'></img>
                        <div className='text-[#A7A7A7] text-[16px] text-left mt-6'>10 May 2024</div>
                        <div className='sm:h-[60px] text-[24px] font-semibold text-left sm:leading-[29px] sm:mt-4'>Future of Agriculture: Discovering New Methods for Cost-Effect...</div>
                        <div className='sm:h-[40px] text-[16px] font-light text-left sm:leading-[19px] sm:mt-4 sm:w-[256px]'>Explore cost-effective farming methods and cutting-edge...</div>
                        <Link to='/blogs/blogdetails3'>
                            <button className='sm:w-[201px] sm:h-[56px] bg-[#5D8424] sm:mt-6'>
                                <span className='text-white text-[16px] font-normal ml-auto'>Read More</span>
                                <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
                            </button>
                        </Link>
                    </div>

                </Slider>
            </div>

        </div>
    )
}

export default BlogsCarousel
