import React from "react";

export default function FormattedDate(props) {
  console.log(props.timestamp);
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
  let hours = props.timestamp.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.timestamp.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="FormattedDate">
      <span id="current-date">
        {day}, {month} {date}, {year}
      </span>
      <small id="current-time">
        {" "}
        {hours}:{minutes}
      </small>
    </div>
  );
}
