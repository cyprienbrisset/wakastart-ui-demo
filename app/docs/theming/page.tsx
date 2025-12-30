"use client"

import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"

export default function ThemingPage() {
  return (
    <article className="w-full">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Theming</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Guide complet pour personnaliser les thèmes de @wakastellar/ui.
        </p>
      </header>

      <Section id="overview" title="Vue d'ensemble">
        <p className="text-muted-foreground mb-4">
          @wakastellar/ui utilise un système de thèmes basé sur les variables CSS
          et compatible avec le format <strong>shadcn/ui registry-item</strong>.
          Vous pouvez basculer entre les thèmes light/dark, créer vos propres thèmes
          personnalisés ou les charger dynamiquement depuis un fichier JSON.
        </p>
      </Section>

      <Section id="configuration" title="Configuration de base">
        <p className="text-muted-foreground mb-4">
          Configurez les thèmes dans le WakaProvider :
        </p>
        <CodeBlock
          code={`import { WakaProvider } from "@wakastellar/ui"

<WakaProvider
  config={{
    theme: {
      defaultTheme: "light",
      enableSystem: true, // Utilise la préférence système pour dark mode
      themes: [
        { id: "light", label: "Clair", previewColor: "#ffffff" },
        { id: "dark", label: "Sombre", previewColor: "#1a1a1a" },
      ],
    },
    language: {
      defaultLanguage: "fr",
      supportedLanguages: ["fr"],
      languages: [{ code: "fr", label: "Français" }],
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

// Version complète avec dropdown
<ThemeSelector />

// Version compacte (icône seule)
<ThemeSelector variant="compact" />`}
          language="tsx"
        />
      </Section>

      <Section id="custom-themes" title="Thèmes personnalisés avec registryItem">
        <p className="text-muted-foreground mb-4">
          Créez des thèmes personnalisés en utilisant le format <code>registryItem</code> (compatible shadcn/ui) :
        </p>
        <CodeBlock
          code={`const themes = [
  {
    id: "light",
    label: "Clair",
    previewColor: "#ffffff",
  },
  {
    id: "dark",
    label: "Sombre",
    previewColor: "#1a1a1a",
  },
  {
    id: "ocean",
    label: "Ocean",
    previewColor: "#0ea5e9",
    // Thème personnalisé avec registryItem
    registryItem: {
      name: "ocean",
      type: "registry:theme",
      cssVars: {
        // Variables communes (fonts, radius, etc.)
        theme: {
          "--radius": "0.5rem",
          "--font-sans": "Inter, sans-serif",
        },
        // Variables mode clair
        light: {
          "--primary": "199 89% 48%",
          "--primary-foreground": "0 0% 100%",
          "--background": "200 50% 98%",
          "--foreground": "200 50% 10%",
          "--card": "200 50% 100%",
          "--card-foreground": "200 50% 10%",
        },
        // Variables mode sombre
        dark: {
          "--primary": "199 89% 48%",
          "--primary-foreground": "0 0% 100%",
          "--background": "200 50% 5%",
          "--foreground": "200 50% 95%",
          "--card": "200 50% 8%",
          "--card-foreground": "200 50% 95%",
        },
      },
    },
  },
]

<WakaProvider config={{ theme: { themes, defaultTheme: "light" } }}>
  {children}
</WakaProvider>`}
          language="tsx"
        />
      </Section>

      <Section id="load-from-json" title="Chargement depuis JSON">
        <p className="text-muted-foreground mb-4">
          Chargez les thèmes dynamiquement depuis un fichier JSON externe (par exemple depuis un CDN) :
        </p>
        <CodeBlock
          code={`const themes = [
  {
    id: "light",
    label: "Clair",
  },
  {
    id: "corporate",
    label: "Corporate",
    previewColor: "#1e40af",
    // URL vers le fichier JSON du thème
    jsonUrl: "https://cdn.example.com/themes/corporate.json",
  },
]`}
          language="tsx"
        />
        <p className="text-muted-foreground mt-4 mb-4">
          Structure du fichier JSON au format <code>ShadcnRegistryItem</code> :
        </p>
        <CodeBlock
          filename="corporate.json"
          code={`{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "corporate",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "--radius": "0.375rem"
    },
    "light": {
      "--primary": "221 83% 53%",
      "--primary-foreground": "0 0% 100%",
      "--background": "0 0% 100%",
      "--foreground": "222 47% 11%"
    },
    "dark": {
      "--primary": "221 83% 53%",
      "--primary-foreground": "0 0% 100%",
      "--background": "222 47% 11%",
      "--foreground": "0 0% 100%"
    }
  }
}`}
          language="json"
        />
      </Section>

      <Section id="use-theme-hook" title="Hook useTheme">
        <p className="text-muted-foreground mb-4">
          Accédez au thème actuel et aux fonctions de contrôle avec le hook <code>useTheme</code> :
        </p>
        <CodeBlock
          code={`import { useTheme } from "@wakastellar/ui"

function MyComponent() {
  const {
    currentTheme,    // ID du thème actuel ("light", "dark", etc.)
    themes,          // Liste des thèmes disponibles
    changeTheme,     // Changer de thème (async)
    isLoading,       // État de chargement du thème
    isDarkMode,      // Mode sombre actif ?
    toggleDarkMode,  // Basculer dark/light mode
    preloadTheme,    // Précharger un thème sans l'appliquer
    isThemeLoaded,   // Vérifier si un thème est chargé
    loadThemeFromJSON, // Charger un thème depuis un objet JSON
  } = useTheme()

  return (
    <div>
      <p>Thème actuel : {currentTheme}</p>
      <button onClick={() => changeTheme("dark")}>
        Activer dark mode
      </button>
      <button onClick={toggleDarkMode}>
        Toggle dark mode
      </button>
    </div>
  )
}`}
          language="tsx"
        />
      </Section>

      <Section id="use-waka-hook" title="Hook useWaka">
        <p className="text-muted-foreground mb-4">
          Le hook <code>useWaka</code> combine thème et langue pour un accès simplifié :
        </p>
        <CodeBlock
          code={`import { useWaka } from "@wakastellar/ui"

function MyComponent() {
  const {
    // Thème
    currentTheme,
    changeTheme,
    themes,
    isThemeLoading,

    // Langue
    currentLanguage,
    changeLanguage,
    languages,

    // Traductions
    t,
  } = useWaka()

  return (
    <div>
      <p>{t("common.welcome")}</p>
      <button onClick={() => changeTheme("dark")}>Dark</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  )
}`}
          language="tsx"
        />
      </Section>

      <Section id="load-theme-dynamically" title="Charger un thème dynamiquement">
        <p className="text-muted-foreground mb-4">
          Vous pouvez charger et appliquer un thème à la volée depuis un objet JSON :
        </p>
        <CodeBlock
          code={`import { useTheme } from "@wakastellar/ui"

function ThemeImporter() {
  const { loadThemeFromJSON } = useTheme()

  const handleImport = async (jsonString: string) => {
    const registryItem = JSON.parse(jsonString)
    await loadThemeFromJSON("my-custom-theme", registryItem)
    // Le thème est maintenant appliqué !
  }

  return (
    <textarea
      placeholder="Collez votre JSON de thème ici..."
      onChange={(e) => handleImport(e.target.value)}
    />
  )
}`}
          language="tsx"
        />
      </Section>

      <Section id="css-variables" title="Variables CSS">
        <p className="text-muted-foreground mb-4">
          Liste des variables CSS principales utilisées par @wakastellar/ui :
        </p>
        <CodeBlock
          code={`:root {
  /* Couleurs principales */
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

  /* Bordures et inputs */
  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 222 47% 11%;

  /* Typographie */
  --radius: 0.5rem;
}`}
          language="css"
        />
      </Section>

      <Section id="theme-manager" title="Gestionnaire de thèmes">
        <p className="text-muted-foreground mb-4">
          Utilisez le composant <code>WakaThemeManager</code> pour une interface complète
          de gestion des thèmes (import/export, prévisualisation, personnalisation) :
        </p>
        <CodeBlock
          code={`import { WakaThemeManager } from "@wakastellar/ui"

<WakaThemeManager
  size="full"
  showPreview
  showExport
  showImport
  allowCustomColors
  onThemeChange={(theme) => console.log("Theme changed:", theme)}
  onThemeSave={(theme) => saveThemeToBackend(theme)}
/>`}
          language="tsx"
        />
      </Section>
    </article>
  )
}
