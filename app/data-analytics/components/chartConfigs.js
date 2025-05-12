export const barData = {
  labels: ["2019-20", "2020-21", "2021-22", "2022-23", "2023-24", "2024-25"],
  datasets: [
    {
      label: "Demand",
      data: [44854, 60058, 67365, 80050, 99520],
      backgroundColor: "#8884d8",
    },

    {
      label: "Allocation",
      data: [32000, 47000, 47000, 51700, 68000],
      backgroundColor: "#ffc658",
    },
    {
      label: "Shortfall",
      data: [12854, 13058, 20365, 28350, 31520],
      backgroundColor: "grey",
    },
  ],
};

export const gbRevenueData = {
  labels: ["2019-20", "2020-21", "2021-22", "2022-23", "2023-24", "2024-25"],
  datasets: [
    {
      label: "Targets",
      data: [1875, 1913.711, 2000, 3500, 5000, 7722.267],
      backgroundColor: "#ffc658",
    },
    {
      label: "Collection",
      data: [764.634, 1276.379, 1430, 2000, 2715.062, 2438],
      backgroundColor: "#8884d8",
    },
    {
      label: "Shortfall",
      data: [1110.366, 637.332, 570, 1500, 2284.938, 5284.267],
      backgroundColor: "grey",
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
        47000, 7756.314, 450.558, 28323.411, 107.402, 134.406, 500, 43.71,
        2284.199,
      ],
      backgroundColor: [
        "#00C49F", // Teal
        "#0088FE", // Blue
        "#FF8042", // Orange
        "#FFBB28", // Yellow
        "#FF1042", // Red
        "#8884D8", // Purple
        "#82CA9D", // Light Green
        "#A4DE6C", // Lime Green
        "#D0ED57", // Yellow Green
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
        3998.2, 1303.33, 770, 300, 289.086, 275, 165, 163.142, 150, 120,
        188.509,
      ],
      backgroundColor: [
        "#00C49F", // Teal
        "#0088FE", // Blue
        "#FF8042", // Orange
        "#FFBB28", // Yellow
        "#FF1042", // Red
        "#8884D8", // Purple
        "#82CA9D", // Light Green
        "#A4DE6C", // Lime Green
        "#D0ED57", // Yellow Green
        "#FF6B6B", // Coral
        "#4ECDC4", // Turquoise
      ],
    },
  ],
};

export const lineData = {
  labels: ["2019-20", "2020-21", "2021-22", "2022-23", "2023-24", "2024-25"],
  datasets: [
    {
      label: "Revenue Growth",
      data: [
        "5000M",
        "15000M",
        "25000M",
        "35000M",
        "45000M",
        "55000M",
        "65000M",
        "75000M",
      ],
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
