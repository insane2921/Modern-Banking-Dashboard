"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, ShoppingCart, Building, Utensils, Zap, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"

// Transaction data
const transactions = [
  {
    id: 1,
    name: "Amazon Purchase",
    category: "Shopping",
    description: "Online Shopping",
    date: "Today, 10:45 AM",
    amount: "- ₹1,499.00",
    status: "Completed",
    type: "expense",
    icon: <ShoppingCart size={16} />,
    iconBg: "bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    id: 2,
    name: "Salary Deposit",
    category: "Income",
    description: "ABC Company",
    date: "Yesterday, 9:00 AM",
    amount: "+ ₹35,000.00",
    status: "Completed",
    type: "income",
    icon: <Building size={16} />,
    iconBg: "bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    id: 3,
    name: "Restaurant Payment",
    category: "Food",
    description: "Dining",
    date: "Jan 15, 8:30 PM",
    amount: "- ₹855.00",
    status: "Completed",
    type: "expense",
    icon: <Utensils size={16} />,
    iconBg: "bg-amber-100 text-amber-500 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    id: 4,
    name: "Electricity Bill",
    category: "Bills",
    description: "Utilities",
    date: "Jan 12, 3:20 PM",
    amount: "- ₹1,200.00",
    status: "Completed",
    type: "expense",
    icon: <Zap size={16} />,
    iconBg: "bg-blue-100 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: 5,
    name: "Freelance Payment",
    category: "Income",
    description: "Design Project",
    date: "Jan 10, 2:15 PM",
    amount: "+ ₹8,500.00",
    status: "Completed",
    type: "income",
    icon: <DollarSign size={16} />,
    iconBg: "bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400",
  },
]

export default function TransactionsTable() {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTransactions = transactions.filter((transaction) => {
    // Apply type filter
    if (filter !== "all" && transaction.type !== filter) {
      return false
    }

    // Apply search filter
    if (
      searchTerm &&
      !transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    return true
  })

  return (
    <Card>
      <CardHeader className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 pb-4">
        <CardTitle className="text-base font-medium">Recent Transactions</CardTitle>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-start sm:items-center">
          <div className="relative w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <Input
              type="search"
              placeholder="Search transactions..."
              className="w-full sm:w-[200px] pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-1">
            <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
              All
            </Button>
            <Button variant={filter === "income" ? "default" : "outline"} size="sm" onClick={() => setFilter("income")}>
              Income
            </Button>
            <Button
              variant={filter === "expense" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("expense")}
            >
              Expense
            </Button>
          </div>
          <a href="#" className="text-sm font-medium text-primary dark:text-teal-400 hover:underline">
            View All
          </a>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-4 py-3 text-left">
                  Description
                </th>
                <th className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-4 py-3 text-left">
                  Date
                </th>
                <th className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-4 py-3 text-left">
                  Category
                </th>
                <th className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-4 py-3 text-left">
                  Status
                </th>
                <th className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-4 py-3 text-right">
                  Amount
                </th>
                <th className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-4 py-3 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                            transaction.iconBg,
                          )}
                        >
                          {transaction.icon}
                        </div>
                        <div>
                          <div className="font-medium">{transaction.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{transaction.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{transaction.date}</td>
                    <td className="px-4 py-3 text-sm">{transaction.category}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-500">
                        {transaction.status}
                      </span>
                    </td>
                    <td
                      className={cn(
                        "px-4 py-3 text-sm font-medium text-right",
                        transaction.type === "income" ? "text-green-500" : "text-red-500",
                      )}
                    >
                      {transaction.amount}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
