import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function getForecast(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
    console.log(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <h2>
          <a href="/" className="active-daily-hourly" id="five-day-forecast">
            5 Day Forecast
          </a>
          <a href="/" className="not-active-daily-hourly" id="hourly-forecast">
            Switch to Hourly
          </a>
        </h2>
        <br />
        <div className="five-day-forcast" id="forecast"></div>
        <div className="row">
          <div className="col">
            <ForecastDay data={forecastData[1]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f909d15f15ba4c8f6204927cf3507a71";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(getForecast);

    return null;
  }
}
