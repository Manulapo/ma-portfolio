"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis
} from "recharts";

import { CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import {
  expectationsChartConfig,
  expectationsChartData
} from "../../constants/chartConfig";

export function ExpectationsDAtaAnalysisChart({ title }: { title: string }) {
  return (
    <CardContent className="flex-1 pb-0 w-full px-0">
      <div className="absolute top-5 right-5">
        <h3 className="text-lg font-bold max-w-60 text-right leading-4.5">{title}</h3>
      </div>
      <ChartContainer config={expectationsChartConfig}>
        <BarChart
          accessibilityLayer
          data={expectationsChartData}
          layout="vertical"
          margin={{
            right: 16,
          }}
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            hide
          />
          <XAxis dataKey="desktop" type="number" hide />
          <Bar
            dataKey="desktop"
            layout="vertical"
            radius={4}
            fill={expectationsChartConfig.desktop.color}
          >
            <LabelList
              dataKey="month"
              position="insideLeft"
              offset={8}
              fontSize={13}
              fill="white"
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </CardContent>
  );
}
