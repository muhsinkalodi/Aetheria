import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Mission from '../../components/Mission/Mission'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <About />
      <Mission />
    </div>
  )
}

export default Home