"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Button,
} from "@wakastellar/ui"
import {
  Search,
  FileText,
  Layers,
  Box,
  BookOpen,
  Home,
  Moon,
  Sun,
  Palette,
  Settings,
} from "lucide-react"
import { components, categories } from "@/config/components"
import { blocks } from "@/config/blocks"

interface CommandPaletteProps {
  isDarkMode?: boolean
  onToggleDarkMode?: () => void
}

export function CommandPalette({ isDarkMode, onToggleDarkMode }: CommandPaletteProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Keyboard shortcut to open
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  // Group components by category
  const componentsByCategory = categories.reduce((acc, category) => {
    const categoryComponents = components.filter((c) => c.category === category)
    if (categoryComponents.length > 0) {
      acc[category] = categoryComponents
    }
    return acc
  }, {} as Record<string, typeof components>)

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-md bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Rechercher...</span>
        <span className="inline-flex lg:hidden">Rechercher...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Rechercher un composant, block, page..." />
        <CommandList>
          <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>

          {/* Navigation */}
          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/"))}
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Accueil</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/docs"))}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Documentation</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/components"))}
            >
              <Layers className="mr-2 h-4 w-4" />
              <span>Composants</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/blocks"))}
            >
              <Box className="mr-2 h-4 w-4" />
              <span>Blocks</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/examples"))}
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Exemples</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          {/* Actions */}
          <CommandGroup heading="Actions">
            {onToggleDarkMode && (
              <CommandItem onSelect={() => runCommand(() => onToggleDarkMode())}>
                {isDarkMode ? (
                  <Sun className="mr-2 h-4 w-4" />
                ) : (
                  <Moon className="mr-2 h-4 w-4" />
                )}
                <span>{isDarkMode ? "Mode clair" : "Mode sombre"}</span>
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
            )}
          </CommandGroup>

          <CommandSeparator />

          {/* Blocks */}
          <CommandGroup heading="Blocks">
            {blocks.slice(0, 10).map((block) => (
              <CommandItem
                key={block.slug}
                onSelect={() => runCommand(() => router.push(`/blocks/${block.slug}`))}
              >
                <Box className="mr-2 h-4 w-4" />
                <span>{block.name}</span>
              </CommandItem>
            ))}
            {blocks.length > 10 && (
              <CommandItem
                onSelect={() => runCommand(() => router.push("/blocks"))}
              >
                <span className="text-muted-foreground">Voir tous les blocks ({blocks.length})...</span>
              </CommandItem>
            )}
          </CommandGroup>

          <CommandSeparator />

          {/* Components by category */}
          {Object.entries(componentsByCategory).map(([category, categoryComponents]) => (
            <CommandGroup key={category} heading={`Composants - ${category}`}>
              {categoryComponents.slice(0, 5).map((component) => (
                <CommandItem
                  key={component.slug}
                  onSelect={() => runCommand(() => router.push(`/components/${component.slug}`))}
                >
                  <Layers className="mr-2 h-4 w-4" />
                  <span>{component.name}</span>
                </CommandItem>
              ))}
              {categoryComponents.length > 5 && (
                <CommandItem
                  onSelect={() => runCommand(() => router.push(`/components?category=${encodeURIComponent(category)}`))}
                >
                  <span className="text-muted-foreground">Voir plus ({categoryComponents.length - 5})...</span>
                </CommandItem>
              )}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
