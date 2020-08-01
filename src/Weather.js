import React from "react";
import "./styles.css";

async function apiResponse() {
  let api_weather =
    "https://api.openweathermap.org/data/2.5/weather?q=Prudent%C3%B3polis&units=metric&appid=17b6590bec41785683bf963c68520f35";

  let response = await fetch(api_weather);
  let json = await response.json();
  return json;
}

export default function Weather() {
  let nome = apiResponse()
    .then(async data => {
      let nome = await data.name;
    })
    .catch(err => console.error(err));

  console.log(nome);

  return (
    <div className="container">
      <div className="weatherApp">
        <p>{}</p>
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
