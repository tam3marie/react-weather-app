import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="open-source">
        <a
          href="https://github.com/tam3marie/react-weather-app"
          target="_blank"
        >
          Open-Source Code
        </a>{" "}
        by{" "}
        <a href="https://www.starieknightdesigns.com/" target="_blank">
          Tammy Knight
        </a>
        <br />
        <a href="react-weather-app-tknight.netlify.app" target="_blank">
          Hosted
        </a>{" "}
        on{" "}
        <a href="https://www.netlify.com/" target="_blank">
          Netlify
        </a>
      </div>
    </div>
  );
}
