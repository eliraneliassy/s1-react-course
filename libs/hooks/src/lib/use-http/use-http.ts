import { useState, useCallback, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseHttp<T> {
  data: T | null;
  loading: boolean;
  error: unknown | null;
}

export function useHttp<T>(url: string): UseHttp<T> {

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);

  const request = useCallback(async () => {
    const res = await fetch(url);
    setData(await res.json());
  }, [url, setData])

  useEffect(() => {
    setLoading(true);
    try {
      request().then(() => setLoading(false));
    }
    catch (e) {
      setError(e);
      setLoading(false);
    }

  }, [setLoading, request, setError])

  return { data, error, loading }

}

export default useHttp;
