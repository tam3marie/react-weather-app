import React, { useContext } from "react";
import WeatherIcon from "./WeatherIcon";
import { UnitContext } from "./UseContexts";

import "./ForecastHour.css";

export default function ForecastHour(props) {
  const { unit } = useContext(UnitContext);
  let fahrenheitTemp = Math.round(props.data.temp);
  let celsiusTemp = Math.round((props.data.temp - 32) * (5 / 9));

  function upcomingHours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (unit === "fahrenheit") {
      if (hours > 12) {
        return `${hours - 12} PM`;
      }
      if (hours < 12 && hours !== 0) {
        return `${hours} AM`;
      }
      if (hours === 12) {
        return `${hours} PM`;
      }
      if (hours === 0) {
        return `${hours + 12} AM`;
      }
    } else {
      return `${hours}:00`;
    }
  }

  if (unit === "fahrenheit") {
    return (
      <div className="ForecastHour">
        <div className="forecast-hour">{upcomingHours()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={32} />
        <div>
          <span className="forecast-hour-temp-max">{fahrenheitTemp}°F</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ForecastHour">
        <div className="forecast-hour">{upcomingHours()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={32} />
        <div>
          <span className="forecast-hour-temp-max">{celsiusTemp}°C</span>
        </div>
      </div>
    );
  }
}
