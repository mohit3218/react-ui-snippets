import { useEffect, useState } from "react";
import { FETCH_RECIPES_DATA_URL } from "../constants";
const useFetchData = () => {
  const [data, setData] = useState(null); // use null to avoid undefined

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(FETCH_RECIPES_DATA_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useFetchData;
