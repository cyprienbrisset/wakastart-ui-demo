"use client"

import { useState } from "react"
import {
  // Layout blocks
  Footer,
  Headtab,
  Layout,
  Login,
  WakaSidebar,
  SidebarLayout,
  WakaHeader,
  // Feature blocks
  WakaDashboard,
  defaultDashboardStats,
  WakaSettings,
  defaultSettingsTabs,
  WakaProfile,
  defaultProfileData,
  WakaUserManagement,
  defaultUsers,
  WakaErrorPage,
  WakaLanding,
  defaultLandingNavItems,
  defaultLandingFeatures,
  defaultLandingTestimonials,
  defaultLandingHero,
  defaultLandingCTA,
  WakaPricing,
  defaultPricingPlans,
  defaultPricingFAQ,
  WakaEmptyState,
  WakaWizard,
  defaultWizardSteps,
  WakaFAQ,
  defaultFAQCategories,
  defaultFAQItems,
  WakaActivityTimeline,
  defaultActivityFilters,
  defaultActivities,
  WakaKanbanBoard,
  defaultKanbanColumns,
  WakaChat,
  WakaChatWidget,
  useChatWidget,
  defaultChatUser,
  defaultChatConversations,
  defaultChatMessages,
  WakaCalendarView,
  defaultCalendarEvents,
  WakaFileManager,
  defaultFiles,
  WakaI18nEditor,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  // New blocks
  DashboardKPI,
  defaultKPIMetrics,
  defaultGoals,
  CheckoutFlow,
  defaultCartItems,
  defaultShippingMethods,
  defaultPaymentMethods,
  PlayerProfile,
  defaultPlayerStats,
  defaultAchievements,
  defaultBadges,
  defaultMatchHistory,
  Auth2FA,
  ChatInterface,
  defaultChatInterfaceUsers,
  defaultChatInterfaceConversations,
  defaultChatInterfaceMessages,
  DeploymentDashboard,
  defaultDeployments,
  defaultPipelines,
  defaultEnvironments,
} from "@wakastellar/ui"
import { Home, Users, Settings, FileText, Bell, Shield, CreditCard, Mail, Calendar, DollarSign, ShoppingCart, Activity, Folder, ChevronRight, Twitter, Github, Plus, Search, Upload, Zap, Globe } from "lucide-react"

// Preview wrapper without scroll
function PreviewWrapper({ children, fullWidth = false }: { children: React.ReactNode, fullWidth?: boolean }) {
  return (
    <div className={`border rounded-lg overflow-hidden bg-background ${fullWidth ? 'w-full' : ''}`}>
      {children}
    </div>
  )
}

// Layout Preview
export function LayoutPreview() {
  return (
    <PreviewWrapper>
      <div className="flex flex-col h-[300px]">
        <header className="h-14 border-b bg-card flex items-center px-4">
          <span className="font-semibold">Header</span>
        </header>
        <div className="flex flex-1">
          <aside className="w-48 border-r bg-card p-4 hidden md:block">
            <span className="text-sm text-muted-foreground">Sidebar</span>
          </aside>
          <main className="flex-1 p-4">
            <p className="text-muted-foreground">Contenu principal</p>
          </main>
        </div>
        <footer className="h-12 border-t bg-card flex items-center justify-center">
          <span className="text-sm text-muted-foreground">Footer</span>
        </footer>
      </div>
    </PreviewWrapper>
  )
}

// Sidebar Preview
export function SidebarPreview() {
  const navigation = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="h-4 w-4" />, href: "#" },
    { id: "users", label: "Utilisateurs", icon: <Users className="h-4 w-4" />, href: "#" },
    { id: "settings", label: "Paramètres", icon: <Settings className="h-4 w-4" />, href: "#" },
    { id: "documents", label: "Documents", icon: <FileText className="h-4 w-4" />, href: "#" },
  ]

  return (
    <PreviewWrapper>
      <WakaSidebar
        menu={navigation}
        header={<div className="flex items-center gap-2 px-2"><div className="w-6 h-6 bg-primary rounded" /><span className="font-semibold">WakaStellar</span></div>}
        user={{ name: "John Doe", email: "john@example.com", initials: "JD" }}
        position="relative"
      />
    </PreviewWrapper>
  )
}

// Login Preview
export function LoginPreview() {
  return (
    <PreviewWrapper>
      <div className="p-4">
        <Login
          onSubmit={(data) => console.log(data)}
          onForgotPassword={() => console.log("Forgot password")}
          onSignUp={() => console.log("Sign up")}
          onSSOGoogle={() => console.log("Google SSO")}
          onSSOGithub={() => console.log("GitHub SSO")}
          showSocialLogin={true}
        />
      </div>
    </PreviewWrapper>
  )
}

// Footer Preview
export function FooterPreview() {
  return (
    <PreviewWrapper>
      <Footer
        columns={[
          {
            title: "Produit",
            links: [
              { label: "Features", href: "#" },
              { label: "Pricing", href: "#" },
            ],
          },
          {
            title: "Ressources",
            links: [
              { label: "Documentation", href: "#" },
              { label: "Blog", href: "#" },
            ],
          },
        ]}
        copyright="© 2024 WakaStellar. Tous droits réservés."
        socialLinks={[
          { platform: "twitter", url: "#" },
          { platform: "github", url: "#" },
        ]}
      />
    </PreviewWrapper>
  )
}

// Headtab Preview
export function HeadtabPreview() {
  return (
    <PreviewWrapper>
      <Headtab
        items={[
          { id: "overview", label: "Vue d'ensemble" },
          { id: "analytics", label: "Analytiques" },
          { id: "settings", label: "Paramètres" },
        ]}
        defaultActiveId="overview"
        onTabChange={(id) => console.log("Tab changed:", id)}
        variant="underline"
      />
    </PreviewWrapper>
  )
}

// SidebarLayout Preview
export function SidebarLayoutPreview() {
  return (
    <PreviewWrapper>
      <div className="flex h-[350px]">
        <div className="w-56 border-r bg-card p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded bg-accent">
              <Home className="h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded hover:bg-accent/50">
              <Users className="h-4 w-4" />
              <span className="text-sm">Users</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded hover:bg-accent/50">
              <Settings className="h-4 w-4" />
              <span className="text-sm">Settings</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <header className="h-14 border-b flex items-center px-4 justify-between">
            <span className="font-medium">Dashboard</span>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </header>
          <main className="p-4">
            <p className="text-muted-foreground">Contenu avec sidebar layout</p>
          </main>
        </div>
      </div>
    </PreviewWrapper>
  )
}

// Header Preview
export function HeaderPreview() {
  const [search, setSearch] = useState("")

  return (
    <PreviewWrapper>
      <WakaHeader
        title="Partenaires"
        primaryAction={{
          id: "create",
          label: "Nouveau",
          onClick: () => console.log("Create"),
        }}
        searchPlaceholder="Rechercher..."
        searchValue={search}
        onSearchChange={setSearch}
        unreadCount={3}
        userMenu={{
          name: "John Doe",
          email: "john@example.com",
          initials: "JD",
          items: [
            { label: "Profil", onClick: () => {} },
            { label: "Déconnexion", onClick: () => {} },
          ],
        }}
      />
    </PreviewWrapper>
  )
}

// Dashboard Preview
export function DashboardPreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
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
            {
              id: "orders",
              label: "Commandes",
              value: "12,234",
              trend: "down",
              trendValue: "-4.3%",
              icon: <ShoppingCart className="h-4 w-4" />,
              color: "warning",
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
            {
              id: "2",
              title: "Utilisateur inscrit",
              description: "john@example.com",
              timestamp: new Date(Date.now() - 3600000),
              type: "info",
            },
          ]}
        />
      </div>
    </PreviewWrapper>
  )
}

// Settings Preview
export function SettingsPreview() {
  const [values, setValues] = useState({
    username: "john_doe",
    email: "john@example.com",
    notifications: true,
  })

  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <WakaSettings
          title="Paramètres"
          description="Gérez votre compte"
          useTabs
          defaultTab="profile"
          tabs={[
            {
              id: "profile",
              label: "Profil",
              icon: <Users className="h-4 w-4" />,
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
            {
              id: "notifications",
              label: "Notifications",
              icon: <Bell className="h-4 w-4" />,
              sections: [
                {
                  id: "email-notifs",
                  title: "Notifications email",
                  fields: [
                    { id: "notifications", label: "Activer les notifications", type: "switch", value: values.notifications },
                  ],
                },
              ],
            },
          ]}
          values={values}
          onChange={(fieldId, value) => setValues({ ...values, [fieldId]: value })}
          onSave={async () => console.log("Saved")}
        />
      </div>
    </PreviewWrapper>
  )
}

// Profile Preview
export function ProfilePreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <WakaProfile
          profile={{
            displayName: "John Doe",
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            phone: "+33 6 12 34 56 78",
            bio: "Développeur passionné",
            role: "Développeur Senior",
            company: "Acme Corp",
            location: "Paris, France",
            joinedAt: new Date("2023-01-15"),
            socialLinks: [
              { id: "1", type: "twitter", url: "https://twitter.com/johndoe" },
              { id: "2", type: "github", url: "https://github.com/johndoe" },
            ],
          }}
          editable={false}
          showStats
          stats={[
            { label: "Projets", value: "23" },
            { label: "Contributions", value: "142" },
          ]}
          layout="card"
        />
      </div>
    </PreviewWrapper>
  )
}

// User Management Preview
export function UserManagementPreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <WakaUserManagement
          users={[
            {
              id: "1",
              email: "john@example.com",
              displayName: "John Doe",
              role: "admin",
              status: "active",
              createdAt: new Date("2023-01-15"),
            },
            {
              id: "2",
              email: "jane@example.com",
              displayName: "Jane Smith",
              role: "user",
              status: "active",
              createdAt: new Date("2023-03-20"),
            },
            {
              id: "3",
              email: "bob@example.com",
              displayName: "Bob Wilson",
              role: "moderator",
              status: "inactive",
              createdAt: new Date("2023-06-10"),
            },
          ]}
          roles={[
            { value: "admin", label: "Administrateur" },
            { value: "moderator", label: "Modérateur" },
            { value: "user", label: "Utilisateur" },
          ]}
          onCreate={async () => {}}
          onEdit={async () => {}}
          onDelete={async () => {}}
        />
      </div>
    </PreviewWrapper>
  )
}

// Error Pages Preview
export function ErrorPagesPreview() {
  return (
    <PreviewWrapper>
      <WakaErrorPage
        type="404"
        showHomeButton
        homeUrl="#"
        showBackButton
        onBack={() => {}}
      />
    </PreviewWrapper>
  )
}

// Landing Preview
export function LandingPreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="transform scale-75 origin-top-left w-[133%]">
        <WakaLanding
          brandName="WakaStellar"
          logo={<div className="w-8 h-8 bg-primary rounded-lg" />}
          navItems={[
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
          ]}
          showLoginButton
          loginButtonText="Connexion"
          onLogin={() => {}}
          hero={{
            badge: "Nouveau",
            title: "Construisez des applications",
            highlightedTitle: "plus rapidement",
            description: "Une bibliothèque de composants React moderne.",
            primaryButtonText: "Commencer",
            primaryButtonHref: "#",
            secondaryButtonText: "Documentation",
            secondaryButtonHref: "#",
          }}
          features={[
            {
              id: "fast",
              icon: <Zap className="h-6 w-6" />,
              title: "Ultra rapide",
              description: "Performance optimisée.",
            },
            {
              id: "secure",
              icon: <Shield className="h-6 w-6" />,
              title: "Sécurisé",
              description: "Sécurité intégrée.",
            },
            {
              id: "global",
              icon: <Globe className="h-6 w-6" />,
              title: "International",
              description: "Support i18n natif.",
            },
          ]}
        />
      </div>
    </PreviewWrapper>
  )
}

// Pricing Preview
export function PricingPreview() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <WakaPricing
          title="Tarification"
          description="Choisissez le plan adapté"
          showBillingToggle
          billingPeriod={billingPeriod}
          onBillingPeriodChange={setBillingPeriod}
          yearlyDiscount="20%"
          plans={[
            {
              id: "free",
              name: "Gratuit",
              description: "Pour débuter",
              price: 0,
              features: [
                { name: "5 projets", included: true },
                { name: "1 Go stockage", included: true },
                { name: "API avancée", included: false },
              ],
              buttonText: "Commencer",
              buttonVariant: "outline",
            },
            {
              id: "pro",
              name: "Pro",
              description: "Pour les équipes",
              price: 29,
              priceYearly: 23,
              popular: true,
              badge: "Populaire",
              features: [
                { name: "Projets illimités", included: true },
                { name: "100 Go stockage", included: true },
                { name: "API avancée", included: true },
              ],
              buttonText: "Essayer",
            },
          ]}
        />
      </div>
    </PreviewWrapper>
  )
}

// Empty States Preview
export function EmptyStatesPreview() {
  return (
    <PreviewWrapper>
      <div className="p-4">
        <WakaEmptyState
          illustration="inbox"
          title="Aucune donnée"
          description="Commencez par ajouter votre premier élément."
          primaryAction={{
            label: "Ajouter",
            icon: <Plus className="h-4 w-4" />,
            onClick: () => {},
          }}
        />
      </div>
    </PreviewWrapper>
  )
}

// Wizard Preview
export function WizardPreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <WakaWizard
          title="Configuration"
          description="Configurez votre compte"
          steps={[
            {
              id: "profile",
              title: "Profil",
              description: "Informations de base",
              content: (
                <div className="space-y-4">
                  <p className="text-muted-foreground">Étape 1: Remplissez votre profil</p>
                </div>
              ),
            },
            {
              id: "preferences",
              title: "Préférences",
              description: "Personnalisation",
              content: <p className="text-muted-foreground">Étape 2: Préférences</p>,
            },
            {
              id: "confirm",
              title: "Confirmation",
              description: "Vérification",
              content: <p className="text-muted-foreground">Étape 3: Confirmation</p>,
            },
          ]}
          onSubmit={async () => {}}
          showProgress
          showStepper
          layout="card"
        />
      </div>
    </PreviewWrapper>
  )
}

// FAQ Preview
export function FAQPreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <WakaFAQ
          title="Questions fréquentes"
          description="Trouvez des réponses"
          items={[
            {
              id: "1",
              question: "Comment créer un compte ?",
              answer: "Cliquez sur 'S'inscrire' et remplissez le formulaire.",
              category: "getting-started",
            },
            {
              id: "2",
              question: "Comment réinitialiser mon mot de passe ?",
              answer: "Cliquez sur 'Mot de passe oublié' sur la page de connexion.",
              category: "account",
            },
            {
              id: "3",
              question: "Quels moyens de paiement acceptez-vous ?",
              answer: "Visa, Mastercard, PayPal et virement bancaire.",
              category: "billing",
            },
          ]}
          categories={[
            { id: "getting-started", name: "Démarrage" },
            { id: "account", name: "Compte" },
            { id: "billing", name: "Facturation" },
          ]}
          showSearch
          showCategoryFilter
        />
      </div>
    </PreviewWrapper>
  )
}

// Activity Timeline Preview
export function ActivityTimelinePreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <WakaActivityTimeline
          title="Activité récente"
          activities={[
            {
              id: "1",
              type: "created",
              title: "Projet créé",
              description: "Le projet 'WakaStellar' a été créé",
              user: { id: "1", name: "John Doe" },
              timestamp: new Date(),
            },
            {
              id: "2",
              type: "commented",
              title: "Nouveau commentaire",
              description: "Commentaire sur la tâche #123",
              user: { id: "2", name: "Jane Smith" },
              timestamp: new Date(Date.now() - 3600000),
            },
            {
              id: "3",
              type: "uploaded",
              title: "Fichier uploadé",
              description: "design-v2.fig ajouté",
              user: { id: "1", name: "John Doe" },
              timestamp: new Date(Date.now() - 7200000),
            },
          ]}
          showSearch
          groupByDay
          layout="timeline"
        />
      </div>
    </PreviewWrapper>
  )
}

// Kanban Board Preview
export function KanbanBoardPreview() {
  const columns = [
    {
      id: "backlog",
      title: "Backlog",
      cards: [
        {
          id: "1",
          title: "Implémenter l'authentification",
          description: "OAuth2 avec Google",
          priority: "high" as const,
          labels: [{ id: "1", name: "Feature", color: "#3b82f6" }],
        },
      ],
    },
    {
      id: "in-progress",
      title: "En cours",
      color: "#eab308",
      cards: [
        {
          id: "2",
          title: "Design système",
          priority: "medium" as const,
          labels: [{ id: "2", name: "Design", color: "#a855f7" }],
        },
      ],
    },
    {
      id: "done",
      title: "Terminé",
      color: "#22c55e",
      cards: [],
    },
  ]

  return (
    <PreviewWrapper fullWidth>
      <div className="p-4 overflow-x-auto">
        <WakaKanbanBoard
          columns={columns}
          onColumnsChange={() => {}}
          onCardClick={() => {}}
          showAddCard
          showPriority
          showLabels
        />
      </div>
    </PreviewWrapper>
  )
}

// Chat Preview - Interactive with new features
// Using types from @wakastellar/ui
type ChatUserType = {
  id: string
  name: string
  avatar?: string
  status?: "online" | "offline" | "away" | "busy"
  lastSeen?: Date | string
}

type ChatMessageType = {
  id: string
  content: string
  sender: ChatUserType
  timestamp: Date | string
  status?: "sending" | "sent" | "delivered" | "read" | "error"
  replyTo?: ChatMessageType
  attachments?: {
    type: "image" | "file" | "audio"
    url: string
    name: string
    size?: number
  }[]
  reactions?: {
    emoji: string
    users: string[]
  }[]
  isEdited?: boolean
}

type ChatConversationType = {
  id: string
  name?: string
  participants: ChatUserType[]
  lastMessage?: ChatMessageType
  unreadCount?: number
  isGroup?: boolean
  avatar?: string
}

export function ChatPreview() {
  const currentUser: ChatUserType = { id: "1", name: "John Doe", status: "online" }

  const otherUsers: ChatUserType[] = [
    { id: "2", name: "Jane Smith", status: "online" },
    { id: "3", name: "Bob Wilson", status: "away" },
    { id: "4", name: "Alice Brown", status: "offline" },
  ]

  const [activeConversationId, setActiveConversationId] = useState("conv-1")
  const [layout, setLayout] = useState<"full" | "embedded" | "floating" | "widget">("embedded")

  // Messages with date separators (yesterday and today)
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  yesterday.setHours(14, 30, 0, 0)

  const yesterdayLater = new Date()
  yesterdayLater.setDate(yesterdayLater.getDate() - 1)
  yesterdayLater.setHours(15, 45, 0, 0)

  const initialMessages: Record<string, ChatMessageType[]> = {
    "conv-1": [
      {
        id: "msg-1",
        content: "Salut John ! Comment ça va ?",
        sender: otherUsers[0],
        timestamp: yesterday,
        status: "read",
      },
      {
        id: "msg-2",
        content: "Tu as vu le nouveau design ?",
        sender: otherUsers[0],
        timestamp: yesterdayLater,
        status: "read",
      },
      {
        id: "msg-3",
        content: "Oui, il est super ! J'adore les couleurs.",
        sender: currentUser,
        timestamp: new Date(Date.now() - 3600000),
        status: "delivered",
      },
      {
        id: "msg-4",
        content: "On se fait une réunion demain pour en discuter ?",
        sender: otherUsers[0],
        timestamp: new Date(Date.now() - 1800000),
        status: "read",
      },
    ],
    "conv-2": [
      {
        id: "msg-5",
        content: "Hey, tu es dispo pour une réunion demain ?",
        sender: otherUsers[1],
        timestamp: new Date(Date.now() - 86400000),
        status: "read",
      },
      {
        id: "msg-6",
        content: "Oui, ça me va ! 14h ?",
        sender: currentUser,
        timestamp: new Date(Date.now() - 82800000),
        status: "delivered",
      },
      {
        id: "msg-7",
        content: "Parfait, je t'envoie l'invite.",
        sender: otherUsers[1],
        timestamp: new Date(Date.now() - 79200000),
        status: "read",
      },
    ],
    "conv-3": [
      {
        id: "msg-8",
        content: "N'oublie pas d'envoyer le rapport !",
        sender: otherUsers[2],
        timestamp: new Date(Date.now() - 172800000),
        status: "read",
      },
    ],
  }

  const [messagesByConversation, setMessagesByConversation] = useState<Record<string, ChatMessageType[]>>(initialMessages)

  const [conversations, setConversations] = useState<ChatConversationType[]>([
    {
      id: "conv-1",
      participants: [currentUser, otherUsers[0]],
      lastMessage: initialMessages["conv-1"][initialMessages["conv-1"].length - 1],
      unreadCount: 2,
    },
    {
      id: "conv-2",
      participants: [currentUser, otherUsers[1]],
      lastMessage: initialMessages["conv-2"][initialMessages["conv-2"].length - 1],
      unreadCount: 0,
    },
    {
      id: "conv-3",
      participants: [currentUser, otherUsers[2]],
      lastMessage: initialMessages["conv-3"][initialMessages["conv-3"].length - 1],
      unreadCount: 0,
    },
  ])

  const activeConversation = conversations.find(c => c.id === activeConversationId)
  const currentMessages = messagesByConversation[activeConversationId] || []

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessageType = {
      id: `msg-${Date.now()}`,
      content,
      sender: currentUser,
      timestamp: new Date(),
      status: "sending",
    }

    // Add message to conversation
    setMessagesByConversation(prev => ({
      ...prev,
      [activeConversationId]: [...(prev[activeConversationId] || []), newMessage],
    }))

    // Update last message in conversations
    setConversations(prev =>
      prev.map(c =>
        c.id === activeConversationId
          ? { ...c, lastMessage: newMessage }
          : c
      )
    )

    // Simulate message status updates
    setTimeout(() => {
      setMessagesByConversation(prev => ({
        ...prev,
        [activeConversationId]: prev[activeConversationId].map(m =>
          m.id === newMessage.id ? { ...m, status: "sent" as const } : m
        ),
      }))
    }, 500)

    setTimeout(() => {
      setMessagesByConversation(prev => ({
        ...prev,
        [activeConversationId]: prev[activeConversationId].map(m =>
          m.id === newMessage.id ? { ...m, status: "delivered" as const } : m
        ),
      }))
    }, 1000)

    // Simulate auto-reply from other user
    const otherParticipant = activeConversation?.participants.find(p => p.id !== currentUser.id)
    if (otherParticipant && otherParticipant.status !== "offline") {
      setTimeout(() => {
        const replies = [
          "D'accord, je note !",
          "Super, merci !",
          "Je vais regarder ça.",
          "Parfait 👍",
          "Ok, bien reçu.",
          "Je te tiens au courant.",
        ]
        const replyContent = replies[Math.floor(Math.random() * replies.length)]

        const replyMessage: ChatMessageType = {
          id: `msg-${Date.now()}-reply`,
          content: replyContent,
          sender: otherParticipant,
          timestamp: new Date(),
          status: "delivered",
        }

        setMessagesByConversation(prev => ({
          ...prev,
          [activeConversationId]: [...prev[activeConversationId], replyMessage],
        }))

        setConversations(prev =>
          prev.map(c =>
            c.id === activeConversationId
              ? { ...c, lastMessage: replyMessage }
              : c
          )
        )
      }, 2000 + Math.random() * 2000)
    }
  }

  const handleConversationSelect = (conversation: ChatConversationType) => {
    setActiveConversationId(conversation.id)
    // Clear unread count
    setConversations(prev =>
      prev.map(c =>
        c.id === conversation.id ? { ...c, unreadCount: 0 } : c
      )
    )
  }

  const handleDeleteMessage = (messageId: string) => {
    setMessagesByConversation(prev => ({
      ...prev,
      [activeConversationId]: prev[activeConversationId].filter(m => m.id !== messageId),
    }))
  }

  // Mode selector: "chat" (embedded) or "widget" (floating bubble)
  const [mode, setMode] = useState<"chat" | "widget">("chat")
  const [widgetOpen, setWidgetOpen] = useState(false)
  // Initialize position to bottom-right of screen
  const [widgetPosition, setWidgetPosition] = useState(() => {
    if (typeof window !== "undefined") {
      return { x: window.innerWidth - 80, y: window.innerHeight - 80 }
    }
    return { x: 500, y: 500 }
  })

  // Widget customization
  const [bubbleColor, setBubbleColor] = useState<"primary" | "secondary" | "success">("primary")
  const [bubbleAnimation, setBubbleAnimation] = useState<"none" | "pulse" | "bounce">("none")
  const [widgetSize, setWidgetSize] = useState<"sm" | "md" | "lg">("md")

  return (
    <div className="space-y-4">
      {/* Mode selector */}
      <div className="flex flex-wrap items-center gap-4 p-4 bg-muted/50 rounded-lg border">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Mode :</span>
          <div className="flex gap-1">
            <Button
              variant={mode === "chat" ? "default" : "outline"}
              size="sm"
              onClick={() => setMode("chat")}
            >
              Chat intégré
            </Button>
            <Button
              variant={mode === "widget" ? "default" : "outline"}
              size="sm"
              onClick={() => setMode("widget")}
            >
              Widget flottant
            </Button>
          </div>
        </div>

        {mode === "chat" && (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Layout :</span>
            <div className="flex gap-1">
              {(["embedded", "floating"] as const).map((l) => (
                <Button
                  key={l}
                  variant={layout === l ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLayout(l)}
                >
                  {l === "embedded" ? "Embedded" : "Floating"}
                </Button>
              ))}
            </div>
          </div>
        )}

        {mode === "widget" && (
          <>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Couleur :</span>
              <div className="flex gap-1">
                {(["primary", "secondary", "success"] as const).map((c) => (
                  <Button
                    key={c}
                    variant={bubbleColor === c ? "default" : "outline"}
                    size="sm"
                    onClick={() => setBubbleColor(c)}
                  >
                    {c === "primary" ? "Primary" : c === "secondary" ? "Secondary" : "Success"}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Animation :</span>
              <div className="flex gap-1">
                {(["none", "pulse", "bounce"] as const).map((a) => (
                  <Button
                    key={a}
                    variant={bubbleAnimation === a ? "default" : "outline"}
                    size="sm"
                    onClick={() => setBubbleAnimation(a)}
                  >
                    {a === "none" ? "Aucune" : a === "pulse" ? "Pulse" : "Bounce"}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Taille :</span>
              <div className="flex gap-1">
                {(["sm", "md", "lg"] as const).map((s) => (
                  <Button
                    key={s}
                    variant={widgetSize === s ? "default" : "outline"}
                    size="sm"
                    onClick={() => setWidgetSize(s)}
                  >
                    {s.toUpperCase()}
                  </Button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {mode === "chat" ? (
        <PreviewWrapper fullWidth>
          <div className={layout === "floating" ? "flex justify-end p-4 bg-muted/30 min-h-[550px]" : ""}>
            <WakaChat
              currentUser={currentUser}
              conversations={conversations}
              messages={currentMessages}
              activeConversation={activeConversation}
              onSendMessage={handleSendMessage}
              onConversationSelect={handleConversationSelect}
              onMessageDelete={handleDeleteMessage}
              showConversationList={layout === "embedded"}
              showMessageStatus
              showTimestamps
              showHeader
              showDateSeparators
              showInputHint
              showHeaderStatus
              inputHintText="Entrée pour envoyer, Shift+Entrée pour nouvelle ligne"
              layout={layout}
              showCloseButton={layout === "floating"}
              onClose={() => console.log("Chat closed")}
            />
          </div>
        </PreviewWrapper>
      ) : (
        <>
          {/* Instructions */}
          <div className="border rounded-lg bg-gradient-to-br from-muted/30 to-muted/50 p-6 space-y-4">
            <h4 className="font-semibold text-lg">Widget Chat Flottant</h4>
            <p className="text-muted-foreground">
              La bulle de chat est positionnée en bas à droite de l&apos;écran.
              Vous pouvez <strong>glisser-déposer</strong> la bulle n&apos;importe où sur l&apos;écran.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Cliquez sur la bulle pour ouvrir le chat</li>
              <li>• Maintenez et glissez pour repositionner</li>
              <li>• La position est sauvegardée dans le localStorage</li>
              <li>• Personnalisez la couleur, l&apos;animation et la taille ci-dessus</li>
            </ul>
          </div>

          {/* Floating Bubble - Fixed position on screen */}
          <button
            onClick={() => setWidgetOpen(!widgetOpen)}
            onMouseDown={(e) => {
              e.preventDefault()
              const startX = e.clientX - widgetPosition.x
              const startY = e.clientY - widgetPosition.y

              const handleMove = (ev: MouseEvent) => {
                const newX = Math.max(16, Math.min(ev.clientX - startX, window.innerWidth - 72))
                const newY = Math.max(16, Math.min(ev.clientY - startY, window.innerHeight - 72))
                setWidgetPosition({ x: newX, y: newY })
              }

              const handleUp = () => {
                document.removeEventListener("mousemove", handleMove)
                document.removeEventListener("mouseup", handleUp)
              }

              document.addEventListener("mousemove", handleMove)
              document.addEventListener("mouseup", handleUp)
            }}
            className={`
              fixed rounded-full shadow-lg transition-all duration-200 cursor-grab active:cursor-grabbing
              flex items-center justify-center z-[9999]
              ${bubbleColor === "primary" ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
              ${bubbleColor === "secondary" ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" : ""}
              ${bubbleColor === "success" ? "bg-green-500 text-white hover:bg-green-600" : ""}
              ${bubbleAnimation === "pulse" ? "animate-pulse" : ""}
              ${bubbleAnimation === "bounce" ? "animate-bounce" : ""}
              ${widgetOpen ? "opacity-0 pointer-events-none scale-75" : ""}
              h-14 w-14
            `}
            style={{
              left: widgetPosition.x,
              top: widgetPosition.y,
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
            {/* Unread badge */}
            {conversations.reduce((acc, c) => acc + (c.unreadCount || 0), 0) > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1.5 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center text-xs font-bold">
                {conversations.reduce((acc, c) => acc + (c.unreadCount || 0), 0)}
              </span>
            )}
          </button>

          {/* Chat Widget - Fixed position */}
          {widgetOpen && (() => {
            const widgetWidth = widgetSize === "sm" ? 280 : widgetSize === "md" ? 350 : 400
            const widgetHeight = widgetSize === "sm" ? 350 : widgetSize === "md" ? 450 : 550
            const bubbleSizePx = 56
            const gap = 12

            // Position widget above and to the left of bubble
            let widgetX = widgetPosition.x - widgetWidth + bubbleSizePx
            let widgetY = widgetPosition.y - widgetHeight - gap

            // If widget would go off-screen top, position below
            if (widgetY < 16) {
              widgetY = widgetPosition.y + bubbleSizePx + gap
            }

            // If widget would go off-screen left, align to right of bubble
            if (widgetX < 16) {
              widgetX = widgetPosition.x
            }

            // If widget would go off-screen right
            if (widgetX + widgetWidth > window.innerWidth - 16) {
              widgetX = window.innerWidth - widgetWidth - 16
            }

            // If widget would go off-screen bottom
            if (widgetY + widgetHeight > window.innerHeight - 16) {
              widgetY = window.innerHeight - widgetHeight - 16
            }

            return (
              <div
                className={`
                  fixed rounded-xl shadow-2xl border bg-background overflow-hidden z-[10000]
                  animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 duration-200
                  ${widgetSize === "sm" ? "h-[350px] w-[280px]" : ""}
                  ${widgetSize === "md" ? "h-[450px] w-[350px]" : ""}
                  ${widgetSize === "lg" ? "h-[550px] w-[400px]" : ""}
                `}
                style={{
                  left: widgetX,
                  top: widgetY,
                }}
              >
                <WakaChat
                  currentUser={currentUser}
                  conversations={conversations}
                  messages={currentMessages}
                  activeConversation={activeConversation}
                  onSendMessage={handleSendMessage}
                  onConversationSelect={handleConversationSelect}
                  onMessageDelete={handleDeleteMessage}
                  showConversationList={false}
                  showMessageStatus
                  showTimestamps
                  showHeader
                  showDateSeparators
                  showInputHint={false}
                  showHeaderStatus
                  layout="widget"
                  showCloseButton
                  onClose={() => setWidgetOpen(false)}
                  onMinimize={() => setWidgetOpen(false)}
                  className="h-full"
                />
              </div>
            )
          })()}

          {/* Backdrop for mobile */}
          {widgetOpen && (
            <div
              className="fixed inset-0 bg-black/20 z-[9998] sm:hidden"
              onClick={() => setWidgetOpen(false)}
            />
          )}
        </>
      )}
    </div>
  )
}

// Calendar View Preview
export function CalendarViewPreview() {
  const [viewMode, setViewMode] = useState<"month" | "week" | "day" | "agenda">("month")
  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <WakaCalendarView
          events={[
            {
              id: "1",
              title: "Réunion d'équipe",
              description: "Sprint planning",
              start: new Date(),
              end: new Date(Date.now() + 3600000),
              color: "blue",
            },
            {
              id: "2",
              title: "Déjeuner client",
              start: new Date(Date.now() + 86400000),
              end: new Date(Date.now() + 86400000 + 7200000),
              color: "green",
            },
          ]}
          currentDate={currentDate}
          onDateChange={setCurrentDate}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onEventClick={() => {}}
          showHeader
          showViewSelector
          showAddButton
        />
      </div>
    </PreviewWrapper>
  )
}

// File Manager Preview
interface FileManagerFile {
  id: string
  name: string
  type: "folder" | "document" | "image" | "video" | "audio" | "archive" | "code" | "other"
  path: string
  parentId: string | null
  createdAt: Date
  modifiedAt: Date
  size?: number
  starred?: boolean
}

export function FileManagerPreview() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPath, setCurrentPath] = useState("/")
  const [selectedFiles, setSelectedFiles] = useState<string[]>([])
  const [files, setFiles] = useState<FileManagerFile[]>([
    {
      id: "1",
      name: "Documents",
      type: "folder" as const,
      path: "/Documents",
      parentId: null,
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
    {
      id: "2",
      name: "Images",
      type: "folder" as const,
      path: "/Images",
      parentId: null,
      createdAt: new Date(),
      modifiedAt: new Date(),
      starred: true,
    },
    {
      id: "3",
      name: "rapport-2024.pdf",
      type: "document" as const,
      size: 2048000,
      path: "/rapport-2024.pdf",
      parentId: null,
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
    {
      id: "4",
      name: "photo.jpg",
      type: "image" as const,
      size: 1024000,
      path: "/photo.jpg",
      parentId: null,
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
    {
      id: "5",
      name: "Projet.docx",
      type: "document" as const,
      size: 512000,
      path: "/Documents/Projet.docx",
      parentId: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
    {
      id: "6",
      name: "Notes.txt",
      type: "document" as const,
      size: 1024,
      path: "/Documents/Notes.txt",
      parentId: "1",
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
    {
      id: "7",
      name: "Vacances",
      type: "folder" as const,
      path: "/Images/Vacances",
      parentId: "2",
      createdAt: new Date(),
      modifiedAt: new Date(),
    },
  ])

  // Filter files based on current path
  const currentFiles = files.filter(f => {
    if (currentPath === "/") {
      return f.parentId === null
    }
    const parentFolder = files.find(folder => folder.path === currentPath)
    return parentFolder ? f.parentId === parentFolder.id : false
  })

  // Build breadcrumbs
  const buildBreadcrumbs = () => {
    if (currentPath === "/") return []
    const parts = currentPath.split("/").filter(Boolean)
    const breadcrumbs = []
    let path = ""
    for (const part of parts) {
      path += "/" + part
      breadcrumbs.push({ id: path, name: part, path })
    }
    return breadcrumbs
  }

  const handleNavigate = (path: string, folderId?: string) => {
    setCurrentPath(path)
    setSelectedFiles([])
  }

  const handleCreateFolder = (name: string, parentPath: string) => {
    const parentFolder = files.find(f => f.path === parentPath && f.type === "folder")
    const newFolder = {
      id: `folder-${Date.now()}`,
      name,
      type: "folder" as const,
      path: parentPath === "/" ? `/${name}` : `${parentPath}/${name}`,
      parentId: parentFolder?.id || null,
      createdAt: new Date(),
      modifiedAt: new Date(),
    }
    setFiles([...files, newFolder])
  }

  const handleRename = (fileId: string, newName: string) => {
    setFiles(files.map(f => {
      if (f.id === fileId) {
        const pathParts = f.path.split("/")
        pathParts[pathParts.length - 1] = newName
        return { ...f, name: newName, path: pathParts.join("/"), modifiedAt: new Date() }
      }
      return f
    }))
  }

  const handleDelete = (fileIds: string[]) => {
    // Also delete children if deleting a folder
    const toDelete = new Set(fileIds)
    const checkChildren = (parentId: string) => {
      files.forEach(f => {
        if (f.parentId === parentId) {
          toDelete.add(f.id)
          if (f.type === "folder") checkChildren(f.id)
        }
      })
    }
    fileIds.forEach(id => {
      const file = files.find(f => f.id === id)
      if (file?.type === "folder") checkChildren(id)
    })
    setFiles(files.filter(f => !toDelete.has(f.id)))
    setSelectedFiles([])
  }

  const handleToggleStar = (fileId: string) => {
    setFiles(files.map(f =>
      f.id === fileId ? { ...f, starred: !f.starred } : f
    ))
  }

  const handleFileOpen = (file: { id: string; name: string; type: string; path: string }) => {
    if (file.type === "folder") {
      setCurrentPath(file.path)
    } else {
      console.log("Opening file:", file.name)
    }
  }

  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <WakaFileManager
          files={currentFiles}
          currentPath={currentPath}
          breadcrumbs={buildBreadcrumbs()}
          selectedFiles={selectedFiles}
          onSelectionChange={setSelectedFiles}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onNavigate={handleNavigate}
          onFileOpen={handleFileOpen}
          onCreateFolder={handleCreateFolder}
          onRename={handleRename}
          onDelete={handleDelete}
          onToggleStar={handleToggleStar}
          onDownload={(ids) => console.log("Downloading:", ids)}
          onShare={(id) => console.log("Sharing:", id)}
          onRefresh={() => console.log("Refreshing...")}
          showSearch
          onSearch={(query) => console.log("Searching:", query)}
        />
      </div>
    </PreviewWrapper>
  )
}

// Theme Creator Block Preview
export function ThemeCreatorBlockPreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-8 text-center text-muted-foreground">
        <p className="text-lg font-medium">WakaThemeCreatorBlock</p>
        <p className="text-sm">Ce composant est en cours de refactorisation</p>
      </div>
    </PreviewWrapper>
  )
}

// I18n Editor Preview
interface TranslationEntry {
  key: string
  translations: Record<string, { value: string }>
}

interface I18nLanguageConfig {
  code: string
  label: string
  flag?: string
  isSource?: boolean
}

export function I18nEditorPreview() {
  const [languages, setLanguages] = useState<I18nLanguageConfig[]>([
    { code: "fr", label: "Français", flag: "🇫🇷", isSource: true },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ])

  const [translations, setTranslations] = useState<TranslationEntry[]>([
    {
      key: "common.buttons.submit",
      translations: {
        fr: { value: "Soumettre" },
        en: { value: "Submit" },
        es: { value: "Enviar" },
      },
    },
    {
      key: "common.buttons.cancel",
      translations: {
        fr: { value: "Annuler" },
        en: { value: "Cancel" },
        es: { value: "" },
      },
    },
    {
      key: "common.buttons.save",
      translations: {
        fr: { value: "Enregistrer" },
        en: { value: "Save" },
        es: { value: "Guardar" },
      },
    },
    {
      key: "auth.login.title",
      translations: {
        fr: { value: "Connexion" },
        en: { value: "Login" },
        es: { value: "Conexión" },
      },
    },
    {
      key: "auth.login.email",
      translations: {
        fr: { value: "Adresse email" },
        en: { value: "Email address" },
        es: { value: "" },
      },
    },
    {
      key: "auth.login.password",
      translations: {
        fr: { value: "Mot de passe" },
        en: { value: "Password" },
        es: { value: "Contraseña" },
      },
    },
    {
      key: "auth.register.title",
      translations: {
        fr: { value: "Inscription" },
        en: { value: "Register" },
        es: { value: "Registro" },
      },
    },
    {
      key: "dashboard.welcome",
      translations: {
        fr: { value: "Bienvenue, {{name}} !" },
        en: { value: "Welcome, {{name}}!" },
        es: { value: "" },
      },
    },
  ])

  return (
    <PreviewWrapper fullWidth>
      <WakaI18nEditor
        config={{
          languages,
          sourceLanguage: "fr",
          keyPathSeparator: ".",
          autoSave: false,
        }}
        translations={translations}
        onChange={(key, lang, value) => {
          setTranslations(prev =>
            prev.map(entry =>
              entry.key === key
                ? {
                    ...entry,
                    translations: {
                      ...entry.translations,
                      [lang]: { value },
                    },
                  }
                : entry
            )
          )
        }}
        onSave={async () => console.log("Saving...")}
        onAddKey={async (key) => {
          // Créer les traductions vides pour toutes les langues
          const emptyTranslations: Record<string, { value: string }> = {}
          languages.forEach(lang => {
            emptyTranslations[lang.code] = { value: "" }
          })
          setTranslations(prev => [
            ...prev,
            {
              key,
              translations: emptyTranslations,
            },
          ])
        }}
        onDeleteKey={async (key) => {
          setTranslations(prev => prev.filter(e => e.key !== key))
        }}
        onAddLanguage={async (newLang) => {
          // Ajouter la nouvelle langue à la config
          setLanguages(prev => [...prev, newLang])
          // Ajouter une entrée vide pour cette langue dans toutes les traductions
          setTranslations(prev =>
            prev.map(entry => ({
              ...entry,
              translations: {
                ...entry.translations,
                [newLang.code]: { value: "" },
              },
            }))
          )
        }}
        onExport={async () => console.log("Exporting...")}
        title="Translation Editor"
        description="Gérez vos traductions i18n"
      />
    </PreviewWrapper>
  )
}

// Dashboard KPI Preview
export function DashboardKPIPreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <DashboardKPI
          metrics={defaultKPIMetrics}
          goals={defaultGoals}
          onPeriodChange={(period) => console.log("Period:", period)}
        />
      </div>
    </PreviewWrapper>
  )
}

// Checkout Flow Preview
export function CheckoutFlowPreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <CheckoutFlow
          items={defaultCartItems}
          shippingMethods={defaultShippingMethods}
          paymentMethods={defaultPaymentMethods}
          onApplyCoupon={async (code) => { console.log("Coupon:", code); return { discount: 10, type: "percent" as const }; }}
          onSubmitOrder={async (data) => console.log("Order:", data)}
        />
      </div>
    </PreviewWrapper>
  )
}

// Player Profile Preview
export function PlayerProfilePreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <PlayerProfile
          name="Alex Storm"
          title="Veteran Player"
          level={42}
          currentXP={8750}
          maxXP={10000}
          totalXP={125000}
          rank="Diamond"
          streak={7}
          joinDate={new Date("2023-01-15")}
          isOnline
          stats={defaultPlayerStats}
          achievements={defaultAchievements}
          badges={defaultBadges}
          matchHistory={defaultMatchHistory}
        />
      </div>
    </PreviewWrapper>
  )
}

// Auth 2FA Preview
export function Auth2FAPreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <Auth2FA
          status={{ enabled: false }}
          availableMethods={["authenticator", "sms", "email"]}
          qrCodeUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          secretKey="JBSWY3DPEHPK3PXP"
          backupCodes={[
            { code: "ABC123", used: false },
            { code: "DEF456", used: true },
            { code: "GHI789", used: false },
          ]}
          onEnable={async (method, code) => { console.log("Enable:", method, code); return true; }}
          onDisable={async (code) => { console.log("Disable:", code); return true; }}
          onRegenerateBackupCodes={async () => [{ code: "NEW123", used: false }]}
          onSendCode={async (method) => { console.log("Send code:", method); return true; }}
        />
      </div>
    </PreviewWrapper>
  )
}

// Chat Interface Preview
export function ChatInterfacePreview() {
  const [selectedConv, setSelectedConv] = useState(defaultChatInterfaceConversations[0])

  return (
    <PreviewWrapper fullWidth>
      <div className="h-[500px]">
        <ChatInterface
          currentUser={defaultChatInterfaceUsers[0]}
          conversations={defaultChatInterfaceConversations}
          messages={defaultChatInterfaceMessages}
          selectedConversation={selectedConv}
          onSelectConversation={(conv) => setSelectedConv(conv)}
          onSendMessage={(content) => console.log("Send:", content)}
          showSidebar
        />
      </div>
    </PreviewWrapper>
  )
}

// Deployment Dashboard Preview
export function DeploymentDashboardPreview() {
  return (
    <PreviewWrapper fullWidth>
      <div className="p-4">
        <DeploymentDashboard
          deployments={defaultDeployments}
          pipelines={defaultPipelines}
          environments={defaultEnvironments}
          branches={["main", "develop", "staging", "feature/new-api"]}
          onDeploy={(env, branch) => console.log("Deploy:", env, branch)}
          onRollback={(id) => console.log("Rollback:", id)}
          onCancel={(id) => console.log("Cancel:", id)}
          onRetry={(id) => console.log("Retry:", id)}
        />
      </div>
    </PreviewWrapper>
  )
}

// Export preview map
export const blockPreviews: Record<string, React.ComponentType> = {
  layout: LayoutPreview,
  sidebar: SidebarPreview,
  login: LoginPreview,
  footer: FooterPreview,
  headtab: HeadtabPreview,
  "sidebar-layout": SidebarLayoutPreview,
  header: HeaderPreview,
  dashboard: DashboardPreview,
  settings: SettingsPreview,
  profile: ProfilePreview,
  "user-management": UserManagementPreview,
  "error-pages": ErrorPagesPreview,
  landing: LandingPreview,
  pricing: PricingPreview,
  "empty-states": EmptyStatesPreview,
  wizard: WizardPreview,
  faq: FAQPreview,
  "activity-timeline": ActivityTimelinePreview,
  "kanban-board": KanbanBoardPreview,
  chat: ChatPreview,
  "calendar-view": CalendarViewPreview,
  "file-manager": FileManagerPreview,
  "theme-creator-block": ThemeCreatorBlockPreview,
  "i18n-editor": I18nEditorPreview,
  // New blocks
  "dashboard-kpi": DashboardKPIPreview,
  "checkout-flow": CheckoutFlowPreview,
  "player-profile": PlayerProfilePreview,
  "auth-2fa": Auth2FAPreview,
  "chat-interface": ChatInterfacePreview,
  "deployment-dashboard": DeploymentDashboardPreview,
}
