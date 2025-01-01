import { useState, useEffect } from "react";
import { axiosWrapper } from "../../utils/auth/axiosInstance";

const useGetCountries = () => {
  const [countries, setCountries] = useState<string[]>([]);

  // Fetch countries from REST Countries API
  useEffect(() => {
    
    const getCountries = async () =>{
      const {data} = await axiosWrapper({method:'GET', url:'countries/get-countries', data:{}})
              
      if(data) setCountries(data);
    }

    getCountries()
  }, []);

  return {
    countries,
  };
};

export default useGetCountries