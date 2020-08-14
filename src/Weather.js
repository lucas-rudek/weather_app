import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./styles.css";

export default function Weather(props) {
  return (
    <div>
      <h1>Olá {props.name}</h1>
    </div>
    /* <div key="container" className="container">
      {data.map((res, index) => (
        <Link to={`/${res.day}`} style={{ textDecoration: "none" }}>
          <div key="" className="weatherApp">
            <p key={index}>{res.day}</p>
            <img
              key={res.icon}
              src={`http://openweathermap.org/img/wn/${res.icon}@2x.png`}
              alt=""
            />
            <span>
              <p key={res.min}>{res.min}°</p>
              <p className="max" key={res.max}>
                {res.max}°
              </p>
            </span>
          </div>
        </Link>
      ))}
    </div> */
  );
}
