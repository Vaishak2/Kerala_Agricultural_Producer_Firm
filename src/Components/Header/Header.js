import React, { useState } from 'react';
import MainLogo from "../../Assets/mainLogo.png";
import Dot from "../../Assets/Icon/Ellipse 1.svg";
import ButtonArrow from "../../Assets/Icon/arrow_outward.svg";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState('Home'); // Set 'Home' as the default active link

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className='sm:w-[1354px] flex sm:ml-[54px] sm:pt-4 '>
        <div className='logoSection'>
          <img className='sm:w-[58px] sm:h-[66px]' src={MainLogo} alt="Main Logo" />
        </div>
        <div className='NavSection sm:w-[698px] columns-auto flex gap-4 sm:text-[16px] sm:leading-5 sm:font-light my-auto sm:ml-[295px]'>
          <div
            className={`nav-item ${activeLink === 'Home' ? 'font-semibold' : ''}`}
            onClick={() => handleClick('Home')}
          >
            Home
          </div>
          <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
          <div
            className={`nav-item ${activeLink === 'About Us' ? 'font-semibold' : ''}`}
            onClick={() => handleClick('About Us')}
          >
            About Us
          </div>
          <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
          <div
            className={`nav-item ${activeLink === 'Services' ? 'font-semibold' : ''}`}
            onClick={() => handleClick('Services')}
          >
            Services
          </div>
          <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
          <div
            className={`nav-item ${activeLink === 'Products' ? 'font-semibold' : ''}`}
            onClick={() => handleClick('Products')}
          >
            Products
          </div>
          <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
          <div
            className={`nav-item ${activeLink === 'Blog' ? 'font-semibold' : ''}`}
            onClick={() => handleClick('Blog')}
          >
            Blog
          </div>
          <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
          <div
            className={`nav-item ${activeLink === 'Contact Us' ? 'font-semibold' : ''}`}
            onClick={() => handleClick('Contact Us')}
          >
            Contact Us
          </div>
          <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
          <div
            className={`nav-item ${activeLink === 'Career' ? 'font-semibold' : ''}`}
            onClick={() => handleClick('Career')}
          >
            Career
          </div>
          <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
          <div
            className={`nav-item ${activeLink === 'Gallery' ? 'font-semibold' : ''}`}
            onClick={() => handleClick('Gallery')}
          >
            Gallery
          </div>
        </div>

        <button className='GetInTouchBtn flex sm:ml-[90px] bg-[#5D8424 sm:px-12 sm:py-4 bg-[#5D8424]'>
          <span className='text-white'>Get In Touch</span>
          <img className='sm:w-6 sm:h-6' src={ButtonArrow} alt="Button Arrow" />
        </button>
      </div>
    </div>
  );
}

export default Header;
