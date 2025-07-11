import React, { useEffect, useState } from "react";

const AutoCompleteSearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recipesData, setRecipesData] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});
  const fetchData = async () => {
    try {
      if (cache[searchInput]) {
        setRecipesData(cache[searchInput]);
        return;
      }
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchInput}`
      );
      const json = await response.json();
      setRecipesData(json?.recipes || []);
      setCache((prev) => ({ ...prev, [searchInput]: json?.recipes }));
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 300); // debounce for better performance

    return () => clearTimeout(delayDebounce);
  }, [searchInput]); // eslint-disable-next-line

  return (
    <div className="flex flex-col items-center px-4 py-6 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        AutoComplete Search Bar
      </h1>
      <div className="w-full max-w-md relative">
        <input
          type="text"
          name="search-bar"
          placeholder="Search Recipes..."
          className="w-full border border-indigo-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm sm:text-base"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />

        {showResult && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
            {recipesData.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm sm:text-base"
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutoCompleteSearchBar;
