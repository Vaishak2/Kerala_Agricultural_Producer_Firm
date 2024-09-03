import React from 'react'
import AboutUsHome from '../../Components/HomeComponents/AboutUsHome/AboutUsHome'

import BannerComponent from '../../Components/HomeComponents/BannerComponent/BannerComponent'

import SupportsGrid from '../../Components/HomeComponents/SupportsGrid/SupportsGrid'


function HomePage() {
  return (
    <div>

      <BannerComponent/>

    <SupportsGrid/>

      <AboutUsHome/>
    </div>
  )
}

export default HomePage
