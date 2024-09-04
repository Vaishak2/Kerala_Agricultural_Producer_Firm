import React from 'react'
import AboutUsHome from '../../Components/HomeComponents/AboutUsHome/AboutUsHome'

import BannerComponent from '../../Components/HomeComponents/BannerComponent/BannerComponent'

import SupportsGrid from '../../Components/HomeComponents/SupportsGrid/SupportsGrid'
import BottomBanner from '../../Components/HomeComponents/BottomBanner/BottomBanner'

import ProductsCarousel from '../../Components/HomeComponents/ProductsCarousel/ProductsCarousel'

import OurServices from '../../Components/HomeComponents/OurServices/OurServices'
import BlogsCarousel from '../../Components/HomeComponents/BlogsCarousel/BlogsCarousel'



function HomePage() {
    return (
        <div>
      <BannerComponent />
      <SupportsGrid />
      <AboutUsHome />
      <OurServices/>
      <ProductsCarousel/>
      <BlogsCarousel/>
      <BottomBanner />

        </div>
    )
}

export default HomePage
