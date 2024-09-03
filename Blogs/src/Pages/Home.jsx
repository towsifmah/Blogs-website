import React from 'react'
import Banner from '../Components/Banner'
import BlogsPage from '../Components/BlogsPage'

const Home = () => {
  return (
    <div>
        <Banner/>
        <div className='container'>
        <BlogsPage/>
       </div>
    </div>
  )
}

export default Home