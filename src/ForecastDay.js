import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function weekDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="Forecast-day">{weekDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="Forecast-teamperatures">
        <span className="Forecast-temp-max">{maxTemperature()}</span>
        <span className="Forecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
