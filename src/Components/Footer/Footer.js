import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from "../../Assets/mainLogo.png";
import arrowButton from '../../Assets/Icon/arrowButton.svg';
import fbIcon from '../../Assets/Icon/fbIcon.svg';
import twitterIcon from '../../Assets/Icon/twitterIcon.svg';
import instaIcon from '../../Assets/Icon/instaIcon.svg';
import Swal from 'sweetalert2';

function Footer() {
  const currentYear = new Date().getFullYear();

  const linkSections = [
    {
      title: '',
      links: [ 
        {
          name : 'About',
          path : 'aboutUs'

        },
        {
          name : 'Services',
          path : 'services'

        },
        {
          name : 'Products',
          path : 'products'

        },
        {
          name : 'Blogs',
          path : 'blogs'

        },
      ],
    },
    {
      title: '',

      links: [
        {
          name : 'Careers',
          path : 'career'
        },
        {
          name : 'Our Story',
          path : 'aboutUs'

        },
        {
          name : 'Gallery',
          path : 'gallery'

        },
      ],
    }
  ];

  const socialIcons = [
    { icon: fbIcon, alt: 'Facebook' },
    
    { icon: instaIcon, alt: 'Instagram' },
  ];

  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');

  const showSuccessToast = () => {
    Swal.fire({
      icon: 'success',
      title: 'Thank you for subscribing.',
      showConfirmButton: false,
      timer: 2300
    });
  };

  const subscribe = (event) => {
    event.preventDefault();

    // Validate email format
    const isValidEmail = validateEmail(emailValue);

    if (isValidEmail) {
      // Handle subscription logic
      console.log('Subscribed with email:', emailValue);

      // Clear email input
      setEmailValue('');

      // Show success message
      showSuccessToast();
    } else {
      // Show error message
      setEmailError('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };
  const scrollToTop = () => window.scrollTo({top:0 , behavior: "smooth"})


  return (
    <div className='sm:w-full w-full h-[650px] mt-[72px] sm:h-[555px] sm:mt-[104px] pt-[2px] px-4 sm:pt-6 bg-white'>
      <div className='sm:mt-[34px] mt-[32px] sm:mx-[185px] mx-[16px] flex justify-between'>
        <img src={MainLogo} alt="logo" className='sm:w-[58px] sm:h-[66px] w-[54px] h-[62px]' />
        <h2 className='my-auto text-[16px] sm:text-[24px] font-normal text-[#2A2E35]'>
          Saw with us, <span className='font-semibold'>Reap with trust.</span>
        </h2>
      </div>

      <div className="mx-auto sm:w-[1068px] w-[396px] mt-[32px] sm:h-[1px] sm:mt-[40px] border-b"></div>

      <div className='sm:mt-[40px] mt-[48px] sm:flex justify-between sm:mx-[185px]'>
        <div>
          <h2 className='text-[24px] font-normal text-justify leading-[30px]'>
            Subscribe to our <br /> newsletter
          </h2>
          <form className="sm:mt-[28px] flex sm:w-[289px] w-full h-[51px] mt-[32px] sm:h-[51px]" onSubmit={(e) => e.preventDefault()}>
            <input
              name="email"
              placeholder="Email address"
              id='form_input'
                    type="email"
                    value={emailValue}
                    onChange={(e) => {
                      setEmailValue(e.target.value);
                      setEmailError('');
                    }}
              className="flex-grow px-3 py-2 rounded-tl-[8px] outline-none border-b"
            />
            <button
              type="submit" onClick={subscribe}
              className="flex items-center justify-center sm:w-[50px] w-[50px] cursor-pointer h-[50px] sm:h-[50px] rounded-tr-[8px] bg-[#5D8424]"
            >
              <img src={arrowButton} alt="Submit" />
            </button>
          </form>
          {emailError && <p className="text-red-500 text-xs mt-1 ml-1 text-left">{emailError}</p>}

        </div>

        <div className="flex mt-[48px] mx-auto m:w-fit text-justify ">
          {linkSections.map((section, idx) => (
            <div onClick={scrollToTop} key={idx} className={`space-y-4 ${idx === 0 ? 'sm:ml-[260px] ml-[16px]' : idx === 1 ? 'sm:ml-[172px] ml-[104px]' : ''}`}>
              {section.links.map((link, i) => (
               
                <Link key={i} to={link.path} className={`block font-light text-[16px] text-[#2A2E35] hover:underline hover:font-normal ${i > 0 ? 'sm:mt-[20px] mt-[20px]' : ''}`}>
                  {link.name}
                </Link>

              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="sm:mt-[72px] mt-[48px] ml-[16px] sm:ml-[186px] flex justify-between sm:items-center">
        <h3 className="font-light text-[14px] sm:text-[16px]">© {currentYear} KGAPCO All Rights Reserved</h3>
        <div onClick={scrollToTop} className="flex sm:mr-[185px] mr-[16px]">
          {socialIcons.map((icon, idx) => (
            
            <a key={idx} href='' className={`${idx > 0 ? 'sm:ml-[40px] ml-[40px]' : ''}`}>
            
              <img src={icon.icon} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
