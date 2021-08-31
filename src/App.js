import React, { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
import { BackgroundContext } from "./UseContexts";
import { UnitContext } from "./UseContexts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
export default function App() {
  const [background, setBackground] = useState(null);
  const [unit, setUnit] = useState("fahrenheit");

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      <UnitContext.Provider value={{ unit, setUnit }}>
        <div
          className="App"
          style={{
            backgroundImage: `url("/images/clear-sky.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="open-source">
              <div className="card">
                <div className="card-body">
                  <h1>Current Weather</h1>
                  <Form />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </UnitContext.Provider>
    </BackgroundContext.Provider>
  );
}
