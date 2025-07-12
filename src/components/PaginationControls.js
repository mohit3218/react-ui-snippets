import React from "react";
import { NO_OF_ITEMS_PER_PAGE } from "../constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const PaginationControls = ({recipesData, setCurrentPage, currentPage}) => {
  const totalRecipes = recipesData.length;
  const noOfPages = Math.ceil(totalRecipes / NO_OF_ITEMS_PER_PAGE);
  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, noOfPages - 1));
  };
  return (
    <div className="flex space-x-2 mt-6 flex-wrap justify-center">
      <button
        onClick={goToPrevPage}
        disabled={currentPage === 0}
        className="p-2 rounded border bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      {[...Array(noOfPages).keys()].map((index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index)}
          className={`px-4 py-2 rounded border ${
            currentPage === index
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } hover:bg-blue-500 hover:text-white transition`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={goToNextPage}
        disabled={currentPage === noOfPages - 1}
        className="p-2 rounded border bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default PaginationControls;
