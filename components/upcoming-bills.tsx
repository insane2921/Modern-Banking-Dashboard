import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Wifi, Zap } from "lucide-react"

const bills = [
  {
    id: 1,
    name: "Rent Payment",
    dueIn: "5 days",
    amount: "₹12,000.00",
    icon: <Home size={16} />,
    iconBg: "bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    id: 2,
    name: "Internet Bill",
    dueIn: "8 days",
    amount: "₹999.00",
    icon: <Wifi size={16} />,
    iconBg: "bg-blue-100 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: 3,
    name: "Electricity Bill",
    dueIn: "12 days",
    amount: "₹1,850.00",
    icon: <Zap size={16} />,
    iconBg: "bg-amber-100 text-amber-500 dark:bg-amber-900/30 dark:text-amber-400",
  },
]

export default function UpcomingBills() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Upcoming Bills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {bills.map((bill, index) => (
          <div
            key={bill.id}
            className={`flex items-center justify-between ${index < bills.length - 1 ? "pb-4 border-b border-gray-200 dark:border-gray-800" : ""}`}
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${bill.iconBg}`}>
                {bill.icon}
              </div>
              <div>
                <div className="font-medium">{bill.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Due in {bill.dueIn}</div>
              </div>
            </div>
            <div className="font-semibold">{bill.amount}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
