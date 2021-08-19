import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import "./Form.css";

export default function Form() {
  const [onLoad, setOnLoad] = useState(false);
  const [citySearched, setCitySearched] = useState("New York");
  const [weatherData, setWeatherData] = useState({});

  let weatherApiKey = "f909d15f15ba4c8f6204927cf3507a71";
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearched}&units=imperial&appid=${weatherApiKey}`;

  function getWeatherDetails(response) {
    console.log(response);
    setWeatherData({
      city: response.data.name,
      timestamp: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      highTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
    setOnLoad(true);
  }

  function searchCity(event) {
    if (citySearched === null) {
      alert("Please type a city.");
    } else {
      axios.get(weatherApiUrl).then(getWeatherDetails);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCitySearched(event.target.value);
  }
  if (onLoad) {
    return (
      <div className="Form">
        <form id="search-city" onSubmit={handleSubmit}>
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
        <CurrentWeather data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
