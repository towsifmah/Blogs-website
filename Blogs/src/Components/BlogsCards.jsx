import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const BlogsCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  console.log(filteredBlogs);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((blog) => (
        <Link
        to={`/blogs/${blog.id}`}
          key={blog.id}
          className="p-5 rounded shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
        >
          <div>
            <img src={blog.image} alt="" className="w-full object-cover" />
          </div>
          <h3 className="font-bold font-poppins mt-4 mb-2 hover:text-blue-600 duration-150 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2 font-poppins text-gray-600 text-sm font-normal">
            <FaUser className="inline-flex items-center mr-2" />
            {blog.author}
          </p>
          <p className="mb-2 font-poppins text-gray-600 text-sm font-normal">
            Published: {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogsCards;
