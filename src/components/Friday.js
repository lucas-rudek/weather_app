import React, { useEffect, useState } from "react";
import shortid from "shortid";
import Chart from "chart.js";
//key={shortid.generate()}

export default function Friday(props) {
  const [newData, setData] = useState([]);

  useEffect(() => {
    props.data.map((res) => {
      if (res.day === "Friday") {
        const ctx = document.getElementById("myChart").getContext("2d");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Morning", "Noon", "Evening", "Night"],
            datasets: [{ label: "Temperature over the day", data: res.temps }]
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    callback: function (value, index, values) {
                      return value + "°";
                    }
                  }
                }
              ]
            }
          }
        });
        setData(res);
      }
    });
  });

  return (
    <div>
      <h2>Friday - {newData.description}</h2>
      <div className="weatherDays">
        <div>
          <img
            src="https://cdn0.iconfinder.com/data/icons/weather-433/24/weather-uv-512.png"
            alt=""
          />
          <p>{newData.uvi} nm</p>
        </div>
        <div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519933-30_Cloud_Rain-256.png"
            alt=""
          />
          <p>{newData.rain} mm</p>
        </div>
        <div>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-icons-8/512/weather-windy-256.png
            "
            alt=""
          />
          <p>{newData.wind} m/s</p>
        </div>
        <div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-17-256.png
            "
            alt=""
          />
          <p>{newData.humidity} %</p>
        </div>
      </div>
      <canvas id="myChart" width="600" height="300"></canvas>
    </div>
  );
}
