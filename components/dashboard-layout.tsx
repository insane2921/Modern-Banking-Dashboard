"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import Sidebar from "@/components/sidebar"
import TopNavbar from "@/components/top-navbar"
import ThemeToggle from "@/components/theme-toggle"
import SecurityBadge from "@/components/security-badge"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const isMobile = useMediaQuery("(max-width: 991px)")

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }

    // Prevent dev tools
    const preventDevTools = (e: KeyboardEvent) => {
      // Prevent F12
      if (e.key === "F12") {
        e.preventDefault()
        return false
      }
      // Prevent Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault()
        return false
      }
      // Prevent Ctrl+Shift+J
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault()
        return false
      }
      // Prevent Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault()
        return false
      }
      // Prevent Ctrl+U
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault()
        return false
      }
    }

    // Prevent right click
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Add event listeners
    document.addEventListener("keydown", preventDevTools)
    document.addEventListener("contextmenu", preventContextMenu)

    // Cleanup
    return () => {
      document.removeEventListener("keydown", preventDevTools)
      document.removeEventListener("contextmenu", preventContextMenu)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 flex`}>
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isMobile ? "ml-0" : sidebarOpen ? "ml-80" : "ml-20"}`}
      >
        <TopNavbar onMenuToggle={toggleSidebar} />

        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>

      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <SecurityBadge />
    </div>
  )
}
