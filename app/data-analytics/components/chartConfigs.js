export const barData = {
  labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  datasets: [
    {
      label: "Revenue",
      data: [70000, 185000, 160000, 165000, 80000, 95000, 310000, 325000],
      backgroundColor: "#8884d8",
    },
    {
      label: "Expenditure",
      data: [45000, 80000, 45000, 160000, 70000, 85000, 300000, 200000],
      backgroundColor: "#ffc658",
    },
  ],
};

export const categoryData = {
  labels: ["Product A", "Product B", "Product C"],
  datasets: [
    {
      data: [35, 30, 35],
      backgroundColor: ["#0088FE", "#00C49F", "#FF8042"],
    },
  ],
};

export const pieData = {
  labels: ["Rent", "Marketing", "Salaries", "Other"],
  datasets: [
    {
      data: [33, 17, 25, 25],
      backgroundColor: ["#00C49F", "#0088FE", "#FF8042", "#FFBB28"],
    },
  ],
};

export const lineData = {
  labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  datasets: [
    {
      label: "Revenue Growth",
      data: [5000, 15000, 25000, 35000, 45000, 55000, 65000, 75000],
      borderColor: "#00C4FE",
      tension: 0.1,
    },
  ],
};

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export const doughnutOptions = {
  ...chartOptions,
  cutout: "60%",
};
