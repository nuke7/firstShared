import { useEffect } from "react";
import { useFetch } from "./useFetch";

/*
  api.openweathermap.org/data/2.5/weather?q={city name}&appid=5f4fb9096729f82bd320122aa11b3242&units=metric
*/

/*
!Pexels
 const headers = {
      "Content-Type": "application/json",
      Authorization: "563492ad6f917000010000013bf8371728434c5eb66ba1c29adc8949",
    };
*/

export const useData = (url, init /*, options */) => {
  const [data, setData] = useFetch({});

  useEffect(() => {
    if (url) {
      // let query = "";

      // for (let key in options) {
      //   let value = options[key];
      //   query +=
      //     (url.match(/\?/g) || query ? "&" : "?") + `${options[key]}=${value}`;
      // }
      setData({ url: url/*  + query */, init: init });
    }
  }, [url/* , options */, init, setData]);

  return data === undefined ? (url === "" ? "" : "Loading...") : data;
};
