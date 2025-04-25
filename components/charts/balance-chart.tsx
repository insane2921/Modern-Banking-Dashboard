"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

// Chart data for different periods
const chartData = {
  week: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [24200, 24350, 24100, 24500, 24700, 24800, 24895],
  },
  month: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    data: [23500, 23900, 24300, 24895],
  },
  year: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    data: [18500, 19200, 18700, 20500, 22000, 23500, 24895, 24895, 24895, 24895, 24895, 24895],
  },
}

export default function BalanceChart() {
  const [period, setPeriod] = useState<"week" | "month" | "year">("week")

  const data = {
    labels: chartData[period].labels,
    datasets: [
      {
        label: "Balance",
        data: chartData[period].data,
        fill: true,
        backgroundColor: "rgba(67, 97, 238, 0.1)",
        borderColor: "#4361ee",
        tension: 0.4,
        borderWidth: 2,
        pointBackgroundColor: "#4361ee",
        pointBorderColor: "#fff",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => "₹" + context.parsed.y.toLocaleString(),
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          callback: (value) => "₹" + value.toLocaleString(),
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Balance Overview</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant={period === "week" ? "default" : "outline"} size="sm" onClick={() => setPeriod("week")}>
            Week
          </Button>
          <Button variant={period === "month" ? "default" : "outline"} size="sm" onClick={() => setPeriod("month")}>
            Month
          </Button>
          <Button variant={period === "year" ? "default" : "outline"} size="sm" onClick={() => setPeriod("year")}>
            Year
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  )
}
