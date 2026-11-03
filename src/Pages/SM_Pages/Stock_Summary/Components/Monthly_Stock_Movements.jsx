import React from 'react'
import { chart_data } from '@/Data/Mock_Data/Stock_Summary_Data'

import { Bar, BarChart, CartesianGrid, Label, XAxis } from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


function Monthly_Stock_Movements() {
  const chartConfig = {
    delivered: {
      label: "Delivered",
      color: "#FF4500",
    },
    issued: {
      label: "Issued",
      color: "#FF8C00",
    },
    returned: {
      label: "Returned",
      color: "#FF7F50",
    },
    variance: {
      label: "Variance",
      color: "#FFDAB9",
    },
    with_fdos: {
      label: "With FDOs",
      color: "#FFD700",
    }
  }
  return (
    <div className='flex flex-col justify-center p-10 rounded-lg shadow'>
      <div>
        <label className='text-xl font-bold'>Monthly Stock Movement</label>
        <ChartContainer config={chartConfig} className="h-[450px] w-full shadow-lg shadow-orange-100">
          <BarChart accessibilityLayer data={chart_data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="delivered" fill="var(--color-delivered)" radius={4} />
            <Bar dataKey="issued" fill="var(--color-issued)" radius={4} />
            <Bar dataKey="returned" fill="var(--color-returned)" radius={4} />
            <Bar dataKey="variance" fill="var(--color-variance)" radius={4} />
            <Bar dataKey="with_fdos" fill="var(--color-with_fdos)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  )
}

export default Monthly_Stock_Movements