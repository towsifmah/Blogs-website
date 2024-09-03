import React from 'react'
import ServiceCard from '../Components/ServiceCard'

const Service = () => {
  return (
    <div>
      <div className="text-white text-center py-32 px-4 bg-black mx-auto">
        <h1 className="text-5xl lg:text-7xl leading-snug font-poppins font-bold mb-5">
          Service Page
        </h1>
      </div>
      <div className='container'>
        <ServiceCard/>
      </div>
    </div>
  )
}

export default Service