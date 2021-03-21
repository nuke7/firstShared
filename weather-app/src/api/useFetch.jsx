import { useState, useEffect } from "react";

const defaultResponse = {};

export const useFetch = (initRequest) => {
  const [request, setRequest] = useState(initRequest);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (request) {
      const url = request.url;
      const init = request.init;

      if (url)
        fetch(url, init)
          .then((response) => {
            if (response.status !== 200) return defaultResponse;
            return response.json();
          })
          .then((json) => {
            return setData(json);
          })
          .catch((error) => {
            console.log(error.statusText + ": " + error.statusText);
          });
    }
  }, [request]);

  return [data, setRequest];
};
