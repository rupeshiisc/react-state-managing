import {useState, useEffect} from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch (url) {

    
    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    
    
      useEffect(() => {
        const getProductList = async(url) => {
            await axios.get(baseUrl + url)
                  .then((response) => setdata(response.data))
                  .catch((e) => setError(e))
                  .finally(() => setLoading(false));
          }  
        getProductList(url);
      }, [url])
      
    return { data, error, loading };
}