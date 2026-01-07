"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { use, Suspense, useState } from "react"
import { getBlockBySlug, blocks, blockCategories, type BlockCategory } from "@/config/blocks"
import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"
import { blockPreviews } from "./block-previews"
import {
  Badge,
  Button,
  Skeleton,
  Separator,
} from "@wakastellar/ui"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Eye,
  Code2,
  Layers,
  BookOpen,
  LayoutDashboard,
  LogIn,
  Navigation,
  Database,
  Megaphone,
  MessageCircle,
  Wrench,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Map des icônes par catégorie
const categoryIcons: Record<BlockCategory, React.ReactNode> = {
  Layout: <LayoutDashboard className="h-4 w-4" />,
  Authentication: <LogIn className="h-4 w-4" />,
  Navigation: <Navigation className="h-4 w-4" />,
  "Data Management": <Database className="h-4 w-4" />,
  Marketing: <Megaphone className="h-4 w-4" />,
  Communication: <MessageCircle className="h-4 w-4" />,
  Utilities: <Wrench className="h-4 w-4" />,
}

interface BlockPageProps {
  params: Promise<{ slug: string }>
}

const blockExamples: Record<string, { code: string; usage: string }> = {
  layout: {
    code: `import { Layout } from "@wakastellar/ui"

export default function App() {
  return (
    <Layout
      header={<Header />}
      sidebar={<Sidebar />}
      footer={<Footer />}
    >
      <main>Contenu principal</main>
    </Layout>
  )
}`,
    usage: `La Layout fournit une structure de page complète avec header, sidebar et footer optionnels.`,
  },
  sidebar: {
    code: `import { WakaSidebar } from "@wakastellar/ui"

const navigation = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Utilisateurs",
    icon: Users,
    href: "/users",
  },
]

export function AppSidebar() {
  return (
    <WakaSidebar
      menu={navigation}
      onNavigate={(href) => router.push(href)}
    />
  )
}`,
    usage: `WakaSidebar crée une barre latérale de navigation avec support pour les sous-menus et l'état collapsé.`,
  },
  login: {
    code: `import { Login } from "@wakastellar/ui"

export default function LoginPage() {
  return (
    <Login
      onSubmit={async (data) => {
        console.log(data.email, data.password)
      }}
      onGoogleLogin={() => signInWithGoogle()}
      onGithubLogin={() => signInWithGithub()}
      forgotPasswordHref="/forgot-password"
      registerHref="/register"
    />
  )
}`,
    usage: `Le block Login fournit une page de connexion complète avec formulaire, SSO et liens utiles.`,
  },
  footer: {
    code: `import { Footer } from "@wakastellar/ui"

export function AppFooter() {
  return (
    <Footer
      columns={[
        {
          title: "Produit",
          links: [
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
          ],
        },
        {
          title: "Ressources",
          links: [
            { label: "Documentation", href: "/docs" },
            { label: "Blog", href: "/blog" },
          ],
        },
      ]}
      copyright="© 2024 WakaStellar. Tous droits réservés."
      socialLinks={{
        twitter: "https://twitter.com",
        github: "https://github.com",
      }}
    />
  )
}`,
    usage: `Le Footer affiche des colonnes de liens, le copyright et les réseaux sociaux.`,
  },
  headtab: {
    code: `import { Headtab } from "@wakastellar/ui"

export function PageHeader() {
  return (
    <Headtab
      items={[
        { id: "overview", label: "Vue d'ensemble" },
        { id: "analytics", label: "Analytiques" },
        { id: "settings", label: "Paramètres" },
      ]}
      defaultActiveId="overview"
      onTabChange={(tab) => console.log(tab)}
      actions={
        <Button>Nouvelle action</Button>
      }
    />
  )
}`,
    usage: `Headtab combine un en-tête avec une navigation par onglets et des actions.`,
  },
  "sidebar-layout": {
    code: `import { SidebarLayout } from "@wakastellar/ui"

export default function DashboardLayout({ children }) {
  return (
    <SidebarLayout
      sidebar={<AppSidebar />}
      header={<AppHeader />}
      defaultCollapsed={false}
    >
      {children}
    </SidebarLayout>
  )
}`,
    usage: `SidebarLayout gère automatiquement l'état de la sidebar et le layout responsive.`,
  },
  "theme-creator-block": {
    code: `// Ce composant est en cours de refactorisation
// import { WakaThemeCreatorBlock, defaultThemes } from "@wakastellar/ui"`,
    usage: `WakaThemeCreatorBlock est en cours de refactorisation pour correspondre à la nouvelle API du ThemeProvider.`,
  },
  header: {
    code: `import { WakaHeader } from "@wakastellar/ui"
import { Users, Building, Network } from "lucide-react"

export function AppHeader() {
  const [search, setSearch] = useState("")
  const [partnerFilter, setPartnerFilter] = useState("all")

  return (
    <WakaHeader
      title="Partenaires"
      primaryAction={{
        id: "create",
        label: "Création rapide",
        onClick: () => console.log("Créer"),
      }}
      searchPlaceholder="Rechercher..."
      searchValue={search}
      onSearchChange={setSearch}
      filters={[
        {
          id: "partners",
          label: "Tous les partenaires",
          icon: <Users className="h-4 w-4" />,
          options: [
            { value: "all", label: "Tous les partenaires" },
            { value: "active", label: "Partenaires actifs" },
          ],
          value: partnerFilter,
          onChange: setPartnerFilter,
        },
      ]}
      notifications={[
        { id: "1", title: "Nouveau partenaire", description: "Jean Dupont a rejoint", time: "Il y a 5 min" },
      ]}
      unreadCount={3}
      userMenu={{
        name: "John Doe",
        email: "john@example.com",
        initials: "JD",
        items: [
          { label: "Mon profil", onClick: () => {} },
          { label: "Déconnexion", onClick: () => {} },
        ],
      }}
    />
  )
}`,
    usage: `WakaHeader est un header d'application entièrement personnalisable avec bouton d'action, recherche, filtres, notifications et menu utilisateur.`,
  },
  dashboard: {
    code: `import { WakaDashboard } from "@wakastellar/ui"
import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react"

export default function DashboardPage() {
  return (
    <WakaDashboard
      title="Tableau de bord"
      description="Vue d'ensemble de votre activité"
      stats={[
        {
          id: "revenue",
          label: "Revenus",
          value: "€45,231",
          trend: "up",
          trendValue: "+20.1%",
          icon: <DollarSign className="h-4 w-4" />,
          color: "primary",
        },
        {
          id: "users",
          label: "Utilisateurs",
          value: "2,350",
          trend: "up",
          trendValue: "+180",
          icon: <Users className="h-4 w-4" />,
          color: "blue",
        },
      ]}
      charts={[
        {
          id: "revenue-chart",
          title: "Revenus mensuels",
          description: "Évolution sur les 6 derniers mois",
          chart: <MyRevenueChart />,
        },
      ]}
      activities={[
        {
          id: "1",
          title: "Nouvelle commande",
          description: "Commande #1234 reçue",
          timestamp: new Date(),
          type: "success",
        },
      ]}
    />
  )
}`,
    usage: `WakaDashboard fournit un tableau de bord complet avec statistiques, graphiques, tableaux et activité récente. Les stats supportent les tendances et couleurs personnalisées.`,
  },
  settings: {
    code: `import { WakaSettings } from "@wakastellar/ui"
import { User, Bell, Shield } from "lucide-react"

export default function SettingsPage() {
  const [values, setValues] = useState({
    username: "john_doe",
    email: "john@example.com",
    notifications: true,
  })

  return (
    <WakaSettings
      title="Paramètres"
      description="Gérez les paramètres de votre compte"
      useTabs
      defaultTab="profile"
      tabs={[
        {
          id: "profile",
          label: "Profil",
          icon: <User className="h-4 w-4" />,
          sections: [
            {
              id: "general",
              title: "Informations générales",
              fields: [
                { id: "username", label: "Nom d'utilisateur", type: "text", value: values.username },
                { id: "email", label: "Email", type: "email", value: values.email },
              ],
            },
          ],
        },
      ]}
      values={values}
      onChange={(fieldId, value) => setValues({ ...values, [fieldId]: value })}
      onSave={async (vals) => console.log("Saving:", vals)}
    />
  )
}`,
    usage: `WakaSettings permet de créer des pages de paramètres organisées en tabs et sections, avec différents types de champs (text, email, switch, select, textarea).`,
  },
  profile: {
    code: `import { WakaProfile } from "@wakastellar/ui"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    displayName: "John Doe",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    bio: "Développeur passionné",
    avatarUrl: "/avatar.jpg",
  })

  return (
    <WakaProfile
      profile={profile}
      editable
      onSave={async (data) => {
        console.log("Saving profile:", data)
        setProfile(data)
      }}
      onAvatarUpload={async (file) => {
        const url = URL.createObjectURL(file)
        return url
      }}
      showStats
      stats={[
        { label: "Projets", value: "23" },
        { label: "Contributions", value: "142" },
      ]}
    />
  )
}`,
    usage: `WakaProfile affiche et permet de modifier un profil utilisateur complet avec avatar, informations personnelles, liens sociaux et statistiques.`,
  },
  "user-management": {
    code: `import { WakaUserManagement } from "@wakastellar/ui"

export default function UsersPage() {
  const [users, setUsers] = useState([
    {
      id: "1",
      email: "john@example.com",
      displayName: "John Doe",
      role: "admin",
      status: "active",
    },
  ])

  return (
    <WakaUserManagement
      users={users}
      roles={[
        { id: "admin", label: "Admin" },
        { id: "user", label: "User" },
      ]}
      onCreate={async (data) => console.log("Creating user:", data)}
      onEdit={async (userId, data) => console.log("Updating:", userId)}
      onDelete={async (userId) => console.log("Deleting:", userId)}
      showBulkActions
      showFilters
      showSearch
    />
  )
}`,
    usage: `WakaUserManagement fournit une interface complète de gestion des utilisateurs avec CRUD, gestion des rôles, statuts, filtres et actions en masse.`,
  },
  "error-pages": {
    code: `import { WakaErrorPage } from "@wakastellar/ui"

// Page 404
export function NotFoundPage() {
  return (
    <WakaErrorPage
      type="404"
      showHomeButton
      homeUrl="/"
      showBackButton
      onBack={() => window.history.back()}
    />
  )
}

// Page 500
export function ServerErrorPage() {
  return (
    <WakaErrorPage
      type="500"
      showRefreshButton
      showHomeButton
    />
  )
}`,
    usage: `WakaErrorPage affiche des pages d'erreur personnalisables (404, 500, 403, maintenance, offline) avec illustrations et actions configurables.`,
  },
  landing: {
    code: `import { WakaLanding } from "@wakastellar/ui"
import { Zap, Shield, Globe } from "lucide-react"

export default function LandingPage() {
  return (
    <WakaLanding
      brandName="WakaStellar"
      logo={<Logo />}
      navItems={[
        { label: "Fonctionnalités", href: "#features" },
        { label: "Tarifs", href: "#pricing" },
      ]}
      hero={{
        badge: "Nouveau",
        title: "Construisez des applications",
        highlightedTitle: "plus rapidement",
        description: "Une bibliothèque de composants React moderne.",
        primaryButtonText: "Commencer",
        primaryButtonHref: "/signup",
      }}
      features={[
        {
          id: "fast",
          icon: <Zap className="h-6 w-6" />,
          title: "Ultra rapide",
          description: "Performance optimisée.",
        },
      ]}
    />
  )
}`,
    usage: `WakaLanding crée une page d'accueil marketing complète avec navbar, hero, features, témoignages et CTA final.`,
  },
  pricing: {
    code: `import { WakaPricing } from "@wakastellar/ui"

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState("monthly")

  return (
    <WakaPricing
      title="Tarification simple"
      showBillingToggle
      billingPeriod={billingPeriod}
      onBillingPeriodChange={setBillingPeriod}
      plans={[
        {
          id: "free",
          name: "Gratuit",
          price: 0,
          features: [
            { name: "5 projets", included: true },
          ],
          buttonText: "Commencer",
        },
        {
          id: "pro",
          name: "Pro",
          price: 29,
          popular: true,
          features: [
            { name: "Projets illimités", included: true },
          ],
          buttonText: "Essayer",
        },
      ]}
    />
  )
}`,
    usage: `WakaPricing affiche une grille de tarification avec toggle mensuel/annuel, plan populaire mis en avant, et FAQ intégrée.`,
  },
  "empty-states": {
    code: `import { WakaEmptyState } from "@wakastellar/ui"
import { Plus, Search } from "lucide-react"

export function NoDataState() {
  return (
    <WakaEmptyState
      type="no-data"
      title="Aucune donnée"
      description="Commencez par ajouter votre premier élément."
      actions={[
        {
          label: "Ajouter",
          icon: <Plus className="h-4 w-4" />,
          onClick: () => console.log("Add clicked"),
        },
      ]}
    />
  )
}`,
    usage: `WakaEmptyState affiche des états vides réutilisables avec types prédéfinis (no-data, no-results, no-files, etc.) et actions personnalisables.`,
  },
  wizard: {
    code: `import { WakaWizard } from "@wakastellar/ui"

export default function OnboardingWizard() {
  return (
    <WakaWizard
      title="Configuration du compte"
      steps={[
        {
          id: "profile",
          title: "Profil",
          content: <ProfileStep />,
          validate: () => formData.name && formData.email,
        },
        {
          id: "preferences",
          title: "Préférences",
          content: <PreferencesStep />,
          optional: true,
        },
      ]}
      onSubmit={async (data) => console.log("Done:", data)}
      showProgress
      showStepper
    />
  )
}`,
    usage: `WakaWizard crée des assistants multi-étapes avec validation, étapes optionnelles, barre de progression et confirmation d'annulation.`,
  },
  faq: {
    code: `import { WakaFAQ } from "@wakastellar/ui"

export default function FAQPage() {
  return (
    <WakaFAQ
      title="Questions fréquentes"
      items={[
        {
          id: "1",
          question: "Comment créer un compte ?",
          answer: "Cliquez sur 'S'inscrire' en haut à droite.",
          category: "getting-started",
        },
      ]}
      categories={[
        { id: "getting-started", name: "Démarrage" },
      ]}
      showSearch
      showCategoryFilter
    />
  )
}`,
    usage: `WakaFAQ affiche une section FAQ avec accordéon, recherche, filtres par catégorie et feedback utilisateur.`,
  },
  "activity-timeline": {
    code: `import { WakaActivityTimeline } from "@wakastellar/ui"

export default function ActivityPage() {
  return (
    <WakaActivityTimeline
      title="Activité récente"
      activities={[
        {
          id: "1",
          type: "created",
          title: "Projet créé",
          user: { id: "1", name: "John Doe" },
          timestamp: new Date(),
        },
      ]}
      showSearch
      showFilters
      groupByDay
    />
  )
}`,
    usage: `WakaActivityTimeline affiche un flux d'activité chronologique avec filtres, recherche, groupement par jour et pagination.`,
  },
  "kanban-board": {
    code: `import { WakaKanbanBoard } from "@wakastellar/ui"

export default function KanbanPage() {
  const columns = [
    {
      id: "backlog",
      title: "Backlog",
      cards: [
        {
          id: "1",
          title: "Implémenter l'auth",
          priority: "high",
        },
      ],
    },
    {
      id: "in-progress",
      title: "En cours",
      cards: [],
    },
  ]

  return (
    <WakaKanbanBoard
      columns={columns}
      onCardMove={(cardId, from, to) => console.log("Move")}
      showAddCard
      showPriority
    />
  )
}`,
    usage: `WakaKanbanBoard crée un tableau Kanban complet avec drag & drop, priorités, labels, assignés, dates limites et gestion des colonnes.`,
  },
  chat: {
    code: `import { WakaChat } from "@wakastellar/ui"

export default function ChatPage() {
  const currentUser = { id: "1", name: "John Doe" }

  return (
    <WakaChat
      currentUser={currentUser}
      conversations={[
        {
          id: "1",
          participants: [currentUser, { id: "2", name: "Jane" }],
          lastMessage: { content: "Salut !" },
        },
      ]}
      messages={[
        { id: "1", content: "Salut !", sender: { id: "2", name: "Jane" }, timestamp: new Date() },
      ]}
      onSendMessage={(content) => console.log("Send:", content)}
    />
  )
}`,
    usage: `WakaChat fournit une interface de messagerie complète avec liste de conversations, bulles de messages, statuts, réponses et appels audio/vidéo.`,
  },
  "calendar-view": {
    code: `import { WakaCalendarView } from "@wakastellar/ui"

export default function CalendarPage() {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Réunion d'équipe",
      start: new Date(2024, 0, 15, 10, 0),
      end: new Date(2024, 0, 15, 11, 30),
      color: "blue",
    },
  ])

  return (
    <WakaCalendarView
      events={events}
      onEventClick={(event) => console.log("Click:", event)}
      onEventCreate={(event) => setEvents([...events, event])}
      showHeader
      showViewSelector
    />
  )
}`,
    usage: `WakaCalendarView affiche un calendrier avec vues mois/semaine/jour/agenda, événements colorés, création/modification d'événements et navigation.`,
  },
  "file-manager": {
    code: `import { WakaFileManager } from "@wakastellar/ui"

export default function FilesPage() {
  const [files, setFiles] = useState([
    {
      id: "1",
      name: "Documents",
      type: "folder",
      path: "/Documents",
    },
    {
      id: "2",
      name: "rapport.pdf",
      type: "document",
      size: 2048000,
    },
  ])

  return (
    <WakaFileManager
      files={files}
      currentPath="/"
      onNavigate={(path) => console.log("Navigate:", path)}
      onFileOpen={(file) => console.log("Open:", file)}
      showBreadcrumb
      showSearch
      multiSelect
    />
  )
}`,
    usage: `WakaFileManager fournit un gestionnaire de fichiers complet avec vues grille/liste, breadcrumb, sélection multiple, upload/download et actions sur fichiers.`,
  },
}

function PreviewFallback() {
  return (
    <div className="border rounded-lg p-8">
      <Skeleton className="h-64 w-full" />
    </div>
  )
}

export default function BlockPage({ params }: BlockPageProps) {
  const { slug } = use(params)
  const block = getBlockBySlug(slug)
  const [copied, setCopied] = useState(false)

  if (!block) {
    return notFound()
  }

  // Trouver le block précédent et suivant dans la même catégorie
  const categoryBlocks = blocks.filter((b) => b.category === block.category)
  const currentIndex = categoryBlocks.findIndex((b) => b.slug === slug)
  const prevBlock = currentIndex > 0 ? categoryBlocks[currentIndex - 1] : null
  const nextBlock = currentIndex < categoryBlocks.length - 1 ? categoryBlocks[currentIndex + 1] : null

  const example = blockExamples[slug]
  const PreviewComponent = blockPreviews[slug]

  const importCode = `import { ${block.name} } from "@wakastellar/ui"`

  const copyImport = async () => {
    await navigator.clipboard.writeText(importCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Table des matières
  const toc = [
    ...(PreviewComponent ? [{ id: "preview", label: "Preview", icon: <Eye className="h-3.5 w-3.5" /> }] : []),
    { id: "features", label: "Fonctionnalités", icon: <Layers className="h-3.5 w-3.5" /> },
    ...(example ? [
      { id: "usage", label: "Utilisation", icon: <BookOpen className="h-3.5 w-3.5" /> },
      { id: "code", label: "Code", icon: <Code2 className="h-3.5 w-3.5" /> },
    ] : []),
  ]

  const categoryInfo = blockCategories.find((c) => c.id === block.category)

  return (
    <div className="flex gap-10">
      {/* Main Content */}
      <article className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/blocks" className="hover:text-foreground transition-colors">
            Blocks
          </Link>
          <span>/</span>
          <Link
            href={`/blocks?category=${encodeURIComponent(block.category)}`}
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            {categoryIcons[block.category]}
            {categoryInfo?.label || block.category}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{block.name}</span>
        </nav>

        {/* Header */}
        <header className="mb-10 pb-6 border-b">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-4xl font-bold tracking-tight">{block.name}</h1>
                <Badge variant="outline" className="text-xs font-normal">
                  <span className="flex items-center gap-1">
                    {categoryIcons[block.category]}
                    {categoryInfo?.label || block.category}
                  </span>
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {block.features.length} fonctionnalités
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {block.description}
              </p>
            </div>
          </div>

          {/* Quick Import */}
          <div className="mt-6 flex items-center gap-3 p-3 rounded-lg bg-muted/50 border">
            <code className="flex-1 text-sm font-mono text-muted-foreground">
              {importCode}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyImport}
              className="shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-1 text-green-500" />
                  Copié
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-1" />
                  Copier
                </>
              )}
            </Button>
          </div>
        </header>

        {/* Preview Section */}
        {PreviewComponent && (
          <Section id="preview" title="Preview">
            <Suspense fallback={<PreviewFallback />}>
              <PreviewComponent />
            </Suspense>
          </Section>
        )}

        {/* Features Section */}
        <Section id="features" title="Fonctionnalités">
          <div className="grid gap-3 sm:grid-cols-2">
            {block.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg border bg-muted/20"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Usage Section */}
        {example && (
          <>
            <Section id="usage" title="Utilisation">
              <p className="text-muted-foreground">{example.usage}</p>
            </Section>

            <Section id="code" title="Exemple de code">
              <CodeBlock code={example.code} language="tsx" />
            </Section>
          </>
        )}

        {/* Navigation */}
        <Separator className="my-10" />
        <nav className="flex items-center justify-between gap-4">
          {prevBlock ? (
            <Link
              href={`/blocks/${prevBlock.slug}`}
              className="group flex items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 hover:border-primary/20 transition-all flex-1 max-w-xs"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Précédent</div>
                <div className="font-medium truncate group-hover:text-primary transition-colors">
                  {prevBlock.name}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextBlock ? (
            <Link
              href={`/blocks/${nextBlock.slug}`}
              className="group flex items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 hover:border-primary/20 transition-all flex-1 max-w-xs justify-end text-right"
            >
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Suivant</div>
                <div className="font-medium truncate group-hover:text-primary transition-colors">
                  {nextBlock.name}
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>

      {/* Table of Contents - Sidebar */}
      <aside className="hidden xl:block w-56 shrink-0">
        <div className="sticky top-24 space-y-4">
          <h4 className="text-sm font-semibold">Sur cette page</h4>
          <nav className="space-y-1">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>

          <Separator />

          {/* Related Blocks */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold flex items-center gap-2">
              {categoryIcons[block.category]}
              {categoryInfo?.label || block.category}
            </h4>
            <nav className="space-y-1">
              {categoryBlocks.slice(0, 5).map((b) => (
                <Link
                  key={b.slug}
                  href={`/blocks/${b.slug}`}
                  className={cn(
                    "block px-3 py-1.5 text-sm rounded-md transition-colors",
                    b.slug === slug
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {b.name}
                </Link>
              ))}
              {categoryBlocks.length > 5 && (
                <Link
                  href={`/blocks?category=${encodeURIComponent(block.category)}`}
                  className="block px-3 py-1.5 text-sm text-primary hover:underline"
                >
                  Voir les {categoryBlocks.length - 5} autres...
                </Link>
              )}
            </nav>
          </div>
        </div>
      </aside>
    </div>
  )
}
