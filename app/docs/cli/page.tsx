"use client"

import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { PackageManagerTabs } from "@/components/docs/tabs-content"
import { Badge } from "@wakastellar/ui"
import { Terminal, Zap, Settings, Download } from "lucide-react"

export default function CLIPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">CLI</h1>
          <Badge>Coming Soon</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Interface en ligne de commande pour initialiser et gérer vos projets @wakastellar/ui.
        </p>
      </div>

      {/* Overview */}
      <Section id="overview" title="Vue d'ensemble">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Zap className="h-6 w-6 text-yellow-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Initialisation rapide</p>
              <p className="text-sm text-muted-foreground">Configurez votre projet en une commande</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Download className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Ajout de composants</p>
              <p className="text-sm text-muted-foreground">Ajoutez des composants individuellement</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Settings className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
            <div>
              <p className="font-medium">Configuration</p>
              <p className="text-sm text-muted-foreground">Personnalisez via components.json</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Terminal className="h-6 w-6 text-green-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Interactif</p>
              <p className="text-sm text-muted-foreground">Prompts pour guider la configuration</p>
            </div>
          </div>
        </div>

        <Callout type="info" title="Note">
          Le CLI est actuellement en développement. En attendant, vous pouvez installer la librairie complète
          via npm/pnpm et importer les composants dont vous avez besoin.
        </Callout>
      </Section>

      {/* Installation */}
      <Section id="installation" title="Installation (Preview)">
        <p className="text-muted-foreground mb-4">
          Le CLI sera disponible via npx ou en installation globale.
        </p>

        <PackageManagerTabs
          npm="npx @wakastellar/cli init"
          pnpm="pnpm dlx @wakastellar/cli init"
          yarn="npx @wakastellar/cli init"
        />
      </Section>

      {/* Init Command */}
      <Section id="init" title="Commande init">
        <p className="text-muted-foreground mb-4">
          La commande <code className="px-1.5 py-0.5 rounded bg-muted text-sm">init</code> configure votre projet.
        </p>

        <CodeBlock
          code={`npx @wakastellar/cli init

# Options disponibles
npx @wakastellar/cli init --defaults    # Utilise les paramètres par défaut
npx @wakastellar/cli init --yes         # Répond oui à toutes les questions
npx @wakastellar/cli init --cwd ./app   # Spécifie le répertoire cible`}
          language="bash"
        />

        <h3 className="text-lg font-semibold mt-6 mb-4">Questions interactives</h3>
        <div className="p-4 rounded-lg border bg-muted/30 font-mono text-sm space-y-2">
          <p className="text-muted-foreground">? Which style would you like to use? › Default</p>
          <p className="text-muted-foreground">? Which color would you like to use as base color? › Slate</p>
          <p className="text-muted-foreground">? Where is your global CSS file? › app/globals.css</p>
          <p className="text-muted-foreground">? Would you like to use CSS variables for colors? › Yes</p>
          <p className="text-muted-foreground">? Are you using a src/ directory? › No</p>
          <p className="text-muted-foreground">? Configure the import alias for components? › @/components</p>
          <p className="text-muted-foreground">? Configure the import alias for utils? › @/lib/utils</p>
        </div>
      </Section>

      {/* Add Command */}
      <Section id="add" title="Commande add">
        <p className="text-muted-foreground mb-4">
          Ajoutez des composants individuels à votre projet.
        </p>

        <CodeBlock
          code={`# Ajouter un composant
npx @wakastellar/cli add button

# Ajouter plusieurs composants
npx @wakastellar/cli add button card input

# Ajouter tous les composants d'une catégorie
npx @wakastellar/cli add --all-forms

# Lister les composants disponibles
npx @wakastellar/cli add --list`}
          language="bash"
        />
      </Section>

      {/* components.json */}
      <Section id="components-json" title="Configuration components.json">
        <p className="text-muted-foreground mb-4">
          Le fichier <code className="px-1.5 py-0.5 rounded bg-muted text-sm">components.json</code> stocke la configuration de votre projet.
        </p>

        <CodeBlock
          code={`{
  "$schema": "https://wakastellar.dev/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}`}
          language="json"
        />

        <h3 className="text-lg font-semibold mt-6 mb-4">Options de configuration</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Option</th>
                <th className="text-left py-3 px-4 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">style</td>
                <td className="py-3 px-4 text-muted-foreground">Style des composants (default, new-york)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">rsc</td>
                <td className="py-3 px-4 text-muted-foreground">Support React Server Components</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">tsx</td>
                <td className="py-3 px-4 text-muted-foreground">Utiliser TypeScript (.tsx) ou JavaScript (.jsx)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">tailwind.config</td>
                <td className="py-3 px-4 text-muted-foreground">Chemin vers le fichier de config Tailwind</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">tailwind.css</td>
                <td className="py-3 px-4 text-muted-foreground">Chemin vers le fichier CSS global</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">tailwind.baseColor</td>
                <td className="py-3 px-4 text-muted-foreground">Couleur de base (slate, gray, zinc, neutral, stone)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">aliases</td>
                <td className="py-3 px-4 text-muted-foreground">Alias d'import pour les différents dossiers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Diff Command */}
      <Section id="diff" title="Commande diff">
        <p className="text-muted-foreground mb-4">
          Vérifiez les différences entre vos composants locaux et la dernière version.
        </p>

        <CodeBlock
          code={`# Voir les différences pour un composant
npx @wakastellar/cli diff button

# Voir les différences pour tous les composants
npx @wakastellar/cli diff

# Appliquer les mises à jour
npx @wakastellar/cli diff button --apply`}
          language="bash"
        />
      </Section>

      {/* Current Alternative */}
      <Section id="alternative" title="En attendant le CLI">
        <p className="text-muted-foreground mb-4">
          En attendant la sortie du CLI, vous pouvez utiliser la méthode d'installation standard :
        </p>

        <CodeBlock
          code={`# 1. Installer le package
pnpm add @wakastellar/ui

# 2. Importer les styles dans votre globals.css
# Pour Tailwind v4:
import "@wakastellar/ui/styles"

# Pour Tailwind v3:
import "@wakastellar/ui/styles/v3"

# 3. Importer et utiliser les composants
import { Button, Card, Input } from "@wakastellar/ui"`}
          language="bash"
        />

        <Callout type="tip" title="Avantage">
          Avec l'installation du package complet, vous avez accès à tous les 200+ composants
          sans avoir à les ajouter un par un. Le tree-shaking de votre bundler s'occupe
          d'inclure uniquement les composants que vous utilisez dans le build final.
        </Callout>
      </Section>
    </div>
  )
}
