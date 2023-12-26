import { useState, useEffect } from "react";
import { FetchResponse, RequestConfig } from "../types/types";

const useFetch = <T>(config: RequestConfig): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!config.url) return;
      setLoading(true);

      try {
        const response = await fetch(config.url, {
          method: config.method || "GET",
          headers: config.headers || {},
          body: config.body ? JSON.stringify(config.body) : undefined,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
        setError(null);
      } catch (error: any) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.url]);

  return { data, error, loading };
};

export default useFetch;
