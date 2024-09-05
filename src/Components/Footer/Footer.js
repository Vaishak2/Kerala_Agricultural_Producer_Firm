import React from 'react';
import MainLogo from "../../Assets/mainLogo.png";
import arrowButton from '../../Assets/Icon/arrowButton.svg';
import fbIcon from '../../Assets/Icon/fbIcon.svg';
import twitterIcon from '../../Assets/Icon/twitterIcon.svg';
import instaIcon from '../../Assets/Icon/instaIcon.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

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
    <div className='sm:w-full w-[428px] h-[650px] mt-[72px] sm:h-[555px] sm:mt-[104px] pt-[2px] sm:pt-6 bg-white'>
      <div className='sm:mt-[34px] mt-[32px] sm:mx-[185px] mx-[16px] flex justify-between'>
        <img src={MainLogo} alt="logo" className='sm:w-[58px] sm:h-[66px] w-[54px] h-[62px]' />
        <h2 className='my-auto text-[16px] sm:text-[24px] font-normal text-[#2A2E35]'>
          Saw with us, <span className='font-semibold'>Reap with trust.</span>
        </h2>
      </div>

      <div className="mx-auto sm:w-[1068px] w-[396px] mt-[32px] sm:h-[1px] sm:mt-[40px] border-b"></div>

      <div className='sm:mt-[40px] mt-[48px] sm:flex justify-between ml-[16px] sm:mx-[185px]'>
        <div>
          <h2 className='text-[24px] font-normal text-justify leading-[30px]'>
            Subscribe to our <br /> newsletter
          </h2>
          <form className="sm:mt-[28px] flex sm:w-[289px] w-[396px] h-[51px] mt-[32px] sm:h-[51px]" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="flex-grow px-3 py-2 rounded-tl-[8px] outline-none border-b"
            />
            <div
              type="submit"
              className="flex items-center justify-center sm:w-[50px] w-[50px] cursor-pointer h-[50px] sm:h-[50px] rounded-tr-[8px] bg-[#5D8424]"
            >
              <img src={arrowButton} alt="Submit" />
            </div>
          </form>
        </div>

        <div className="flex mt-[48px] mx-auto m:w-fit text-justify ">
          {linkSections.map((section, idx) => (
            <div key={idx} className={`space-y-4 ${idx === 0 ? 'sm:ml-[260px] ml-[16px]' : idx === 1 ? 'sm:ml-[172px] ml-[104px]' : ''}`}>
              {section.links.map((link, i) => (
                <a key={i} href="" className={`block font-light text-[16px] text-[#2A2E35] hover:underline hover:font-normal ${i > 0 ? 'sm:mt-[20px] mt-[20px]' : ''}`}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="sm:mt-[72px] mt-[48px] ml-[16px] sm:ml-[186px] flex justify-between sm:items-center">
        <h3 className="font-light text-[14px] sm:text-[16px]">© {currentYear} KGAPCO All Rights Reserved</h3>
        <div className="flex sm:mr-[185px] mr-[16px]">
          {socialIcons.map((icon, idx) => (
            <a key={idx} href="" className={`${idx > 0 ? 'sm:ml-[40px] ml-[40px]' : ''}`}>
              <img src={icon.icon} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
