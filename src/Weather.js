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
      setData({
        name: res.data.name,
        temp_min: res.data.main.temp_min.toString().slice(0, 2),
        temp_max: res.data.main.temp_max.toString().slice(0, 2),
        icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
      });
    }
    apiResponse();
  }, []);

  return (
    <div className="container">
      <div className="weatherApp">
        <p>{data.name}</p>
        <img src={data.icon} alt="weather" />
        <span>
          <p>{data.temp_min}°C</p>
          <p>{data.temp_max}°C</p>
        </span>
      </div>
    </div>
  );
}
