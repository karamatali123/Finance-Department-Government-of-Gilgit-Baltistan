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
  gbRevenueData,
  newBarData,
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
        <h3>Demand vs Allocation under Regular Budget</h3>
        <div className="w-full h-[300px] md:h-[500px]  flex flex-col justify-center items-center gap-4">
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-primary text-left">
          Major Head wise summary of Regular Budget
        </h3>
        <div className="w-full h-[300px] md:h-[500px] flex flex-col items-center justify-center">
          <Pie
            data={pieData}
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
                  formatter: " ",
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
          GB Revenue Summary
        </h3>
        <div className="w-full h-[300px] md:h-[500px] flex justify-center items-center">
          <Bar data={gbRevenueData} options={chartOptions} />
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-primary text-left">
          Department wise Revenue share 2024-25
        </h3>
        <div className="w-full h-[300px] md:h-[500px] flex justify-center items-center">
          {/* <Doughnut
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
          />{" "} */}

          <Bar data={newBarData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
