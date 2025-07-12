import React from "react";

const PaginationRecipesData = ({ recipesData, startIndex, endIndex }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-6xl">
      {recipesData.slice(startIndex, endIndex).map((recipe) => (
        <div
          key={recipe.id}
          className="border p-3 rounded shadow hover:shadow-md transition-all duration-200 bg-white"
        >
          <img
            className="w-full h-40 object-cover rounded mb-2"
            src={recipe.image}
            alt={recipe.name}
          />
          <p className="text-center font-medium">{recipe.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PaginationRecipesData;
