import { useEffect } from "react";
import axios from "axios";

  const useFetch = (url) => {
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(url)
        return response.data;
      }
      fetchData();                                                      
    }, []);
  }

  export default useFetch;