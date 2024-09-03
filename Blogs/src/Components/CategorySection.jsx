import React from 'react'

const CategorySection = ({onSelectCategory, activeCategory}) => {
    const categoris = ["Startups", "Security", "AI", "Apps", "Tech"]
  return (
    <div className='px-4 mb-8 space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-poppins'>
        <button onClick={()=>onSelectCategory(null)} className={`md:ml-12 font-medium font-poppins ${activeCategory ?"":"active-button"}`}>All</button>
        {
            categoris.map((category) =>(
                <button onClick={()=>onSelectCategory(category)} className={`mr-3 font-poppins font-medium space-x-16 ${activeCategory === category ?"active-button" :""}`} key={category}>{category}</button>
            ))
        }
    </div>
  )
}

export default CategorySection