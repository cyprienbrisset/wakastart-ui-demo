"use client"

import { Section } from "@/components/docs/section"
import { Badge } from "@wakastellar/ui"
import { Tag, GitCommit, Plus, Wrench, AlertTriangle, Sparkles } from "lucide-react"

interface ChangelogEntry {
  version: string
  date: string
  type: "major" | "minor" | "patch"
  changes: {
    type: "added" | "changed" | "fixed" | "deprecated" | "removed" | "security"
    description: string
  }[]
}

const changelog: ChangelogEntry[] = [
  {
    version: "1.0.12",
    date: "2024-01-08",
    type: "patch",
    changes: [
      { type: "added", description: "Support Tailwind CSS v4 avec zero-config" },
      { type: "added", description: "Nouveaux exports pour styles/v3 et styles/v4" },
      { type: "added", description: "Preset Tailwind pour v3 (tailwind-preset)" },
      { type: "changed", description: "Migration du dark mode vers classe .dark (au lieu de prefers-color-scheme)" },
      { type: "fixed", description: "Compatibilité des classes size-* pour Tailwind v3" },
      { type: "fixed", description: "Couleurs WakaAlertStack en mode sombre" },
    ],
  },
  {
    version: "1.0.11",
    date: "2024-01-05",
    type: "patch",
    changes: [
      { type: "added", description: "70+ nouveaux composants Waka (gamification, infrastructure, etc.)" },
      { type: "added", description: "WakaTourGuide avec variant modal/tooltip fusionné" },
      { type: "fixed", description: "WakaTourGuide navigation entre les étapes" },
      { type: "fixed", description: "WakaWelcomeModal style jsx converti en style standard" },
    ],
  },
  {
    version: "1.0.10",
    date: "2024-01-02",
    type: "minor",
    changes: [
      { type: "added", description: "WakaDateTimePicker - Sélecteur date/heure complet" },
      { type: "added", description: "WakaColorPicker - Sélecteur de couleurs" },
      { type: "added", description: "WakaFileUpload - Upload de fichiers avec preview" },
      { type: "added", description: "WakaRichTextEditor - Éditeur WYSIWYG basé sur TipTap" },
      { type: "changed", description: "DataTableAdvanced - Amélioration des performances de virtualisation" },
    ],
  },
  {
    version: "1.0.9",
    date: "2023-12-28",
    type: "patch",
    changes: [
      { type: "fixed", description: "ThemeProvider - Correction du flash de thème au chargement" },
      { type: "fixed", description: "LanguageSelector - Support des flags emoji sur tous les OS" },
      { type: "changed", description: "Amélioration des types TypeScript pour les hooks" },
    ],
  },
  {
    version: "1.0.8",
    date: "2023-12-20",
    type: "minor",
    changes: [
      { type: "added", description: "Système de thèmes dynamiques avec chargement JSON" },
      { type: "added", description: "ThemeSelector avec variantes compact/select/full" },
      { type: "added", description: "Support format shadcn/ui registry-item pour les thèmes" },
      { type: "changed", description: "Refactoring du ThemeProvider pour meilleure performance" },
    ],
  },
  {
    version: "1.0.7",
    date: "2023-12-15",
    type: "patch",
    changes: [
      { type: "fixed", description: "WakaKanban - Correction du drag & drop sur mobile" },
      { type: "fixed", description: "WakaCarousel - Amélioration de la gestion tactile" },
      { type: "security", description: "Mise à jour des dépendances pour corriger les vulnérabilités" },
    ],
  },
  {
    version: "1.0.6",
    date: "2023-12-10",
    type: "minor",
    changes: [
      { type: "added", description: "Internationalisation avec i18next intégré" },
      { type: "added", description: "LanguageSelector avec support JSON distant" },
      { type: "added", description: "useLanguage et useTranslation hooks" },
      { type: "added", description: "WakaI18nEditor pour la gestion visuelle des traductions" },
    ],
  },
  {
    version: "1.0.5",
    date: "2023-12-05",
    type: "patch",
    changes: [
      { type: "fixed", description: "DataTableAdvanced - Export Excel avec caractères spéciaux" },
      { type: "fixed", description: "Select - Fermeture automatique après sélection" },
      { type: "changed", description: "Amélioration de l'accessibilité des formulaires" },
    ],
  },
  {
    version: "1.0.0",
    date: "2023-12-01",
    type: "major",
    changes: [
      { type: "added", description: "Release initiale avec 85+ composants de base" },
      { type: "added", description: "DataTableAdvanced avec tri, filtres, pagination, export" },
      { type: "added", description: "Système de thèmes basé sur CSS variables" },
      { type: "added", description: "Support complet TypeScript" },
      { type: "added", description: "24 blocks pré-construits" },
    ],
  },
]

const changeTypeConfig = {
  added: { icon: Plus, color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" },
  changed: { icon: Wrench, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
  fixed: { icon: Wrench, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-100 dark:bg-orange-900/30" },
  deprecated: { icon: AlertTriangle, color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-100 dark:bg-yellow-900/30" },
  removed: { icon: AlertTriangle, color: "text-red-600 dark:text-red-400", bg: "bg-red-100 dark:bg-red-900/30" },
  security: { icon: AlertTriangle, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
}

const versionTypeConfig = {
  major: { color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
  minor: { color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  patch: { color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
}

export default function ChangelogPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
          <Badge variant="outline">
            <Tag className="h-3 w-3 mr-1" />
            v1.0.12
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Historique des modifications et nouvelles fonctionnalités de @wakastellar/ui.
        </p>
      </div>

      {/* Version Legend */}
      <div className="flex flex-wrap gap-3 mb-8 p-4 rounded-lg border bg-muted/30">
        <span className="text-sm text-muted-foreground">Types de versions :</span>
        <Badge className={versionTypeConfig.major.color}>Major</Badge>
        <Badge className={versionTypeConfig.minor.color}>Minor</Badge>
        <Badge className={versionTypeConfig.patch.color}>Patch</Badge>
      </div>

      {/* Changelog Entries */}
      <div className="space-y-8">
        {changelog.map((entry) => (
          <div key={entry.version} className="relative">
            {/* Version Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <GitCommit className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-2xl font-bold">{entry.version}</h2>
              </div>
              <Badge className={versionTypeConfig[entry.type].color}>
                {entry.type}
              </Badge>
              <span className="text-sm text-muted-foreground">{entry.date}</span>
            </div>

            {/* Changes List */}
            <div className="space-y-2 pl-7 border-l-2 border-border ml-2">
              {entry.changes.map((change, i) => {
                const config = changeTypeConfig[change.type]
                const Icon = config.icon
                return (
                  <div key={i} className="flex items-start gap-3 py-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${config.bg} ${config.color}`}>
                      <Icon className="h-3 w-3" />
                      {change.type}
                    </span>
                    <span className="text-sm">{change.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe Section */}
      <Section id="subscribe" title="Rester informé">
        <div className="p-6 rounded-lg border bg-muted/30">
          <div className="flex items-start gap-4">
            <Sparkles className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Notifications de mise à jour</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Suivez les releases sur GitHub pour être notifié des nouvelles versions et fonctionnalités.
              </p>
              <a
                href="https://github.com/wakastellar/ui/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <GitCommit className="h-4 w-4" />
                Voir sur GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Semantic Versioning */}
      <Section id="semver" title="Versioning sémantique">
        <p className="text-muted-foreground mb-4">
          Nous suivons le <a href="https://semver.org/lang/fr/" target="_blank" rel="noopener noreferrer" className="underline">versioning sémantique</a> (SemVer).
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={versionTypeConfig.major.color}>Major (X.0.0)</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Changements incompatibles avec les versions précédentes. Migration peut être nécessaire.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={versionTypeConfig.minor.color}>Minor (0.X.0)</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Nouvelles fonctionnalités rétro-compatibles. Mise à jour sans risque.
            </p>
          </div>

          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={versionTypeConfig.patch.color}>Patch (0.0.X)</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Corrections de bugs et petites améliorations. Mise à jour recommandée.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
