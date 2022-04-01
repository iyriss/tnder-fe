import React from "react";
import formatData from "../../utils/FormatData";
import { testData } from "../../assets/testData";

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
  const formattedTestData = formatData(formattedData);

  const data = {
    datasets: [
      {
        label: "Views",
        data: formattedTestData,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bubble options={options} data={data} />;
};

export default Heatmap;
