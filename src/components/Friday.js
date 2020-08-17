import React, { useEffect } from "react";
import shortid from "shortid";
import Chart from "chart.js";
//key={shortid.generate()}

export default function Friday(props) {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb"],
        datasets: [
          {
            label: "2015",
            data: [10, 8]
          }
        ]
      }
    });
  }, []);

  return (
    <div>
      <h2>Friday</h2>
      {props.data.map((res) => {
        if (res.day === "Friday") {
          return <h3>{res.description}</h3>;
        }
      })}
      <canvas id="myChart" width="600" height="300"></canvas>
    </div>
  );
}
