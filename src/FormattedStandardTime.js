import React from "react";

export default function FormattedStandardTime(props) {
  let hours = props.timestamp.getHours();
  let minutes = props.timestamp.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours > 12) {
    return (
      <small id="current-time">
        {" "}
        {hours - 12}:{minutes}PM
      </small>
    );
  }
  if (hours < 12 && hours !== 0) {
    return (
      <small id="current-time">
        {" "}
        {hours}:{minutes}AM
      </small>
    );
  }
  if (hours === 12) {
    return (
      <small id="current-time">
        {" "}
        {hours}:{minutes}PM
      </small>
    );
  }
  if (hours === 0) {
    return (
      <small id="current-time">
        {" "}
        {hours + 12}:{minutes}AM
      </small>
    );
  }
}
