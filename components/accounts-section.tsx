"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, RefreshCw, FileText } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function AccountsSection() {
  const { toast } = useToast()

  const accounts = [
    {
      id: "checking",
      type: "Checking Account",
      number: "•••• 5678",
      balance: "₹12,495.00",
      status: "Active",
      isPrimary: true,
    },
    {
      id: "savings",
      type: "Savings Account",
      number: "•••• 9012",
      balance: "₹8,750.00",
      status: "Active",
      isPrimary: false,
    },
    {
      id: "investment",
      type: "Investment Account",
      number: "•••• 3456",
      balance: "₹3,650.00",
      status: "Active",
      isPrimary: false,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">My Accounts</CardTitle>
        <a href="#" className="text-sm font-medium text-primary dark:text-teal-400 hover:underline">
          View All
        </a>
      </CardHeader>
      <CardContent className="space-y-4">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </CardContent>
    </Card>
  )
}

interface AccountCardProps {
  account: {
    id: string
    type: string
    number: string
    balance: string
    status: string
    isPrimary: boolean
  }
}

function AccountCard({ account }: AccountCardProps) {
  const [isBalanceHidden, setIsBalanceHidden] = useState(false)
  const { toast } = useToast()

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden)
  }

  const handleTransfer = () => {
    document.getElementById("transferModal")?.classList.add("show")
    document.getElementById("modalBackdrop")?.classList.add("show")
  }

  const handleStatement = () => {
    toast({
      title: "Account Statement",
      description: "Generating account statement...",
    })
  }

  return (
    <div
      className={`p-4 rounded-lg border ${account.isPrimary ? "border-primary dark:border-teal-400" : "border-gray-200 dark:border-slate-700"} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
    >
      {account.isPrimary && (
        <div className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-primary text-white dark:bg-teal-400 dark:text-slate-900 mb-2">
          Primary
        </div>
      )}
      <div className="text-sm text-gray-500 dark:text-slate-400">{account.type}</div>
      <div className="text-sm font-medium mt-1">{account.number}</div>
      <div className="text-xl font-bold mt-1">{isBalanceHidden ? "₹••••••••" : account.balance}</div>
      <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">{account.status}</div>

      <div className="flex items-center space-x-2 mt-3">
        <button
          onClick={toggleBalanceVisibility}
          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-gray-500 dark:text-slate-400 hover:bg-primary/10 hover:text-primary dark:hover:bg-teal-400/10 dark:hover:text-teal-400 transition-colors"
          title={isBalanceHidden ? "Show Balance" : "Hide Balance"}
        >
          {isBalanceHidden ? <Eye size={16} /> : <EyeOff size={16} />}
        </button>
        <button
          onClick={handleTransfer}
          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-gray-500 dark:text-slate-400 hover:bg-primary/10 hover:text-primary dark:hover:bg-teal-400/10 dark:hover:text-teal-400 transition-colors"
          title="Transfer"
        >
          <RefreshCw size={16} />
        </button>
        <button
          onClick={handleStatement}
          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-gray-500 dark:text-slate-400 hover:bg-primary/10 hover:text-primary dark:hover:bg-teal-400/10 dark:hover:text-teal-400 transition-colors"
          title="Statement"
        >
          <FileText size={16} />
        </button>
      </div>
    </div>
  )
}
