import React from 'react'
import HomeComp from '../Components/HomeComp'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Portfolio from '../Components/Portfolio'

const MainPage = () => {
  return (
    <div>
        <Navbar/>
        <HomeComp/>
        <About/>
        <Portfolio/>
        <Contact/>
    </div>
  )
}

export default MainPage