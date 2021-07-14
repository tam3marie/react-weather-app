import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Forecast.css";

export default function Forecast() {
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
    </div>
  );
}
