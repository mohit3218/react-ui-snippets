import React, { useState } from "react";
import useFetchRecipesData from "../hooks/useFetchData";
import { NO_OF_ITEMS_PER_PAGE } from "../constants";
import PaginationControls from "./PaginationControls";
import PaginationRecipesData from "./PaginationRecipesData";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const data = useFetchRecipesData();
  const recipesData = data?.recipes || [];

  const startIndex = currentPage * NO_OF_ITEMS_PER_PAGE;
  const endIndex = startIndex + NO_OF_ITEMS_PER_PAGE;

  return (
    <div className="flex flex-col items-center px-4 py-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Pagination
      </h1>

      {/* Pagination Recipes Data */}
      <PaginationRecipesData
        recipesData={recipesData}
        startIndex={startIndex}
        endIndex={endIndex}
      />
      {/* Pagination Controls */}
      <PaginationControls
        recipesData={recipesData}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Pagination;
