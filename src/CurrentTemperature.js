import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function celsiusConversion() {
    return Math.round((props.fahrenheit - 32) * (5 / 9));
  }
  if (unit === "fahrenheit") {
    return (
      <span className="CurrentTemperature">
        <span id="current-degrees">{props.fahrenheit}</span>°
        <span className="f-c">
          <span className="fahrenheit">
            <a href="/" className="active" id="fahrenheit-link">
              F
            </a>
          </span>
          |
          <span className="celsius">
            <a
              href="/"
              className="not-active"
              id="celsius-link"
              onClick={showCelsius}
            >
              C
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="CurrentTemperature">
        <span id="current-degrees">{celsiusConversion()}</span>°
        <span className="f-c">
          <span className="celsius">
            <a href="/" className="active" id="celsius-link">
              C
            </a>
          </span>
          |
          <span className="fahrenheit">
            <a
              href="/"
              className="not-active"
              id="fahrenheit-link"
              onClick={showFahrenheit}
            >
              F
            </a>
          </span>
        </span>
      </span>
    );
  }
}
