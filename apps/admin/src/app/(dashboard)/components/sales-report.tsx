"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartLegendContent,
  ChartTooltipContent,
} from "@workspace/ui/components/chart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@workspace/ui/components/card";

const chartData = [
  { date: "2024-04-01", sale: 222, order: 150, amt: 2400 },
  { date: "2024-04-02", sale: 97, order: 180, amt: 2210 },
  { date: "2024-04-03", sale: 167, order: 120, amt: 2290 },
  { date: "2024-04-04", sale: 242, order: 260, amt: 4340 },
  { date: "2024-04-05", sale: 373, order: 290, amt: 3200 },
  { date: "2024-04-06", sale: 301, order: 340, amt: 5432 },
  { date: "2024-04-07", sale: 245, order: 180, amt: 6540 },
  { date: "2024-04-08", sale: 409, order: 320, amt: 9865 },
  { date: "2024-04-09", sale: 59, order: 110, amt: 5900 },
  { date: "2024-04-10", sale: 261, order: 190, amt: 7450 },
  { date: "2024-04-11", sale: 327, order: 350, amt: 1320 },
  { date: "2024-04-12", sale: 292, order: 210, amt: 3590 },
  { date: "2024-04-13", sale: 342, order: 380, amt: 890 },
  { date: "2024-04-15", sale: 190, order: 121, amt: 230 },
  { date: "2024-04-16", sale: 178, order: 202, amt: 780 },
  { date: "2024-04-17", sale: 124, order: 102, amt: 1230 },
  { date: "2024-04-18", sale: 347, order: 232, amt: 432 },
  { date: "2024-04-19", sale: 192, order: 323, amt: 780 },
  { date: "2024-04-20", sale: 142, order: 432, amt: 1210 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  sale: {
    label: "Sale",
    color: "oklch(65.34% 0.1226 175.08)",
  },
  order: {
    label: "Order",
    color: "oklch(80.85% 0.149 173.95)",
  },
} satisfies ChartConfig;

export const SalesReport = () => {
  const [timeRange, setTimeRange] = useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="border-border-300 col-span-3 py-6">
      <CardHeader className="flex items-center gap-2 space-y-0 px-4 sm:flex-row">
        <CardTitle>Sales & Order Report</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSale" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sale)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sale)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillOrder" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-order)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-order)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#E6EDFF" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="sale"
              type="natural"
              fill="url(#fillSale)"
              stroke="var(--color-sale)"
              stackId="a"
            />
            <Area
              dataKey="order"
              type="natural"
              fill="url(#fillOrder)"
              stroke="var(--color-order)"
              stackId="a"
            />
            <ChartLegend
              content={<ChartLegendContent />}
              className="absolute -top-[296px] right-0"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
