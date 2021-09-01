import React from "react";

import CurrentHighLowTemps from "./CurrentHighLowTemps";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";
import Forecast from "./Forecast";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <p className="info">
        <span className="display-city">{props.data.city}</span> <br />
        <FormattedDate timestamp={props.data.timestamp} />
        <span className="weather-description">{props.data.description} </span>
        <CurrentHighLowTemps
          highTemp={props.data.highTemp}
          lowTemp={props.data.lowTemp}
        />
      </p>
      <div className="row">
        <div className="col-8">
          <p className="currentTemp">
            <WeatherIcon code={props.data.icon} size={52} />
            <CurrentTemperature fahrenheit={props.data.temperature} />
          </p>
        </div>
        <div className="col-4">
          <p className="details">
            Humidity: <span>{props.data.humidity}%</span>
            <br />
            Wind Speed: <span>{props.data.wind} mph</span>
          </p>
        </div>
      </div>
      <Forecast coordinates={props.data.coordinates} />
    </div>
  );
}
