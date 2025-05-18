import { ChartConfig } from "../components/ui/chart";

export const pieChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#2563eb",
  },
  safari: {
    label: "Safari",
    color: "#60a5fa",
  },
  firefox: {
    label: "Firefox",
    color: "#2563eb",
  },
  edge: {
    label: "Edge",
    color: "#60a544",
  },
  other: {
    label: "Other",
    color: "#4577a1",
  },
} satisfies ChartConfig;

export const barChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export const barChartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export const timeSpentChartConfig = {
  chrome: {
    label: "Fixing same data issue again",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Googling errors",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Meetings about data not received",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Actual data analysis",
    color: "var(--chart-4)",
  },
  other: {
    label: "Crying inside waiting for a SQL query to finish",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export const timeSpentChartData = [
  {
    activity: timeSpentChartConfig.safari.label,
    visitors: 25,
    fill: timeSpentChartConfig.safari.color,
  },
  {
    activity: timeSpentChartConfig.chrome.label,
    visitors: 45,
    fill: timeSpentChartConfig.chrome.color,
  },
  {
    activity: timeSpentChartConfig.firefox.label,
    visitors: 15,
    fill: timeSpentChartConfig.firefox.color,
  },
  {
    activity: timeSpentChartConfig.edge.label,
    visitors: 10,
    fill: timeSpentChartConfig.edge.color,
  },
  {
    activity: timeSpentChartConfig.other.label,
    visitors: 5,
    fill: timeSpentChartConfig.other.color,
  },
];

export const expectationsChartData = [
  { month: "Data Cleaning", desktop: 200, fill: "var(--chart-2)" },
  { month: "Data Analysis", desktop: 230, fill: "var(--chart-3)" },
  { month: "Creating dashboards", desktop: 350, fill: "var(--chart-4)" },
  {
    month: "Realizing data doesn't exist",
    desktop: 400,
    fill: "var(--chart-5)",
  },
  { month: "Create a workaround", desktop: 480, fill: "var(--chart-1)" },
];

export const expectationsChartConfig = {
  desktop: {
    label: "desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
