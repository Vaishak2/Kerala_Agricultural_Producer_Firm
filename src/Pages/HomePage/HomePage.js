import React from 'react'
import AboutUsHome from '../../Components/HomeComponents/AboutUsHome/AboutUsHome'

import BannerComponent from '../../Components/HomeComponents/BannerComponent/BannerComponent'

import SupportsGrid from '../../Components/HomeComponents/SupportsGrid/SupportsGrid'
import BottomBanner from '../../Components/HomeComponents/BottomBanner/BottomBanner'
import OurServices from '../../Components/HomeComponents/OurServices/OurServices'
import ClientSays from '../../Components/HomeComponents/ClientSays/ClientSays'


function HomePage() {
  return (
    <div>

      <BannerComponent />
      <SupportsGrid />
      <AboutUsHome />
      <OurServices/>
      <ClientSays/>
      <BottomBanner />

    </div>
  )
}

export default HomePage
