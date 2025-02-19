import React, { useEffect } from 'react'
import BlogsBanner2 from "../../Assets/Banner-Image/blogsBanner2.png"
import blogsBanner2Resp from "../../Assets/Banner-Image/blogsBanner2-resp.png"
import blogImg1 from '../../Assets/images/blogImages/blogImg1.png'
import blogImg2 from '../../Assets/images/blogImages/blogImg2.png'
import blogImg3 from '../../Assets/images/blogImages/blogImg3.png'
import ButtonArrow from "../../Assets/Icon/arrow_outward.svg";
import { Link } from 'react-router-dom'

function BlogDetailPage2() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='sm:mx-8 mx-4 mt-[40px]'>
            <img className='sm:block hidden' src={BlogsBanner2}></img>
            <img className='sm:hidden block' src={blogsBanner2Resp}></img>
            <div className='sm:text-[40px] text-[32px] font-medium text-left sm:mt-6 mt-8'>The Importance of Choosing the Right Types of Seed Storage and Handling Equipment for Agricultural Success</div>

            <div className='text-[16px] font-light text-left sm:leading-7 mt-6'>Learn the importance of proper seed storage and handling equipment in
                preserving seed quality. Our blog offers tips for improving your agricultural
                outcomes.
                <br></br>
                <br></br>
                In the world of agriculture, every detail counts, and the quality of your seeds can make
                or break your harvest. One of the most critical factors in ensuring the success of your
                crops lies in how you store and handle your seeds. The right seed storage and handling
                equipment are not just tools, they are the guardians of your future yields.
                <br></br>
                <br></br>
                Proper seed storage ensures that seeds remain viable over time, protecting them from
                environmental hazards such as moisture, extreme temperatures, pests, and diseases.
                Advanced storage systems, including climate-controlled facilities, help maintain the
                ideal conditions necessary to preserve seed quality, preventing spoilage and
                deterioration.
                <br></br>
                <br></br>
                Equally important is the handling of seeds. Efficient and gentle handling prevents
                mechanical damage that could affect germination rates and crop uniformity. Equipment
                such as conveyors, seed treaters, and automated handling systems are designed to
                streamline the process, reduce labor costs, and minimize the risk of contamination.
                <br></br>
                <br></br>
                Selecting the right storage and handling equipment is an investment in your farm's
                future. It supports sustainable farming practices by reducing waste and maximizing the
                potential of every seed planted. In an industry where margins can be tight, and the
                stakes are high, the right equipment can be the difference between a bountiful harvest
                and a disappointing one.
                <br></br>
                <br></br>
                By choosing the appropriate seed storage and handling solutions, you not only protect
                your seeds but also set the foundation for a successful and profitable farming operation.
                It’s about more than just storage. it’s about safeguarding your livelihood and ensuring
                the continued growth and prosperity of your agricultural business.
            </div>



            <div className='text-[32px] font-medium text-left sm:mt-[104px] mt-[72px]'>Similar Blogs</div>

            <div className='grid sm:grid-cols-3 grid-cols-1 gap-6'>
                <div className='sm:w-[443px] w-full mt-12 sm:mx-auto'>
                    <img src={blogImg1} className='sm:h-[290px] h-auto rounded-lg'></img>
                    <div className='text-[#A7A7A7] sm:text-[16px] text-[18px] text-left mt-6'>10 May 2024</div>
                    <div className='sm:h-[60px] text-[24px] font-semibold text-left sm:leading-[29px] mt-4'>Exploring the Future of Farming: Top Agricultural Software...</div>
                    <div className='sm:h-[40px] sm:text-[16px] text-[18px] font-light text-left sm:leading-[19px] mt-4 sm:w-[256px]'>Uncover the best software solutions for today's tech-savvy farmers.</div>
                    <Link to='/blogs/blogdetails1'>
                        <button className='sm:w-[201px] w-[153px] sm:h-[56px] h-[48px] bg-[#5D8424] mt-6'>
                            <span className='text-white sm:text-[16px] font-normal ml-auto'>Read More</span>
                            <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
                        </button>
                    </Link>
                </div>
                <div className='sm:w-[443px] w-full mt-12 sm:mx-auto'>
                    <img src={blogImg2} className='sm:h-[290px] h-auto rounded-lg'></img>
                    <div className='text-[#A7A7A7] sm:text-[16px] text-[18px] text-left mt-6'>10 May 2024</div>
                    <div className='sm:h-[60px] text-[24px] font-semibold text-left sm:leading-[29px] mt-4'>The Importance of Choosing the Right Types of Seed Storage...</div>
                    <div className='sm:h-[40px] sm:text-[16px] text-[18px] font-light text-left sm:leading-[19px] mt-4 sm:w-[256px]'>Learn the importance of proper seed storage and handling equipment...</div>
                    <Link to='/blogs/blogdetails2'>
                        <button className='sm:w-[201px] w-[153px] sm:h-[56px] h-[48px] bg-[#5D8424] mt-6'>
                            <span className='text-white sm:text-[16px] font-normal ml-auto'>Read More</span>
                            <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
                        </button>
                    </Link>
                </div>
                <div className='sm:w-[443px] w-full mt-12 sm:mx-auto'>
                    <img src={blogImg3} className='sm:h-[290px] h-auto rounded-lg'></img>
                    <div className='text-[#A7A7A7] sm:text-[16px] text-[18px] text-left mt-6'>10 May 2024</div>
                    <div className='sm:h-[60px] text-[24px] font-semibold text-left sm:leading-[29px] mt-4'>Future of Agriculture: Discovering New Methods for Cost-Effect...</div>
                    <div className='sm:h-[40px] sm:text-[16px] font-light text-left sm:leading-[19px] mt-4 sm:w-[256px]'>Explore cost-effective farming methods and cutting-edge...</div>
                    <Link to='/blogs/blogdetails3'>
                        <button className='sm:w-[201px] w-[153px] sm:h-[56px] h-[48px] bg-[#5D8424] mt-6'>
                            <span className='text-white sm:text-[16px] text-[18px] font-normal ml-auto'>Read More</span>
                            <img className='sm:w-6 sm:h-6 mr-auto' src={ButtonArrow} alt="Button Arrow" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailPage2
