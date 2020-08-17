import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import shortid from "shortid";

export default function Weather(props) {
  return (
    <div key="container" className="container">
      {props.data.map((res, index) => (
        <Link
          key={shortid.generate()}
          to={`/${res.day}`}
          style={{ textDecoration: "none" }}
        >
          <div key={shortid.generate()} className="weatherApp">
            <p key={index}>{res.day}</p>
            <img
              key={res.icon}
              src={`http://openweathermap.org/img/wn/${res.icon}@2x.png`}
              alt=""
            />
            <span key={shortid.generate()}>
              <p key={res.min_temp}>{res.min_temp}°</p>
              <p className="max" key={res.max_temp}>
                {res.max_temp}°
              </p>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
