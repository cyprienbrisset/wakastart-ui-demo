"use client"

import Link from "next/link"
import { Button } from "@wakastellar/ui"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"

export default function DocsPage() {
  return (
    <article className="max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Introduction</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Bienvenue dans la documentation de @wakastellar/ui, une bibliothèque de composants React professionnels.
        </p>
      </header>

      <Section id="overview" title="Vue d'ensemble">
        <p className="text-muted-foreground mb-4">
          @wakastellar/ui est une bibliothèque de composants React construite sur{" "}
          <strong>Radix UI Primitives</strong> et stylisée avec <strong>Tailwind CSS</strong>.
          Elle offre plus de 85 composants prêts à l'emploi, accessibles et personnalisables.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Composants accessibles (WAI-ARIA compliant)</li>
          <li>Thèmes dynamiques avec dark mode</li>
          <li>Internationalisation intégrée</li>
          <li>TypeScript natif avec types complets</li>
          <li>Compatible SSR (Next.js, Remix)</li>
        </ul>
      </Section>

      <Section id="features" title="Fonctionnalités principales">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">85+ Composants</h3>
            <p className="text-sm text-muted-foreground">
              Forms, Data Display, Charts, Navigation, Feedback et plus encore.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">7 Blocks</h3>
            <p className="text-sm text-muted-foreground">
              Layouts complets prêts à l'emploi : Login, Sidebar, Dashboard.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Theming Avancé</h3>
            <p className="text-sm text-muted-foreground">
              Variables CSS, format registry-item, chargement dynamique.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">i18n Intégré</h3>
            <p className="text-sm text-muted-foreground">
              Support multilingue avec chargement JSON à la volée.
            </p>
          </div>
        </div>
      </Section>

      <Section id="quick-start" title="Démarrage rapide">
        <p className="text-muted-foreground mb-4">
          Installez le package et configurez le provider :
        </p>
        <CodeBlock
          code={`# Installation
pnpm add @wakastellar/ui

# ou avec npm
npm install @wakastellar/ui`}
          language="bash"
        />

        <p className="text-muted-foreground mt-6 mb-4">
          Importez les styles et configurez le WakaProvider :
        </p>
        <CodeBlock
          code={`// app/layout.tsx
import "@wakastellar/ui/dist/ui.css"
import { WakaProvider } from "@wakastellar/ui"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <WakaProvider>
          {children}
        </WakaProvider>
      </body>
    </html>
  )
}`}
          language="tsx"
        />
      </Section>

      <Section id="next-steps" title="Prochaines étapes">
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/docs/installation">
              Guide d'installation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/components">
              Explorer les composants
            </Link>
          </Button>
        </div>
      </Section>
    </article>
  )
}
