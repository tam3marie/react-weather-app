import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-8">
          <p className="info">
            <span id="display-city">{props.data.city}</span> <br />
            <FormattedDate timestamp={props.data.timestamp} />
            <span id="weather-description">{props.data.description} </span>
            <small className="high-low-temps">
              <span id="high-temp">{props.data.highTemp}</span>/
              <span id="low-temp">{props.data.lowTemp}</span>
            </small>
          </p>

          <p className="currentTemp">
            <WeatherIcon code={props.data.icon} />
            <CurrentTemperature fahrenheit={props.data.temperature} />
          </p>
        </div>
        <div className="col-4">
          <p className="details">
            Humidity: <span id="humidity">{props.data.humidity}</span>%
            <br />
            Wind Speed: <span id="wind">{props.data.wind}</span>
            <span id="wind-units"> mph</span>
          </p>
        </div>
      </div>
    </div>
  );
}
