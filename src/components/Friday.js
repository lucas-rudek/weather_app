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
        console.log(res);
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Morning", "Day", "Evening", "Night"],
            datasets: [{ label: "Temperature over the day", data: res.temps }]
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
          <p>{newData.uvi}</p>
        </div>
        <div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519933-30_Cloud_Rain-256.png"
            alt=""
          />
          <p>{newData.rain}</p>
        </div>
      </div>
      <canvas id="myChart" width="600" height="300"></canvas>
    </div>
  );
}
