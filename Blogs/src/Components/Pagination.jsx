import React from "react";

const Pagination = ({ onPageChange, blogs, currentPage, pageSize }) => {
  const totalPage = Math.ceil(blogs.length / pageSize);
//   console.log(totalPage, "ksjdhoisd");

  const randerPaginationLinks = () => {
    return Array.from({ length: totalPage }, (_, index) => index + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <p href="" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </p>
        </li>
      )
    );
  };

  return (
    <ul className="pagination my-8 flex-wrap gap-4">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="font-poppins font-medium"
        >
          Previous
        </button>
      </li>
      <div className="flex flex-wrap gap-x-1 m-5 font-poppins font-medium">{randerPaginationLinks()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
          className="font-poppins font-medium"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
