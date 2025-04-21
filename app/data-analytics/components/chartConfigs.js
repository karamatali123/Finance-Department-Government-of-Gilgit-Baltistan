export const barData = {
  labels: ["2019-20", "2020-21", "2021-22", "2022-23", "2023-24", "2024-25"],
  datasets: [
    {
      label: "Shortfall",
      data: [12854.0, 13058.0, 20365.0, 20350.0, 31520.0],
      backgroundColor: "grey",
    },
    {
      label: "Allocation",
      data: [32000.0, 47000.0, 47000.0, 51700.0, 68000.0],
      backgroundColor: "#ffc658",
    },
    {
      label: "Demand",
      data: [44854.0, 60058.0, 67365.0, 80050.0, 99520.0],
      backgroundColor: "#8884d8",
    },
  ],
};

export const gbRevenueData = {
  labels: ["2019-20", "2020-21", "2021-22", "2022-23", "2023-24", "2024-25"],
  datasets: [
    {
      label: "Collection",
      data: [764.634, 1276.379, 1430.0, 2000.0, 2715.062, 2438.0],
      backgroundColor: "#8884d8",
    },
    {
      label: "Shortfall",
      data: [1110.366, 637.332, 570.0, 1500.0, 2284.938, 5284.267],
      backgroundColor: "grey",
    },
    {
      label: "Targets",
      data: [1875.0, 1913.711, 2000.0, 3500.0, 5000.0, 7722.267],
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
  labels: [
    "Employees Related Expenses",
    "Operating expenses",
    "Employees Retirements benefits",
    "Grants & Subsidies",
    "Transfer",
    "Expenditure on acquiring of physical assets",
    "Investment",
    "Civil works",
    "Repairs and maintenance",
  ],
  datasets: [
    {
      data: [
        47000.0, 7756.314, 450.558, 28323.411, 107.402, 134.406, 500.0, 43.71,
        2284.199,
      ],
      backgroundColor: [
        "#00C49F",
        "#0088FE",
        "#FF8042",
        "#FFBB28",
        "#FF8042",
        "#FFBB28",
        "#FF8042",
        "#FFBB28",
        "#FF8042",
      ],
    },
  ],
};

export const newBarData = {
  labels: [
    "Water & Power",
    "Gilgit-Baltistan Revenue Authority",
    "Excise & Taxation",
    "Home & Prisons",
    "Forest, Wildlife & Environment",
    "Tourism, Sports & Culture",
    "Finance",
    "Agriculture, Livestock & Fisheries",
    "Communication & Works",
    "Food",
    "Other Departments",
  ],
  datasets: [
    {
      label: "Revenue Targets",
      data: [
        3998.2, 1303.339, 770.0, 300.0, 289.086, 275.0, 163.94, 163.142,
        131.331, 120.0, 188.509,
      ],
      backgroundColor: "#ffc658",
    },
    // {
    //   label: "Collection",
    //   data: [
    //     1004.807, 0.0, 937.627, 187.695, 32.671, 228.543, 155.042, 58.232,
    //     133.85, 1.693, 439.63,
    //   ],
    //   backgroundColor: "#8884d8",
    // },
  ],
};

export const lineData = {
  labels: ["2019-20", "2020-21", "2021-22", "2022-23", "2023-24", "2024-25"],
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
    datalabels: {
      display: false,
    },
  },
};

export const doughnutOptions = {
  ...chartOptions,
  cutout: "60%",
};
