import { useState, useEffect } from "react";
import axios from "axios";

const useGetCountries = () => {
  const [countries, setCountries] = useState<string[]>([]);

  // Fetch countries from REST Countries API
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryNames = response.data.map((country: any) => country.name.common);
        setCountries(countryNames.sort());
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return {
    countries,
  };
};

export default useGetCountries