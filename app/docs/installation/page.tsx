"use client"

import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"

export default function InstallationPage() {
  return (
    <article className="w-full">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Installation</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Guide complet pour installer et configurer @wakastellar/ui dans votre projet.
        </p>
      </header>

      <Section id="requirements" title="Prérequis">
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>React 18 ou supérieur</li>
          <li>Tailwind CSS 3.4 ou supérieur</li>
          <li>Node.js 18 ou supérieur</li>
        </ul>
      </Section>

      <Section id="installation" title="Installation">
        <p className="text-muted-foreground mb-4">
          Installez le package avec votre gestionnaire de paquets préféré :
        </p>
        <CodeBlock
          code={`# pnpm (recommandé)
pnpm add @wakastellar/ui

# npm
npm install @wakastellar/ui

# yarn
yarn add @wakastellar/ui`}
          language="bash"
        />
      </Section>

      <Section id="tailwind-config" title="Configuration Tailwind">
        <p className="text-muted-foreground mb-4">
          Ajoutez @wakastellar/ui au contenu de votre configuration Tailwind :
        </p>
        <CodeBlock
          filename="tailwind.config.js"
          code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Inclure les composants de @wakastellar/ui
    "./node_modules/@wakastellar/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Variables CSS utilisées par @wakastellar/ui
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`}
          language="javascript"
        />
      </Section>

      <Section id="styles" title="Import des styles">
        <p className="text-muted-foreground mb-4">
          Importez les styles de base dans votre layout ou point d'entrée :
        </p>
        <CodeBlock
          filename="app/layout.tsx"
          code={`import "@wakastellar/ui/dist/ui.css"
import "./globals.css"`}
          language="tsx"
        />
      </Section>

      <Section id="provider" title="Configuration du Provider">
        <p className="text-muted-foreground mb-4">
          Enveloppez votre application avec le WakaProvider pour activer les thèmes et l'i18n :
        </p>
        <CodeBlock
          filename="app/layout.tsx"
          code={`import "@wakastellar/ui/dist/ui.css"
import "./globals.css"
import { WakaProvider, Toaster } from "@wakastellar/ui"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <WakaProvider
          config={{
            theme: {
              defaultTheme: "light",
              enableSystem: true,
              themes: [
                { id: "light", label: "Clair" },
                { id: "dark", label: "Sombre" },
              ],
            },
            language: {
              defaultLanguage: "fr",
              languages: [
                { code: "fr", label: "Français", flagEmoji: "🇫🇷" },
                { code: "en", label: "English", flagEmoji: "🇬🇧" },
              ],
            },
          }}
        >
          {children}
          <Toaster />
        </WakaProvider>
      </body>
    </html>
  )
}`}
          language="tsx"
        />
      </Section>

      <Section id="next-config" title="Configuration Next.js">
        <p className="text-muted-foreground mb-4">
          Si vous utilisez Next.js, ajoutez la transpilation du package :
        </p>
        <CodeBlock
          filename="next.config.js"
          code={`/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@wakastellar/ui"],
}`}
          language="javascript"
        />
      </Section>

      <Section id="usage" title="Utilisation">
        <p className="text-muted-foreground mb-4">
          Vous pouvez maintenant importer et utiliser les composants :
        </p>
        <CodeBlock
          code={`import { Button, Card, CardContent, CardHeader, CardTitle } from "@wakastellar/ui"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bienvenue</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Cliquez ici</Button>
      </CardContent>
    </Card>
  )
}`}
          language="tsx"
        />
      </Section>
    </article>
  )
}
