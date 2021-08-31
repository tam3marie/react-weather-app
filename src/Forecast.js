import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

//import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import ForecastToggle from "./ForecastToggle";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [dailyForecastData, setDailyForecastData] = useState(null);
  const [hourlyForecastData, setHourlyForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function getForecast(response) {
    setDailyForecastData(response.data.daily);
    setHourlyForecastData(response.data.hourly);
    setLoaded(true);
    console.log(response.data.hourly);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <ForecastToggle
          dailyForecastData={dailyForecastData}
          hourlyForecastData={hourlyForecastData}
        />
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
