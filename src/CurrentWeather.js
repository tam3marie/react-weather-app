import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import FormattedDate from "./FormattedDate";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-8">
          <p className="info">
            <span id="display-city">{props.city}</span> <br />
            <FormattedDate timestamp={props.timestamp} />
            <span id="weather-description">{props.description} </span>
            <small className="high-low-temps">
              <span id="high-temp">{props.highTemp}</span>/
              <span id="low-temp">{props.lowTemp}</span>
            </small>
          </p>

          <p className="currentTemp">
            <img
              src={props.icon}
              alt="weather icon"
              className="float-left"
              id="icon"
            />
            <span id="current-degrees">{props.temperature}</span>°
            <span className="f-c">
              <span className="fahrenheit">
                <a href="/" className="active" id="fahrenheit-link">
                  F
                </a>
              </span>
              |
              <span className="celsius">
                <a href="/" className="not-active" id="celsius-link">
                  C
                </a>
              </span>
            </span>
          </p>
        </div>
        <div className="col-4">
          <p className="details">
            Humidity: <span id="humidity">{props.humidity}</span>%
            <br />
            Wind Speed: <span id="wind">{props.wind}</span>
            <span id="wind-units"> mph</span>
          </p>
        </div>
      </div>
    </div>
  );
}
