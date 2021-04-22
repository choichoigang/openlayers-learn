import { useEffect, useState } from "react";

type IUseFetch<T> = {
  loading: boolean;
  data: T | null;
  errStatus: number | null;
};

function useFetch<T>(url: string): IUseFetch<T> {
  const [loading, setLoading] = useState(false);
  const [errStatus, setErrStatus] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function initialFetch() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const resData = await res.json();

        setData(resData);
        setLoading(false);
      } catch (err) {
        setErrStatus(err.status);
        setLoading(false);
      }
    }

    initialFetch();
  }, [url]);

  return {
    loading,
    errStatus,
    data,
  };
}

export default useFetch;
