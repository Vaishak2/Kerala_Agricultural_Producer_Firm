import React from 'react';
import MainLogo from "../../Assets/mainLogo.png";
import arrowButton from '../../Assets/Icon/arrowButton.svg';
import fbIcon from '../../Assets/Icon/fbIcon.svg';
import twitterIcon from '../../Assets/Icon/twitterIcon.svg';
import instaIcon from '../../Assets/Icon/instaIcon.svg';

function Footer() {
  const linkSections = [
    {
      title: '',
      links: ['About', 'Services', 'Products', 'Blogs', 'Careers'],
    },
    {
      title: '',
      links: ['About', 'Our Story', 'Benefits', 'Team', 'Careers'],
    }
   
  ];

  const socialIcons = [
    { icon: fbIcon, alt: 'Facebook' },
    { icon: twitterIcon, alt: 'Twitter' },
    { icon: instaIcon, alt: 'Instagram' },
  ];

  return (
    <div className='sm:w-full sm:h-[555px] sm:mt-[104px] pt-6 bg-white'>
      <div className='sm:mt-[34px] sm:mx-[185px] flex justify-between'>
        <img src={MainLogo} alt="logo" className='sm:w-[58px] sm:h-[66px]' />
        <h2 className='my-auto text-[24px] font-normal text-[#2A2E35]'>
          Saw with us, <span className='font-semibold'>Reap with trust.</span>
        </h2>
      </div>

      <div className="mx-auto sm:w-[1068px] sm:h-[1px] sm:mt-[40px] border-b"></div>

      <div className='sm:mt-[40px] sm:flex sm:justify-between sm:mx-[185px]'>
        <div>
          <h2 className='text-[24px] sm:text-justify sm:leading-[30px]'>
            Subscribe to our <br className='sm:leading-[30px]' /> newsletter
          </h2>
          <form className="sm:mt-[28px] flex sm:w-[289px] sm:h-[51px]">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow px-3 py-2 rounded-tl-[8px]  outline-none border-b"
            />
            <div
              type="submit"
              className="flex items-center justify-center sm:w-[50px] cursor-pointer sm:h-[50px] rounded-tl-[8px] rounded-tr-[8px] bg-[#5D8424]"
            >
              <img src={arrowButton} alt="" />
            </div>
          </form>
        </div>

        <div className="flex sm:mx-auto w-fit text-justify ">
          {linkSections.map((section, idx) => (
            <div key={idx} className={`space-y-4 ${idx === 0 ? 'sm:ml-[260px]' : idx === 1 ? 'sm:ml-[172px]' : ''}`}>
              {section.links.map((link, i) => (
                <a key={i} href="#" className={`block font-light text-[16px] text-[#2A2E35] hover:underline hover:font-normal ${i > 0 ? 'sm:mt-[20px]' : ''}`}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="sm:mt-[72px] sm:ml-[186px] flex justify-between sm:items-center">
        <h3 className="font-light text-[16px]">©2024 KGAPCO All Rights Reserved</h3>
        <div className="flex sm:mr-[185px]">
          {socialIcons.map((icon, idx) => (
            <a key={idx} href="#" className={`${idx > 0 ? 'sm:ml-[40px]' : ''}`}>
              <img src={icon.icon} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
