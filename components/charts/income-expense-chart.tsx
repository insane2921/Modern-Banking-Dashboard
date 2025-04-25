"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

export default function IncomeExpenseChart() {
  const data = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [43500, 18605],
        backgroundColor: ["#10b981", "#f72585"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
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
          label: (context) => "₹" + context.parsed.toLocaleString(),
        },
      },
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Income vs Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Income</div>
            <div className="text-lg font-semibold text-green-500">₹43,500.00</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Expenses</div>
            <div className="text-lg font-semibold text-red-500">₹18,605.00</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
