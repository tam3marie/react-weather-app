import React, { useState } from "react";

import ForecastDay from "./ForecastDay";
import ForecastHour from "./ForecastHour";

export default function ForecastSwitch(props) {
  const [forecast, setForecast] = useState("daily");
  let dailyForecastData = props.dailyForecastData;
  let hourlyForecastData = props.hourlyForecastData;

  function showDailyForecast(event) {
    event.preventDefault();
    setForecast("daily");
  }

  function showHourlyForecast(event) {
    event.preventDefault();
    setForecast("hourly");
  }

  if (forecast === "daily") {
    return (
      <div className="ForecastSwitch">
        <h2>
          <span className="active-daily-hourly" id="five-day-forecast">
            5 Day Forecast
          </span>
          <a
            href="/"
            className="not-active-daily-hourly"
            id="hourly-forecast"
            onClick={showHourlyForecast}
          >
            Switch to Hourly
          </a>
        </h2>
        <br />
        <div className="five-day-forcast" id="forecast"></div>
        <div className="row">
          {dailyForecastData.map(function (dailyForecastData, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecastData} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="ForecastSwitch">
        <h2>
          <span className="active-daily-hourly" id="hourly-forecast">
            Hourly Forecast
          </span>
          <a
            href="/"
            className="not-active-daily-hourly"
            id="five-day-forecast"
            onClick={showDailyForecast}
          >
            Switch to 5 Day Forecast
          </a>
        </h2>
        <br />
        <div className="five-day-forcast" id="forecast"></div>
        <div className="row">
          {hourlyForecastData.map(function (hourlyForecastData, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastHour data={hourlyForecastData} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
