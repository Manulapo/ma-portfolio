"use client";

import { Legend, Pie, PieChart } from "recharts";

import {
  timeSpentChartConfig,
  timeSpentChartData,
} from "../../constants/chartConfig";
import { CardContent } from "../ui/card";
import { ChartContainer } from "../ui/chart";

export function PieChartTimeSpentComponent({ title }: { title: string }) {
  return (
    <CardContent className="flex-1 pb-0 w-full px-0">
      <div className="absolute top-4 left-4">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ChartContainer
        config={timeSpentChartConfig}
        className="mx-auto w-full py-10 px-0 lg:p-0"
      >
        <PieChart className="w-full h-full overflow-visible">
          {/* <ChartTooltip
            content={<ChartTooltipContent hideLabel indicator="line" />}
          /> */} //TODO fix z-index issue 
          <Pie
            className="w-full"
            data={timeSpentChartData}
            dataKey="visitors"
            nameKey="activity"
          />

          <Legend
            iconSize={5}
            layout="vertical"
            align="left"
            verticalAlign="middle"
          />
        </PieChart>
      </ChartContainer>
    </CardContent>
  );
}
