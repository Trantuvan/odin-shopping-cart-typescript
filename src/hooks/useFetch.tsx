import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((response) => {
        console.log(response);
        if (response.ok === false) {
          throw new Response(`${response.statusText}`, {
            status: response.status,
          });
        }
        return response.json();
      })
      .then(setData)
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        }
        console.log(err);
        setError(err);
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return { error, data, isLoading };
};

export default useFetch;
