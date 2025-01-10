"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import {
  barData,
  categoryData,
  pieData,
  lineData,
  chartOptions,
  doughnutOptions,
} from "./chartConfigs";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  ChartDataLabels
);

const Charts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-7 ">
      <div className="p-4 text-xl font-bold text-primary bg-white rounded-lg shadow-lg">
        <h3>Revenue VS Expenditure</h3>
        <div className="w-full h-[300px] md:h-[500px]  flex flex-col justify-center items-center gap-4">
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-primary text-left">
          Expenditure Breakdown
        </h3>
        <div className="w-full h-[300px] md:h-[500px] flex flex-col items-center justify-center">
          <Pie
            data={pieData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                datalabels: {
                  color: "#fff",
                  font: {
                    weight: "bold",
                    size: 16,
                  },
                  formatter: (value) => value + "%",
                },
                legend: {
                  display: true,
                  position: "bottom",
                  align: "center",
                  labels: {
                    padding: 20,
                    font: {
                      size: 14,
                    },
                    boxWidth: 15,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-primary text-left">
          Monthly Revenue Growth
        </h3>
        <div className="w-full h-[300px] md:h-[500px] flex justify-center items-center">
          <Line data={lineData} options={chartOptions} />
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-primary text-left">
          Category Comparison
        </h3>
        <div className="w-full h-[300px] md:h-[500px] flex justify-center items-center">
          <Doughnut
            data={categoryData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                datalabels: {
                  color: "#fff",
                  display: false,
                  font: {
                    weight: "bold",
                    size: 16,
                  },
                  formatter: (value) => value + "%",
                },
              },
            }}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Charts;
