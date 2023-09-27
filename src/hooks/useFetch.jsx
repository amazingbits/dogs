import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let apiResponse;
    let apiResponseJson;
    try {
      setError(null);
      setLoading(true);
      apiResponse = await fetch(url, options);
      apiResponseJson = await apiResponse.json();
      if (apiResponse.ok === false) throw new Error(apiResponseJson.message);
    } catch (err) {
      apiResponseJson = null;
      setError(err.message);
    } finally {
      setData(apiResponseJson);
      setLoading(false);
      return { apiResponse, apiResponseJson };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
