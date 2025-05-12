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
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  barData,
  pieData,
  chartOptions,
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
  const millionsFormatter = (value) => {
    return value.toLocaleString() + "M";
  };

  const chartOptionsWithMillions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: millionsFormatter,
        },
      },
    },
    plugins: {
      ...chartOptions.plugins,
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += millionsFormatter(context.parsed.y);
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-7 ">
      <div className="p-4 text-xl font-bold text-primary bg-white rounded-lg shadow-lg">
        <h3>Demand vs Allocation under Regular Budget</h3>
        <div className="w-full h-[300px] md:h-[500px]  flex flex-col justify-center items-center gap-4">
          <Bar data={barData} options={chartOptionsWithMillions} />
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-primary text-left">
          Major Head wise summary of Regular Budget
        </h3>
        <div className="w-full h-[300px] md:h-[500px] my-28 flex flex-col items-center justify-center">
          <Pie
            data={pieData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                datalabels: {
                  color: "#000",
                  display: function (context) {
                    return false;
                    // context.dataset.data[context.dataIndex] > 1;
                  },
                  font: {
                    weight: "bold",
                    size: 10,
                  },
                  formatter: function (value) {
                    console.log(value, "value");
                    if (value < 1) {
                      return "";
                    }
                    return millionsFormatter(value);
                  },
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let label = context.label || "";
                      if (label) {
                        label += ": ";
                      }
                      label += context.raw.toFixed(3) + "M";
                      return label;
                    },
                  },
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
          <Bar data={gbRevenueData} options={chartOptionsWithMillions} />
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-primary text-left">
          Department wise Revenue share 2024-25
        </h3>
        <div className="w-full h-[300px] md:h-[500px]  flex justify-center items-center">
          <Doughnut
            data={newBarData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                datalabels: {
                  color: "#000",
                  display: function (context) {
                    console.log(
                      context.dataset.data[context.dataIndex],
                      "context"
                    );
                    return false;
                    // context.dataset.data[context.dataIndex] > 0.15;
                  },
                  font: {
                    weight: "bold",
                    size: 10,
                  },
                  formatter: function (value) {
                    console.log(value, "value");
                    if (value < 0.15) {
                      return "";
                    }
                    return millionsFormatter(value);
                  },
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let label = context.label || "";
                      if (label) {
                        label += ": ";
                      }
                      label = millionsFormatter(context.raw);
                      return label;
                    },
                  },
                },
                legend: {
                  position: "bottom",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;
