import React from 'react'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <div className="text-white text-center py-32 px-4 bg-black mx-auto">
        <h1 className="text-5xl lg:text-7xl leading-snug font-poppins font-bold mb-5">
          About Page
        </h1>
      </div>
      <div className='container'>
        <AboutContent/>
      </div>
    </div>
  )
}

export default About