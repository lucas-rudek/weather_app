import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

let api_weather =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-25.2142293&lon=-50.9824194&&appid=17b6590bec41785683bf963c68520f35&units=metric";

export default function Weather() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function apiResponse() {
      const res = await axios(api_weather);
      const newRes = res.data.daily.map((res) => ({
        day: res.dt,
        min: res.temp.min,
        max: res.temp.max,
        icon: res.weather[0].icon
      }));
      setData(newRes);
    }
    apiResponse();
  }, []);

  console.log(data);

  return (
    <div className="container">
      <div className="weatherApp">
        <p>Monday</p>
        <img src="" alt="weather" />
        <span>
          <p>°</p>
          <p>°</p>
        </span>
      </div>
    </div>
  );
}
