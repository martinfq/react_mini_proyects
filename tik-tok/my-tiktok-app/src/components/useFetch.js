import { useEffect, useState } from "react";

export default function useFetch(url, type) {
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!!url) {
      fetchData();
    }

    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        setRes(response);

        switch (type) {
          case "text":
            const text = await response.text();
            setData(text);
            setIsLoading(false);
            break;
          case "json":
            const json = await response.json();
            setData(json);
            setIsLoading(false);
            console.log(json)
            break;
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
  }, [url]);
  return [res, data, isLoading];
}
