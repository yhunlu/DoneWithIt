import { useState } from "react";
import cache from "../utility/cache";

/**
 * Generic data-fetching hook
 * @param {Function} apiFunc   – function that returns an { ok, data }-style response
 * @param {string|null} cacheKey – (optional) key to read/write from the local cache
 */
export default function useApi(apiFunc, cacheKey = null) {
  const [data, setData]   = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    // 1️⃣ Try cached copy (if a key was supplied)
    if (cacheKey) {
      const cached = await cache.get(cacheKey);
      if (cached) {
        setData(cached);
        // You may still want to fall through and refresh in background;
        // if not, return early here:
        // return { ok: true, data: cached, fromCache: true };
      }
    }

    // 2️⃣ Remote call
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return response;
    }
    setError(false);
    setData(response.data);

    // 3️⃣ Persist new data in cache
    if (cacheKey) cache.store(cacheKey, response.data);

    return response;
  };

  return { data, error, loading, request };
}
