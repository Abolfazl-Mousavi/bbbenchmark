"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { stringToColor } from "@/lib/utils/createUniqueColorBasedOnString";
import { calculateRealStorage } from "@/lib/utils";

export const description = "A donut chart with games";

const chartData = [
  { game: "Genshin Impact", StorageReq: 85},
  { game: "Zenelss Zone Zero", StorageReq: 65 },
  { game: "Elden Ring", StorageReq: 60 },
  { game: "Honkai Star Rail", StorageReq: 60 },
  { game: "DOTA 2", StorageReq: 60 },
  { game: "VALORANT", StorageReq: 30 },
  { game: "MinceCraft", StorageReq: 4 },
  { game: "OSU", StorageReq: 7 },
  { game: "Arknights", StorageReq: 20 },
  { game: "Arknights:Endfield", StorageReq: 40 },
  { game: "Fortnite", StorageReq: 26 },
  { game: "XDefient", StorageReq: 35 },
  { game: "GTA 5", StorageReq: 72 },
  { game: "Deadlock", StorageReq: 20 },
  { game: "Compelete and Delete", StorageReq: 150 },
];

const chartConfig = {
  visitors: {
    label: "Total (GB)",
  },
  Genshin_Impact: {
    label: "Genshin Impact ",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function StoragePieChart() {
  const addFreeStorageToChartData = () => {
    let freeSpace = chartData.reduce(
      (accumulator, currentValue) => accumulator - currentValue.StorageReq,
      calculateRealStorage(1, "TB"));
    return {game:"Free Space" , StorageReq:freeSpace , fill:"white"}
  };
  const totalStorage = React.useMemo(() => {
    return calculateRealStorage(1, "TB");
  }, []);
  React.useEffect(() => {
    chartData.forEach(item => {
      item.fill = stringToColor(item.game);
  });
    chartData.push(addFreeStorageToChartData())
  }, []);

  return (
    <Card className="flex flex-col bg-transparent">
      <CardHeader className="items-center pb-0">
        <CardTitle>Games & Free Storage</CardTitle>
        <CardDescription>Games you have installed</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="StorageReq"
              nameKey="game"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalStorage.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total (GB)
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
