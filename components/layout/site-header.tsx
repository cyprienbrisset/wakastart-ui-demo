"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Button,
  ThemeSelector,
  LanguageSelector,
  useLanguage,
  useTheme,
} from "@wakastellar/ui"
import { Menu, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@wakastellar/ui"
import { SidebarNav } from "./sidebar-nav"
import { CommandPalette } from "./command-palette"

const mainNav = [
  { title: "Documentation", href: "/docs" },
  { title: "Composants", href: "/components" },
  { title: "Blocks", href: "/blocks" },
  { title: "Exemples", href: "/examples" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { currentLanguage, languages, changeLanguage } = useLanguage()
  const { isDarkMode, toggleDarkMode } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 md:px-6 lg:px-8">
        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SidebarNav mobile onNavigate={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <span className="font-bold text-xl">@wakastellar/ui</span>
        </Link>

        {/* Main nav - desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith(item.href)
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right side */}
        <div className="flex items-center space-x-2">
          {/* Command Palette - Search */}
          <CommandPalette
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
          />
          {/* Dark/Light mode toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            title={isDarkMode ? "Mode clair" : "Mode sombre"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">
              {isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
            </span>
          </Button>

          {/* Theme selector with all themes */}
          <ThemeSelector variant="compact" />

          {/* Language selector - flag only */}
          <LanguageSelector
            languages={languages}
            value={currentLanguage}
            onChange={changeLanguage}
            variant="minimal"
            showLabels={false}
          />
        </div>
      </div>
    </header>
  )
}
