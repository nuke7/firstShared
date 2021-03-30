import { useState, useEffect } from "react";
import { useData } from "./api/useData";
import CitySelect from "./components/cityselect";
// import { Weather } from "./components/weather";
import { WeatherVisual } from "./visual/Weather-visual";
import { defaultResponse } from "./components/defaultResponse";
import { randomWithin } from "./utils/utils";

import "./App.css";

const weatherApiURL =
  "https://api.openweathermap.org/data/2.5/weather?appid=5f4fb9096729f82bd320122aa11b3242&units=metric"; //&q={city name}

const imageCount = 10;
const imageApiURL = `https://api.pexels.com/v1/search?per_page=${imageCount}`; //&query={city name}}
const imageApiHeader = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "563492ad6f917000010000013bf8371728434c5eb66ba1c29adc8949",
  },
};

const citiesApiURL = "/data/cities.json";

function App() {
  const [cityName, setCityName] = useState("");

  const [geolocation, setGeolocation] = useState("");

  const [weatherApiQuery, setWeatherApiQuery] = useState("");
  const [imageApiQuery, setImageApiQuery] = useState("");

  const cities = useData(citiesApiURL);

  const weather = useData(weatherApiQuery ? weatherApiURL + weatherApiQuery : "");

  const geoIP = useData("http://www.geoplugin.net/json.gp");

  const image = useData(imageApiQuery ? imageApiURL + imageApiQuery : "", imageApiHeader);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // User allow Location Access
      setGeolocation(position.coords);
    });
  }, []);

  useEffect(() => {
    if (cityName) {
      setWeatherApiQuery(`&q=${cityName}`);
      setImageApiQuery(`&query="${cityName.split(",,")[0]}"`);
    } else if (geolocation) {
      setWeatherApiQuery(`&lat=${geolocation.latitude}&lon=${geolocation.longitude}`);
    }
  }, [cityName, geolocation]);

  useEffect(() => {
    if (typeof weather === "object" && !cityName) {
      setImageApiQuery(`&query="${weather.name}"`);
    }
  }, [weather, cityName]);

  const picData = () => {
    if (typeof image === "object") {
      if (image.page === undefined || image.photos.length === 0) {
        const random = randomWithin([0, defaultResponse.photos.length - 1]);
        return defaultResponse.photos[
          Math.min(random, defaultResponse.photos.length - 1)
        ];
      } else {
        const random = randomWithin([0, image.photos.length - 1]);
        return image.photos[random];
      }
    } else return image;
  };

  // a Weather component-et átmásoltam a visual mappába,  itt is átírtam a nevet Weather_visual-ra

  return (
    <div className="App">
      {weather === "" && <h1>Weather App</h1>}
      {weather !== "" && (
        <WeatherVisual weather={weather} picData={picData()}>
          {cityName === "" ? weather.name : cityName.replace(",,", ", ")}
        </WeatherVisual>
      )}
      <CitySelect
        isloaded={weather.id !== undefined}
        setCityName={setCityName}
        geoIP={geoIP}
        cities={cities}
      />
    </div>
  );
}

export default App;
