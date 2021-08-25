import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "f909d15f15ba4c8f6204927cf3507a71";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

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
          <div className="Forecast-day">Thu</div>
          <WeatherIcon code="01d" size={32} />
          <div className="Forecast-teamperatures">
            <span className="Forecast-temp-max">90°</span>
            <span className="Forecast-temp-min">80°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
