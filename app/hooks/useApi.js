import { useState } from "react";
import cache from "../utility/cache";

export default function useApi(apiFunc, cacheKey) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    if (cacheKey) {
      const cachedData = await cache.get(cacheKey);
      if (cachedData) setData(cachedData);
    }
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return response;
    }
    setError(false);

    setData(response.data);
    if (cacheKey) cache.store(cacheKey, response.data);
    return response;
  };

  return { data, error, loading, request };
}
