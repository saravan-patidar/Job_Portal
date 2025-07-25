import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategroyCarousal from './CategroyCarousal'
import LatestJobs from './LatestJobs'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategroyCarousal/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home