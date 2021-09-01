import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="open-source">
        <a
          href="https://github.com/tam3marie/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source Code
        </a>{" "}
        by{" "}
        <a
          href="https://www.starieknightdesigns.com/"
          target="_blank"
          rel="noreferrer"
        >
          Tammy Knight
        </a>
        <br />
        <a
          href="https://react-weather-app-tknight.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Hosted
        </a>{" "}
        on{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </div>
    </div>
  );
}
