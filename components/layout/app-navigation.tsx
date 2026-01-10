"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { WakaDock, useTheme } from "@wakastellar/ui"
import { cn } from "@/lib/utils"
import {
  Home,
  Component,
  Blocks,
  BookOpen,
  Menu,
  X,
  Terminal,
  Moon,
  Sun,
} from "lucide-react"

// Navigation items configuration
const navItems = [
  { id: "home", label: "Accueil", href: "/", icon: Home },
  { id: "components", label: "Composants", href: "/components", icon: Component },
  { id: "blocks", label: "Blocs", href: "/blocks", icon: Blocks },
  { id: "docs", label: "Documentation", href: "/docs/installation", icon: BookOpen },
  { id: "cli", label: "CLI", href: "/docs/cli", icon: Terminal },
]

// Mobile Floating Menu Button
function MobileFloatingMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useTheme()
  const isDark = isDarkMode

  const handleNavigation = (href: string) => {
    router.push(href)
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 lg:hidden",
          "h-14 w-14 rounded-full",
          "bg-primary text-primary-foreground",
          "shadow-lg shadow-primary/25",
          "flex items-center justify-center",
          "transition-all duration-300",
          isOpen && "rotate-90 bg-destructive"
        )}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Menu Panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 lg:hidden",
          "flex flex-col gap-2",
          "transition-all duration-300 origin-bottom-right",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        )}
      >
        {/* Theme Toggle */}
        <button
          onClick={() => toggleDarkMode()}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl",
            "bg-background border shadow-lg",
            "hover:bg-accent transition-colors"
          )}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="font-medium">{isDark ? "Mode clair" : "Mode sombre"}</span>
        </button>

        {/* Separator */}
        <div className="h-px bg-border mx-2" />

        {/* Navigation Items */}
        {[...navItems].reverse().map((item, index) => {
          const isActive = pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href))
          const Icon = item.icon

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.href)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl",
                "bg-background border shadow-lg",
                "transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-accent"
              )}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}

// Desktop Dock Navigation
function DesktopDock() {
  const pathname = usePathname()
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useTheme()
  const isDark = isDarkMode

  const dockItems = navItems.map((item) => {
    const isActive = pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href))
    const Icon = item.icon

    return {
      id: item.id,
      label: item.label,
      icon: <Icon className="h-6 w-6" />,
      onClick: () => router.push(item.href),
      active: isActive,
    }
  })

  // Add theme toggle
  dockItems.push({
    id: "theme",
    label: isDark ? "Mode clair" : "Mode sombre",
    icon: isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />,
    onClick: () => toggleDarkMode(),
    active: false,
  })

  return (
    <div className="hidden lg:block">
      <WakaDock
        items={dockItems}
        position="bottom"
        size="lg"
        magnification={1.4}
        magnificationDistance={120}
        showLabels={true}
        fixed={true}
        className="border-border/50"
      />
    </div>
  )
}

// Main Navigation Component
export function AppNavigation() {
  return (
    <>
      <MobileFloatingMenu />
      <DesktopDock />
    </>
  )
}
