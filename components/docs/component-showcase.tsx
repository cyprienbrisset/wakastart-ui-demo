"use client"

import { useState, ReactNode } from "react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Label,
  Badge,
  Separator,
  Card,
} from "@wakastellar/ui"
import { CodeBlock } from "./code-block"
import { cn } from "@/lib/utils"
import { Copy, Check, Code2, Eye, Settings2, Maximize2, Minimize2, Moon, Sun } from "lucide-react"

export interface VariantOption {
  name: string
  values: string[]
  default: string
}

export interface ShowcaseExample {
  title: string
  description?: string
  preview: ReactNode
  code: string
}

export interface ComponentShowcaseProps {
  /** Titre du composant */
  title: string
  /** Description du composant */
  description?: string
  /** Exemples de base - preview interactive avec code */
  examples: ShowcaseExample[]
  /** Options de variantes pour le playground */
  variants?: VariantOption[]
  /** Rendu dynamique basé sur les variantes sélectionnées */
  renderPlayground?: (variants: Record<string, string>) => ReactNode
  /** Code dynamique basé sur les variantes */
  getPlaygroundCode?: (variants: Record<string, string>) => string
  /** Afficher le playground interactif */
  showPlayground?: boolean
  /** Classes CSS additionnelles */
  className?: string
}

export function ComponentShowcase({
  title,
  description,
  examples,
  variants = [],
  renderPlayground,
  getPlaygroundCode,
  showPlayground = true,
  className,
}: ComponentShowcaseProps) {
  const [activeTab, setActiveTab] = useState("examples")
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {}
    variants.forEach((v) => {
      initial[v.name] = v.default
    })
    return initial
  })
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDarkPreview, setIsDarkPreview] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleVariantChange = (name: string, value: string) => {
    setSelectedVariants((prev) => ({ ...prev, [name]: value }))
  }

  const copyToClipboard = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className={cn("space-y-8", className)}>
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Badge variant="outline" className="text-xs">
            {examples.length} exemple{examples.length > 1 ? "s" : ""}
          </Badge>
        </div>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>

      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="examples" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Exemples
          </TabsTrigger>
          {showPlayground && variants.length > 0 && renderPlayground && (
            <TabsTrigger value="playground" className="flex items-center gap-2">
              <Settings2 className="h-4 w-4" />
              Playground
            </TabsTrigger>
          )}
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="mt-6 space-y-8">
          {examples.map((example, index) => (
            <div key={index} className="space-y-4">
              {/* Example Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{example.title}</h3>
                  {example.description && (
                    <p className="text-sm text-muted-foreground">
                      {example.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Preview Card */}
              <Card className="overflow-hidden">
                {/* Preview Toolbar */}
                <div className="flex items-center justify-between border-b px-4 py-2 bg-muted/30">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <Separator orientation="vertical" className="h-4 mx-2" />
                    <span className="text-xs text-muted-foreground font-mono">
                      preview
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsDarkPreview(!isDarkPreview)}
                      className="p-1.5 hover:bg-muted rounded-md transition-colors"
                      title={isDarkPreview ? "Mode clair" : "Mode sombre"}
                    >
                      {isDarkPreview ? (
                        <Sun className="h-4 w-4" />
                      ) : (
                        <Moon className="h-4 w-4" />
                      )}
                    </button>
                    <button
                      onClick={() => copyToClipboard(example.code, index)}
                      className="p-1.5 hover:bg-muted rounded-md transition-colors"
                      title="Copier le code"
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Preview Content */}
                <div
                  className={cn(
                    "flex items-center justify-center p-8 min-h-[200px] transition-colors",
                    isDarkPreview ? "bg-zinc-950 dark" : "bg-background"
                  )}
                >
                  <div className={isDarkPreview ? "dark" : ""}>
                    {example.preview}
                  </div>
                </div>

                {/* Code Section */}
                <div className="border-t">
                  <details className="group">
                    <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-muted/50 transition-colors">
                      <Code2 className="h-4 w-4" />
                      <span className="text-sm font-medium">Voir le code</span>
                      <svg
                        className="h-4 w-4 ml-auto transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="border-t">
                      <CodeBlock code={example.code} language="tsx" />
                    </div>
                  </details>
                </div>
              </Card>
            </div>
          ))}
        </TabsContent>

        {/* Playground Tab */}
        {showPlayground && variants.length > 0 && renderPlayground && (
          <TabsContent value="playground" className="mt-6">
            <Card className="overflow-hidden">
              {/* Playground Toolbar */}
              <div className="flex items-center justify-between border-b px-4 py-3 bg-muted/30">
                <div className="flex items-center gap-2">
                  <Settings2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Playground interactif</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1.5 hover:bg-muted rounded-md transition-colors"
                    title={isExpanded ? "Réduire" : "Agrandir"}
                  >
                    {isExpanded ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className={cn(
                "grid gap-0",
                isExpanded ? "grid-cols-1" : "lg:grid-cols-[1fr_300px]"
              )}>
                {/* Preview Area */}
                <div
                  className={cn(
                    "flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r",
                    isExpanded ? "min-h-[400px]" : "min-h-[300px]",
                    isDarkPreview ? "bg-zinc-950 dark" : "bg-background"
                  )}
                >
                  <div className={isDarkPreview ? "dark" : ""}>
                    {renderPlayground(selectedVariants)}
                  </div>
                </div>

                {/* Controls Panel */}
                <div className={cn(
                  "p-4 bg-muted/20 space-y-6",
                  isExpanded && "border-t"
                )}>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Contrôles</h4>
                    <p className="text-xs text-muted-foreground">
                      Modifiez les props pour voir le résultat
                    </p>
                  </div>

                  <Separator />

                  {/* Variant Controls */}
                  <div className="space-y-4">
                    {variants.map((variant) => (
                      <div key={variant.name} className="space-y-2">
                        <Label className="text-sm font-medium capitalize">
                          {variant.name}
                        </Label>
                        {variant.values.length <= 4 ? (
                          // Boutons pour peu de valeurs
                          <div className="flex flex-wrap gap-1">
                            {variant.values.map((value) => (
                              <button
                                key={value}
                                onClick={() => handleVariantChange(variant.name, value)}
                                className={cn(
                                  "px-3 py-1.5 text-xs rounded-md border transition-colors",
                                  selectedVariants[variant.name] === value
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-background hover:bg-muted"
                                )}
                              >
                                {value}
                              </button>
                            ))}
                          </div>
                        ) : (
                          // Select pour beaucoup de valeurs
                          <Select
                            value={selectedVariants[variant.name]}
                            onValueChange={(value) => handleVariantChange(variant.name, value)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {variant.values.map((value) => (
                                <SelectItem key={value} value={value}>
                                  {value}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Thème sombre</Label>
                    <Switch
                      checked={isDarkPreview}
                      onCheckedChange={setIsDarkPreview}
                    />
                  </div>
                </div>
              </div>

              {/* Generated Code */}
              {getPlaygroundCode && (
                <div className="border-t">
                  <details className="group" open>
                    <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-muted/50 transition-colors">
                      <Code2 className="h-4 w-4" />
                      <span className="text-sm font-medium">Code généré</span>
                      <svg
                        className="h-4 w-4 ml-auto transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="border-t">
                      <CodeBlock
                        code={getPlaygroundCode(selectedVariants)}
                        language="tsx"
                      />
                    </div>
                  </details>
                </div>
              )}
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}

// Helper pour créer rapidement des exemples
export function createExample(
  title: string,
  preview: ReactNode,
  code: string,
  description?: string
): ShowcaseExample {
  return { title, preview, code, description }
}
