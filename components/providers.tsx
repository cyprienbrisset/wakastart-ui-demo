"use client"

import { useEffect } from "react"
import { WakaProvider, Toaster, useWaka } from "@wakastellar/ui"

// Type for theme with CSS variables
interface ThemeWithCssVars {
  id: string
  label: string
  previewColor: string
  registryItem: {
    name: string
    cssVars: {
      light: Record<string, string>
      dark: Record<string, string>
    }
  }
}

// Real TweakCN themes with full CSS variables
const themes: ThemeWithCssVars[] = [
  {
    id: "default",
    label: "Default",
    previewColor: "#18181b",
    registryItem: {
      name: "default",
      cssVars: {
        light: {
          background: "0 0% 100%",
          foreground: "240 10% 3.9%",
          card: "0 0% 100%",
          "card-foreground": "240 10% 3.9%",
          popover: "0 0% 100%",
          "popover-foreground": "240 10% 3.9%",
          primary: "240 5.9% 10%",
          "primary-foreground": "0 0% 98%",
          secondary: "240 4.8% 95.9%",
          "secondary-foreground": "240 5.9% 10%",
          muted: "240 4.8% 95.9%",
          "muted-foreground": "240 3.8% 46.1%",
          accent: "240 4.8% 95.9%",
          "accent-foreground": "240 5.9% 10%",
          destructive: "0 84.2% 60.2%",
          "destructive-foreground": "0 0% 98%",
          border: "240 5.9% 90%",
          input: "240 5.9% 90%",
          ring: "240 5.9% 10%",
          "chart-1": "12 76% 61%",
          "chart-2": "173 58% 39%",
          "chart-3": "197 37% 24%",
          "chart-4": "43 74% 66%",
          "chart-5": "27 87% 67%",
        },
        dark: {
          background: "240 10% 3.9%",
          foreground: "0 0% 98%",
          card: "240 10% 3.9%",
          "card-foreground": "0 0% 98%",
          popover: "240 10% 3.9%",
          "popover-foreground": "0 0% 98%",
          primary: "0 0% 98%",
          "primary-foreground": "240 5.9% 10%",
          secondary: "240 3.7% 15.9%",
          "secondary-foreground": "0 0% 98%",
          muted: "240 3.7% 15.9%",
          "muted-foreground": "240 5% 64.9%",
          accent: "240 3.7% 15.9%",
          "accent-foreground": "0 0% 98%",
          destructive: "0 62.8% 30.6%",
          "destructive-foreground": "0 0% 98%",
          border: "240 3.7% 15.9%",
          input: "240 3.7% 15.9%",
          ring: "240 4.9% 83.9%",
          "chart-1": "220 70% 50%",
          "chart-2": "160 60% 45%",
          "chart-3": "30 80% 55%",
          "chart-4": "280 65% 60%",
          "chart-5": "340 75% 55%",
        },
      },
    },
  },
  {
    id: "ocean",
    label: "Ocean",
    previewColor: "#0ea5e9",
    registryItem: {
      name: "ocean",
      cssVars: {
        light: {
          background: "200 20% 98%",
          foreground: "200 50% 10%",
          card: "0 0% 100%",
          "card-foreground": "200 50% 10%",
          popover: "0 0% 100%",
          "popover-foreground": "200 50% 10%",
          primary: "199 89% 48%",
          "primary-foreground": "0 0% 100%",
          secondary: "200 20% 94%",
          "secondary-foreground": "200 50% 10%",
          muted: "200 20% 94%",
          "muted-foreground": "200 20% 40%",
          accent: "200 20% 94%",
          "accent-foreground": "200 50% 10%",
          destructive: "0 84.2% 60.2%",
          "destructive-foreground": "0 0% 98%",
          border: "200 20% 88%",
          input: "200 20% 88%",
          ring: "199 89% 48%",
          "chart-1": "199 89% 48%",
          "chart-2": "173 58% 39%",
          "chart-3": "197 37% 24%",
          "chart-4": "43 74% 66%",
          "chart-5": "27 87% 67%",
        },
        dark: {
          background: "200 50% 6%",
          foreground: "200 20% 98%",
          card: "200 50% 8%",
          "card-foreground": "200 20% 98%",
          popover: "200 50% 8%",
          "popover-foreground": "200 20% 98%",
          primary: "199 89% 48%",
          "primary-foreground": "0 0% 100%",
          secondary: "200 30% 15%",
          "secondary-foreground": "200 20% 98%",
          muted: "200 30% 15%",
          "muted-foreground": "200 20% 60%",
          accent: "200 30% 15%",
          "accent-foreground": "200 20% 98%",
          destructive: "0 62.8% 30.6%",
          "destructive-foreground": "0 0% 98%",
          border: "200 30% 18%",
          input: "200 30% 18%",
          ring: "199 89% 48%",
          "chart-1": "199 89% 48%",
          "chart-2": "160 60% 45%",
          "chart-3": "30 80% 55%",
          "chart-4": "280 65% 60%",
          "chart-5": "340 75% 55%",
        },
      },
    },
  },
  {
    id: "forest",
    label: "Forest",
    previewColor: "#22c55e",
    registryItem: {
      name: "forest",
      cssVars: {
        light: {
          background: "140 20% 98%",
          foreground: "140 50% 10%",
          card: "0 0% 100%",
          "card-foreground": "140 50% 10%",
          popover: "0 0% 100%",
          "popover-foreground": "140 50% 10%",
          primary: "142 71% 45%",
          "primary-foreground": "0 0% 100%",
          secondary: "140 20% 94%",
          "secondary-foreground": "140 50% 10%",
          muted: "140 20% 94%",
          "muted-foreground": "140 20% 40%",
          accent: "140 20% 94%",
          "accent-foreground": "140 50% 10%",
          destructive: "0 84.2% 60.2%",
          "destructive-foreground": "0 0% 98%",
          border: "140 20% 88%",
          input: "140 20% 88%",
          ring: "142 71% 45%",
          "chart-1": "142 71% 45%",
          "chart-2": "173 58% 39%",
          "chart-3": "197 37% 24%",
          "chart-4": "43 74% 66%",
          "chart-5": "27 87% 67%",
        },
        dark: {
          background: "140 50% 6%",
          foreground: "140 20% 98%",
          card: "140 50% 8%",
          "card-foreground": "140 20% 98%",
          popover: "140 50% 8%",
          "popover-foreground": "140 20% 98%",
          primary: "142 71% 45%",
          "primary-foreground": "0 0% 100%",
          secondary: "140 30% 15%",
          "secondary-foreground": "140 20% 98%",
          muted: "140 30% 15%",
          "muted-foreground": "140 20% 60%",
          accent: "140 30% 15%",
          "accent-foreground": "140 20% 98%",
          destructive: "0 62.8% 30.6%",
          "destructive-foreground": "0 0% 98%",
          border: "140 30% 18%",
          input: "140 30% 18%",
          ring: "142 71% 45%",
          "chart-1": "142 71% 45%",
          "chart-2": "160 60% 45%",
          "chart-3": "30 80% 55%",
          "chart-4": "280 65% 60%",
          "chart-5": "340 75% 55%",
        },
      },
    },
  },
  {
    id: "sunset",
    label: "Sunset",
    previewColor: "#f97316",
    registryItem: {
      name: "sunset",
      cssVars: {
        light: {
          background: "30 20% 98%",
          foreground: "30 50% 10%",
          card: "0 0% 100%",
          "card-foreground": "30 50% 10%",
          popover: "0 0% 100%",
          "popover-foreground": "30 50% 10%",
          primary: "24 95% 53%",
          "primary-foreground": "0 0% 100%",
          secondary: "30 20% 94%",
          "secondary-foreground": "30 50% 10%",
          muted: "30 20% 94%",
          "muted-foreground": "30 20% 40%",
          accent: "30 20% 94%",
          "accent-foreground": "30 50% 10%",
          destructive: "0 84.2% 60.2%",
          "destructive-foreground": "0 0% 98%",
          border: "30 20% 88%",
          input: "30 20% 88%",
          ring: "24 95% 53%",
          "chart-1": "24 95% 53%",
          "chart-2": "173 58% 39%",
          "chart-3": "197 37% 24%",
          "chart-4": "43 74% 66%",
          "chart-5": "27 87% 67%",
        },
        dark: {
          background: "30 50% 6%",
          foreground: "30 20% 98%",
          card: "30 50% 8%",
          "card-foreground": "30 20% 98%",
          popover: "30 50% 8%",
          "popover-foreground": "30 20% 98%",
          primary: "24 95% 53%",
          "primary-foreground": "0 0% 100%",
          secondary: "30 30% 15%",
          "secondary-foreground": "30 20% 98%",
          muted: "30 30% 15%",
          "muted-foreground": "30 20% 60%",
          accent: "30 30% 15%",
          "accent-foreground": "30 20% 98%",
          destructive: "0 62.8% 30.6%",
          "destructive-foreground": "0 0% 98%",
          border: "30 30% 18%",
          input: "30 30% 18%",
          ring: "24 95% 53%",
          "chart-1": "24 95% 53%",
          "chart-2": "160 60% 45%",
          "chart-3": "30 80% 55%",
          "chart-4": "280 65% 60%",
          "chart-5": "340 75% 55%",
        },
      },
    },
  },
  {
    id: "lavender",
    label: "Lavender",
    previewColor: "#a855f7",
    registryItem: {
      name: "lavender",
      cssVars: {
        light: {
          background: "270 20% 98%",
          foreground: "270 50% 10%",
          card: "0 0% 100%",
          "card-foreground": "270 50% 10%",
          popover: "0 0% 100%",
          "popover-foreground": "270 50% 10%",
          primary: "271 91% 65%",
          "primary-foreground": "0 0% 100%",
          secondary: "270 20% 94%",
          "secondary-foreground": "270 50% 10%",
          muted: "270 20% 94%",
          "muted-foreground": "270 20% 40%",
          accent: "270 20% 94%",
          "accent-foreground": "270 50% 10%",
          destructive: "0 84.2% 60.2%",
          "destructive-foreground": "0 0% 98%",
          border: "270 20% 88%",
          input: "270 20% 88%",
          ring: "271 91% 65%",
          "chart-1": "271 91% 65%",
          "chart-2": "173 58% 39%",
          "chart-3": "197 37% 24%",
          "chart-4": "43 74% 66%",
          "chart-5": "27 87% 67%",
        },
        dark: {
          background: "270 50% 6%",
          foreground: "270 20% 98%",
          card: "270 50% 8%",
          "card-foreground": "270 20% 98%",
          popover: "270 50% 8%",
          "popover-foreground": "270 20% 98%",
          primary: "271 91% 65%",
          "primary-foreground": "0 0% 100%",
          secondary: "270 30% 15%",
          "secondary-foreground": "270 20% 98%",
          muted: "270 30% 15%",
          "muted-foreground": "270 20% 60%",
          accent: "270 30% 15%",
          "accent-foreground": "270 20% 98%",
          destructive: "0 62.8% 30.6%",
          "destructive-foreground": "0 0% 98%",
          border: "270 30% 18%",
          input: "270 30% 18%",
          ring: "271 91% 65%",
          "chart-1": "271 91% 65%",
          "chart-2": "160 60% 45%",
          "chart-3": "30 80% 55%",
          "chart-4": "280 65% 60%",
          "chart-5": "340 75% 55%",
        },
      },
    },
  },
  {
    id: "rose",
    label: "Rose",
    previewColor: "#f43f5e",
    registryItem: {
      name: "rose",
      cssVars: {
        light: {
          background: "350 20% 98%",
          foreground: "350 50% 10%",
          card: "0 0% 100%",
          "card-foreground": "350 50% 10%",
          popover: "0 0% 100%",
          "popover-foreground": "350 50% 10%",
          primary: "350 89% 60%",
          "primary-foreground": "0 0% 100%",
          secondary: "350 20% 94%",
          "secondary-foreground": "350 50% 10%",
          muted: "350 20% 94%",
          "muted-foreground": "350 20% 40%",
          accent: "350 20% 94%",
          "accent-foreground": "350 50% 10%",
          destructive: "0 84.2% 60.2%",
          "destructive-foreground": "0 0% 98%",
          border: "350 20% 88%",
          input: "350 20% 88%",
          ring: "350 89% 60%",
          "chart-1": "350 89% 60%",
          "chart-2": "173 58% 39%",
          "chart-3": "197 37% 24%",
          "chart-4": "43 74% 66%",
          "chart-5": "27 87% 67%",
        },
        dark: {
          background: "350 50% 6%",
          foreground: "350 20% 98%",
          card: "350 50% 8%",
          "card-foreground": "350 20% 98%",
          popover: "350 50% 8%",
          "popover-foreground": "350 20% 98%",
          primary: "350 89% 60%",
          "primary-foreground": "0 0% 100%",
          secondary: "350 30% 15%",
          "secondary-foreground": "350 20% 98%",
          muted: "350 30% 15%",
          "muted-foreground": "350 20% 60%",
          accent: "350 30% 15%",
          "accent-foreground": "350 20% 98%",
          destructive: "0 62.8% 30.6%",
          "destructive-foreground": "0 0% 98%",
          border: "350 30% 18%",
          input: "350 30% 18%",
          ring: "350 89% 60%",
          "chart-1": "350 89% 60%",
          "chart-2": "160 60% 45%",
          "chart-3": "30 80% 55%",
          "chart-4": "280 65% 60%",
          "chart-5": "340 75% 55%",
        },
      },
    },
  },
  {
    id: "midnight",
    label: "Midnight",
    previewColor: "#1e3a5f",
    registryItem: {
      name: "midnight",
      cssVars: {
        light: {
          background: "215 20% 98%",
          foreground: "215 50% 10%",
          card: "0 0% 100%",
          "card-foreground": "215 50% 10%",
          popover: "0 0% 100%",
          "popover-foreground": "215 50% 10%",
          primary: "215 50% 25%",
          "primary-foreground": "0 0% 100%",
          secondary: "215 20% 94%",
          "secondary-foreground": "215 50% 10%",
          muted: "215 20% 94%",
          "muted-foreground": "215 20% 40%",
          accent: "215 20% 94%",
          "accent-foreground": "215 50% 10%",
          destructive: "0 84.2% 60.2%",
          "destructive-foreground": "0 0% 98%",
          border: "215 20% 88%",
          input: "215 20% 88%",
          ring: "215 50% 25%",
          "chart-1": "215 50% 25%",
          "chart-2": "173 58% 39%",
          "chart-3": "197 37% 24%",
          "chart-4": "43 74% 66%",
          "chart-5": "27 87% 67%",
        },
        dark: {
          background: "215 50% 6%",
          foreground: "215 20% 98%",
          card: "215 50% 8%",
          "card-foreground": "215 20% 98%",
          popover: "215 50% 8%",
          "popover-foreground": "215 20% 98%",
          primary: "215 70% 50%",
          "primary-foreground": "0 0% 100%",
          secondary: "215 30% 15%",
          "secondary-foreground": "215 20% 98%",
          muted: "215 30% 15%",
          "muted-foreground": "215 20% 60%",
          accent: "215 30% 15%",
          "accent-foreground": "215 20% 98%",
          destructive: "0 62.8% 30.6%",
          "destructive-foreground": "0 0% 98%",
          border: "215 30% 18%",
          input: "215 30% 18%",
          ring: "215 70% 50%",
          "chart-1": "215 70% 50%",
          "chart-2": "160 60% 45%",
          "chart-3": "30 80% 55%",
          "chart-4": "280 65% 60%",
          "chart-5": "340 75% 55%",
        },
      },
    },
  },
]

// Component to inject CSS variables based on current theme
function ThemeStyleInjector() {
  const { currentTheme } = useWaka()

  useEffect(() => {
    const theme = themes.find(t => t.id === currentTheme)
    if (!theme?.registryItem?.cssVars) return

    const { light, dark } = theme.registryItem.cssVars

    // Generate CSS for this theme
    const lightVars = Object.entries(light)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join('\n')

    const darkVars = Object.entries(dark)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join('\n')

    const css = `
/* Theme: ${theme.id} - Light mode */
[data-theme="${theme.id}"],
:root {
${lightVars}
}

/* Theme: ${theme.id} - Dark mode */
[data-theme="${theme.id}"].dark,
.dark {
${darkVars}
}
`

    // Remove existing theme style element
    const existingStyle = document.getElementById('waka-theme-vars')
    if (existingStyle) {
      existingStyle.remove()
    }

    // Inject new style element
    const styleElement = document.createElement('style')
    styleElement.id = 'waka-theme-vars'
    styleElement.textContent = css
    document.head.appendChild(styleElement)

    // Apply data-theme attribute
    document.documentElement.setAttribute('data-theme', currentTheme)

    return () => {
      // Cleanup on unmount
      const style = document.getElementById('waka-theme-vars')
      if (style) style.remove()
    }
  }, [currentTheme])

  return null
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WakaProvider
      config={{
        theme: {
          defaultTheme: "default",
          enableSystem: true,
          themes,
        },
        language: {
          defaultLanguage: "fr",
          supportedLanguages: ["fr", "en", "es", "de"],
          languages: [
            { code: "fr", label: "Français", flagEmoji: "🇫🇷" },
            { code: "en", label: "English", flagEmoji: "🇬🇧" },
            { code: "es", label: "Español", flagEmoji: "🇪🇸" },
            { code: "de", label: "Deutsch", flagEmoji: "🇩🇪" },
          ],
          resources: {
            fr: {
              common: {
                search: "Rechercher...",
                docs: "Documentation",
                components: "Composants",
                blocks: "Blocks",
                examples: "Exemples",
              },
            },
            en: {
              common: {
                search: "Search...",
                docs: "Documentation",
                components: "Components",
                blocks: "Blocks",
                examples: "Examples",
              },
            },
            es: {
              common: {
                search: "Buscar...",
                docs: "Documentación",
                components: "Componentes",
                blocks: "Bloques",
                examples: "Ejemplos",
              },
            },
            de: {
              common: {
                search: "Suchen...",
                docs: "Dokumentation",
                components: "Komponenten",
                blocks: "Blöcke",
                examples: "Beispiele",
              },
            },
          },
        },
      }}
    >
      <ThemeStyleInjector />
      {children}
      <Toaster />
    </WakaProvider>
  )
}
