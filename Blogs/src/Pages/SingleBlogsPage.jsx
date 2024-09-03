import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock, FaUser } from 'react-icons/fa'
import Sidebar from '../Components/Sidebar';
const SingleBlogsPage = () => {
    const data = useLoaderData();
    const {title, image, category, author, authorPic, published_date, reading_time, content} = data[0]
  return (
    <div>
      <div className="text-white text-center py-32 px-4 bg-black mx-auto">
        <h1 className="text-5xl lg:text-7xl leading-snug font-poppins font-bold mb-5">
          Single Blog page
        </h1>
      </div>

      {/* Blogs Detailes */}
      <div className='container my-12 text-white flex flex-col md:flex-row gap-12'>
        <div className='w-3/4 mx-auto'>
        <div>
            <img src={image} alt="" className='mx-auto w-full rounded'/>
        </div>
        <h2 className='font-bold text-3xl my-4 text-gray-800 hover:text-blue-500 duration-300 cursor-pointer'>{title}</h2>
        <p className='text-gray-800 font-poppins font-medium flex items-center gap-2'> <FaUser/> {author} |  {published_date}</p>
        <p className='text-gray-800 font-poppins font-medium flex items-center gap-2 mt-2'><FaClock/> {reading_time}</p>
        <p className='text-base font-poppins text-gray-800 mb-5'>{content}</p>
        <div className='text-base font-poppins text-gray-800 mb-5'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur cum eum dolorem architecto iste ducimus illum impedit, corporis magnam tempora repudiandae fugiat, tempore laborum sint magni error voluptates eveniet earum odio dolorum laudantium maiores!</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur cum eum dolorem architecto iste ducimus illum impedit, corporis magnam tempora repudiandae fugiat, tempore laborum sint magni error voluptates eveniet earum odio dolorum laudantium maiores!</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur cum eum dolorem architecto iste ducimus illum impedit, corporis magnam tempora repudiandae fugiat, tempore laborum sint magni error voluptates eveniet earum odio dolorum laudantium maiores!</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur cum eum dolorem architecto iste ducimus illum impedit, corporis magnam tempora repudiandae fugiat, tempore laborum sint magni error voluptates eveniet earum odio dolorum laudantium maiores!</p>
        </div>
        </div>
        <div className='text-gray-800 lg:w-1/2 mx-auto'>
        <Sidebar/>
        </div>
      </div>
    </div>
  )
}

export default SingleBlogsPage