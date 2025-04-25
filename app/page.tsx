import DashboardLayout from "@/components/dashboard-layout"
import StatsOverview from "@/components/stats-overview"
import BalanceChart from "@/components/charts/balance-chart"
import AccountsSection from "@/components/accounts-section"
import CardsSection from "@/components/cards-section"
import TransactionsTable from "@/components/transactions-table"
import IncomeExpenseChart from "@/components/charts/income-expense-chart"
import UpcomingBills from "@/components/upcoming-bills"
import TransferModal from "@/components/modals/transfer-modal"
import { ToastProvider } from "@/components/ui/toast"

export default function DashboardPage() {
  return (
    <ToastProvider>
      <DashboardLayout>
        <div className="grid gap-6">
          <StatsOverview />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BalanceChart />
            </div>
            <div>
              <AccountsSection />
            </div>
          </div>

          <CardsSection />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TransactionsTable />
            </div>
            <div className="space-y-6">
              <IncomeExpenseChart />
              <UpcomingBills />
            </div>
          </div>
        </div>

        <TransferModal />
      </DashboardLayout>
    </ToastProvider>
  )
}
