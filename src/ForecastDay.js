import React, { useContext } from "react";
import WeatherIcon from "./WeatherIcon";
import { UnitContext } from "./UseContexts";

import "./ForecastDay.css";

export default function ForecastDay(props) {
  const { unit } = useContext(UnitContext);

  function maxTemperatureFahrenheit() {
    let maxTempF = Math.round(props.data.temp.max);
    return `${maxTempF}°`;
  }

  function minTemperatureFahrenheit() {
    let minTempF = Math.round(props.data.temp.min);
    return `${minTempF}°`;
  }

  function maxTemperatureCelsius() {
    let maxTempC = Math.round((props.data.temp.max - 32) * (5 / 9));
    return `${maxTempC}°`;
  }

  function minTemperatureCelsius() {
    let minTempC = Math.round((props.data.temp.min - 32) * (5 / 9));
    return `${minTempC}°`;
  }

  function weekDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  if (unit === "fahrenheit") {
    return (
      <div className="ForecastDay">
        <div className="forecast-day">{weekDay()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={32} />
        <div>
          <span className="forecast-temp-max">
            {maxTemperatureFahrenheit()}
          </span>
          <span className="forecast-temp-min">
            {minTemperatureFahrenheit()}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ForecastDay">
        <div className="forecast-day">{weekDay()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={32} />
        <div>
          <span className="forecast-temp-max">{maxTemperatureCelsius()}</span>
          <span className="forecast-temp-min">{minTemperatureCelsius()}</span>
        </div>
      </div>
    );
  }
}
