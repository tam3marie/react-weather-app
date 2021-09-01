import React, { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
import { UnitContext } from "./UseContexts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [unit, setUnit] = useState("fahrenheit");

  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h1>Current Weather</h1>
              <Form />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </UnitContext.Provider>
  );
}
