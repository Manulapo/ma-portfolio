import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { barChartConfig, barChartData } from "../../constants/chartConfig";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "../ui/chart";


export function BarChartComponent() {
  return (
    <ChartContainer config={barChartConfig} className="min-h-[150px] w-full">
      <BarChart accessibilityLayer data={barChartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
