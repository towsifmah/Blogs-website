import React, { useEffect, useState } from "react";
import BlogsCards from "./BlogsCards";
import Pagination from "./Pagination";
import CategorySection from "./CategorySection";
import Sidebar from "./Sidebar";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; //blogs par page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setactiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  // page changeing btn
  const handlepageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // category changeing
  const handlecategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setactiveCategory(category);
  };
  return (
    <div>
      {/* Category Section */}
      <div>
        <CategorySection
          onSelectCategory={handlecategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* Blogs Cards */}
      <div className="flex flex-col lg:flex-row gap-12">
        <BlogsCards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />

        {/* Sidebar section */}
        <div>
          <Sidebar/>
        </div>
      </div>

      {/* pagination section */}
      <div>
        <Pagination
          onPageChange={handlepageChange}
          blogs={blogs}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogsPage;
