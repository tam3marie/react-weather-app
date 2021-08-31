import React, { useContext } from "react";
import { UnitContext } from "./UseContexts";

export default function CurrentHighLowTemps(props) {
  const { unit } = useContext(UnitContext);
  let fahrenheitMaxTemp = props.highTemp;
  let fahrenheitMinTemp = props.lowTemp;

  function maxTempCelsius() {
    let celsiusMaxTemp = Math.round((props.highTemp - 32) * (5 / 9));
    return `${celsiusMaxTemp}`;
  }

  function minTempCelsius() {
    let celsiusMinTemp = Math.round((props.lowTemp - 32) * (5 / 9));
    return `${celsiusMinTemp}`;
  }

  if (unit === "fahrenheit") {
    return (
      <small className="high-low-temps">
        <span id="high-temp">{fahrenheitMaxTemp}</span>/
        <span id="low-temp">{fahrenheitMinTemp}</span>
      </small>
    );
  } else {
    return (
      <small className="high-low-temps">
        <span id="high-temp">{maxTempCelsius()}</span>/
        <span id="low-temp">{minTempCelsius()}</span>
      </small>
    );
  }
}
