import "./styles.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "./Weather.js";
import Friday from "./components/Friday.js";
import Monday from "./components/Monday.js";
import Saturday from "./components/Saturday.js";
import Sunday from "./components/Sunday.js";
import Thursday from "./components/Thursday.js";
import Tuesday from "./components/Tuesday.js";
import Wednesday from "./components/Wednesday.js";
import axios from "axios";
import shortid from "shortid";

let api_weather =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-25.2142293&lon=-50.9824194&&appid=17b6590bec41785683bf963c68520f35&units=metric";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function apiResponse() {
      const res = await axios(api_weather);
      const newRes = res.data.daily.map((res, index) => ({
        temps: [res.temp.morn, res.temp.day, res.temp.eve, res.temp.night],
        min_temp:
          res.temp.min < 10
            ? res.temp.min.toString().slice(0, 1)
            : res.temp.min.toString().slice(0, 2),
        max_temp:
          res.temp.max < 10
            ? res.temp.max.toString().slice(0, 1)
            : res.temp.max.toString().slice(0, 2),
        rain: res.rain,
        uvi: res.uvi,
        wind: res.wind_speed,
        humidity: res.humidity,
        icon: res.weather[0].icon,
        description:
          res.weather[0].description.charAt(0).toUpperCase() +
          res.weather[0].description.slice(1),
        day: new Date(res.dt * 1000).toLocaleString("en-US", {
          weekday: "long"
        })
      }));
      newRes.pop();
      setData(newRes);
    }
    apiResponse();
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>One Week Weather App</h1>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Weather {...props} data={data} />}
          />
          <Route
            path="/Friday"
            exact
            render={(props) => <Friday {...props} data={data} />}
          />
          <Route
            path="/Monday"
            exact
            render={(props) => <Monday {...props} data={data} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
