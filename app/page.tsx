"use client"

import Link from "next/link"
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@wakastellar/ui"
import { ArrowRight, Palette, Globe, Table, BarChart3, Accessibility, Zap } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Thèmes Dynamiques",
    description: "Format shadcn/ui registry-item, dark mode natif, variables CSS personnalisables",
  },
  {
    icon: Globe,
    title: "i18n Intégré",
    description: "Support multilingue avec chargement dynamique des traductions JSON",
  },
  {
    icon: Table,
    title: "DataTable Avancé",
    description: "TanStack Table v8, virtualisation, tri, filtres, export CSV/Excel",
  },
  {
    icon: BarChart3,
    title: "Charts",
    description: "6 types de graphiques basés sur Recharts : Bar, Line, Area, Pie, Sparkline",
  },
  {
    icon: Accessibility,
    title: "Accessible",
    description: "WAI-ARIA compliant via Radix UI Primitives, navigation clavier",
  },
  {
    icon: Zap,
    title: "TypeScript",
    description: "API 100% typée, autocomplétion parfaite, erreurs à la compilation",
  },
]

const popularComponents = [
  { name: "Button", href: "/components/button", description: "Boutons avec variantes et états" },
  { name: "Card", href: "/components/card", description: "Conteneur flexible pour le contenu" },
  { name: "Dialog", href: "/components/dialog", description: "Modales accessibles" },
  { name: "DataTable", href: "/components/data-table-advanced", description: "Tableaux de données avancés" },
  { name: "DateTimePicker", href: "/components/datetime-picker", description: "Sélecteur de date et heure" },
  { name: "Tabs", href: "/components/tabs", description: "Navigation par onglets" },
]

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 lg:py-20">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-6">
          <span className="text-muted-foreground">Version</span>
          <span className="ml-2 font-semibold">0.1.12</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          @wakastellar/ui
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          Bibliothèque de 85+ composants React professionnels, accessibles et personnalisables.
          Construite sur Radix UI et Tailwind CSS.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/docs/installation">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/components">
              Voir les composants
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Fonctionnalités</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Components Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Composants Populaires</h2>
          <Button variant="ghost" asChild>
            <Link href="/components">
              Voir tout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularComponents.map((component) => (
            <Link key={component.name} href={component.href}>
              <Card className="h-full transition-colors hover:bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-base">{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Installation Section */}
      <section className="rounded-lg border bg-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Installation rapide</h2>
        <div className="bg-muted rounded-md p-4 font-mono text-sm inline-block">
          pnpm add @wakastellar/ui
        </div>
        <p className="text-muted-foreground mt-4">
          Compatible avec npm, yarn et pnpm
        </p>
      </section>
    </div>
  )
}
