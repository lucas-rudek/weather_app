import React from "react";
import "./styles.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weatherApp">
        <p>Monday</p>
        <img
          src="https://freepngimg.com/thumb/weather/23523-4-weather-file.png"
          alt="weather"
        />
        <span>
          <p>12°</p>
          <p>24°</p>
        </span>
      </div>
    </div>
  );
}
