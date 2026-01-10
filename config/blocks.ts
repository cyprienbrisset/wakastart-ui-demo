export interface BlockDefinition {
  name: string
  slug: string
  description: string
  features: string[]
  category: BlockCategory
  preview?: string // URL de prévisualisation ou composant
}

export type BlockCategory =
  | "Layout"
  | "Authentication"
  | "Navigation"
  | "Data Management"
  | "Marketing"
  | "Communication"
  | "Utilities"
  | "E-commerce"
  | "Gaming"
  | "DevOps"

export const blockCategories: { id: BlockCategory; label: string; description: string }[] = [
  { id: "Layout", label: "Layout", description: "Structure et mise en page" },
  { id: "Authentication", label: "Authentification", description: "Connexion et inscription" },
  { id: "Navigation", label: "Navigation", description: "Menus et barres de navigation" },
  { id: "Data Management", label: "Gestion de données", description: "Tableaux, listes et formulaires" },
  { id: "Marketing", label: "Marketing", description: "Landing pages et pricing" },
  { id: "Communication", label: "Communication", description: "Chat, notifications et activité" },
  { id: "Utilities", label: "Utilitaires", description: "États vides, erreurs et assistants" },
  { id: "E-commerce", label: "E-commerce", description: "Panier, checkout et paiements" },
  { id: "Gaming", label: "Gaming", description: "Profils joueurs, achievements et stats" },
  { id: "DevOps", label: "DevOps", description: "Déploiements, pipelines et monitoring" },
]

export const blocks: BlockDefinition[] = [
  // Layout
  {
    name: "Layout",
    slug: "layout",
    description: "Structure de page complète avec header, sidebar et contenu principal.",
    category: "Layout",
    features: [
      "Header responsive avec navigation",
      "Sidebar collapsible",
      "Zone de contenu flexible",
      "Support dark mode",
    ],
  },
  {
    name: "SidebarLayout",
    slug: "sidebar-layout",
    description: "Layout avec sidebar intégrée et gestion d'état.",
    category: "Layout",
    features: [
      "Toggle sidebar",
      "Persistance de l'état",
      "Responsive automatique",
      "Slots personnalisables",
    ],
  },

  // Authentication
  {
    name: "Login",
    slug: "login",
    description: "Page de connexion complète avec formulaire et options SSO.",
    category: "Authentication",
    features: [
      "Formulaire email/password",
      "Boutons SSO (Google, GitHub, etc.)",
      "Validation des champs",
      "Lien mot de passe oublié",
      "Configuration JSON dynamique",
    ],
  },

  // Navigation
  {
    name: "WakaSidebar",
    slug: "sidebar",
    description: "Barre latérale de navigation avec sections et sous-menus.",
    category: "Navigation",
    features: [
      "Navigation hiérarchique",
      "État collapsé/étendu",
      "Indicateurs de section active",
      "Support mobile (Sheet)",
    ],
  },
  {
    name: "WakaHeader",
    slug: "header",
    description: "Header d'application personnalisable avec recherche, filtres et actions.",
    category: "Navigation",
    features: [
      "Bouton d'action principal",
      "Champ de recherche intégré",
      "Barre de filtres personnalisable",
      "Notifications avec badge",
      "Menu utilisateur avec avatar",
      "Support sticky et thème",
    ],
  },
  {
    name: "Footer",
    slug: "footer",
    description: "Pied de page avec liens et informations.",
    category: "Navigation",
    features: [
      "Colonnes de liens",
      "Copyright",
      "Liens réseaux sociaux",
      "Newsletter (optionnel)",
    ],
  },
  {
    name: "Headtab",
    slug: "headtab",
    description: "En-tête avec navigation par onglets.",
    category: "Navigation",
    features: [
      "Navigation horizontale",
      "Indicateur d'onglet actif",
      "Support responsive",
      "Actions secondaires",
    ],
  },

  // Data Management
  {
    name: "WakaDashboard",
    slug: "dashboard",
    description: "Tableau de bord complet avec stats, graphiques et tables.",
    category: "Data Management",
    features: [
      "Statistiques avec tendances",
      "Section graphiques",
      "Tables de données",
      "Activité récente",
      "Actions rapides",
      "Sélection de période",
    ],
  },
  {
    name: "WakaSettings",
    slug: "settings",
    description: "Page de paramètres avec sections, formulaires et toggles.",
    category: "Data Management",
    features: [
      "Navigation par onglets",
      "Sections de paramètres",
      "Champs variés (text, switch, select)",
      "Sauvegarde automatique",
      "Zone dangereuse (suppression)",
    ],
  },
  {
    name: "WakaProfile",
    slug: "profile",
    description: "Page profil utilisateur avec avatar et formulaire.",
    category: "Data Management",
    features: [
      "Avatar avec upload",
      "Informations personnelles",
      "Informations professionnelles",
      "Liens sociaux",
      "Mode édition/lecture",
      "Statistiques utilisateur",
    ],
  },
  {
    name: "WakaUserManagement",
    slug: "user-management",
    description: "Gestion des utilisateurs avec CRUD, rôles et permissions.",
    category: "Data Management",
    features: [
      "Liste des utilisateurs",
      "Création/modification/suppression",
      "Gestion des rôles",
      "Gestion des statuts",
      "Filtres et recherche",
      "Actions en masse",
      "Permissions granulaires",
    ],
  },
  {
    name: "WakaKanbanBoard",
    slug: "kanban-board",
    description: "Tableau Kanban complet avec drag & drop.",
    category: "Data Management",
    features: [
      "Colonnes personnalisables",
      "Drag & drop des cartes",
      "Priorités (low, medium, high, urgent)",
      "Labels colorés",
      "Assignation d'utilisateurs",
      "Dates d'échéance",
      "Ajout/édition/suppression de cartes",
    ],
  },
  {
    name: "WakaCalendarView",
    slug: "calendar-view",
    description: "Vue calendrier avec événements.",
    category: "Data Management",
    features: [
      "Vues mois/semaine/jour/agenda",
      "Navigation entre périodes",
      "Événements colorés par catégorie",
      "Popovers de détail",
      "Ajout d'événements",
      "Responsive",
    ],
  },
  {
    name: "WakaFileManager",
    slug: "file-manager",
    description: "Gestionnaire de fichiers avec navigation.",
    category: "Data Management",
    features: [
      "Vue grille et liste",
      "Navigation par breadcrumb",
      "Sélection multiple",
      "Actions (renommer, supprimer, favoris)",
      "Partage de fichiers",
      "Création de dossiers",
      "Tri par nom/date/taille",
    ],
  },
  {
    name: "WakaThemeCreatorBlock",
    slug: "theme-creator-block",
    description: "Interface complète de création de thèmes style TweakCN.",
    category: "Data Management",
    features: [
      "Éditeur visuel de couleurs par groupes",
      "Configuration Light/Dark mode séparée",
      "Preview temps réel (Cards, Dashboard, Mail)",
      "Gestion des assets (logos, backgrounds, favicon)",
      "Export JSON et CSS",
      "Thèmes prédéfinis",
      "Undo/Redo",
      "Typography et border radius",
    ],
  },

  // Marketing
  {
    name: "WakaLanding",
    slug: "landing",
    description: "Page d'accueil marketing responsive.",
    category: "Marketing",
    features: [
      "Navbar responsive avec menu mobile",
      "Section Hero avec CTA",
      "Grille de fonctionnalités",
      "Témoignages clients",
      "Section CTA finale",
      "Statistiques intégrées",
    ],
  },
  {
    name: "WakaPricing",
    slug: "pricing",
    description: "Tableau de tarification avec comparaison.",
    category: "Marketing",
    features: [
      "Plans en cartes ou tableau",
      "Toggle mensuel/annuel",
      "Plan populaire mis en avant",
      "Comparaison des features",
      "FAQ intégrée",
      "Prix personnalisés",
    ],
  },

  // Communication
  {
    name: "WakaChat",
    slug: "chat",
    description: "Interface de messagerie complète avec widget flottant et bulle repositionnable.",
    category: "Communication",
    features: [
      "Widget flottant avec bulle draggable",
      "Position de la bulle persistée (localStorage)",
      "Personnalisation de la bulle (couleur, taille, animation)",
      "Badge de messages non lus",
      "Liste des conversations",
      "Bulles de messages avec statut",
      "Séparateurs de date (Aujourd'hui, Hier)",
      "Modes layout: full, embedded, floating, widget",
      "Indicateurs de statut (en ligne, absent, etc.)",
      "Placeholder dynamique avec nom du destinataire",
      "Raccourcis clavier (Entrée, Shift+Entrée)",
      "Hook useChatWidget pour contrôle programmatique",
    ],
  },
  {
    name: "WakaActivityTimeline",
    slug: "activity-timeline",
    description: "Timeline d'activité avec filtres et groupement.",
    category: "Communication",
    features: [
      "Affichage chronologique",
      "Filtrage par type d'activité",
      "Recherche par mot-clé",
      "Groupement par jour",
      "Pagination 'Charger plus'",
      "Layouts variés (timeline, feed, compact)",
    ],
  },

  // Utilities
  {
    name: "WakaErrorPage",
    slug: "error-pages",
    description: "Pages d'erreur (404, 500, 403) avec illustrations.",
    category: "Utilities",
    features: [
      "Erreur 404 - Page non trouvée",
      "Erreur 500 - Erreur serveur",
      "Erreur 403 - Accès refusé",
      "Page de maintenance",
      "Page hors ligne",
      "Illustrations personnalisables",
      "Layouts variés (centré, split)",
    ],
  },
  {
    name: "WakaEmptyState",
    slug: "empty-states",
    description: "États vides réutilisables avec illustrations.",
    category: "Utilities",
    features: [
      "Types prédéfinis (no-data, no-results, etc.)",
      "Illustrations par défaut",
      "Actions personnalisables",
      "Layout vertical/horizontal",
      "Tailles variées",
    ],
  },
  {
    name: "WakaWizard",
    slug: "wizard",
    description: "Assistant multi-étapes pour formulaires complexes.",
    category: "Utilities",
    features: [
      "Navigation entre étapes",
      "Validation par étape",
      "Étapes optionnelles",
      "Stepper visuel",
      "Barre de progression",
      "Confirmation d'annulation",
      "Layouts variés (card, page, minimal)",
    ],
  },
  {
    name: "WakaFAQ",
    slug: "faq",
    description: "Section FAQ avec accordéon et recherche.",
    category: "Utilities",
    features: [
      "Accordéon pour questions/réponses",
      "Recherche par mot-clé",
      "Filtrage par catégorie",
      "Badges de catégorie",
      "Système de feedback (utile/pas utile)",
      "Support Markdown pour les réponses",
    ],
  },
  {
    name: "WakaI18nEditor",
    slug: "i18n-editor",
    description: "Éditeur de traductions i18n multi-langues avec gestion par fichier.",
    category: "Data Management",
    features: [
      "Vue tableau avec clés et traductions",
      "Support multi-langues dynamique",
      "Recherche et filtres par état",
      "Groupement par préfixe de clé",
      "Éditeur inline et drawer",
      "Validation des placeholders",
      "Auto-save avec debounce",
      "Import/Export JSON",
      "Ajout de clés et langues",
      "Indicateurs d'état (manquant, identique, valide)",
    ],
  },

  // Data Management - KPI
  {
    name: "DashboardKPI",
    slug: "dashboard-kpi",
    description: "Dashboard KPI complet avec métriques, sparklines et objectifs.",
    category: "Data Management",
    features: [
      "Cartes KPI avec tendances",
      "Mini sparklines intégrées",
      "Sélecteur de période",
      "Section objectifs avec progression",
      "Métriques secondaires",
      "Support graphiques personnalisés",
      "Indicateur de dernière mise à jour",
    ],
  },

  // E-commerce
  {
    name: "CheckoutFlow",
    slug: "checkout-flow",
    description: "Flux de checkout e-commerce complet en plusieurs étapes.",
    category: "E-commerce",
    features: [
      "Indicateur d'étapes (panier, livraison, paiement, confirmation)",
      "Récapitulatif du panier",
      "Formulaire d'adresse de livraison",
      "Sélection méthode de livraison",
      "Sélection méthode de paiement",
      "Application de codes promo",
      "Récapitulatif avant confirmation",
    ],
  },

  // Gaming
  {
    name: "PlayerProfile",
    slug: "player-profile",
    description: "Profil joueur gamifié avec XP, achievements et historique.",
    category: "Gaming",
    features: [
      "Barre de progression XP",
      "Niveau et rang du joueur",
      "Badges et titres",
      "Statistiques détaillées",
      "Achievements avec raretés",
      "Historique des matchs",
      "Streak de connexion",
    ],
  },

  // Authentication - 2FA
  {
    name: "Auth2FA",
    slug: "auth-2fa",
    description: "Configuration de l'authentification à deux facteurs.",
    category: "Authentication",
    features: [
      "Support authenticator app (QR code)",
      "Support SMS et email",
      "Support clés hardware",
      "Codes de récupération",
      "Activation/désactivation",
      "Conseils de sécurité",
    ],
  },

  // Communication - Chat Interface
  {
    name: "ChatInterface",
    slug: "chat-interface",
    description: "Interface de chat complète avec conversations et messages.",
    category: "Communication",
    features: [
      "Liste de conversations",
      "Bulles de messages",
      "Indicateurs de statut (envoyé, lu)",
      "Indicateur de frappe",
      "Support fichiers joints",
      "Réactions aux messages",
      "Appels audio/vidéo",
    ],
  },

  // DevOps
  {
    name: "DeploymentDashboard",
    slug: "deployment-dashboard",
    description: "Dashboard de déploiement avec pipelines et environnements.",
    category: "DevOps",
    features: [
      "Liste des déploiements récents",
      "Pipelines CI/CD avec étapes",
      "Statut des environnements",
      "Déploiement manuel",
      "Rollback rapide",
      "Logs de déploiement",
      "Métriques de santé",
    ],
  },
]

export function getBlockBySlug(slug: string): BlockDefinition | undefined {
  return blocks.find((b) => b.slug === slug)
}

export function getBlocksByCategory(category: BlockCategory): BlockDefinition[] {
  return blocks.filter((b) => b.category === category)
}
