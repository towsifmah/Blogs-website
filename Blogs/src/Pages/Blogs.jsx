import React from "react";
import BlogsPage from "../Components/BlogsPage";

const Blogs = () => {
  return (
    <div>
    <div className="py-32 px-4 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-poppins font-bold mb-5">
          Blog Page
        </h1>
      </div>
    </div>
        {/* All Blogs Container */}
    <div className="container">
        <BlogsPage/>
    </div>
    </div>
  );
};

export default Blogs;
