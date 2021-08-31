import React, { useContext } from "react";
import { UnitContext } from "./UseContexts";

import FormattedMilitaryTime from "./FormattedMilitaryTime";
import FormattedStandardTime from "./FormattedStandardTime";

export default function FormattedDate(props) {
  const { unit } = useContext(UnitContext);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.timestamp.getDay()];
  let month = months[props.timestamp.getMonth()];
  let date = props.timestamp.getDate();
  let year = props.timestamp.getFullYear();
  if (unit === "fahrenheit") {
    return (
      <div className="FormattedDate">
        <span id="current-date">
          {day}, {month} {date}, {year}
        </span>
        <FormattedStandardTime timestamp={props.timestamp} />
      </div>
    );
  } else {
    return (
      <div className="FormattedDate">
        <span id="current-date">
          {day}, {month} {date}, {year}
        </span>
        <FormattedMilitaryTime timestamp={props.timestamp} />
      </div>
    );
  }
}
