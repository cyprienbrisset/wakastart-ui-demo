"use client"

import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { LinkCard, LinkCardGrid } from "@/components/docs/link-card"
import { Badge } from "@wakastellar/ui"
import { Moon, Sun, Monitor, Palette } from "lucide-react"

export default function DarkModePage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Dark Mode</h1>
          <Badge variant="outline">Guide</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Implémentez le mode sombre dans votre application avec le système de thèmes intégré.
        </p>
      </div>

      {/* Overview */}
      <Section id="overview" title="Vue d'ensemble">
        <p className="text-muted-foreground mb-4">
          @wakastellar/ui utilise un système de thèmes basé sur les variables CSS, compatible avec le format shadcn/ui.
          Le mode sombre est géré via la classe <code className="px-1.5 py-0.5 rounded bg-muted text-sm">.dark</code> sur l'élément racine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="flex items-center gap-3 p-4 rounded-lg border">
            <Sun className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="font-medium">Light</p>
              <p className="text-sm text-muted-foreground">Mode clair par défaut</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border">
            <Moon className="h-8 w-8 text-blue-500" />
            <div>
              <p className="font-medium">Dark</p>
              <p className="text-sm text-muted-foreground">Mode sombre</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border">
            <Monitor className="h-8 w-8 text-muted-foreground" />
            <div>
              <p className="font-medium">System</p>
              <p className="text-sm text-muted-foreground">Suit les préférences OS</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Configuration */}
      <Section id="configuration" title="Configuration">
        <p className="text-muted-foreground mb-4">
          Le mode sombre est automatiquement configuré lorsque vous utilisez le <code className="px-1.5 py-0.5 rounded bg-muted text-sm">ThemeProvider</code>.
        </p>

        <CodeBlock
          code={`// app/layout.tsx
import { ThemeProvider } from "@wakastellar/ui"

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          defaultTheme="system"
          storageKey="ui-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}
          language="tsx"
        />

        <Callout type="info" title="suppressHydrationWarning">
          L'attribut <code>suppressHydrationWarning</code> est nécessaire pour éviter les erreurs d'hydratation
          car le thème est appliqué côté client après le rendu initial.
        </Callout>
      </Section>

      {/* useTheme Hook */}
      <Section id="use-theme" title="Hook useTheme">
        <p className="text-muted-foreground mb-4">
          Utilisez le hook <code className="px-1.5 py-0.5 rounded bg-muted text-sm">useTheme</code> pour accéder et modifier le mode d'affichage.
        </p>

        <CodeBlock
          code={`"use client"

import { useTheme } from "@wakastellar/ui"
import { Button } from "@wakastellar/ui"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">
        {isDarkMode ? "Mode clair" : "Mode sombre"}
      </span>
    </Button>
  )
}`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-8 mb-4">API du hook useTheme</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Propriété</th>
                <th className="text-left py-3 px-4 font-medium">Type</th>
                <th className="text-left py-3 px-4 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">isDarkMode</td>
                <td className="py-3 px-4 text-muted-foreground">boolean</td>
                <td className="py-3 px-4 text-muted-foreground">État actuel du mode sombre</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">toggleDarkMode</td>
                <td className="py-3 px-4 text-muted-foreground">() =&gt; void</td>
                <td className="py-3 px-4 text-muted-foreground">Bascule entre light et dark</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">setDarkMode</td>
                <td className="py-3 px-4 text-muted-foreground">(dark: boolean) =&gt; void</td>
                <td className="py-3 px-4 text-muted-foreground">Définit explicitement le mode</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">currentTheme</td>
                <td className="py-3 px-4 text-muted-foreground">Theme</td>
                <td className="py-3 px-4 text-muted-foreground">Thème actuellement actif</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">themes</td>
                <td className="py-3 px-4 text-muted-foreground">Theme[]</td>
                <td className="py-3 px-4 text-muted-foreground">Liste des thèmes disponibles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* CSS Variables */}
      <Section id="css-variables" title="Variables CSS">
        <p className="text-muted-foreground mb-4">
          Les couleurs sont définies via des variables CSS au format HSL. Le mode sombre utilise la classe <code className="px-1.5 py-0.5 rounded bg-muted text-sm">.dark</code>.
        </p>

        <CodeBlock
          code={`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 212.7 26.8% 83.9%;
}`}
          language="css"
        />
      </Section>

      {/* ThemeSelector Component */}
      <Section id="theme-selector" title="Composant ThemeSelector">
        <p className="text-muted-foreground mb-4">
          Utilisez le composant <code className="px-1.5 py-0.5 rounded bg-muted text-sm">ThemeSelector</code> pour permettre aux utilisateurs de changer de thème.
        </p>

        <CodeBlock
          code={`import { ThemeSelector } from "@wakastellar/ui"

// Variante compacte (icône seulement)
<ThemeSelector variant="compact" />

// Variante select (dropdown)
<ThemeSelector variant="select" />

// Variante complète (grille de thèmes)
<ThemeSelector variant="full" />`}
          language="tsx"
        />
      </Section>

      {/* Tailwind Classes */}
      <Section id="tailwind" title="Classes Tailwind">
        <p className="text-muted-foreground mb-4">
          Utilisez les classes utilitaires <code className="px-1.5 py-0.5 rounded bg-muted text-sm">dark:</code> de Tailwind pour styliser différemment en mode sombre.
        </p>

        <CodeBlock
          code={`// Exemple de composant avec styles dark mode
<div className="bg-white dark:bg-zinc-900">
  <h1 className="text-zinc-900 dark:text-zinc-100">
    Titre adaptatif
  </h1>
  <p className="text-zinc-600 dark:text-zinc-400">
    Ce texte change de couleur selon le mode.
  </p>
</div>`}
          language="tsx"
        />

        <Callout type="tip" title="Astuce">
          Privilégiez les classes sémantiques comme <code>bg-background</code>, <code>text-foreground</code>, <code>bg-muted</code>
          qui s'adaptent automatiquement au mode grâce aux variables CSS.
        </Callout>
      </Section>

      {/* Best Practices */}
      <Section id="best-practices" title="Bonnes pratiques">
        <div className="space-y-4">
          <div className="p-4 rounded-lg border">
            <h4 className="font-medium mb-2">1. Utilisez les couleurs sémantiques</h4>
            <p className="text-sm text-muted-foreground">
              Préférez <code>text-foreground</code> à <code>text-black dark:text-white</code> pour une meilleure maintenabilité.
            </p>
          </div>
          <div className="p-4 rounded-lg border">
            <h4 className="font-medium mb-2">2. Testez les deux modes</h4>
            <p className="text-sm text-muted-foreground">
              Vérifiez toujours le contraste et la lisibilité dans les deux modes d'affichage.
            </p>
          </div>
          <div className="p-4 rounded-lg border">
            <h4 className="font-medium mb-2">3. Persistez la préférence</h4>
            <p className="text-sm text-muted-foreground">
              Le ThemeProvider sauvegarde automatiquement la préférence dans localStorage.
            </p>
          </div>
          <div className="p-4 rounded-lg border">
            <h4 className="font-medium mb-2">4. Respectez les préférences système</h4>
            <p className="text-sm text-muted-foreground">
              Utilisez <code>defaultTheme="system"</code> pour respecter les préférences de l'utilisateur par défaut.
            </p>
          </div>
        </div>
      </Section>

      {/* Related Links */}
      <Section id="related" title="Voir aussi">
        <LinkCardGrid>
          <LinkCard
            href="/docs/theming"
            title="Thèmes"
            description="Configuration avancée des thèmes et couleurs"
            icon={<Palette className="h-5 w-5" />}
          />
          <LinkCard
            href="/examples/theme-creator"
            title="Theme Creator"
            description="Créez vos propres thèmes visuellement"
            icon={<Palette className="h-5 w-5" />}
          />
        </LinkCardGrid>
      </Section>
    </div>
  )
}
