import React, { useState, useEffect, useRef } from 'react';
import ServicesDropdownBtn from "../../Assets/Icon/ServiceDropDown.svg";
import ServicesUpDropdownBtn from "../../Assets/Icon/ServicesDropDownUP.svg";

function ServicesPage() {
    // State to manage dropdown visibility for each section
    const [openDropdown, setOpenDropdown] = useState({});
    const [openDropdown2, setOpenDropdown2] = useState({});

    // Refs to track each dropdown container for both sections
    const dropdownRefs = useRef([]);
    const dropdownRefs2 = useRef([]);

    // Function to toggle dropdown for a specific section
    const toggleDropdown = (index) => {
        setOpenDropdown((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const toggleDropdown2 = (index) => {
        setOpenDropdown2((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            dropdownRefs.current.forEach((ref, index) => {
                if (ref && !ref.contains(event.target)) {
                    setOpenDropdown((prevState) => ({
                        ...prevState,
                        [index]: false,
                    }));
                }
            });
        };

        const handleClickOutside2 = (event) => {
            dropdownRefs2.current.forEach((ref, index) => {
                if (ref && !ref.contains(event.target)) {
                    setOpenDropdown2((prevState) => ({
                        ...prevState,
                        [index]: false,
                    }));
                }
            });
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('mousedown', handleClickOutside2);
        
        // Unbind the event listener on cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('mousedown', handleClickOutside2);
        };
    }, []);

    return (
        <div>
            <div>
                <div className='sm:w-[798px] sm:mt-10 mx-auto'>
                    <h1 className='sm:text-[48px] sm:leading-[99px] sm:font-medium'>Our Services</h1>
                    <p className='sm:text-[16px] sm:leading-8 sm:font-light'>Transform your agricultural practices with KGAPCO. Our expert services in crop
                        procurement and seed distribution are designed to support your farming needs
                        effectively.</p>
                </div>
                <div className='sm:mt-[104px]'>
                    <h1 className='sm:text-[32px] sm:leading-[57px] sm:font-semibold text-justify sm:ml-[149px]'>Agri Support Services</h1>
                </div>

                {/* List of dropdowns */}
                {[
                    {
                        title: "Procurement of Agricultural crops with fixed return to the farmer",
                        content: "At Agri Support Services, we’re committed to empowering agriculture with advanced technology and innovative support. As farming faces new challenges and opportunities, staying ahead with the latest tools and techniques is more important than ever. Our service provides farmers with access to cutting-edge agricultural technology that enhances productivity, improves efficiency, and promotes sustainability. Whether it's through precision farming, automated machinery, or data-driven solutions, we offer the expertise and resources to help you integrate these advancements seamlessly into your operations. By adopting these technologies, you can optimize your farming practices, increase yields, and reduce costs, all while contributing to more sustainable agriculture. Our team of specialists is dedicated to providing tailored support, ensuring that every technology solution aligns with your unique needs and goals. Stay ahead of current agricultural trends and secure your farm’s future with our innovative support and advanced technology services."
                    },
                    {
                        title: "Distribution of Agri Support Products",
                        content: "At Agri Support Services, we specialize in the distribution of agri support products that are essential for modern farming success. We understand that having timely access to high-quality agricultural products—whether it's seeds, fertilizers, or farming equipment—is crucial for maximizing your farm’s productivity. Our distribution service is designed to ensure that these products reach you efficiently and reliably, helping you stay ahead of current agricultural trends. With a focus on quality and consistency, we source our products from trusted suppliers, ensuring they meet the highest standards. Whether you’re managing a large-scale operation or a small farm, our wide range of agri support products is available to suit your needs. By choosing our distribution service, you’re ensuring that your farm has the tools it needs to thrive, without the hassle of delays or shortages. Contact us today to learn more about how our agri support products can help you enhance your farming operations."
                    },
                    {
                        title: "Distribution of High-Quality Seeds",
                        content: "At Agri Support Services, we are committed to providing farmers with the best tools for success through our distribution of high-quality seeds. Understanding that the foundation of a healthy, productive crop lies in the seeds you plant, we offer a wide variety of top-grade seeds tailored to meet the needs of modern farming. Our seeds are carefully selected to ensure high germination rates, disease resistance, and adaptability to various climates, helping you stay aligned with current agricultural trends. We take pride in our efficient and reliable distribution network, which ensures that these premium seeds reach your farm on time, so you can plant with confidence. Whether you’re focused on grains, vegetables, or specialty crops, our high-quality seeds are here to boost your yields and enhance your farming operations. Contact us today to learn how our seed distribution service can help you grow stronger, healthier crops."
                    },
                    {
                        title: "Training of new methods for cost-effective farming",
                        content: "At Agri Support Services, we are dedicated to helping farmers thrive by offering training in new methods for cost-effective farming. Our training programs are designed to equip you with the latest techniques and strategies to reduce costs while boosting productivity and sustainability on your farm. By staying ahead of current agricultural trends, you’ll learn how to implement innovative practices that optimize resource use, enhance crop yields, and minimize waste. Our expert-led sessions provide practical, hands-on learning, making it easy to apply these cost-effective methods directly to your farming operations.Our expert-led sessions provide practical, hands-on learning, making it easy to apply these cost-effective methods directly to your farming operations. Whether you’re looking to improve efficiency or embrace more sustainable practices, our training will empower you to achieve greater success with less expense. Contact us today to find out how our cost-effective farming training can benefit your farm and help you stay competitive in the ever-evolving agricultural landscape."
                    },
                    {
                        title: "Empowering the Agriculture with advanced technology and innovative support",
                        content: "At Agri Support Services, we are passionate about empowering agriculture with advanced technology and innovative support. In today’s rapidly evolving agricultural landscape, staying competitive means embracing the latest technological advancements that drive efficiency and sustainability. Our services are designed to provide farmers with cutting-edge tools and personalized support, helping you integrate agricultural technology into your daily operations seamlessly. From precision farming equipment to data-driven solutions, we offer everything you need to optimize productivity, reduce costs, and enhance crop management. By keeping you informed about current agricultural trends and providing tailored solutions, we ensure that your farm not only keeps up with industry changes but thrives in them. Contact us today to discover how our advanced technology and innovative support can take your farming to the next level."
                    }
                ].map((item, index) => (
                    <div className='sm:mt-8' ref={(el) => (dropdownRefs.current[index] = el)} key={index}>
                        <div onClick={() => toggleDropdown(index)} className='sm:w-[1142px] bg-[#ffff] sm:py-[34px] mx-auto text-justify sm:pl-[32px] sm:pr-16 justify-between flex'>
                            <h1 className='sm:text-[24px] sm:leading-7 sm:font-medium my-auto'>{item.title}</h1>
                            <img
                                src={openDropdown[index] ? ServicesUpDropdownBtn : ServicesDropdownBtn}
                                alt="Toggle Dropdown"
                                className="cursor-pointer"
                            />
                        </div>
                        {openDropdown[index] && (
                            <div className='sm:w-[1142px] bg-[#FFFFFF] sm:py-[20px] mx-auto text-justify sm:pl-[32px] sm:pr-16'>
                                <p className='sm:text-[16px] sm:leading-7 sm:font-light'>
                                    {item.content}
                                </p>
                            </div>
                        )}
                    </div>
                ))}

                <div className='sm:mt-[104px]'>
                    <h1 className='sm:text-[32px] sm:leading-[57px] sm:font-semibold text-justify sm:ml-[149px]'>Our Financial Services</h1>
                </div>

                {/* List of dropdowns */}
                {[
                    {
                        title: "Sampoorna Samrudhi (Fixed Contribution Scheme)",
                        content: "This is a savings scheme where participants commit to making fixed, regular contributions over a specified period. The scheme typically offers attractive interest rates and benefits for consistent contributors."
                    },
                    {
                        title: "Agri Samrudhi (Recurring Contributions Scheme)",
                        content: "This is a financial product designed specifically for those involved in agriculture. The scheme involves regular contributions with the goal of accumulating a substantial sum over time, often used to support farming activities or investments."
                    },
                    {
                        title: "Vyapar Shakthi Yojana (Business Loan)",
                        content: "This loan scheme is aimed at supporting small and medium-sized enterprises (SMEs) and entrepreneurs. It provides financial assistance to help start, expand, or sustain a business. The loan is designed to cater to various business needs, such as purchasing equipment, managing cash flow, or investing in growth opportunities."
                    },
                    {
                        title: "Mahila Shakthi Yojana (Group Loan)",
                        content: "This is a group lending scheme focused on empowering women by providing them with financial support. The loan is offered to groups of women, often organized into self-help groups or cooperatives, to facilitate collective economic activities. It aims to enhance women's participation in economic development and improve their financial independence through collaborative efforts."
                    }
                ].map((item, index) => (
                    <div className='sm:mt-8' ref={(el) => (dropdownRefs2.current[index] = el)} key={index}>
                        <div onClick={() => toggleDropdown2(index)} className='sm:w-[1142px] bg-[#ffff] sm:py-[34px] mx-auto text-justify sm:pl-[32px] sm:pr-16 justify-between flex'>
                            <h1 className='sm:text-[24px] sm:leading-7 sm:font-medium my-auto'>{item.title}</h1>
                            <img
                                src={openDropdown2[index] ? ServicesUpDropdownBtn : ServicesDropdownBtn}
                                alt="Toggle Dropdown"
                                className="cursor-pointer"
                            />
                        </div>
                        {openDropdown2[index] && (
                            <div className='sm:w-[1142px] bg-[#FFFFFF] sm:py-[20px] mx-auto text-justify sm:pl-[32px] sm:pr-16'>
                                <p className='sm:text-[16px] sm:leading-7 sm:font-light'>
                                    {item.content}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;
