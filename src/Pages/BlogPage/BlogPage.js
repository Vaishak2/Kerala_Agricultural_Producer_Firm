import React from 'react'
import blogImg1 from '../../Assets/images/blogImages/blogImg1.png'
import blogImg2 from '../../Assets/images/blogImages/blogImg2.png'
import blogImg3 from '../../Assets/images/blogImages/blogImg3.png'
import blogImg4 from '../../Assets/images/blogImages/blogImg4.png'
import blogImg5 from '../../Assets/images/blogImages/blogImg5.png'
import blogImg6 from '../../Assets/images/blogImages/blogImg6.png'
import ButtonArrow from "../../Assets/Icon/arrow_outward.svg";
import { Link } from 'react-router-dom'

function BlogPage() {
    return (
        <div className='sm:px-8'>
            <div className='text-[48px] font-normal sm:mt-[40px]'>Latest posts & articles</div>
            <div className='grid grid-cols-3 gap-6'>
                <div className='sm:w-[443px] sm:mt-12'>
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
                <div className='sm:w-[443px] sm:mt-12'>
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
                <div className='sm:w-[443px] sm:mt-12'>
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
            </div>
        </div>
    )
}

export default BlogPage
