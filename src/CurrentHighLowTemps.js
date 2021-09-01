import React, { useContext } from "react";
import { UnitContext } from "./UseContexts";

import "./CurrentHighLowTemps.css";

export default function CurrentHighLowTemps(props) {
  const { unit } = useContext(UnitContext);
  let fahrenheitMaxTemp = props.highTemp;
  let fahrenheitMinTemp = props.lowTemp;
  let celsiusMaxTemp = Math.round((props.highTemp - 32) * (5 / 9));
  let celsiusMinTemp = Math.round((props.lowTemp - 32) * (5 / 9));

  if (unit === "fahrenheit") {
    return (
      <small className="CurrentHighLowTemps">
        <span className="high-temp">{fahrenheitMaxTemp}</span>/
        <span className="low-temp">{fahrenheitMinTemp}</span>
      </small>
    );
  } else {
    return (
      <small className="CurrentHighLowTemps">
        <span className="high-temp">{celsiusMaxTemp}</span>/
        <span className="low-temp">{celsiusMinTemp}</span>
      </small>
    );
  }
}
