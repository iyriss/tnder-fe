import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const dataRed = new Array(100).fill(0).map((_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: Math.random() * 10,
  color: "red",
}));
const dataBlue = new Array(100).fill(0).map((_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: Math.random() * 10,
  color: "blue",
}));

export const data = {
  datasets: [
    {
      label: "Red dataset",
      data: dataRed,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: dataBlue,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Heatmap: React.FC = () => {
  return <Bubble options={options} data={data} />;
};

export default Heatmap;
