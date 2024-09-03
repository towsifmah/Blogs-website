import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <div>
        {/* Latest Blogs */}
      <div>
        <h2 className="text-2xl font-semibold font-poppins px-3 ">
          Latest Blogs
        </h2>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id}>
              <div className="my-5 border-b-2 border-spacing-2 px-4 pb-2 ">
                <h4 className="font-medium font-poppins text-sm">
                  {blog.title}
                </h4>
                <Link
                  to="/"
                  className="font-medium text-sm font-poppins hover:text-green-500 duration-300 inline-flex items-center"
                >
                  Read more
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Popular Blogs */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold font-poppins px-3 ">
          Popular Blogs
        </h2>
        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div key={blog.id}>
              <div className="my-5 border-b-2 border-spacing-2 px-4 pb-2 ">
                <h4 className="font-medium font-poppins text-sm">
                  {blog.title}
                </h4>
                <Link
                  to="/"
                  className="font-medium text-sm font-poppins hover:text-green-500 duration-300 inline-flex items-center"
                >
                  Read more
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
