"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export default function TransferModal() {
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)
  const [fromAccount, setFromAccount] = useState("")
  const [toAccountType, setToAccountType] = useState("")
  const [contact, setContact] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [availableBalance, setAvailableBalance] = useState("₹0.00")

  useEffect(() => {
    // Add event listeners to modal elements
    const modal = document.getElementById("transferModal")
    const backdrop = document.getElementById("modalBackdrop")
    const closeButtons = document.querySelectorAll("[data-dismiss='modal']")

    const openModal = () => setIsOpen(true)
    const closeModal = () => {
      setIsOpen(false)
      resetForm()
    }

    if (modal) {
      // Custom event listener for opening the modal
      modal.addEventListener("openModal", openModal)
    }

    if (backdrop) {
      backdrop.addEventListener("click", closeModal)
    }

    closeButtons.forEach((button) => {
      button.addEventListener("click", closeModal)
    })

    return () => {
      if (modal) {
        modal.removeEventListener("openModal", openModal)
      }
      if (backdrop) {
        backdrop.removeEventListener("click", closeModal)
      }
      closeButtons.forEach((button) => {
        button.removeEventListener("click", closeModal)
      })
    }
  }, [])

  const resetForm = () => {
    setFromAccount("")
    setToAccountType("")
    setContact("")
    setAccountNumber("")
    setAmount("")
    setDescription("")
    setAvailableBalance("₹0.00")
  }

  const handleFromAccountChange = (value: string) => {
    setFromAccount(value)

    // Update available balance based on selected account
    if (value === "checking") {
      setAvailableBalance("₹12,495.00")
    } else if (value === "savings") {
      setAvailableBalance("₹8,750.00")
    } else if (value === "investment") {
      setAvailableBalance("₹3,650.00")
    } else {
      setAvailableBalance("₹0.00")
    }
  }

  const handleToAccountTypeChange = (value: string) => {
    setToAccountType(value)
  }

  const handleTransfer = () => {
    // Validate form
    if (!fromAccount || !toAccountType || !amount) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Validate to account selection
    if (toAccountType === "contact" && !contact) {
      toast({
        title: "Error",
        description: "Please select a contact.",
        variant: "destructive",
      })
      return
    }

    if (toAccountType === "external" && !accountNumber) {
      toast({
        title: "Error",
        description: "Please enter an account number.",
        variant: "destructive",
      })
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsOpen(false)
      resetForm()
      toast({
        title: "Transfer Successful",
        description: `₹${amount} has been transferred successfully.`,
      })
    }, 1000)
  }

  return (
    <>
      {/* Modal Backdrop */}
      <div
        id="modalBackdrop"
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Transfer Modal */}
      <div
        id="transferModal"
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-300 scale-100">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold">Transfer Money</h3>
            <button
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              data-dismiss="modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>

          <div className="p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fromAccount">From Account</Label>
                <Select value={fromAccount} onValueChange={handleFromAccountChange}>
                  <SelectTrigger id="fromAccount">
                    <SelectValue placeholder="Select Account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checking">Checking Account (•••• 5678) - ₹12,495.00</SelectItem>
                    <SelectItem value="savings">Savings Account (•••• 9012) - ₹8,750.00</SelectItem>
                    <SelectItem value="investment">Investment Account (•••• 3456) - ₹3,650.00</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="toAccountType">To Account</Label>
                <Select value={toAccountType} onValueChange={handleToAccountTypeChange}>
                  <SelectTrigger id="toAccountType">
                    <SelectValue placeholder="Select Account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="internal">My Other Account</SelectItem>
                    <SelectItem value="external">External Account</SelectItem>
                    <SelectItem value="contact">Saved Contact</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {toAccountType === "contact" && (
                <div className="space-y-2">
                  <Label htmlFor="contact">Select Contact</Label>
                  <Select value={contact} onValueChange={setContact}>
                    <SelectTrigger id="contact">
                      <SelectValue placeholder="Select Contact" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contact1">Jane Smith</SelectItem>
                      <SelectItem value="contact2">Robert Johnson</SelectItem>
                      <SelectItem value="contact3">Emily Davis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {toAccountType === "external" && (
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input
                    id="accountNumber"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="Enter account number"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Available balance: <span>{availableBalance}</span>
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 p-4 border-t border-gray-200 dark:border-slate-700">
            <Button variant="outline" data-dismiss="modal">
              Cancel
            </Button>
            <Button onClick={handleTransfer}>Transfer</Button>
          </div>
        </div>
      </div>
    </>
  )
}
