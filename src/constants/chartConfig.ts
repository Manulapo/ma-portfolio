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
