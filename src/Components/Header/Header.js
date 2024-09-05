
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from "../../Assets/mainLogo.png";
import Dot from "../../Assets/Icon/Ellipse 1.svg";
import ButtonArrow from "../../Assets/Icon/arrow_outward.svg";
import ToggleMenuIcon from "../../Assets/Icon/toggleMenu.svg";
import "./Header.css";
import CloseIcon from "../../Assets/Icon/close (1).svg"; // Import the close icon

function Header() {
  const [activeLink, setActiveLink] = useState('Home'); // Set 'Home' as the default active link
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false); // State to manage toggle menu visibility

  const handleClick = (link) => {
    setActiveLink(link);
    setIsToggleMenuOpen(false); // Close the toggle menu after clicking a link
  };

  const toggleMenu = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen); // Toggle menu visibility
  };

  return (
    <div>
      <div className='sm:w-[1354px] flex sm:ml-[54px] sm:pt-4 sm:p-0 p-4 '>
        <div className='logoSection flex ml-4'>
          <img className='sm:hidden block cursor-pointer' src={ToggleMenuIcon} alt="Toggle Menu" onClick={toggleMenu} />
          <img className='sm:w-[58px] w-[64px] sm:h-[66px] h-[72px] ml-6' src={MainLogo} alt="Main Logo" />
        </div>
        <div className='NavSection sm:w-[698px] hidden columns-auto sm:flex gap-4 sm:text-[16px] sm:leading-5 sm:font-light my-auto sm:ml-[295px]'>
          {/* Navigation Items */}
          {['Home', 'About Us', 'Services', 'Products', 'Blog', 'Career', 'Gallery'].map((link, index) => (
            <React.Fragment key={link}>
              <div
                className={`nav-item ${activeLink === link ? 'font-semibold ' : ''}`}
                onClick={() => handleClick(link)}
              >
                <Link to={`/${link.replace(' ', '').toLowerCase()}`}>{link}</Link>
              </div>
              {index < 6 && (
                <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
              )}
            </React.Fragment>
          ))}
        </div>

        <button className='GetInTouchBtn flex sm:ml-[50px] ml-[119px] bg-[#5D8424 sm:px-12 px-6 sm:py-4 py-3 mt-3 sm:mt-0 rounded-[48px] h-[48px] sm:h-[56px] bg-[#5D8424]'>
          <span className='text-white text-[16px] leading-5'>Get In Touch</span>
          <img className='sm:w-6 sm:h-6' src={ButtonArrow} alt="Button Arrow" />
        </button>
      </div>

      {/* Toggle Menu */}
      {isToggleMenuOpen && (
        <div className='fixed inset-0 bg-white z-50 flex flex-col text-justify w-[428px] p-8'>
          <div className='flex justify-end'>
            <img className='w-6 h-6 cursor-pointer' src={CloseIcon} alt="Close Menu" onClick={toggleMenu} />
          </div>
          <div className='flex flex-col mt-8 space-y-8'>
            {/* Toggle Menu Items */}
            {['Home', 'About Us', 'Services', 'Products', 'Blog', 'Career', 'Gallery'].map((link) => (
              <div
                key={link}
                className={`nav-item ${activeLink === link ? 'font-semibold text-xl' : 'text-xl'}`}
                onClick={() => handleClick(link)}
              >
                <Link to={`/${link.replace(' ', '').toLowerCase()}`}>{link}</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
