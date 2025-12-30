"use client"

import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"

export default function ThemingPage() {
  return (
    <article className="max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Theming</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Guide complet pour personnaliser les thèmes de @wakastellar/ui.
        </p>
      </header>

      <Section id="overview" title="Vue d'ensemble">
        <p className="text-muted-foreground mb-4">
          @wakastellar/ui utilise un système de thèmes basé sur les variables CSS.
          Vous pouvez facilement basculer entre les thèmes light/dark ou créer vos propres thèmes personnalisés.
        </p>
      </Section>

      <Section id="built-in-themes" title="Thèmes intégrés">
        <p className="text-muted-foreground mb-4">
          Par défaut, deux thèmes sont disponibles : light et dark.
        </p>
        <CodeBlock
          code={`<WakaProvider
  config={{
    theme: {
      defaultTheme: "light",
      enableSystem: true, // Utilise la préférence système
      themes: [
        { id: "light", label: "Clair", previewColor: "#ffffff" },
        { id: "dark", label: "Sombre", previewColor: "#1a1a1a" },
      ],
    },
  }}
>
  {children}
</WakaProvider>`}
          language="tsx"
        />
      </Section>

      <Section id="theme-selector" title="Sélecteur de thème">
        <p className="text-muted-foreground mb-4">
          Utilisez le composant ThemeSelector pour permettre aux utilisateurs de changer de thème :
        </p>
        <CodeBlock
          code={`import { ThemeSelector } from "@wakastellar/ui"

// Version complète
<ThemeSelector />

// Version compacte (icône seule)
<ThemeSelector variant="compact" />`}
          language="tsx"
        />
      </Section>

      <Section id="custom-themes" title="Thèmes personnalisés">
        <p className="text-muted-foreground mb-4">
          Créez des thèmes personnalisés en utilisant le format <code>registryItem</code> :
        </p>
        <CodeBlock
          code={`const customThemes = [
  {
    id: "light",
    label: "Clair",
    previewColor: "#3b82f6",
  },
  {
    id: "dark",
    label: "Sombre",
    previewColor: "#1e293b",
  },
  {
    id: "ocean",
    label: "Ocean",
    previewColor: "#0ea5e9",
    // CSS personnalisé via registryItem
    registryItem: {
      cssVars: {
        light: {
          "--primary": "199 89% 48%",
          "--primary-foreground": "0 0% 100%",
          "--background": "200 50% 98%",
          "--foreground": "200 50% 10%",
        },
        dark: {
          "--primary": "199 89% 48%",
          "--primary-foreground": "0 0% 100%",
          "--background": "200 50% 5%",
          "--foreground": "200 50% 95%",
        },
      },
    },
  },
]

<WakaProvider config={{ theme: { themes: customThemes } }}>
  {children}
</WakaProvider>`}
          language="tsx"
        />
      </Section>

      <Section id="load-from-json" title="Chargement depuis JSON">
        <p className="text-muted-foreground mb-4">
          Chargez les thèmes dynamiquement depuis un fichier JSON externe :
        </p>
        <CodeBlock
          code={`const themes = [
  {
    id: "corporate",
    label: "Corporate",
    previewColor: "#1e40af",
    // URL vers le fichier JSON du thème
    jsonUrl: "https://cdn.example.com/themes/corporate.json",
  },
]

// Structure du fichier JSON
{
  "cssVars": {
    "light": {
      "--primary": "221 83% 53%",
      "--primary-foreground": "0 0% 100%"
    },
    "dark": {
      "--primary": "221 83% 53%",
      "--primary-foreground": "0 0% 100%"
    }
  }
}`}
          language="tsx"
        />
      </Section>

      <Section id="use-theme-hook" title="Hook useTheme">
        <p className="text-muted-foreground mb-4">
          Accédez au thème actuel et aux fonctions de contrôle avec le hook useTheme :
        </p>
        <CodeBlock
          code={`import { useTheme } from "@wakastellar/ui"

function MyComponent() {
  const {
    theme,           // Thème actuel ("light", "dark", etc.)
    setTheme,        // Changer de thème
    themes,          // Liste des thèmes disponibles
    resolvedTheme,   // Thème résolu (utile avec enableSystem)
  } = useTheme()

  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <button onClick={() => setTheme("dark")}>
        Activer dark mode
      </button>
    </div>
  )
}`}
          language="tsx"
        />
      </Section>

      <Section id="css-variables" title="Variables CSS">
        <p className="text-muted-foreground mb-4">
          Liste des variables CSS utilisées par @wakastellar/ui :
        </p>
        <CodeBlock
          code={`:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;

  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;

  --popover: 0 0% 100%;
  --popover-foreground: 222 47% 11%;

  --primary: 222 47% 11%;
  --primary-foreground: 210 40% 98%;

  --secondary: 210 40% 96%;
  --secondary-foreground: 222 47% 11%;

  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;

  --accent: 210 40% 96%;
  --accent-foreground: 222 47% 11%;

  --destructive: 0 84% 60%;
  --destructive-foreground: 210 40% 98%;

  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 222 47% 11%;

  --radius: 0.5rem;
}`}
          language="css"
        />
      </Section>
    </article>
  )
}
