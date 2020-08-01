import React from "react";
import "./styles.css";

export default async function Weather() {
  let api =
    "http://api.openweathermap.org/data/2.5/weather?q=Prudent%C3%B3polis&units=metric&appid=17b6590bec41785683bf963c68520f35";

  let response = await fetch(api);
  let json = response.json();
  console.log(json);

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
