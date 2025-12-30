"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Input,
  Badge,
  Button,
} from "@wakastellar/ui"
import { components, categories } from "@/config/components"
import { Search, Grid3X3, List, Layers, Package, X } from "lucide-react"
import { cn } from "@/lib/utils"

// Map des icônes par catégorie
const categoryIcons: Record<string, React.ReactNode> = {
  "Inputs": <Package className="h-4 w-4" />,
  "Display": <Layers className="h-4 w-4" />,
  "Feedback": <Layers className="h-4 w-4" />,
  "Layout": <Grid3X3 className="h-4 w-4" />,
  "Navigation": <List className="h-4 w-4" />,
  "Data Entry": <Package className="h-4 w-4" />,
  "Data Display": <Layers className="h-4 w-4" />,
  "Overlays": <Layers className="h-4 w-4" />,
}

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filtrer les composants
  const filteredComponents = useMemo(() => {
    return components.filter((component) => {
      const matchesSearch =
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || component.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // Grouper par catégorie
  const groupedComponents = useMemo(() => {
    if (selectedCategory) {
      return { [selectedCategory]: filteredComponents }
    }
    return filteredComponents.reduce((acc, component) => {
      const cat = component.category
      if (!acc[cat]) acc[cat] = []
      acc[cat].push(component)
      return acc
    }, {} as Record<string, typeof components>)
  }, [filteredComponents, selectedCategory])

  // Compter par catégorie
  const categoryCounts = useMemo(() => {
    return categories.reduce((acc, cat) => {
      acc[cat] = components.filter((c) => c.category === cat).length
      return acc
    }, {} as Record<string, number>)
  }, [])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory(null)
  }

  const hasActiveFilters = searchQuery || selectedCategory

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Composants</h1>
            <p className="text-muted-foreground mt-1">
              {components.length} composants disponibles dans @wakastellar/ui
            </p>
          </div>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            v0.1.8
          </Badge>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un composant..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <div className="flex border rounded-md">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === "grid" ? "bg-muted" : "hover:bg-muted/50"
                )}
                title="Vue grille"
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === "list" ? "bg-muted" : "hover:bg-muted/50"
                )}
                title="Vue liste"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-3 py-1.5 text-sm rounded-full border transition-colors",
              !selectedCategory
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background hover:bg-muted border-border"
            )}
          >
            Tous ({components.length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              className={cn(
                "px-3 py-1.5 text-sm rounded-full border transition-colors flex items-center gap-1.5",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background hover:bg-muted border-border"
              )}
            >
              {categoryIcons[category]}
              {category} ({categoryCounts[category]})
            </button>
          ))}
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              {filteredComponents.length} résultat{filteredComponents.length > 1 ? "s" : ""}
            </span>
            <button
              onClick={clearFilters}
              className="text-primary hover:underline flex items-center gap-1"
            >
              <X className="h-3 w-3" />
              Effacer les filtres
            </button>
          </div>
        )}
      </header>

      {/* Components Grid/List */}
      {filteredComponents.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-muted/20">
          <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Aucun composant trouvé</h3>
          <p className="text-muted-foreground mb-4">
            Essayez de modifier vos critères de recherche
          </p>
          <Button variant="outline" onClick={clearFilters}>
            Effacer les filtres
          </Button>
        </div>
      ) : (
        <div className="space-y-10">
          {Object.entries(groupedComponents).map(([category, categoryComponents]) => (
            <section key={category}>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-semibold">{category}</h2>
                <Badge variant="outline" className="text-xs">
                  {categoryComponents.length}
                </Badge>
              </div>
              <div
                className={cn(
                  viewMode === "grid"
                    ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    : "space-y-2"
                )}
              >
                {categoryComponents.map((component) => (
                  <Link key={component.slug} href={`/components/${component.slug}`}>
                    {viewMode === "grid" ? (
                      <Card className="h-full transition-all hover:bg-accent/50 hover:shadow-md hover:border-primary/20 group">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-base group-hover:text-primary transition-colors">
                              {component.name}
                            </CardTitle>
                            {component.a11y && component.a11y.length > 0 && (
                              <Badge variant="outline" className="text-[10px] bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
                                A11Y
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="line-clamp-2 text-sm">
                            {component.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ) : (
                      <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 hover:border-primary/20 transition-all group">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="font-medium group-hover:text-primary transition-colors">
                            {component.name}
                          </span>
                          <span className="text-sm text-muted-foreground truncate hidden sm:inline">
                            {component.description}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {component.a11y && component.a11y.length > 0 && (
                            <Badge variant="outline" className="text-[10px] bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
                              A11Y
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {component.category}
                          </Badge>
                        </div>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
