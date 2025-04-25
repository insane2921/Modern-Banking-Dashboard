"use client"

import { Shield } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function SecurityBadge() {
  const { toast } = useToast()

  const handleClick = () => {
    toast({
      title: "Secure Connection",
      description: "Your connection to Global Banking is secure and encrypted.",
    })
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 left-8 z-50 hidden md:flex items-center bg-white dark:bg-slate-800 rounded-lg shadow-lg px-4 py-3 hover:-translate-y-1 transition-transform duration-200"
    >
      <Shield className="h-5 w-5 text-green-500 mr-2" />
      <div>
        <div className="text-sm font-medium">Secure Connection</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">SSL Encrypted</div>
      </div>
    </button>
  )
}
