import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import "./Form.css";

export default function Form() {
  const [city, setCity] = useState(null);
  const [citySearched, setCitySearched] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [highTemp, setHighTemp] = useState(null);
  const [lowTemp, setLowTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(
    `https://openweathermap.org/img/wn/01d@2x.png`
  );

  let weatherApiKey = "f909d15f15ba4c8f6204927cf3507a71";
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weatherApiKey}`;

  function getWeatherDetails(response) {
    console.log(response);
    setCitySearched(response.data.name);
    setTemperature(Math.round(response.data.main.temp));
    setHighTemp(Math.round(response.data.main.temp_max));
    setLowTemp(Math.round(response.data.main.temp_min));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function searchCity(event) {
    event.preventDefault();
    if (city === null) {
      alert("Please type a city.");
    } else {
      axios.get(weatherApiUrl).then(getWeatherDetails);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Form">
      <form id="search-city" onSubmit={searchCity}>
        <div className="row">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search City"
              autoComplete="off"
              autoFocus="on"
              id="search-city-input"
              onChange={updateCity}
            />
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              className="btn btn-search"
              id="search-button"
              value="Search"
            />
          </div>
          <div className="col-md-2">
            <input
              type="button"
              className="btn btn-current"
              id="current-button"
              value="Current"
            />
          </div>
        </div>
      </form>
      <CurrentWeather
        citySearched={citySearched}
        temperature={temperature}
        highTemp={highTemp}
        lowTemp={lowTemp}
        description={description}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />
    </div>
  );
}
