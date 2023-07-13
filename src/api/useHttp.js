import { useState } from 'react';

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
}

const useHttp = (url, method) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = async (body) => {
    setLoading(true);
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setLoading(false);
    if (!response.ok) {
      setError(response?.statusText || 'Something went wrong!');
      throw new Error(response?.statusText || 'Something went wrong!');
    }

    let resData;
    try {
      let contentType = response.headers.get('Content-Type');
      if (contentType.includes('application/json')) {
        resData = await response.json();
      } else if (contentType.includes('text')) {
        resData = await response.text();
      } else {
        resData = {};
      }
    } catch (e) {
    }

    setData(resData);
  };

  return {
    sendRequest,
    loading,
    data,
    error
  };
}

export { useHttp, HTTP_METHODS }