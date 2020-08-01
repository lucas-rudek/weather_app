import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

let api_weather =
  "https://api.openweathermap.org/data/2.5/weather?q=Prudent%C3%B3polis&units=metric&appid=17b6590bec41785683bf963c68520f35";

export default function Weather() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function apiResponse() {
      let res = await axios(api_weather);
      setData(res.data);
    }
    apiResponse();
  }, []);

  return (
    <div className="container">
      <div className="weatherApp">
        <p>{data.name}</p>
        <img
          src="https://freepngimg.com/thumb/weather/23523-4-weather-file.png"
          alt="weather"
        />
        <span>
          <p>{data.main.temp_min}°</p>
          <p>{data.main.temp_max}°</p>
        </span>
      </div>
    </div>
  );
}
