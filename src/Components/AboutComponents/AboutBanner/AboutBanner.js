import React from "react";

function AboutBanner() {
    return (
        <div className="">
            <div className="bg-about-banner bg-cover sm:w-[1376px] sm:h-[433px] mx-auto sm:mt-[40px]">
                <div className="sm:pt-[330px] sm:pl-[48px]">
                    <h1 className='sm:text-[48px]  text-justify text-white  sm:font-medium'>About Us</h1>

                </div>
            </div>
            <div className="sm:mt-[40px] text-[16px] font-light text-justify sm:px-[32px] sm:w-[1368px] text-[#2A2E35]">
                <p className="sm-leading-[28px]">
                    At KGAPCO, we’re dedicated to empowering farmers with the tools and knowledge they need to succeed.
                     Our passion lies in delivering top-quality seeds, promoting sustainable farming practices, and leveraging the latest agricultural
                      technology to enhance productivity and profitability. We believe that farming should be both rewarding and efficient, and we’re here to support 
                      you every step of the way. With a strong commitment to community and customer satisfaction, Agapco is more than just a supplier—we’re your trusted partner in agriculture,
                       working together to cultivate a prosperous future for all.
                </p>
            </div>

            <div className="sm:mt-[24px] text-justify sm:ml-[32px] sm:leading-[28px] font-normal text-[16px] text-[#2A2E35]">
                <p >KERALA GRAMEEN AGRO PRODUCER COMPANY LTD (KGAPCO)</p>
                <p className="sm:mt-[8px]">Public Limited Company</p>
                <p className="sm:mt-[8px]"> Registered under Companies Act, 2013</p>
            </div>


        </div>
    );
}

export default AboutBanner;
