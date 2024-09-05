import React from 'react'
import AboutBanner from '../../Components/AboutComponents/AboutBanner/AboutBanner'
import OurVisionAbout from '../../Components/AboutComponents/OurVision/OurVisionAbout'
import BoardMembers from '../../Components/AboutComponents/BoardMembers/BoardMembers'

function AboutPage() {
  return (

   <div>
      <AboutBanner/>
      <OurVisionAbout/>
      <BoardMembers/>
   </div>
  )
}

export default AboutPage