import type React from "react"
import { Wallet, ArrowDown, ArrowUp, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={<Wallet className="h-5 w-5" />}
        iconBg="bg-primary/10 text-primary dark:bg-teal-400/10 dark:text-teal-400"
        title="Total Balance"
        value="₹24,895.00"
        trend="up"
        trendValue="3.5% from last month"
      />

      <StatCard
        icon={<ArrowDown className="h-5 w-5" />}
        iconBg="bg-green-500/10 text-green-500"
        title="Income"
        value="₹8,350.00"
        trend="up"
        trendValue="7.2% from last month"
      />

      <StatCard
        icon={<ArrowUp className="h-5 w-5" />}
        iconBg="bg-red-500/10 text-red-500"
        title="Expenses"
        value="₹4,120.00"
        trend="down"
        trendValue="2.1% from last month"
      />

      <StatCard
        icon={<RefreshCw className="h-5 w-5" />}
        iconBg="bg-blue-500/10 text-blue-500"
        title="Transactions"
        value="42"
        trend="up"
        trendValue="12% from last month"
      />
    </div>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  iconBg: string
  title: string
  value: string
  trend: "up" | "down"
  trendValue: string
}

function StatCard({ icon, iconBg, title, value, trend, trendValue }: StatCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center p-6">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${iconBg}`}>{icon}</div>
          <div>
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-sm text-gray-500 dark:text-slate-400">{title}</div>
            <div className={`text-xs flex items-center mt-1 ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
              {trend === "up" ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
              <span>{trendValue}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
