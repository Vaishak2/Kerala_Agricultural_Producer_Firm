import React from 'react'
import MainLogo from "../../Assets/mainLogo.png"
import Dot from "../../Assets/Icon/Ellipse 1.svg"
import "./Header.css"
import ButtonArrow from "../../Assets/Icon/arrow_outward.svg"

function Header() {
  return (
    <div>
   <div className='sm:w-[1354px] flex'>
   <div className='logoSection'>
 <img className='sm:w-[58px] sm:h-[66px] ' src={MainLogo} alt="" />
   </div>
   <div className='NavSection sm:w-[698px] columns-auto flex gap-4 sm:text-[16px] sm:leading-5 sm:font-light my-auto'>
    <div>Home</div>
    <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
    <div>About Us</div>
    <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
    <div>Services</div>
    <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
    <div>Products</div>
    <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
    <div>Blog</div>
    <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
    <div>Contact Us</div>
    <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
    <div>Career</div>
    <img className='sm:w-[8px] sm:h-[8px] my-auto' src={Dot} alt="" />
    <div>Gallery</div>
  </div>

<button className='GetInTouchBtn flex '>
    <span>Get In Touch</span>
   <img src={ButtonArrow} alt="" />
</button>

   </div>
    </div>
  )
}

export default Header
