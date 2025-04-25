"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"

export default function CardsSection() {
  const { toast } = useToast()
  const [isCreditCardActive, setIsCreditCardActive] = useState(true)
  const [isDebitCardActive, setIsDebitCardActive] = useState(true)

  const handleCreditCardToggle = (checked: boolean) => {
    setIsCreditCardActive(checked)
    toast({
      title: "Credit Card",
      description: checked ? "Credit card has been activated." : "Credit card has been deactivated.",
      variant: checked ? "default" : "destructive",
    })
  }

  const handleDebitCardToggle = (checked: boolean) => {
    setIsDebitCardActive(checked)
    toast({
      title: "Debit Card",
      description: checked ? "Debit card has been activated." : "Debit card has been deactivated.",
      variant: checked ? "default" : "destructive",
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-medium">Credit Card</CardTitle>
          <Switch
            checked={isCreditCardActive}
            onCheckedChange={handleCreditCardToggle}
            aria-label="Toggle credit card"
          />
        </CardHeader>
        <CardContent>
          <div
            className={`bg-gradient-to-r from-primary to-primary-dark dark:from-teal-400 dark:to-teal-600 rounded-xl p-6 text-white transition-opacity duration-300 ${isCreditCardActive ? "opacity-100" : "opacity-50"}`}
          >
            <div className="w-12 h-8 bg-white/20 rounded-md mb-6 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-5 bg-white/30 rounded-sm"></div>
            </div>
            <div className="text-lg tracking-widest mb-4 font-mono">4532 •••• •••• 7895</div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs opacity-80 mb-1">Card Holder</div>
                <div className="text-sm">Dibendu Hui</div>
              </div>
              <div>
                <div className="text-xs opacity-80 mb-1">Expires</div>
                <div className="text-sm">12/25</div>
              </div>
              <div className="text-2xl opacity-80">
                <i className="fab fa-cc-visa"></i>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <div>Available Credit</div>
              <div className="font-medium">₹85,000.00</div>
            </div>
            <div className="flex justify-between">
              <div>Current Balance</div>
              <div className="font-medium">₹15,000.00</div>
            </div>
            <div className="flex justify-between">
              <div>Due Date</div>
              <div className="font-medium">15 Jan 2023</div>
            </div>
            <div className="flex justify-between">
              <div>Minimum Payment</div>
              <div className="font-medium">₹1,500.00</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-medium">Debit Card</CardTitle>
          <Switch checked={isDebitCardActive} onCheckedChange={handleDebitCardToggle} aria-label="Toggle debit card" />
        </CardHeader>
        <CardContent>
          <div
            className={`bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white transition-opacity duration-300 ${isDebitCardActive ? "opacity-100" : "opacity-50"}`}
          >
            <div className="w-12 h-8 bg-white/20 rounded-md mb-6 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-5 bg-white/30 rounded-sm"></div>
            </div>
            <div className="text-lg tracking-widest mb-4 font-mono">6011 •••• •••• 3456</div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs opacity-80 mb-1">Card Holder</div>
                <div className="text-sm">Dibendu Hui</div>
              </div>
              <div>
                <div className="text-xs opacity-80 mb-1">Expires</div>
                <div className="text-sm">09/24</div>
              </div>
              <div className="text-2xl opacity-80">
                <i className="fab fa-cc-mastercard"></i>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <div>Linked Account</div>
              <div className="font-medium">Checking Account (•••• 5678)</div>
            </div>
            <div className="flex justify-between">
              <div>Daily Limit</div>
              <div className="font-medium">₹50,000.00</div>
            </div>
            <div className="flex justify-between">
              <div>ATM Limit</div>
              <div className="font-medium">₹25,000.00</div>
            </div>
            <div className="flex justify-between">
              <div>Status</div>
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-500">
                  Active
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
