import Form from "./Form";
import Footer from "./Footer";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./App.css";
export default function App() {
  return (
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
            <Forecast />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
