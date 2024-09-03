import React from 'react'
import AboutUsHome from '../../Components/HomeComponents/AboutUsHome/AboutUsHome'

import BannerComponent from '../../Components/HomeComponents/BannerComponent/BannerComponent'

import SupportsGrid from '../../Components/HomeComponents/SupportsGrid/SupportsGrid'
import BottomBanner from '../../Components/HomeComponents/BottomBanner/BottomBanner'


function HomePage() {
  return (
    <div>

      <BannerComponent />
      <SupportsGrid />
      <AboutUsHome />
      <BottomBanner />

    </div>
  )
}

export default HomePage
