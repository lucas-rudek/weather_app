import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

let api_weather =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-25.2142293&lon=-50.9824194&&appid=17b6590bec41785683bf963c68520f35&units=metric";

export default function Weather() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function apiResponse() {
      let res = await axios(api_weather);
      setData(res.map(res => {
          temp_min: res.data.daily[0].temp.min.toString().slice(0, 2),
          temp_max: res.data.daily[0].temp.max.toString().slice(0, 2),
          icon: `http://openweathermap.org/img/wn/${res.data.daily[0].weather[0].icon}@2x.png`
      }));
    }
    apiResponse();
  }, []);

  console.log(data[0])

  return (
    <div className="container">
      <div className="weatherApp">
        <p>Monday</p>
        <img src={data.icon} alt="weather" />
        <span>
          <p>{data.temp_min}°</p>
          <p>{data.temp_max}°</p>
        </span>
      </div>
    </div>
  );
}
