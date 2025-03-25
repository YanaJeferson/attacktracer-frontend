import { useState, useCallback } from "react";

interface FetchOptions extends RequestInit {
  showError?: boolean;
}

interface ApiError {
  message: string;
  statusCode: number;
  error: string;
}

interface UseFetchResult<T> {
  data: T | null;
  error: ApiError | null;
  isLoading: boolean;
  fetchData: (url: string, options?: FetchOptions) => Promise<void>;
}

export function useFetch<T>(): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<ApiError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API;

  const fetchData = useCallback(async (url: string, options?: FetchOptions) => {
    try {
      const fullUrl = `${baseUrl}${url}`;
      setIsLoading(true);
      setError(null);

      const response = await fetch(fullUrl, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        const apiError: ApiError = {
          statusCode: response.status,
          message: result.message || 'An error occurred',
          error: result.error || 'Unknown error'
        };
        throw apiError;
      }

      setData(result);
    } catch (err) {
      if ((err as ApiError).statusCode) {
        setError(err as ApiError);
      } else {
        setError({
          statusCode: 500,
          message: 'Server connection error',
          error: 'ServerError'
        });
      }
      
      if (options?.showError) {
        console.error("Fetch error:", err);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, error, isLoading, fetchData };
}
