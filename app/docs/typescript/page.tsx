"use client"

import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { Badge } from "@wakastellar/ui"

export default function TypeScriptPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">TypeScript</h1>
          <Badge variant="outline">Guide</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          @wakastellar/ui est entièrement typé en TypeScript. Découvrez comment tirer parti des types pour une meilleure DX.
        </p>
      </div>

      {/* Overview */}
      <Section id="overview" title="Vue d'ensemble">
        <p className="text-muted-foreground mb-4">
          Tous les composants exportent leurs types, vous permettant d'avoir une autocomplétion complète
          et une vérification de type statique dans votre éditeur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <p className="font-medium text-green-800 dark:text-green-200">100% TypeScript</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">Tous les composants sont écrits en TypeScript</p>
          </div>
          <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <p className="font-medium text-blue-800 dark:text-blue-200">Types exportés</p>
            <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Importez les types pour vos propres composants</p>
          </div>
        </div>
      </Section>

      {/* Importing Types */}
      <Section id="importing-types" title="Import des types">
        <p className="text-muted-foreground mb-4">
          Les types sont exportés directement depuis le package principal.
        </p>

        <CodeBlock
          code={`import type {
  ButtonProps,
  CardProps,
  InputProps,
  SelectProps,
  DialogProps,
  // ... autres types
} from "@wakastellar/ui"

// Utilisation dans un composant custom
interface MyButtonProps extends ButtonProps {
  loading?: boolean
}

export function MyButton({ loading, children, ...props }: MyButtonProps) {
  return (
    <Button disabled={loading} {...props}>
      {loading ? "Chargement..." : children}
    </Button>
  )
}`}
          language="tsx"
        />
      </Section>

      {/* Component Props */}
      <Section id="component-props" title="Props des composants">
        <p className="text-muted-foreground mb-4">
          Chaque composant a ses props typées. Voici quelques exemples courants :
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-4">Button</h3>
        <CodeBlock
          code={`import { Button, type ButtonProps } from "@wakastellar/ui"

// Les props incluent les variantes
type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-6 mb-4">Input</h3>
        <CodeBlock
          code={`import { Input, type InputProps } from "@wakastellar/ui"

// InputProps étend les attributs HTML natifs
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Hérite de tous les attributs input standard
  // type, value, onChange, placeholder, disabled, etc.
}`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-6 mb-4">Select</h3>
        <CodeBlock
          code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@wakastellar/ui"

// Exemple avec typage strict des options
interface Option {
  value: string
  label: string
}

const options: Option[] = [
  { value: "apple", label: "Pomme" },
  { value: "banana", label: "Banane" },
]

function MySelect({ options }: { options: Option[] }) {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Sélectionner un fruit" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}`}
          language="tsx"
        />
      </Section>

      {/* DataTable Types */}
      <Section id="datatable" title="Types DataTable">
        <p className="text-muted-foreground mb-4">
          Le DataTableAdvanced utilise les types de TanStack Table pour une expérience typée complète.
        </p>

        <CodeBlock
          code={`import { DataTableAdvanced } from "@wakastellar/ui"
import type { ColumnDef } from "@tanstack/react-table"

// Définir le type de vos données
interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user" | "moderator"
  createdAt: Date
}

// Colonnes typées
const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Rôle",
    cell: ({ row }) => {
      // row.original est typé comme User
      const role = row.original.role
      return <Badge>{role}</Badge>
    },
  },
  {
    accessorKey: "createdAt",
    header: "Créé le",
    cell: ({ row }) => {
      // TypeScript sait que createdAt est une Date
      return row.original.createdAt.toLocaleDateString()
    },
  },
]

// Utilisation
<DataTableAdvanced<User>
  data={users}
  columns={columns}
  pagination={{ mode: "client", pageSize: 10 }}
/>`}
          language="tsx"
        />
      </Section>

      {/* Theme Types */}
      <Section id="theme-types" title="Types de thèmes">
        <p className="text-muted-foreground mb-4">
          Les thèmes suivent le format shadcn/ui registry-item.
        </p>

        <CodeBlock
          code={`import type { Theme, ThemeConfig } from "@wakastellar/ui"

interface Theme {
  id: string
  label: string
  previewColor?: string
  registryItem?: {
    name: string
    type: "registry:style"
    cssVars: {
      light: Record<string, string>
      dark: Record<string, string>
    }
  }
}

// Créer un thème custom typé
const customTheme: Theme = {
  id: "my-theme",
  label: "Mon Thème",
  previewColor: "#8b5cf6",
  registryItem: {
    name: "my-theme",
    type: "registry:style",
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "240 10% 3.9%",
        primary: "262 83% 58%",
      },
      dark: {
        background: "240 10% 3.9%",
        foreground: "0 0% 98%",
        primary: "263 70% 50%",
      },
    },
  },
}`}
          language="tsx"
        />
      </Section>

      {/* Hook Types */}
      <Section id="hook-types" title="Types des hooks">
        <p className="text-muted-foreground mb-4">
          Les hooks retournent des valeurs typées pour une utilisation sûre.
        </p>

        <CodeBlock
          code={`// useTheme
interface UseThemeReturn {
  currentTheme: Theme | undefined
  themes: Theme[]
  changeTheme: (themeId: string) => void
  isDarkMode: boolean
  toggleDarkMode: () => void
  setDarkMode: (dark: boolean) => void
  loadThemeFromJSON: (id: string, json: ThemeJSON) => Promise<void>
}

// useLanguage
interface UseLanguageReturn {
  currentLanguage: string
  languages: Language[]
  changeLanguage: (code: string) => Promise<void>
  loadLanguageFromJSON: (code: string, translations: object) => Promise<void>
}

// useToast
interface UseToastReturn {
  toast: (props: ToastProps) => void
  toasts: Toast[]
  dismiss: (id: string) => void
}

interface ToastProps {
  title?: string
  description?: string
  variant?: "default" | "destructive"
  duration?: number
  action?: React.ReactNode
}`}
          language="tsx"
        />
      </Section>

      {/* Generic Components */}
      <Section id="generics" title="Composants génériques">
        <p className="text-muted-foreground mb-4">
          Certains composants utilisent des génériques pour un typage flexible.
        </p>

        <CodeBlock
          code={`// Autocomplete générique
import { WakaAutocomplete } from "@wakastellar/ui"

interface Country {
  code: string
  name: string
  flag: string
}

const countries: Country[] = [
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "DE", name: "Allemagne", flag: "🇩🇪" },
]

<WakaAutocomplete<Country>
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  getOptionLabel={(country) => country.name} // TypeScript infère le type
  getOptionValue={(country) => country.code}
  renderOption={(country) => (
    <span>{country.flag} {country.name}</span>
  )}
/>`}
          language="tsx"
        />
      </Section>

      {/* Strict Mode */}
      <Section id="strict-mode" title="Configuration tsconfig">
        <p className="text-muted-foreground mb-4">
          Nous recommandons d'utiliser le mode strict de TypeScript pour une meilleure expérience.
        </p>

        <CodeBlock
          code={`// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true,
    // ... autres options Next.js
  }
}`}
          language="json"
        />

        <Callout type="tip" title="Conseil">
          Activez <code>noUncheckedIndexedAccess</code> pour éviter les erreurs d'accès à des propriétés potentiellement undefined.
        </Callout>
      </Section>

      {/* Common Patterns */}
      <Section id="patterns" title="Patterns courants">
        <h3 className="text-lg font-semibold mb-4">Composant avec forwardRef</h3>
        <CodeBlock
          code={`import { forwardRef } from "react"
import { Button, type ButtonProps } from "@wakastellar/ui"

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean
}

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ loading, children, disabled, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="animate-spin mr-2">⏳</span>
        ) : null}
        {children}
      </Button>
    )
  }
)

LoadingButton.displayName = "LoadingButton"`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-8 mb-4">Polymorphic component</h3>
        <CodeBlock
          code={`import { Button } from "@wakastellar/ui"
import Link from "next/link"

// Utiliser asChild pour changer l'élément rendu
<Button asChild>
  <Link href="/dashboard">
    Aller au dashboard
  </Link>
</Button>

// Le composant Link reçoit les styles du Button
// tout en conservant ses fonctionnalités de navigation`}
          language="tsx"
        />
      </Section>
    </div>
  )
}
