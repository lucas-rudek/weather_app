import React, { useEffect, useState } from "react";
import Chart from "chart.js";

export default function Tuesday(props) {
  const [newData, setData] = useState([]);

  useEffect(() => {
    props.data.map((res) => {
      if (res.day === "Tuesday") {
        const ctx = document.getElementById("myChart").getContext("2d");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Morning", "Noon", "Evening", "Night"],
            datasets: [
              {
                label: "Temperature in Celcius over the day",
                backgroundColor: "rgba(156,167,240,0.2)",
                borderColor: "rgba(81,102,240,1)",
                borderWidth: 2,
                hoverBackgroundColor: "rgba(156,167,240,0.2)",
                hoverBorderColor: "rgba(81,102,240,1)",
                data: res.temps
              }
            ]
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
      <h2>Tuesday - {newData.description}</h2>
      <div className="weatherDays">
        <div>
          <img
            src="https://cdn0.iconfinder.com/data/icons/weather-433/24/weather-uv-512.png"
            alt="UV Index in nm"
          />
          <p>{newData.uvi} nm</p>
        </div>
        <div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519933-30_Cloud_Rain-256.png"
            alt="Rain in mm"
          />
          <p>{newData.rain == null ? `0 mm` : `${newData.rain} mm`}</p>
        </div>
        <div>
          <img
            src="https://cdn3.iconfinder.com/data/icons/weather-icons-8/512/weather-windy-256.png
            "
            alt="Wind speed in m/s"
          />
          <p>{newData.wind} m/s</p>
        </div>
        <div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-17-256.png
            "
            alt="Humidity in %"
          />
          <p>{newData.humidity} %</p>
        </div>
      </div>
      <div className="chart-container">
        <canvas id="myChart" width="600" height="350"></canvas>
      </div>
    </div>
  );
}
