import React from "react";
import BrokenCloudsImg from "./images/Broken-Clouds.jpg";
import ClearSkyImg from "./images/Clear-Sky.jpg";
import FewCloudsImg from "./images/Few-Clouds.jpg";
import MistImg from "./images/Mist.jpg";
import RainImg from "./images/Rain.jpg";
import ScatteredCloudsImg from "./images/Scattered-Clouds.jpg";
import ShowerRainImg from "./images/Shower-Rain.jpg";
import SnowImg from "./images/Snow.jpg";
import ThunderstormImg from "./images/Thunderstorm.jpg";

export default function BackgroundImage(props) {
  const codeMapping = {
    "01d": `url(${ClearSkyImg})`,
    "01n": `url(${ClearSkyImg})`,
    "02d": `url(${FewCloudsImg})`,
    "02n": `url(${FewCloudsImg})`,
    "03d": `url(${ScatteredCloudsImg})`,
    "03n": `url(${ScatteredCloudsImg})`,
    "04d": `url(${BrokenCloudsImg})`,
    "04n": `url(${BrokenCloudsImg})`,
    "09d": `url(${ShowerRainImg})`,
    "09n": `url(${ShowerRainImg})`,
    "10d": `url(${RainImg})`,
    "10n": `url(${RainImg})`,
    "11d": `url(${ThunderstormImg})`,
    "11n": `url(${ThunderstormImg})`,
    "13d": `url(${SnowImg})`,
    "13n": `url(${SnowImg})`,
    "50d": `url(${MistImg})`,
    "50n": `url(${MistImg})`,
  };

  return (
    <div
      className="BackgroundImage"
      style={{
        backgroundImage: `${codeMapping[props.code]}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}
