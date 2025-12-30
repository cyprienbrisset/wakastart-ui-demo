"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@wakastellar/ui"
import { LayoutDashboard, FormInput, Table2, BarChart3 } from "lucide-react"

const examples = [
  {
    title: "Dashboard",
    description: "Exemple complet de tableau de bord avec statistiques, graphiques et tableaux.",
    href: "/examples/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Formulaires",
    description: "Collection de formulaires : login, inscription, contact, paramètres.",
    href: "/examples/forms",
    icon: FormInput,
  },
  {
    title: "DataTable",
    description: "Tableaux de données avancés avec tri, filtres, pagination et export.",
    href: "/examples/data-table",
    icon: Table2,
  },
  {
    title: "Charts",
    description: "Galerie de graphiques : barres, lignes, aires, camemberts, sparklines.",
    href: "/examples/charts",
    icon: BarChart3,
  },
]

export default function ExamplesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Exemples</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Découvrez des exemples complets et prêts à l'emploi.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {examples.map((example) => (
          <Link key={example.href} href={example.href}>
            <Card className="h-full transition-colors hover:bg-accent/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <example.icon className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>{example.title}</CardTitle>
                    <CardDescription>{example.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
