import React from "react";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { testData } from "../../assets/testData";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
      display: false,
    },
    x: {
      beginAtZero: true,
      display: false,
    },
  },
};

type Props = {
  formattedData: any;
};

const Heatmap: React.FC<Props> = ({ formattedData }) => {
  const data = {
    datasets: [
      {
        label: "Views",
        data: formattedData ? formattedData : testData,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  console.log("formattedData: ", formattedData);

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 4,
      }}
    >
      <Bubble options={options} data={data} />
    </div>
  );
};

export default Heatmap;
