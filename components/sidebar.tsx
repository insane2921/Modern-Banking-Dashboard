"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Wallet,
  RefreshCw,
  CreditCard,
  Send,
  PiggyBank,
  DollarSign,
  HandCoins,
  User,
  Shield,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      {/* Backdrop for mobile */}
      {open && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />}

      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-white dark:bg-slate-800 shadow-md z-50 transition-all duration-300 flex flex-col",
          collapsed ? "w-20" : "w-80",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex items-center justify-between h-[70px] px-6 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center text-primary dark:text-teal-400 font-semibold">
            {!collapsed && (
              <>
                <span className="text-xl mr-2">🏦</span>
                <span>Global Banking</span>
              </>
            )}
            {collapsed && <span className="text-xl mx-auto">🏦</span>}
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              {collapsed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              )}
            </button>

            <button
              onClick={onClose}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </button>
          </div>
        </div>

        <div
          className={cn(
            "flex items-center px-6 py-4 border-b border-gray-200 dark:border-slate-700",
            collapsed && "justify-center px-2",
          )}
        >
          <div className="relative">
            <img
              src="/placeholder-user.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-primary dark:border-teal-400"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
          </div>

          {!collapsed && (
            <div className="ml-3">
              <h4 className="font-medium">Dibendu Hui</h4>
              <p className="text-sm text-gray-500 dark:text-slate-400">Premium Customer</p>
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <NavSection
            title="Main"
            items={[
              {
                href: "/dashboard",
                label: "Dashboard",
                icon: <Home size={20} />,
                active: pathname === "/dashboard",
                badge: null,
              },
              {
                href: "/accounts",
                label: "My Accounts",
                icon: <Wallet size={20} />,
                active: pathname === "/accounts",
                badge: null,
              },
              {
                href: "/transactions",
                label: "Transactions",
                icon: <RefreshCw size={20} />,
                active: pathname === "/transactions",
                badge: "12",
              },
              {
                href: "/payments",
                label: "Payments",
                icon: <CreditCard size={20} />,
                active: pathname === "/payments",
                badge: null,
              },
            ]}
            collapsed={collapsed}
          />

          <NavSection
            title="Services"
            items={[
              {
                href: "/transfer",
                label: "Transfer Money",
                icon: <Send size={20} />,
                active: pathname === "/transfer",
                badge: null,
              },
              {
                href: "/deposit",
                label: "Deposit",
                icon: <PiggyBank size={20} />,
                active: pathname === "/deposit",
                badge: null,
              },
              {
                href: "/withdraw",
                label: "Withdraw",
                icon: <DollarSign size={20} />,
                active: pathname === "/withdraw",
                badge: null,
              },
              {
                href: "/loans",
                label: "Loans",
                icon: <HandCoins size={20} />,
                active: pathname === "/loans",
                badge: null,
              },
            ]}
            collapsed={collapsed}
          />

          <NavSection
            title="Settings"
            items={[
              {
                href: "/profile",
                label: "Profile",
                icon: <User size={20} />,
                active: pathname === "/profile",
                badge: null,
              },
              {
                href: "/security",
                label: "Security",
                icon: <Shield size={20} />,
                active: pathname === "/security",
                badge: null,
              },
              {
                href: "/notifications",
                label: "Notifications",
                icon: <Bell size={20} />,
                active: pathname === "/notifications",
                badge: "3",
              },
            ]}
            collapsed={collapsed}
          />
        </nav>

        <div className={cn("border-t border-gray-200 dark:border-slate-700 p-4", collapsed && "px-0 py-4")}>
          <FooterLink href="/help" label="Help & Support" icon={<HelpCircle size={20} />} collapsed={collapsed} />
          <FooterLink href="/logout" label="Logout" icon={<LogOut size={20} />} collapsed={collapsed} />
        </div>
      </aside>
    </>
  )
}

interface NavSectionProps {
  title: string
  items: {
    href: string
    label: string
    icon: React.ReactNode
    active: boolean
    badge: string | null
  }[]
  collapsed: boolean
}

function NavSection({ title, items, collapsed }: NavSectionProps) {
  return (
    <div className="mb-6">
      {!collapsed && (
        <h3 className="px-6 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">
          {title}
        </h3>
      )}
      <ul>
        {items.map((item) => (
          <li key={item.href} className="mb-1">
            <Link
              href={item.href}
              className={cn(
                "flex items-center px-6 py-3 text-sm font-medium transition-colors",
                collapsed && "justify-center px-0",
                item.active
                  ? "bg-primary/10 text-primary dark:bg-teal-400/10 dark:text-teal-400 border-l-2 border-primary dark:border-teal-400"
                  : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700/50",
              )}
            >
              <span className={cn("", collapsed && "mx-auto")}>{item.icon}</span>
              {!collapsed && <span className="ml-3">{item.label}</span>}

              {!collapsed && item.badge && (
                <span className="ml-auto flex items-center justify-center w-5 h-5 text-xs font-semibold rounded-full bg-red-500 text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface FooterLinkProps {
  href: string
  label: string
  icon: React.ReactNode
  collapsed: boolean
}

function FooterLink({ href, label, icon, collapsed }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center py-2 text-sm font-medium text-gray-700 dark:text-slate-300 hover:text-primary dark:hover:text-teal-400 transition-colors",
        collapsed ? "justify-center" : "px-2",
      )}
    >
      <span>{icon}</span>
      {!collapsed && <span className="ml-3">{label}</span>}
    </Link>
  )
}
