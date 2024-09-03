import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
const Banner = () => {
  return (
    <div className='py-32 px-4 bg-black mx-auto'>
        <div className='container text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-poppins font-bold mb-5'>Welcome to our Blogs</h1>
            <p className='text-gray-100 font-poppins font-normal text-sm lg:w-3/5 mx-auto mb-5'>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.</p>
            <div>
            <Link to="/" className='font-medium font-poppins hover:text-green-500 duration-300 inline-flex items-center'>Learn more
            <FaArrowRight className='ml-2'/>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner