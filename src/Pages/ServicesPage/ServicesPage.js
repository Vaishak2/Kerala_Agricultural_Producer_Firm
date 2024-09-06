
import React, { useState, useEffect, useRef } from 'react';
import ServicesDropdownBtn from "../../Assets/Icon/ServiceDropDown.svg";
import ServicesUpDropdownBtn from "../../Assets/Icon/ServicesDropDownUP.svg";

function ServicesPage() {
    const [openDropdown, setOpenDropdown] = useState({});

    const servicesData = {
        sections: [
            {
                title: "Agri Support Services",
                items: [
                    {
                        "title": "Procurement of Agricultural crops with fixed return to the farmer",
                        "content": "At Agri Support Services, we’re committed to empowering agriculture with advanced technology and innovative support. As farming faces new challenges and opportunities, staying ahead with the latest tools and techniques is more important than ever. Our service provides farmers with access to cutting-edge agricultural technology that enhances productivity, improves efficiency, and promotes sustainability. Whether it's through precision farming, automated machinery, or data-driven solutions, we offer the expertise and resources to help you integrate these advancements seamlessly into your operations. By adopting these technologies, you can optimize your farming practices, increase yields, and reduce costs, all while contributing to more sustainable agriculture. Our team of specialists is dedicated to providing tailored support, ensuring that every technology solution aligns with your unique needs and goals. Stay ahead of current agricultural trends and secure your farm’s future with our innovative support and advanced technology services."
                    },
                    {
                        "title": "Distribution of Agri Support Products",
                        "content": "At Agri Support Services, we specialize in the distribution of agri support products that are essential for modern farming success. We understand that having timely access to high-quality agricultural products—whether it's seeds, fertilizers, or farming equipment—is crucial for maximizing your farm’s productivity. Our distribution service is designed to ensure that these products reach you efficiently and reliably, helping you stay ahead of current agricultural trends. With a focus on quality and consistency, we source our products from trusted suppliers, ensuring they meet the highest standards. Whether you’re managing a large-scale operation or a small farm, our wide range of agri support products is available to suit your needs. By choosing our distribution service, you’re ensuring that your farm has the tools it needs to thrive, without the hassle of delays or shortages. Contact us today to learn more about how our agri support products can help you enhance your farming operations."
                    },
                    {
                      "title": "Distribution of High-Quality Seeds",
                      "content": "At Agri Support Services, we are committed to providing farmers with the best tools for success through our distribution of high-quality seeds. Understanding that the foundation of a healthy, productive crop lies in the seeds you plant, we offer a wide variety of top-grade seeds tailored to meet the needs of modern farming. Our seeds are carefully selected to ensure high germination rates, disease resistance, and adaptability to various climates, helping you stay aligned with current agricultural trends. We take pride in our efficient and reliable distribution network, which ensures that these premium seeds reach your farm on time, so you can plant with confidence. Whether you’re focused on grains, vegetables, or specialty crops, our high-quality seeds are here to boost your yields and enhance your farming operations. Contact us today to learn how our seed distribution service can help you grow stronger, healthier crops."
                    },
                    {
                      "title": "Training of new methods for cost-effective farming",
                      "content": "At Agri Support Services, we are dedicated to helping farmers thrive by offering training in new methods for cost-effective farming. Our training programs are designed to equip you with the latest techniques and strategies to reduce costs while boosting productivity and sustainability on your farm. By staying ahead of current agricultural trends, you’ll learn how to implement innovative practices that optimize resource use, enhance crop yields, and minimize waste. Our expert-led sessions provide practical, hands-on learning, making it easy to apply these cost-effective methods directly to your farming operations.Our expert-led sessions provide practical, hands-on learning, making it easy to apply these cost-effective methods directly to your farming operations. Whether you’re looking to improve efficiency or embrace more sustainable practices, our training will empower you to achieve greater success with less expense. Contact us today to find out how our cost-effective farming training can benefit your farm and help you stay competitive in the ever-evolving agricultural landscape."
                    },
                    {
                      "title": "Empowering the Agriculture with advanced technology and innovative support",
                      "content": "At Agri Support Services, we are passionate about empowering agriculture with advanced technology and innovative support. In today’s rapidly evolving agricultural landscape, staying competitive means embracing the latest technological advancements that drive efficiency and sustainability. Our services are designed to provide farmers with cutting-edge tools and personalized support, helping you integrate agricultural technology into your daily operations seamlessly. From precision farming equipment to data-driven solutions, we offer everything you need to optimize productivity, reduce costs, and enhance crop management. By keeping you informed about current agricultural trends and providing tailored solutions, we ensure that your farm not only keeps up with industry changes but thrives in them. Contact us today to discover how our advanced technology and innovative support can take your farming to the next level."
                    }
                ]
            },
            {
                title: "Our Financial Services",
                items: [
                    {
                        "title": "Sampoorna Samrudhi (Fixed Contribution Scheme)",
                        "content": "This loan scheme is aimed at supporting small and medium-sized enterprises (SMEs) and entrepreneurs. It provides financial assistance to help start, expand, or sustain a business. The loan is designed to cater to various business needs, such as purchasing equipment, managing cash flow, or investing in growth opportunities."
                    },
                    {
                        "title": "Agri Samrudhi (Recurring Contributions Scheme)",
                        "content": "This is a financial product designed specifically for those involved in agriculture. It allows participants to make periodic contributions on a regular basis. These contributions accumulate over time, providing a steady savings mechanism that supports agricultural investments, emergency needs, or farm improvements."
                      },
                    {
                      "title": "Vyapar Shakthi Yojana (Business Loan)",
                      "content": "This loan scheme is aimed at supporting small and medium-sized enterprises (SMEs) and entrepreneurs. It provides financial assistance to help start, expand, or sustain a business. The loan is designed to cater to various business needs, such as purchasing equipment, managing cash flow, or investing in growth opportunities."
                    },
                    {
                      "title": "Mahila Shakthi Yojana (Group Loan)",
                      "content": "This is a group lending scheme focused on empowering women by providing them with financial support. The loan is offered to groups of women, often organized into self-help groups or cooperatives, to facilitate collective economic activities. It aims to enhance women's participation in economic development and improve their financial independence through collaborative efforts."
                    }
                ]
            }
        ]
    };

    const toggleDropdown = (sectionIndex, itemIndex) => {
        setOpenDropdown((prevState) => ({
            ...prevState,
            [`${sectionIndex}-${itemIndex}`]: !prevState[`${sectionIndex}-${itemIndex}`],
        }));
    };

    const getTruncatedTitle = (title, sectionIndex, itemIndex) => {
        const maxLength = 60; // Define the maximum character length for truncation
        if (title.length > maxLength && !openDropdown[`${sectionIndex}-${itemIndex}`]) {
            return title.substring(0, maxLength) + '...'; // Truncate and add ellipsis
        }
        return title; // Show full title if it's within the limit or dropdown is open
    };

    return (
        <div className='sm:px-16 px-4'>
            <div className='sm:w-[798px] w-full sm:mx-auto sm:mt-10'>
                <div className='sm:text-[48px] text-[32px] sm:font-medium sm:leading-[99px] leading-[99px]'>Our services</div>
                <p className='sm:text-[16px] text-[16px] sm:font-light sm:leading-8 leading-[28px] text-[#2A2E35]'>
                    Transform your agricultural practices with KGAPCO Our expert services in crop
                    procurement and seed distribution are designed to support your farming needs
                    effectively
                </p>
            </div>
            {servicesData.sections.map((section, sectionIndex) => (
                <div className='sm:px-20' key={sectionIndex}>
                    <div className='sm:mt-[104px] mt-12 ml-4 '>
                        <h1 className='sm:text-[32px] text-[22px] leading-[57px] sm:font-semibold font-medium text-start'>{section.title}</h1>
                    </div>

                    {section.items.map((item, itemIndex) => (
                        <div className='sm:mt-8 mt-2 ' key={itemIndex}>
                            <div
                                onClick={() => toggleDropdown(sectionIndex, itemIndex)}
                                className='sm:w-full w-full bg-[#FFFFFF] sm:py-[34px] py-6 mx-auto text-start  pl-6 sm:pr-16 pr-[28px] justify-between flex'
                            >
                                <h1 className='sm:text-[24px] text-[16px] w-[270px] sm:w-[664px] leading-6 sm:leading-7 font-medium my-auto'>
                                    {getTruncatedTitle(item.title, sectionIndex, itemIndex)}
                                </h1>
                                <img
                                    src={openDropdown[`${sectionIndex}-${itemIndex}`] ? ServicesUpDropdownBtn : ServicesDropdownBtn}
                                    alt="Toggle Dropdown"
                                    className="cursor-pointer w-10 h-10 sm:w-14 sm:h-14"
                                />
                            </div>
                            {openDropdown[`${sectionIndex}-${itemIndex}`] && (
                                <div className='sm:w-full w-full bg-[#FFFFFF] py-[20px] mx-auto text-justify pl-[32px] text-[#2A2E35] pr-16'>
                                    <p className='text-[16px] sm:leading-7 font-light'>
                                        {item.content}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ServicesPage;
