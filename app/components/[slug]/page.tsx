"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { use, useState } from "react"
import { getComponentBySlug, components, categories } from "@/config/components"
import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"
import { ComponentShowcase } from "@/components/docs/component-showcase"
import { componentShowcases } from "./showcases"
import { componentExamples } from "./examples"
import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Badge,
  Button,
  Separator,
} from "@wakastellar/ui"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  Hash,
  Accessibility,
  Code2,
  Settings,
  BookOpen,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ComponentPageProps {
  params: Promise<{ slug: string }>
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = use(params)
  const component = getComponentBySlug(slug)
  const [copied, setCopied] = useState(false)

  if (!component) {
    return notFound()
  }

  // Trouver le composant précédent et suivant dans la même catégorie
  const categoryComponents = components.filter((c) => c.category === component.category)
  const currentIndex = categoryComponents.findIndex((c) => c.slug === slug)
  const prevComponent = currentIndex > 0 ? categoryComponents[currentIndex - 1] : null
  const nextComponent = currentIndex < categoryComponents.length - 1 ? categoryComponents[currentIndex + 1] : null

  // Utiliser le nouveau système de showcase si disponible
  const showcase = componentShowcases[slug]
  // Fallback sur l'ancien système
  const legacyExample = componentExamples[slug]

  const importCode = `import { ${component.importPath} } from "@wakastellar/ui"`

  const copyImport = async () => {
    await navigator.clipboard.writeText(importCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Table des matières
  const toc = [
    { id: "import", label: "Import", icon: <Code2 className="h-3.5 w-3.5" /> },
    { id: "usage", label: "Usage", icon: <BookOpen className="h-3.5 w-3.5" /> },
    ...(component.props.length > 0
      ? [{ id: "props", label: "Props", icon: <Settings className="h-3.5 w-3.5" /> }]
      : []),
    ...(component.a11y && component.a11y.length > 0
      ? [{ id: "accessibility", label: "Accessibilité", icon: <Accessibility className="h-3.5 w-3.5" /> }]
      : []),
  ]

  return (
    <div className="flex gap-10">
      {/* Main Content */}
      <article className="flex-1 max-w-4xl min-w-0">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/components" className="hover:text-foreground transition-colors">
            Composants
          </Link>
          <span>/</span>
          <Link
            href={`/components?category=${encodeURIComponent(component.category)}`}
            className="hover:text-foreground transition-colors"
          >
            {component.category}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{component.name}</span>
        </nav>

        {/* Header */}
        <header className="mb-10 pb-6 border-b">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-4xl font-bold tracking-tight">{component.name}</h1>
                <Badge variant="outline" className="text-xs font-normal">
                  {component.category}
                </Badge>
                {component.a11y && component.a11y.length > 0 && (
                  <Badge
                    variant="outline"
                    className="text-xs bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                  >
                    <Accessibility className="h-3 w-3 mr-1" />
                    Accessible
                  </Badge>
                )}
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {component.description}
              </p>
            </div>
          </div>

          {/* Quick Import */}
          <div className="mt-6 flex items-center gap-3 p-3 rounded-lg bg-muted/50 border">
            <code className="flex-1 text-sm font-mono text-muted-foreground">
              {importCode}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyImport}
              className="shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-1 text-green-500" />
                  Copié
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-1" />
                  Copier
                </>
              )}
            </Button>
          </div>
        </header>

        {/* Import Section */}
        <Section id="import" title="Import">
          <CodeBlock code={importCode} language="tsx" />
        </Section>

        {/* Usage Section */}
        <Section id="usage" title="Usage">
          {showcase ? (
            <ComponentShowcase
              title=""
              examples={showcase.examples}
              variants={showcase.variants}
              renderPlayground={showcase.renderPlayground}
              getPlaygroundCode={showcase.getPlaygroundCode}
              showPlayground={!!showcase.variants && showcase.variants.length > 0}
            />
          ) : legacyExample ? (
            <ComponentPreview code={legacyExample.code}>
              {legacyExample.preview}
            </ComponentPreview>
          ) : (
            <div className="rounded-lg border border-dashed p-8 text-center bg-muted/20">
              <Code2 className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
              <p className="text-muted-foreground">
                Exemple à venir pour ce composant.
              </p>
            </div>
          )}
        </Section>

        {/* Props Section */}
        {component.props.length > 0 && (
          <Section id="props" title="Props">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-4">
                {component.props.length} propriété{component.props.length > 1 ? "s" : ""} disponible{component.props.length > 1 ? "s" : ""}
              </p>
              <PropsTable props={component.props} />
            </div>
          </Section>
        )}

        {/* Accessibility Section */}
        {component.a11y && component.a11y.length > 0 && (
          <Section id="accessibility" title="Accessibilité">
            <div className="rounded-lg border p-6 bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-4">
                <Accessibility className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="font-medium text-green-800 dark:text-green-300">
                  Fonctionnalités d'accessibilité
                </span>
              </div>
              <ul className="space-y-3">
                {component.a11y.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm text-green-800 dark:text-green-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        )}

        {/* Navigation */}
        <Separator className="my-10" />
        <nav className="flex items-center justify-between gap-4">
          {prevComponent ? (
            <Link
              href={`/components/${prevComponent.slug}`}
              className="group flex items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 hover:border-primary/20 transition-all flex-1 max-w-xs"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Précédent</div>
                <div className="font-medium truncate group-hover:text-primary transition-colors">
                  {prevComponent.name}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextComponent ? (
            <Link
              href={`/components/${nextComponent.slug}`}
              className="group flex items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 hover:border-primary/20 transition-all flex-1 max-w-xs justify-end text-right"
            >
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Suivant</div>
                <div className="font-medium truncate group-hover:text-primary transition-colors">
                  {nextComponent.name}
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>

      {/* Table of Contents - Sidebar */}
      <aside className="hidden xl:block w-56 shrink-0">
        <div className="sticky top-24 space-y-4">
          <h4 className="text-sm font-semibold">Sur cette page</h4>
          <nav className="space-y-1">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>

          <Separator />

          {/* Related Components */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Dans cette catégorie</h4>
            <nav className="space-y-1">
              {categoryComponents.slice(0, 5).map((c) => (
                <Link
                  key={c.slug}
                  href={`/components/${c.slug}`}
                  className={cn(
                    "block px-3 py-1.5 text-sm rounded-md transition-colors",
                    c.slug === slug
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {c.name}
                </Link>
              ))}
              {categoryComponents.length > 5 && (
                <Link
                  href={`/components?category=${encodeURIComponent(component.category)}`}
                  className="block px-3 py-1.5 text-sm text-primary hover:underline"
                >
                  Voir les {categoryComponents.length - 5} autres...
                </Link>
              )}
            </nav>
          </div>
        </div>
      </aside>
    </div>
  )
}
