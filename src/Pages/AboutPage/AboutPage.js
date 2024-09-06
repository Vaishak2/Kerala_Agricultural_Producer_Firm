import React, { useEffect } from 'react'
import AboutBanner from '../../Components/AboutComponents/AboutBanner/AboutBanner'
import OurVisionAbout from '../../Components/AboutComponents/OurVision/OurVisionAbout'
import BoardMembers from '../../Components/AboutComponents/BoardMembers/BoardMembers'

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return ( 
    
  

   <div>
      <AboutBanner/>
      <OurVisionAbout/>
      <BoardMembers/>
   </div>
  )
}

export default AboutPage