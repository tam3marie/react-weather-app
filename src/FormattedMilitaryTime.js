import React from "react";

import "./FormattedMilitaryTime.css";

export default function FormattedMilitaryTime(props) {
  let hours = props.timestamp.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.timestamp.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <small className="current-time">
      {" "}
      {hours}:{minutes}
    </small>
  );
}
