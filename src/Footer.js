import React from "react";
import bootstrap from "bootstrap";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="open-source">
        <a href="https://github.com/tam3marie/react-weather-app">
          Open-Source Code
        </a>
        by Tammy Knight
        <br />
        <a href="react-weather-app-tknight.netlify.app">Hosted</a>
        on <a href="https://www.netlify.com/">Netlify</a>
      </div>
    </div>
  );
}
