import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

let api_weather =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-25.2142293&lon=-50.9824194&&appid=17b6590bec41785683bf963c68520f35&units=metric&lang=pt_br";

export default function Weather() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function apiResponse() {
      const res = await axios(api_weather);
      const newRes = res.data.daily.map((res) => ({
        min: res.temp.min.toString().slice(0, 2),
        max: res.temp.max.toString().slice(0, 2),
        icon: res.weather[0].icon,
        description: res.weather[0].description,
        day: new Date(res.dt * 1000).toLocaleString("en-US", {
          weekday: "long"
        })
      }));
      setData(newRes);
    }
    apiResponse();
  }, []);

  return (
    <div className="container">
      {data.map((res) => (
        <div className="weatherApp">
          <p>{res.day}</p>
          <img
            key={res.icon}
            src={`http://openweathermap.org/img/wn/${res.icon}@2x.png`}
            alt=""
          />
          <span>
            <p key={res.min} className="min">
              {res.min}°
            </p>
            <p key={res.max}>{res.max}°</p>
          </span>
        </div>
      ))}
    </div>
  );
}
