import React from "react";

function AboutBanner() {
    return (
        <div className="sm:px-8 px-4">
            {/* Mobile banner image and About Us text hidden */}
            <div className="bg-about-mobile sm:bg-about-banner bg-cover w-[395px] h-[352px] sm:w-full sm:h-[433px] mx-[] sm:mt-[40px] mt-[32px]">
                <div className="sm:pt-[330px] sm:pl-[48px]">
                    {/* Hide About Us text on mobile */}
                    <h1 className="hidden sm:block sm:text-[48px] text-justify text-white sm:font-medium">
                        About Us
                    </h1>
                </div>
            </div>

            <div className="mt-[32px] sm:mt-[40px] text-[16px] sm:text-[16px] font-light text-justify   w-[396px] sm:w-[1368px] text-[#2A2E35]">
                <p className="leading-[28px] sm:leading-[28px]">
                    At KGAPCO, we’re dedicated to empowering farmers with the tools and knowledge they need to succeed.
                    Our passion lies in delivering top-quality seeds, promoting sustainable farming practices, and leveraging the latest agricultural
                    technology to enhance productivity and profitability. We believe that farming should be both rewarding and efficient, and we’re here to support
                    you every step of the way. With a strong commitment to community and customer satisfaction, KGAPCO is more than just a supplier—we’re your trusted partner in agriculture,
                    working together to cultivate a prosperous future for all.
                </p>
            </div>

            <div className="mt-[24px] sm:mt-[24px] text-justify w-[362px]  leading-[24px] sm:leading-[28px] font-normal text-[16px] sm:text-[16px] text-[#2A2E35]">
                <p>KERALA GRAMEEN AGRO PRODUCER COMPANY LTD (KGAPCO)</p>
                <p className="mt-[8px] sm:mt-[8px]">Public Limited Company</p>
                <p className="mt-[8px] sm:mt-[8px]">Registered under Companies Act, 2013</p>
            </div>
        </div>
    );
}

export default AboutBanner;
