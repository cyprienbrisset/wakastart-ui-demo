"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  WakaDock,
  useTheme,
  useLanguage,
  ThemeSelector,
  LanguageSelector,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@wakastellar/ui"
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
  Search,
  Globe,
  Palette,
  FileText,
  Layers,
  Box,
} from "lucide-react"
import { components, categories } from "@/config/components"
import { blocks } from "@/config/blocks"

// Navigation items configuration
const navItems = [
  { id: "home", label: "Accueil", href: "/", icon: Home },
  { id: "components", label: "Composants", href: "/components", icon: Component },
  { id: "blocks", label: "Blocs", href: "/blocks", icon: Blocks },
  { id: "docs", label: "Docs", href: "/docs/installation", icon: BookOpen },
]

// Command Palette Hook
function useCommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  const componentsByCategory = React.useMemo(() => {
    return categories.reduce((acc, category) => {
      const categoryComponents = components.filter((c) => c.category === category)
      if (categoryComponents.length > 0) {
        acc[category] = categoryComponents
      }
      return acc
    }, {} as Record<string, typeof components>)
  }, [])

  return {
    open,
    setOpen,
    router,
    isDarkMode,
    toggleDarkMode,
    runCommand,
    componentsByCategory,
  }
}

// Command Palette Dialog
function CommandPaletteDialog() {
  const {
    open,
    setOpen,
    router,
    isDarkMode,
    toggleDarkMode,
    runCommand,
    componentsByCategory,
  } = useCommandPalette()

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Rechercher un composant, block, page..." />
      <CommandList>
        <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Accueil</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/docs"))}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Documentation</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/components"))}>
            <Layers className="mr-2 h-4 w-4" />
            <span>Composants</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/blocks"))}>
            <Box className="mr-2 h-4 w-4" />
            <span>Blocks</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => runCommand(() => toggleDarkMode())}>
            {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
            <span>{isDarkMode ? "Mode clair" : "Mode sombre"}</span>
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Blocks">
          {blocks.slice(0, 8).map((block) => (
            <CommandItem
              key={block.slug}
              onSelect={() => runCommand(() => router.push(`/blocks/${block.slug}`))}
            >
              <Box className="mr-2 h-4 w-4" />
              <span>{block.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        {Object.entries(componentsByCategory).slice(0, 3).map(([category, categoryComponents]) => (
          <CommandGroup key={category} heading={`${category}`}>
            {categoryComponents.slice(0, 4).map((component) => (
              <CommandItem
                key={component.slug}
                onSelect={() => runCommand(() => router.push(`/components/${component.slug}`))}
              >
                <Layers className="mr-2 h-4 w-4" />
                <span>{component.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  )
}

// Mobile Floating Menu Button
function MobileFloatingMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { isDarkMode, toggleDarkMode } = useTheme()
  const { currentLanguage, languages, changeLanguage } = useLanguage()
  const { setOpen: setCommandOpen } = useCommandPalette()

  const handleNavigation = (href: string) => {
    router.push(href)
    setIsOpen(false)
  }

  const currentLang = languages.find((l) => l.code === currentLanguage)

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
        {/* Search */}
        <button
          onClick={() => {
            setIsOpen(false)
            // Trigger command palette via keyboard event
            const event = new KeyboardEvent("keydown", {
              key: "k",
              metaKey: true,
              bubbles: true,
            })
            document.dispatchEvent(event)
          }}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl",
            "bg-background border shadow-lg",
            "hover:bg-accent transition-colors"
          )}
        >
          <Search className="h-5 w-5" />
          <span className="font-medium">Rechercher</span>
          <kbd className="ml-auto text-xs bg-muted px-1.5 py-0.5 rounded">⌘K</kbd>
        </button>

        {/* Language */}
        <Popover>
          <PopoverTrigger asChild>
            <button
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl",
                "bg-background border shadow-lg",
                "hover:bg-accent transition-colors"
              )}
            >
              <Globe className="h-5 w-5" />
              <span className="font-medium">{currentLang?.flagEmoji} {currentLang?.label}</span>
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-48 p-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left",
                  "hover:bg-accent transition-colors",
                  currentLanguage === lang.code && "bg-accent"
                )}
              >
                <span>{lang.flagEmoji}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </PopoverContent>
        </Popover>

        {/* Theme */}
        <button
          onClick={() => toggleDarkMode()}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl",
            "bg-background border shadow-lg",
            "hover:bg-accent transition-colors"
          )}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="font-medium">{isDarkMode ? "Mode clair" : "Mode sombre"}</span>
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
  const { currentLanguage, languages, changeLanguage } = useLanguage()
  const [langPopoverOpen, setLangPopoverOpen] = React.useState(false)
  const [themePopoverOpen, setThemePopoverOpen] = React.useState(false)

  const currentLang = languages.find((l) => l.code === currentLanguage)

  const dockItems = [
    // Search
    {
      id: "search",
      label: "Rechercher (⌘K)",
      icon: <Search className="h-6 w-6" />,
      onClick: () => {
        const event = new KeyboardEvent("keydown", {
          key: "k",
          metaKey: true,
          bubbles: true,
        })
        document.dispatchEvent(event)
      },
      active: false,
    },
    // Navigation
    ...navItems.map((item) => {
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
    }),
    // Theme toggle
    {
      id: "theme",
      label: isDarkMode ? "Mode clair" : "Mode sombre",
      icon: isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />,
      onClick: () => toggleDarkMode(),
      active: false,
    },
    // Language
    {
      id: "language",
      label: `${currentLang?.flagEmoji || "🌐"} ${currentLang?.label || "Langue"}`,
      icon: <span className="text-xl">{currentLang?.flagEmoji || "🌐"}</span>,
      onClick: () => setLangPopoverOpen(true),
      active: false,
    },
  ]

  return (
    <div className="hidden lg:block">
      {/* Language Popover */}
      <Popover open={langPopoverOpen} onOpenChange={setLangPopoverOpen}>
        <PopoverTrigger asChild>
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 pointer-events-none" />
        </PopoverTrigger>
        <PopoverContent
          className="w-48 p-2"
          side="top"
          align="center"
        >
          <div className="text-sm font-medium text-muted-foreground mb-2 px-2">
            Langue
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code)
                setLangPopoverOpen(false)
              }}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left",
                "hover:bg-accent transition-colors",
                currentLanguage === lang.code && "bg-accent"
              )}
            >
              <span>{lang.flagEmoji}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </PopoverContent>
      </Popover>

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
      <CommandPaletteDialog />
      <MobileFloatingMenu />
      <DesktopDock />
    </>
  )
}
