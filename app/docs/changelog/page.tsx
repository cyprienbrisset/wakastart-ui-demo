"use client"

import { Section } from "@/components/docs/section"
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, WakaTimeline, Separator } from "@wakastellar/ui"
import { Tag, GitCommit, Plus, Wrench, AlertTriangle, Sparkles, Shield, ShieldCheck } from "lucide-react"

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
    version: "2.3.4",
    date: "2026-01-12",
    type: "patch",
    changes: [
      { type: "added", description: "Variables CSS --sidebar-* pour le theming de la sidebar" },
      { type: "changed", description: "WakaSidebar utilise --muted-foreground comme couleur de texte par défaut" },
      { type: "fixed", description: "Couleurs de texte de la sidebar adaptées au thème actif" },
    ],
  },
  {
    version: "2.3.3",
    date: "2026-01-12",
    type: "patch",
    changes: [
      { type: "added", description: "Variables CSS --sidebar-background, --sidebar-foreground dans tous les thèmes" },
      { type: "changed", description: "Sidebar supporte les thèmes personnalisés (forest, twilight, sunset, etc.)" },
    ],
  },
  {
    version: "2.3.2",
    date: "2026-01-12",
    type: "patch",
    changes: [
      { type: "added", description: "Variables CSS --success, --warning, --info pour le theming sémantique" },
      { type: "changed", description: "15 composants migrés vers CSS variables pour meilleur support dark mode" },
      { type: "changed", description: "WakaXPBar, WakaLeaderboard, WakaPlayerCard utilisent les tokens de thème" },
      { type: "changed", description: "WakaHealthPulse, WakaServerRack adaptés aux thèmes personnalisés" },
      { type: "changed", description: "Charts (RadarScore, QuotaBar, FunnelChart, etc.) supportent les thèmes" },
      { type: "added", description: "Tests unitaires pour WakaHealthPulse, WakaSuccessExplosion, WakaQuotaBar" },
      { type: "fixed", description: "Couleurs hardcodées remplacées par hsl(var(--semantic-token))" },
    ],
  },
  {
    version: "2.3.1",
    date: "2026-01-12",
    type: "patch",
    changes: [
      { type: "security", description: "Validation des URLs avant navigation (protection contre javascript: XSS)" },
      { type: "security", description: "Échappement des caractères spéciaux regex dans DataTable highlight (protection ReDoS)" },
      { type: "security", description: "Mise à jour Storybook vers >=9.1.17 (fix XSS)" },
      { type: "security", description: "Mise à jour esbuild vers >=0.25.0" },
      { type: "security", description: "peerDep jspdf mise à jour vers >=4.0.0" },
      { type: "added", description: "Utilitaires de sécurité : sanitizeUrl, safeNavigate, escapeRegex, escapeHtml" },
      { type: "added", description: "Documentation SECURITY.md avec guide de sécurité complet" },
      { type: "added", description: "15 composants Advertising (WakaAdBanner, WakaAdProvider, WakaSponsoredCard, etc.)" },
      { type: "changed", description: "WakaSpotlight et WakaCommandBar utilisent safeNavigate() pour les URLs" },
    ],
  },
  {
    version: "2.3.0",
    date: "2026-01-12",
    type: "minor",
    changes: [
      { type: "fixed", description: "Correction des previews de composants avec overflow" },
      { type: "fixed", description: "Scrollbar visible dans les composants avec ScrollArea" },
      { type: "fixed", description: "Props incorrectes dans les blocks DevOps (IncidentManager, CICDBuilder, etc.)" },
      { type: "changed", description: "Amélioration du ComponentShowcase avec max-height et scroll" },
    ],
  },
  {
    version: "2.2.0",
    date: "2026-01-10",
    type: "minor",
    changes: [
      { type: "added", description: "19 nouveaux composants DevOps (Monitoring, Kubernetes, CI/CD, Configuration, Database)" },
      { type: "added", description: "WakaLogViewer - Visualiseur de logs temps réel avec filtrage et recherche" },
      { type: "added", description: "WakaTraceViewer - Visualisation des traces distribuées" },
      { type: "added", description: "WakaAlertPanel - Panneau de gestion des alertes" },
      { type: "added", description: "WakaContainerList - Gestion des conteneurs Docker" },
      { type: "added", description: "WakaKubernetesOverview - Vue d'ensemble cluster K8s" },
      { type: "added", description: "WakaPodCard - Carte détaillée d'un pod" },
      { type: "added", description: "WakaServiceGraph - Graphe du maillage de services" },
      { type: "added", description: "WakaBuildMatrix - Matrice de builds CI/CD" },
      { type: "added", description: "WakaTestReport - Rapport de tests avec couverture" },
      { type: "added", description: "WakaArtifactList - Liste des artefacts de build" },
      { type: "added", description: "WakaSecurityScanResult - Résultats scan de sécurité" },
      { type: "added", description: "WakaDependencyTree - Arbre des dépendances" },
      { type: "added", description: "WakaEnvVarEditor - Éditeur de variables d'environnement" },
      { type: "added", description: "WakaSecretCard - Gestion des secrets" },
      { type: "added", description: "WakaConfigComparator - Comparateur de configurations" },
      { type: "added", description: "WakaFeatureFlagRow - Gestion des feature flags" },
      { type: "added", description: "WakaDatabaseCard - Carte de statut base de données" },
      { type: "added", description: "WakaMigrationList - Liste des migrations DB" },
      { type: "added", description: "WakaQueryExplain - Visualisation EXPLAIN SQL" },
      { type: "added", description: "10 nouveaux blocks DevOps (IncidentManager, InfrastructureMap, CICDBuilder, etc.)" },
      { type: "added", description: "IncidentManager - Gestion des incidents avec timeline" },
      { type: "added", description: "InfrastructureMap - Carte de l'infrastructure cloud" },
      { type: "added", description: "CICDBuilder - Constructeur de pipelines CI/CD" },
      { type: "added", description: "ReleaseNotes - Gestion des notes de version" },
      { type: "added", description: "OnCallScheduleBlock - Planification des astreintes" },
      { type: "added", description: "CloudCostDashboard - Dashboard des coûts cloud" },
      { type: "added", description: "GitOpsSyncStatus - Statut de synchronisation GitOps" },
      { type: "added", description: "APMOverview - Vue d'ensemble APM" },
      { type: "added", description: "ContainerOrchestrator - Orchestration de conteneurs" },
      { type: "added", description: "DatabaseAdmin - Administration de base de données" },
    ],
  },
  {
    version: "2.1.2",
    date: "2026-01-09",
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
    version: "2.1.1",
    date: "2026-01-08",
    type: "patch",
    changes: [
      { type: "added", description: "70+ nouveaux composants Waka (gamification, infrastructure, etc.)" },
      { type: "added", description: "WakaTourGuide avec variant modal/tooltip fusionné" },
      { type: "fixed", description: "WakaTourGuide navigation entre les étapes" },
      { type: "fixed", description: "WakaWelcomeModal style jsx converti en style standard" },
    ],
  },
  {
    version: "2.1.0",
    date: "2026-01-05",
    type: "minor",
    changes: [
      { type: "added", description: "WakaBottomSheet - Sheet mobile-first avec gestes" },
      { type: "added", description: "WakaHapticButton - Bouton avec retour haptique" },
      { type: "added", description: "WakaMorphButton - Bouton avec animation de morphing" },
      { type: "added", description: "WakaPullToRefresh - Pull to refresh mobile" },
      { type: "added", description: "WakaSwipeCard - Cartes swipeable style Tinder" },
      { type: "added", description: "30+ composants gamification (XP, achievements, leaderboards)" },
      { type: "changed", description: "Amélioration des performances de rendu des composants complexes" },
    ],
  },
  {
    version: "2.0.1",
    date: "2025-12-28",
    type: "patch",
    changes: [
      { type: "fixed", description: "Correction des imports circulaires dans les composants Waka" },
      { type: "fixed", description: "WakaKanban - Correction du z-index des cartes en drag" },
      { type: "fixed", description: "WakaTimeline - Alignement des connecteurs sur mobile" },
    ],
  },
  {
    version: "2.0.0",
    date: "2025-12-20",
    type: "major",
    changes: [
      { type: "added", description: "Nouvelle architecture modulaire avec tree-shaking optimisé" },
      { type: "added", description: "6 nouveaux blocks (Auth2FA, ChatInterface, CheckoutFlow, etc.)" },
      { type: "added", description: "WakaAdmincrumb - Fil d'ariane pour interfaces admin" },
      { type: "changed", description: "Migration vers React 19 et Next.js 15" },
      { type: "changed", description: "Refonte complète du système de theming" },
      { type: "changed", description: "API unifiée pour tous les composants de formulaire" },
      { type: "deprecated", description: "Anciens hooks useTheme v1 (utiliser useTheme v2)" },
      { type: "removed", description: "Support de React 17" },
    ],
  },
  {
    version: "1.2.0",
    date: "2025-11-15",
    type: "minor",
    changes: [
      { type: "added", description: "WakaCommandBar - Palette de commandes style VS Code" },
      { type: "added", description: "WakaSpotlight - Recherche globale avec raccourcis" },
      { type: "added", description: "WakaDock - Dock macOS-style pour navigation" },
      { type: "added", description: "Support des animations Framer Motion v11" },
      { type: "changed", description: "Amélioration de l'accessibilité (WCAG 2.1 AA)" },
    ],
  },
  {
    version: "1.1.2",
    date: "2025-10-28",
    type: "patch",
    changes: [
      { type: "fixed", description: "DataTableAdvanced - Correction du tri multi-colonnes" },
      { type: "fixed", description: "WakaModal - Focus trap sur les modales imbriquées" },
      { type: "fixed", description: "Correction des styles CSS pour Safari 17" },
    ],
  },
  {
    version: "1.1.1",
    date: "2025-10-15",
    type: "patch",
    changes: [
      { type: "fixed", description: "WakaCarousel - Correction du swipe sur iOS" },
      { type: "fixed", description: "ThemeProvider - SSR hydration mismatch" },
      { type: "changed", description: "Optimisation du bundle size (-15%)" },
    ],
  },
  {
    version: "1.1.0",
    date: "2025-10-01",
    type: "minor",
    changes: [
      { type: "added", description: "WakaKanban - Board Kanban avec drag & drop" },
      { type: "added", description: "WakaTimeline - Composant timeline interactif" },
      { type: "added", description: "WakaStat - Cartes de statistiques animées" },
      { type: "added", description: "WakaVirtualList - Liste virtualisée haute performance" },
      { type: "added", description: "Support de pnpm et bun comme gestionnaires de paquets" },
      { type: "changed", description: "Migration vers Radix UI v2" },
    ],
  },
  {
    version: "1.0.12",
    date: "2025-09-15",
    type: "patch",
    changes: [
      { type: "fixed", description: "WakaTree - Expansion des nœuds avec clavier" },
      { type: "fixed", description: "WakaCombobox - Recherche avec caractères spéciaux" },
      { type: "security", description: "Mise à jour de dépendances (CVE-2025-XXXX)" },
    ],
  },
  {
    version: "1.0.11",
    date: "2025-08-28",
    type: "patch",
    changes: [
      { type: "fixed", description: "WakaNumberInput - Gestion des valeurs décimales" },
      { type: "fixed", description: "WakaDateRangePicker - Sélection sur fuseaux horaires" },
      { type: "changed", description: "Amélioration des messages d'erreur TypeScript" },
    ],
  },
  {
    version: "1.0.10",
    date: "2025-08-15",
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
            v2.3.4
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
              <Button asChild>
                <a
                  href="https://github.com/wakastellar/ui/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitCommit className="h-4 w-4 mr-2" />
                  Voir sur GitHub
                </a>
              </Button>
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
          <Card>
            <CardHeader className="pb-2">
              <Badge className={versionTypeConfig.major.color}>Major (X.0.0)</Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription>
                Changements incompatibles avec les versions précédentes. Migration peut être nécessaire.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Badge className={versionTypeConfig.minor.color}>Minor (0.X.0)</Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription>
                Nouvelles fonctionnalités rétro-compatibles. Mise à jour sans risque.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Badge className={versionTypeConfig.patch.color}>Patch (0.0.X)</Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription>
                Corrections de bugs et petites améliorations. Mise à jour recommandée.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  )
}
