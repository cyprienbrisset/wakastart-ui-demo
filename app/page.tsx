"use client"

import Link from "next/link"
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@wakastellar/ui"
import { ArrowRight, Palette, Globe, Table, BarChart3, Accessibility, Zap, Blocks, Component, Gamepad2, ShieldCheck, MessageSquare, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Themes Dynamiques",
    description: "Format shadcn/ui registry-item, dark mode natif, variables CSS personnalisables",
  },
  {
    icon: Globe,
    title: "i18n Integre",
    description: "Support multilingue avec chargement dynamique des traductions JSON",
  },
  {
    icon: Table,
    title: "DataTable Avance",
    description: "TanStack Table v8, virtualisation, tri, filtres, export CSV/Excel",
  },
  {
    icon: BarChart3,
    title: "Charts & Analytics",
    description: "Graphiques interactifs, heatmaps, funnels, treemaps, et plus encore",
  },
  {
    icon: Accessibility,
    title: "Accessible",
    description: "WAI-ARIA compliant via Radix UI Primitives, navigation clavier",
  },
  {
    icon: Zap,
    title: "TypeScript",
    description: "API 100% typee, autocompletion parfaite, erreurs a la compilation",
  },
]

const categories = [
  {
    icon: Component,
    title: "Composants de Base",
    count: 45,
    description: "Buttons, Cards, Inputs, Dialogs, et plus",
    href: "/components",
    color: "text-blue-500",
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    count: 35,
    description: "Achievements, Leaderboards, XP bars, Quests",
    href: "/components",
    color: "text-purple-500",
  },
  {
    icon: Blocks,
    title: "Infrastructure",
    count: 25,
    description: "Pipelines, Server racks, Network topology",
    href: "/components",
    color: "text-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Securite",
    count: 15,
    description: "2FA, Biometrics, Permission matrix",
    href: "/components",
    color: "text-green-500",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    count: 10,
    description: "Chat bubbles, Video calls, Reactions",
    href: "/components",
    color: "text-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Analytics",
    count: 12,
    description: "KPI dashboards, Funnels, Cohorts",
    href: "/components",
    color: "text-cyan-500",
  },
]

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 lg:py-20">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-6 bg-primary/5">
          <span className="text-muted-foreground">Version</span>
          <span className="ml-2 font-semibold text-primary">2.0.0</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          @wakastellar/ui
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          Bibliotheque de composants React professionnels, accessibles et personnalisables.
          Construite sur Radix UI et Tailwind CSS v4.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-10">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">200+</div>
            <div className="text-sm text-muted-foreground">Composants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Blocs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">TypeScript</div>
          </div>
        </div>

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
          <Button variant="outline" size="lg" asChild>
            <Link href="/blocks">
              Voir les blocs
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Fonctionnalites</h2>
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

      {/* Categories Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Categories de Composants</h2>
          <Button variant="ghost" asChild>
            <Link href="/components">
              Voir tout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.title} href={category.href}>
              <Card className="h-full transition-colors hover:bg-accent/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                    <div>
                      <CardTitle className="text-base">{category.title}</CardTitle>
                      <span className="text-xs text-muted-foreground">{category.count} composants</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
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
