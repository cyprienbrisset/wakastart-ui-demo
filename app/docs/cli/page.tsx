"use client"

import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { PackageManagerTabs } from "@/components/docs/tabs-content"
import { Badge, Card, CardHeader, CardTitle, CardDescription } from "@wakastellar/ui"
import { Terminal, Zap, Settings, Download, Search, List } from "lucide-react"

export default function CLIPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">CLI</h1>
          <Badge variant="default">v2.0.0</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Interface en ligne de commande pour initialiser et gérer vos projets @wakastellar/ui.
        </p>
      </div>

      {/* Overview */}
      <Section id="overview" title="Vue d'ensemble">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-yellow-500 shrink-0" />
                <div>
                  <CardTitle className="text-base">Initialisation rapide</CardTitle>
                  <CardDescription>Configurez votre projet en une commande</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <Download className="h-6 w-6 text-blue-500 shrink-0" />
                <div>
                  <CardTitle className="text-base">Ajout de composants</CardTitle>
                  <CardDescription>Ajoutez des composants individuellement</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <List className="h-6 w-6 text-purple-500 shrink-0" />
                <div>
                  <CardTitle className="text-base">Liste des composants</CardTitle>
                  <CardDescription>Explorez les 200+ composants disponibles</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <Search className="h-6 w-6 text-green-500 shrink-0" />
                <div>
                  <CardTitle className="text-base">Recherche</CardTitle>
                  <CardDescription>Trouvez des composants par nom ou description</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <Settings className="h-6 w-6 text-muted-foreground shrink-0" />
                <div>
                  <CardTitle className="text-base">Configuration</CardTitle>
                  <CardDescription>Personnalisez via components.json</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <Terminal className="h-6 w-6 text-orange-500 shrink-0" />
                <div>
                  <CardTitle className="text-base">Interactif</CardTitle>
                  <CardDescription>Prompts pour guider la configuration</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Installation */}
      <Section id="installation" title="Installation">
        <p className="text-muted-foreground mb-4">
          Le CLI est inclus avec le package @wakastellar/ui. Utilisez npx pour l'exécuter directement ou installez-le globalement.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-4">Via npx (recommandé)</h3>
        <PackageManagerTabs
          npm="npx wakastellar-ui --help"
          pnpm="pnpm dlx wakastellar-ui --help"
          yarn="npx wakastellar-ui --help"
        />

        <h3 className="text-lg font-semibold mt-6 mb-4">Installation globale</h3>
        <PackageManagerTabs
          npm="npm install -g @wakastellar/ui"
          pnpm="pnpm add -g @wakastellar/ui"
          yarn="yarn global add @wakastellar/ui"
        />

        <CodeBlock
          code={`# Après installation globale
wakastellar-ui --help`}
          language="bash"
        />
      </Section>

      {/* Init Command */}
      <Section id="init" title="Commande init">
        <p className="text-muted-foreground mb-4">
          La commande <code className="px-1.5 py-0.5 rounded bg-muted text-sm">init</code> configure votre projet et crée le fichier components.json.
        </p>

        <CodeBlock
          code={`# Initialiser un projet (interactif)
npx wakastellar-ui init

# Utiliser les paramètres par défaut
npx wakastellar-ui init --defaults

# Spécifier un répertoire cible
npx wakastellar-ui init --cwd ./my-app`}
          language="bash"
        />

        <h3 className="text-lg font-semibold mt-6 mb-4">Questions interactives</h3>
        <div className="p-4 rounded-lg border bg-muted/30 font-mono text-sm space-y-2">
          <p className="text-green-500">✔ Projet détecté : Next.js</p>
          <p className="text-muted-foreground">? Répertoire des composants (components/ui)</p>
          <p className="text-muted-foreground">? Chemin de l'utilitaire cn (lib/utils)</p>
          <p className="text-muted-foreground">? Version de Tailwind CSS (v4 / v3)</p>
          <p className="text-muted-foreground">? Chemin du fichier CSS global (app/globals.css)</p>
          <p className="text-green-500">✔ Fichier components.json créé</p>
          <p className="text-green-500">✔ Package @wakastellar/ui installé</p>
        </div>
      </Section>

      {/* Add Command */}
      <Section id="add" title="Commande add">
        <p className="text-muted-foreground mb-4">
          Ajoutez des composants individuels à votre projet. Les dépendances sont automatiquement résolues.
        </p>

        <CodeBlock
          code={`# Ajouter un composant
npx wakastellar-ui add button

# Ajouter plusieurs composants
npx wakastellar-ui add button card input dialog

# Ajouter un composant avancé (avec dépendances)
npx wakastellar-ui add waka-datatable
# → Installe automatiquement: button, input, select, checkbox, badge

# Forcer l'écrasement des fichiers existants
npx wakastellar-ui add button --overwrite`}
          language="bash"
        />

        <Callout type="info" title="Résolution des dépendances">
          Le CLI détecte et installe automatiquement les dépendances internes. Par exemple, ajouter
          <code className="px-1.5 py-0.5 rounded bg-muted text-sm mx-1">waka-modal</code>
          installera aussi <code className="px-1.5 py-0.5 rounded bg-muted text-sm mx-1">button</code> s'il n'est pas déjà présent.
        </Callout>
      </Section>

      {/* List Command */}
      <Section id="list" title="Commande list">
        <p className="text-muted-foreground mb-4">
          Affichez tous les composants disponibles, organisés par catégorie.
        </p>

        <CodeBlock
          code={`# Lister tous les composants
npx wakastellar-ui list

# Lister par type
npx wakastellar-ui list --type ui
npx wakastellar-ui list --type component

# Lister par catégorie
npx wakastellar-ui list --category gamification
npx wakastellar-ui list --category forms`}
          language="bash"
        />

        <h3 className="text-lg font-semibold mt-6 mb-4">Exemple de sortie</h3>
        <div className="p-4 rounded-lg border bg-muted/30 font-mono text-xs sm:text-sm space-y-2 overflow-x-auto">
          <p className="text-primary font-bold">📦 @wakastellar/ui - Composants disponibles</p>
          <p></p>
          <p className="text-blue-500 font-semibold">UI Components (22)</p>
          <p className="text-muted-foreground pl-4">button, card, input, textarea, checkbox, switch...</p>
          <p></p>
          <p className="text-purple-500 font-semibold">Gamification (15)</p>
          <p className="text-muted-foreground pl-4">waka-xp-bar, waka-leaderboard, waka-achievement-unlock...</p>
          <p></p>
          <p className="text-green-500 font-semibold">Forms (8)</p>
          <p className="text-muted-foreground pl-4">waka-datetime-picker, waka-color-picker, waka-file-upload...</p>
          <p></p>
          <p className="text-muted-foreground">Total: 197 composants + 4 blocs</p>
        </div>
      </Section>

      {/* Search Command */}
      <Section id="search" title="Commande search">
        <p className="text-muted-foreground mb-4">
          Recherchez des composants par nom ou description.
        </p>

        <CodeBlock
          code={`# Rechercher par nom
npx wakastellar-ui search button

# Rechercher par fonctionnalité
npx wakastellar-ui search "date picker"
npx wakastellar-ui search chart
npx wakastellar-ui search authentication`}
          language="bash"
        />

        <h3 className="text-lg font-semibold mt-6 mb-4">Exemple de sortie</h3>
        <div className="p-4 rounded-lg border bg-muted/30 font-mono text-xs sm:text-sm space-y-2 overflow-x-auto">
          <p className="text-primary">🔍 Recherche : "button"</p>
          <p></p>
          <p><span className="text-green-500">button</span> <span className="text-muted-foreground">(ui)</span></p>
          <p className="text-muted-foreground pl-4">Bouton avec variantes et tailles</p>
          <p></p>
          <p><span className="text-green-500">waka-haptic-button</span> <span className="text-muted-foreground">(component)</span></p>
          <p className="text-muted-foreground pl-4">Bouton avec retour haptique</p>
          <p></p>
          <p><span className="text-green-500">waka-magnetic-button</span> <span className="text-muted-foreground">(component)</span></p>
          <p className="text-muted-foreground pl-4">Bouton avec effet magnétique au survol</p>
          <p></p>
          <p className="text-muted-foreground">3 résultats trouvés</p>
        </div>
      </Section>

      {/* components.json */}
      <Section id="components-json" title="Configuration components.json">
        <p className="text-muted-foreground mb-4">
          Le fichier <code className="px-1.5 py-0.5 rounded bg-muted text-sm">components.json</code> stocke la configuration de votre projet.
          Il est créé automatiquement par la commande <code className="px-1.5 py-0.5 rounded bg-muted text-sm">init</code>.
        </p>

        <CodeBlock
          code={`{
  "$schema": "https://wakastellar.dev/schema.json",
  "style": "default",
  "tailwind": {
    "version": "v4",
    "css": "app/globals.css"
  },
  "aliases": {
    "components": "@/components/ui",
    "utils": "@/lib/utils"
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
                <td className="py-3 px-4 text-muted-foreground">Style des composants (default)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">tailwind.version</td>
                <td className="py-3 px-4 text-muted-foreground">Version de Tailwind (v3, v4)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">tailwind.css</td>
                <td className="py-3 px-4 text-muted-foreground">Chemin vers le fichier CSS global</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">aliases.components</td>
                <td className="py-3 px-4 text-muted-foreground">Alias d'import pour les composants</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">aliases.utils</td>
                <td className="py-3 px-4 text-muted-foreground">Alias d'import pour les utilitaires (cn)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Alternative: Package complet */}
      <Section id="alternative" title="Alternative : Package complet">
        <p className="text-muted-foreground mb-4">
          Vous pouvez aussi installer le package complet sans utiliser le CLI :
        </p>

        <CodeBlock
          code={`# 1. Installer le package
pnpm add @wakastellar/ui

# 2. Importer les styles dans votre globals.css
# Pour Tailwind v4:
@import "@wakastellar/ui/styles";

# Pour Tailwind v3:
@import "@wakastellar/ui/styles/v3";

# 3. Importer et utiliser les composants
import { Button, Card, Input } from "@wakastellar/ui"`}
          language="bash"
        />

        <Callout type="tip" title="Avantage du package complet">
          Avec l'installation du package complet, vous avez accès à tous les 200+ composants
          sans avoir à les ajouter un par un. Le tree-shaking de votre bundler s'occupe
          d'inclure uniquement les composants que vous utilisez dans le build final.
        </Callout>
      </Section>
    </div>
  )
}
