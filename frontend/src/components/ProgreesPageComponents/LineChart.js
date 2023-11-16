import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const tempData = [
    {
      id: 1,
      day: "Sun Nov 12 2023",
      cal: 2000,
      weight: 150,
    },
    {
      id: 2,
      day: "Mon Nov 13 2023",
      cal: 1500,
      weight: 120,
    },
    {
      id: 3,
      day: "Tue Nov 14 2023",
      cal: 1800,
      weight: 190,
    },
    {
      id: 4,
      day: "Wed Nov 15 2023",
      cal: 2000,
      weight: 160,
    },
    {
      id: 5,
      day: "Thur Nov 16 2023",
      cal: 4000,
      weight: 130,
    },
  ];

  const generateLabels = () => {
    let labels = [];
    let today = new Date();

    today.setDate(today.getDate() - today.getDay());
    console.log(today.toDateString());
    let lastDay = new Date();
    lastDay.setDate(today.getDate() + 7);
    // while (today.toDateString() !== lastDay.toDateString()) {
    //   //labels.push(today.toDateString);
    //   console.log(today.toDateString());
    //   today.setDate(today.getDate + 1);
    // }
    console.log(labels);
    // return labels;
  };

  const test = [10, 3, 4, 5, 7, 4, 10, 2];
  const labels = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  let i = 0;
  let j = 0;

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => test[i++]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => test[j++]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      {generateLabels()}
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
