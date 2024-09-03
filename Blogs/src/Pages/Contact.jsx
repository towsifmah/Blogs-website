import React from 'react'
import ContactForm from '../Components/ContactForm'

const Contact = () => {
  return (
    <div>
      <div className="text-white text-center py-32 px-4 bg-black mx-auto">
        <h1 className="text-5xl lg:text-7xl leading-snug font-poppins font-bold mb-5">
          Contact Us Page
        </h1>
      </div>
      <div className='container'>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact