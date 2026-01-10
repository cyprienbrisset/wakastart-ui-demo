"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  Badge,
  Button,
} from "@wakastellar/ui"
import { blocks, blockCategories, type BlockCategory } from "@/config/blocks"
import {
  Search,
  Grid3X3,
  List,
  Layers,
  LayoutDashboard,
  LogIn,
  Navigation,
  Database,
  Megaphone,
  MessageCircle,
  Wrench,
  ShoppingCart,
  Gamepad2,
  Server,
  X,
  ChevronRight,
  Check,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Map des icônes par catégorie
const categoryIcons: Record<BlockCategory, React.ReactNode> = {
  Layout: <LayoutDashboard className="h-4 w-4" />,
  Authentication: <LogIn className="h-4 w-4" />,
  Navigation: <Navigation className="h-4 w-4" />,
  "Data Management": <Database className="h-4 w-4" />,
  Marketing: <Megaphone className="h-4 w-4" />,
  Communication: <MessageCircle className="h-4 w-4" />,
  Utilities: <Wrench className="h-4 w-4" />,
  "E-commerce": <ShoppingCart className="h-4 w-4" />,
  Gaming: <Gamepad2 className="h-4 w-4" />,
  DevOps: <Server className="h-4 w-4" />,
}

export default function BlocksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<BlockCategory | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filtrer les blocks
  const filteredBlocks = useMemo(() => {
    return blocks.filter((block) => {
      const matchesSearch =
        block.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        block.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        block.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = !selectedCategory || block.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // Grouper par catégorie
  const groupedBlocks = useMemo(() => {
    if (selectedCategory) {
      return { [selectedCategory]: filteredBlocks }
    }
    return filteredBlocks.reduce(
      (acc, block) => {
        const cat = block.category
        if (!acc[cat]) acc[cat] = []
        acc[cat].push(block)
        return acc
      },
      {} as Record<string, typeof blocks>
    )
  }, [filteredBlocks, selectedCategory])

  // Compter par catégorie
  const categoryCounts = useMemo(() => {
    return blockCategories.reduce(
      (acc, cat) => {
        acc[cat.id] = blocks.filter((b) => b.category === cat.id).length
        return acc
      },
      {} as Record<string, number>
    )
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
            <h1 className="text-3xl font-bold tracking-tight">Blocks</h1>
            <p className="text-muted-foreground mt-1">
              {blocks.length} composants de haut niveau prêts à l'emploi
            </p>
          </div>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            v0.1.8
          </Badge>
        </div>

        <p className="text-lg text-muted-foreground max-w-3xl">
          Les blocks sont des composants complets qui combinent plusieurs éléments UI pour créer
          des pages ou sections entières. Parfait pour démarrer rapidement un projet.
        </p>

        {/* Search and View Toggle */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un block..."
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
            Tous ({blocks.length})
          </button>
          {blockCategories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                setSelectedCategory(selectedCategory === category.id ? null : category.id)
              }
              className={cn(
                "px-3 py-1.5 text-sm rounded-full border transition-colors flex items-center gap-1.5",
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background hover:bg-muted border-border"
              )}
            >
              {categoryIcons[category.id]}
              {category.label} ({categoryCounts[category.id]})
            </button>
          ))}
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              {filteredBlocks.length} résultat{filteredBlocks.length > 1 ? "s" : ""}
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

      {/* Blocks Grid/List */}
      {filteredBlocks.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-muted/20">
          <Layers className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Aucun block trouvé</h3>
          <p className="text-muted-foreground mb-4">
            Essayez de modifier vos critères de recherche
          </p>
          <Button variant="outline" onClick={clearFilters}>
            Effacer les filtres
          </Button>
        </div>
      ) : (
        <div className="space-y-10">
          {Object.entries(groupedBlocks).map(([category, categoryBlocks]) => {
            const categoryInfo = blockCategories.find((c) => c.id === category)
            return (
              <section key={category}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    {categoryIcons[category as BlockCategory]}
                    <h2 className="text-xl font-semibold">{categoryInfo?.label || category}</h2>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {categoryBlocks.length}
                  </Badge>
                  {categoryInfo && (
                    <span className="text-sm text-muted-foreground hidden sm:inline">
                      - {categoryInfo.description}
                    </span>
                  )}
                </div>

                <div
                  className={cn(
                    viewMode === "grid"
                      ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      : "space-y-3"
                  )}
                >
                  {categoryBlocks.map((block) => (
                    <Link key={block.slug} href={`/blocks/${block.slug}`}>
                      {viewMode === "grid" ? (
                        <Card className="h-full transition-all hover:bg-accent/50 hover:shadow-md hover:border-primary/20 group">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between gap-2">
                              <CardTitle className="text-base group-hover:text-primary transition-colors">
                                {block.name}
                              </CardTitle>
                              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                            </div>
                            <CardDescription className="line-clamp-2 text-sm">
                              {block.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="space-y-2">
                              <p className="text-xs font-medium text-muted-foreground">
                                Fonctionnalités principales :
                              </p>
                              <ul className="space-y-1">
                                {block.features.slice(0, 3).map((feature, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-xs text-muted-foreground"
                                  >
                                    <Check className="h-3 w-3 mt-0.5 text-green-500 shrink-0" />
                                    <span className="line-clamp-1">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              {block.features.length > 3 && (
                                <p className="text-xs text-primary">
                                  +{block.features.length - 3} autres fonctionnalités
                                </p>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ) : (
                        <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 hover:border-primary/20 transition-all group">
                          <div className="flex items-center gap-4 min-w-0 flex-1">
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium group-hover:text-primary transition-colors">
                                  {block.name}
                                </span>
                                <Badge variant="secondary" className="text-xs">
                                  {block.features.length} features
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground truncate mt-0.5">
                                {block.description}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}
