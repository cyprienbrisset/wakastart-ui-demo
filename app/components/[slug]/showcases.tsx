"use client"

import * as React from "react"
import { ReactNode } from "react"
import { devopsShowcases } from "./showcases/devops"
import {
  Button,
  Input,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Slider,
  Label,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Progress,
  Skeleton,
  Alert,
  AlertDescription,
  AlertTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
  ScrollArea,
  ThemeSelector,
  LanguageSelector,
  Calendar,
  toast,
  Toggle,
  WakaSpinner,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  DataTable,
  DataTableAdvanced,
  WakaDateTimePicker,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  WakaStepper,
  WakaBreadcrumb,
  WakaModal,
  useModal,
  WakaTree,
  WakaPagination,
  WakaTimePicker,
  WakaDateRangePicker,
  WakaCombobox,
  WakaDrawer,
  useDrawer,
  WakaNumberInput,
  WakaImage,
  WakaQRCode,
  WakaBarcode,
  WakaVideo,
  WakaVirtualList,
  WakaSegmentedControl,
  WakaKanban,
  WakaTimeline,
  WakaStat,
  WakaStatGroup,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  WakaAutocomplete,
  WakaColorPicker,
  WakaFileUpload,
  WakaRichTextEditor,
  WakaBarChart,
  WakaLineChart,
  WakaAreaChart,
  WakaPieChart,
  WakaSparkline,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  WakaAdmincrumb,
  WakaCarousel,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  WakaThemeManager,
  // E-commerce components
  WakaPricingTable,
  WakaCartSummary,
  WakaProductCard,
  WakaCheckoutStepper,
  WakaCouponInput,
  WakaPaymentMethodPicker,
  WakaOrderTracker,
  WakaInvoicePreview,
  // Security components
  WakaPasswordStrength,
  WakaTwoFactorSetup,
  WakaSessionManager,
  WakaPermissionMatrix,
  WakaAuditLog,
  WakaSecurityScore,
  WakaBiometricPrompt,
  WakaDeviceTrust,
  // Communication components
  WakaChatBubble,
  WakaTypingIndicator,
  WakaVideoCall,
  WakaMentionInput,
  WakaThreadView,
  WakaPresenceIndicator,
  WakaReactionPicker,
  WakaVoiceMessage,
  // Analytics components
  WakaFunnelChart,
  WakaCohortTable,
  WakaKPIDashboard,
  WakaComparePeriod,
  WakaGoalProgress,
  WakaHeatmap,
  WakaSankeyDiagram,
  WakaTreemapChart,
  // Forms components
  WakaSignaturePad,
  WakaAddressAutocomplete,
  WakaPhoneInput,
  WakaCreditCardInput,
  WakaTagInput,
  WakaSliderRange,
  WakaRatingInput,
  WakaSchedulePicker,
  // Onboarding components
  WakaTourGuide,
  WakaHotspot,
  WakaChecklist,
  WakaEmptyState,
  WakaFeatureAnnouncement,
  WakaProgressOnboarding,
  WakaTooltipTour,
  WakaWelcomeModal,
  // Data Visualization components
  Waka3DPieChart,
  WakaRadarScore,
  WakaResourceGauge,
  WakaStatusMatrix,
  WakaContributionGraph,
  WakaCostBreakdown,
  WakaBudgetBurn,
  WakaMetricSparkline,
  // Navigation components
  WakaFloatingNav,
  WakaBreadcrumbPath,
  WakaTabsMorph,
  WakaOrbitalMenu,
  WakaDock,
  WakaSpotlight,
  WakaCommandBar,
  useSpotlight,
  useCommandBar,
  // Mobile-first components
  WakaBottomSheet,
  useBottomSheet,
  WakaPullToRefresh,
  WakaSwipeCard,
  // Animation components
  WakaErrorShake,
  WakaLoadingOrbit,
  WakaSkeletonWave,
  WakaSuccessExplosion,
  WakaTypewriter,
  // Button components
  WakaHapticButton,
  WakaMorphButton,
  WakaLiquidButton,
  WakaMagneticButton,
  // Gamification components
  WakaAchievementUnlock,
  WakaComboCounter,
  WakaLevelProgress,
  WakaLeaderboard,
  WakaMilestoneRoad,
  WakaStreakCounter,
  WakaQuestCard,
  WakaScratchCard,
  WakaVersusCard,
  WakaXPBar,
  // Gamification Part 2
  WakaBadgeShowcase,
  WakaDailyReward,
  WakaLootBox,
  WakaSkillTree,
  WakaChallengeTimer,
  WakaRankBadge,
  WakaTournamentBracket,
  WakaTeamBanner,
  WakaActivityFeed,
  WakaPowerUp,
  WakaPointsPopup,
  WakaSpinWheel,
  WakaPlayerCard,
  WakaStatsHexagon,
  WakaSeasonPass,
  // Infrastructure & Resource Management components (Part 2)
  WakaResourcePool,
  WakaQuotaBar,
  WakaCapacityPlanner,
  WakaAllocationMatrix,
  WakaDeploymentLane,
  WakaApprovalChain,
  WakaConnectionMatrix,
  WakaAlertStack,
  WakaSLATracker,
  // Infrastructure & DevOps components (Part 1)
  WakaServerRack,
  WakaNetworkTopology,
  WakaHealthPulse,
  WakaTerminalOutput,
  WakaIncidentTimeline,
  WakaFlowDiagram,
  WakaPipelineView,
  WakaRollbackSlider,
  WakaRegionMap,
  // Card Effects components
  WakaGlowCard,
  WakaTiltCard,
  WakaMagicLink,
  // Notifications component
  WakaNotifications,
  useNotifications,
  // Sidebar component (from blocks)
  WakaSidebar,
} from "@wakastellar/ui"
import type { Step, BreadcrumbItem, TreeNode, ComboboxOption, WakaDateRange, TimelineItem, KanbanColumn, ThemeMetadata, AutocompleteOption, AdmincrumbLevel, AdmincrumbItem, CarouselImage, Notification, SidebarMenuItem } from "@wakastellar/ui"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  AlertCircle,
  ChevronDown,
  Mail,
  Terminal,
  User,
  Loader2,
  Plus,
  ArrowRight,
  Bold,
  Italic,
  Underline,
  Check,
  X,
  Bell,
  Settings,
  LogOut,
  CreditCard,
  Users,
  MoreHorizontal,
  ArrowUpDown,
  Trash2,
  Pencil,
  Eye,
  Calendar as CalendarIcon,
  Clock,
  Home,
  FileText,
  Folder,
  ChevronRight,
  DollarSign,
  ShoppingCart,
  Activity,
  TrendingUp,
  Grid,
  List,
  Layers,
  Copy,
  Scissors,
  Clipboard,
  RotateCcw,
  Building2,
  Network,
  ChevronsUpDown,
  Image as ImageIcon,
  Search,
  Star,
  Heart,
  MessageCircle,
  Zap,
  Music,
  Camera,
  Compass,
  Globe,
  Send,
  Package,
  Flame,
  Trophy,
  Crown,
  LayoutDashboard,
  BarChart,
  Inbox,
  AlertTriangle,
  Box,
} from "lucide-react"
import { useState } from "react"
import {
  ShowcaseExample,
  VariantOption,
} from "@/components/docs/component-showcase"

// Type pour la configuration complète d'un showcase
export interface ComponentShowcaseConfig {
  examples: ShowcaseExample[]
  variants?: VariantOption[]
  renderPlayground?: (variants: Record<string, string>) => ReactNode
  getPlaygroundCode?: (variants: Record<string, string>) => string
}

// ============================================
// BUTTON SHOWCASE
// ============================================
export const buttonShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Variantes",
      description: "Les différents styles visuels du bouton",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      ),
      code: `<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
    },
    {
      title: "Tailles",
      description: "Les différentes tailles disponibles",
      preview: (
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      ),
      code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Plus className="h-4 w-4" /></Button>`,
    },
    {
      title: "Avec icônes",
      description: "Boutons avec icônes à gauche ou à droite",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button>
            Continuer
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Ajouter
          </Button>
        </div>
      ),
      code: `<Button>
  <Mail className="mr-2 h-4 w-4" />
  Email
</Button>
<Button>
  Continuer
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>`,
    },
    {
      title: "États",
      description: "Boutons désactivés et en chargement",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button disabled>Désactivé</Button>
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Chargement...
          </Button>
        </div>
      ),
      code: `<Button disabled>Désactivé</Button>
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Chargement...
</Button>`,
    },
  ],
  variants: [
    {
      name: "variant",
      values: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      default: "default",
    },
    {
      name: "size",
      values: ["sm", "default", "lg", "icon"],
      default: "default",
    },
  ],
  renderPlayground: (variants) => (
    <Button
      variant={variants.variant as "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"}
      size={variants.size as "sm" | "default" | "lg" | "icon"}
    >
      {variants.size === "icon" ? <Plus className="h-4 w-4" /> : "Button"}
    </Button>
  ),
  getPlaygroundCode: (variants) => {
    const variantProp = variants.variant !== "default" ? ` variant="${variants.variant}"` : ""
    const sizeProp = variants.size !== "default" ? ` size="${variants.size}"` : ""
    const content = variants.size === "icon" ? '<Plus className="h-4 w-4" />' : "Button"
    return `<Button${variantProp}${sizeProp}>${content}</Button>`
  },
}

// ============================================
// INPUT SHOWCASE
// ============================================
export const inputShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Types d'input",
      description: "Différents types de champs de saisie",
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <Input placeholder="Texte simple" />
          <Input type="email" placeholder="email@exemple.com" />
          <Input type="password" placeholder="Mot de passe" />
          <Input type="number" placeholder="123" />
        </div>
      ),
      code: `<Input placeholder="Texte simple" />
<Input type="email" placeholder="email@exemple.com" />
<Input type="password" placeholder="Mot de passe" />
<Input type="number" placeholder="123" />`,
    },
    {
      title: "Avec icônes",
      description: "Inputs avec icônes intégrées",
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Email" className="pl-10" />
          </div>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Nom d'utilisateur" className="pl-10" />
          </div>
        </div>
      ),
      code: `<div className="relative">
  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
  <Input placeholder="Email" className="pl-10" />
</div>`,
    },
    {
      title: "États",
      description: "États désactivé et erreur",
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <Input placeholder="Normal" />
          <Input placeholder="Désactivé" disabled />
          <div>
            <Input placeholder="Avec erreur" className="border-destructive" />
            <p className="text-sm text-destructive mt-1">Ce champ est requis</p>
          </div>
        </div>
      ),
      code: `<Input placeholder="Normal" />
<Input placeholder="Désactivé" disabled />
<Input placeholder="Avec erreur" className="border-destructive" />`,
    },
    {
      title: "Avec label",
      description: "Input avec label et description",
      preview: (
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="email-demo">Email</Label>
          <Input id="email-demo" type="email" placeholder="email@exemple.com" />
          <p className="text-sm text-muted-foreground">
            Nous ne partagerons jamais votre email.
          </p>
        </div>
      ),
      code: `<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@exemple.com" />
  <p className="text-sm text-muted-foreground">
    Nous ne partagerons jamais votre email.
  </p>
</div>`,
    },
  ],
}

// ============================================
// CARD SHOWCASE
// ============================================
export const cardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Carte simple",
      description: "Structure de base d'une carte",
      preview: (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Titre de la carte</CardTitle>
            <CardDescription>Description de la carte</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Contenu de la carte.</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Pied de carte</p>
          </CardFooter>
        </Card>
      ),
      code: `<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Titre de la carte</CardTitle>
    <CardDescription>Description de la carte</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Contenu de la carte.</p>
  </CardContent>
  <CardFooter>
    <p className="text-sm text-muted-foreground">Pied de carte</p>
  </CardFooter>
</Card>`,
    },
    {
      title: "Carte avec formulaire",
      description: "Carte contenant un formulaire",
      preview: (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Créer un projet</CardTitle>
            <CardDescription>Démarrez un nouveau projet en un clic.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Nom du projet</Label>
                <Input id="project-name" placeholder="Mon projet" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-desc">Description</Label>
                <Textarea id="project-desc" placeholder="Description..." />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Annuler</Button>
            <Button>Créer</Button>
          </CardFooter>
        </Card>
      ),
      code: `<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Créer un projet</CardTitle>
    <CardDescription>Démarrez un nouveau projet en un clic.</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nom du projet</Label>
        <Input id="name" placeholder="Mon projet" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="desc">Description</Label>
        <Textarea id="desc" placeholder="Description..." />
      </div>
    </div>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Annuler</Button>
    <Button>Créer</Button>
  </CardFooter>
</Card>`,
    },
    {
      title: "Carte statistique",
      description: "Carte pour afficher des métriques",
      preview: (
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Revenu total
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Utilisateurs
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground">
                +180 cette semaine
              </p>
            </CardContent>
          </Card>
        </div>
      ),
      code: `<Card>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-sm font-medium">Revenu total</CardTitle>
    <CreditCard className="h-4 w-4 text-muted-foreground" />
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">€45,231.89</div>
    <p className="text-xs text-muted-foreground">
      +20.1% par rapport au mois dernier
    </p>
  </CardContent>
</Card>`,
    },
  ],
}

// ============================================
// BADGE SHOWCASE
// ============================================
export const badgeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Variantes",
      description: "Les différents styles de badges",
      preview: (
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      ),
      code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`,
    },
    {
      title: "Cas d'usage",
      description: "Exemples d'utilisation courants",
      preview: (
        <div className="flex flex-wrap gap-2">
          <Badge>Nouveau</Badge>
          <Badge variant="secondary">En cours</Badge>
          <Badge variant="destructive">Urgent</Badge>
          <Badge variant="outline">v1.0.0</Badge>
          <Badge className="bg-green-500 hover:bg-green-600">Actif</Badge>
          <Badge className="bg-yellow-500 hover:bg-yellow-600">En attente</Badge>
          <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
        </div>
      ),
      code: `<Badge>Nouveau</Badge>
<Badge variant="secondary">En cours</Badge>
<Badge variant="destructive">Urgent</Badge>
<Badge variant="outline">v1.0.0</Badge>
<Badge className="bg-green-500">Actif</Badge>
<Badge className="bg-yellow-500">En attente</Badge>
<Badge className="bg-blue-500">Info</Badge>`,
    },
    {
      title: "Avec icônes",
      description: "Badges avec icônes intégrées",
      preview: (
        <div className="flex flex-wrap gap-2">
          <Badge>
            <Plus className="mr-1 h-3 w-3" />
            Ajouter
          </Badge>
          <Badge variant="destructive">
            <AlertCircle className="mr-1 h-3 w-3" />
            Erreur
          </Badge>
          <Badge variant="secondary">
            <Check className="mr-1 h-3 w-3" />
            Validé
          </Badge>
        </div>
      ),
      code: `<Badge>
  <Plus className="mr-1 h-3 w-3" />
  Ajouter
</Badge>
<Badge variant="destructive">
  <AlertCircle className="mr-1 h-3 w-3" />
  Erreur
</Badge>`,
    },
  ],
  variants: [
    {
      name: "variant",
      values: ["default", "secondary", "destructive", "outline"],
      default: "default",
    },
  ],
  renderPlayground: (variants) => (
    <Badge variant={variants.variant as "default" | "secondary" | "destructive" | "outline"}>
      Badge
    </Badge>
  ),
  getPlaygroundCode: (variants) => {
    const variantProp = variants.variant !== "default" ? ` variant="${variants.variant}"` : ""
    return `<Badge${variantProp}>Badge</Badge>`
  },
}

// ============================================
// ALERT SHOWCASE
// ============================================
export const alertShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Variantes",
      description: "Alertes informatives et destructives",
      preview: (
        <div className="w-full max-w-lg space-y-4">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              Ceci est une alerte informative.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>
              Une erreur s'est produite lors de l'opération.
            </AlertDescription>
          </Alert>
        </div>
      ),
      code: `<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    Ceci est une alerte informative.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Erreur</AlertTitle>
  <AlertDescription>
    Une erreur s'est produite lors de l'opération.
  </AlertDescription>
</Alert>`,
    },
  ],
  variants: [
    {
      name: "variant",
      values: ["default", "destructive"],
      default: "default",
    },
  ],
  renderPlayground: (variants) => (
    <Alert
      variant={variants.variant as "default" | "destructive"}
      className="max-w-lg"
    >
      {variants.variant === "destructive" ? (
        <AlertCircle className="h-4 w-4" />
      ) : (
        <Terminal className="h-4 w-4" />
      )}
      <AlertTitle>
        {variants.variant === "destructive" ? "Erreur" : "Information"}
      </AlertTitle>
      <AlertDescription>
        {variants.variant === "destructive"
          ? "Une erreur s'est produite."
          : "Ceci est une alerte informative."}
      </AlertDescription>
    </Alert>
  ),
  getPlaygroundCode: (variants) => {
    const variantProp = variants.variant === "destructive" ? ' variant="destructive"' : ""
    const icon = variants.variant === "destructive" ? "AlertCircle" : "Terminal"
    const title = variants.variant === "destructive" ? "Erreur" : "Information"
    const desc = variants.variant === "destructive"
      ? "Une erreur s'est produite."
      : "Ceci est une alerte informative."
    return `<Alert${variantProp}>
  <${icon} className="h-4 w-4" />
  <AlertTitle>${title}</AlertTitle>
  <AlertDescription>${desc}</AlertDescription>
</Alert>`
  },
}

// ============================================
// DIALOG SHOWCASE
// ============================================
export const dialogShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Dialog simple",
      description: "Fenêtre modale basique",
      preview: (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Ouvrir le dialogue</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Titre du dialogue</DialogTitle>
              <DialogDescription>
                Description du dialogue avec plus de détails sur l'action à effectuer.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Annuler</Button>
              <Button>Confirmer</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Ouvrir le dialogue</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Titre du dialogue</DialogTitle>
      <DialogDescription>
        Description du dialogue avec plus de détails.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Annuler</Button>
      <Button>Confirmer</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    },
    {
      title: "Dialog avec formulaire",
      description: "Modale contenant un formulaire",
      preview: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Modifier le profil</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Modifier le profil</DialogTitle>
              <DialogDescription>
                Modifiez vos informations personnelles ici.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nom
                </Label>
                <Input id="name" defaultValue="Jean Dupont" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" defaultValue="@jeandupont" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Sauvegarder</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Modifier le profil</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Modifier le profil</DialogTitle>
      <DialogDescription>
        Modifiez vos informations personnelles ici.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Nom</Label>
        <Input id="name" defaultValue="Jean Dupont" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Sauvegarder</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    },
  ],
}

// ============================================
// TABS SHOWCASE
// ============================================
export const tabsShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Tabs simples",
      description: "Navigation par onglets basique",
      preview: (
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Compte</TabsTrigger>
            <TabsTrigger value="password">Mot de passe</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4 border rounded-b-lg">
            <h3 className="font-medium">Compte</h3>
            <p className="text-sm text-muted-foreground">
              Gérez les paramètres de votre compte.
            </p>
          </TabsContent>
          <TabsContent value="password" className="p-4 border rounded-b-lg">
            <h3 className="font-medium">Mot de passe</h3>
            <p className="text-sm text-muted-foreground">
              Changez votre mot de passe.
            </p>
          </TabsContent>
          <TabsContent value="settings" className="p-4 border rounded-b-lg">
            <h3 className="font-medium">Paramètres</h3>
            <p className="text-sm text-muted-foreground">
              Configurez vos préférences.
            </p>
          </TabsContent>
        </Tabs>
      ),
      code: `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Compte</TabsTrigger>
    <TabsTrigger value="password">Mot de passe</TabsTrigger>
    <TabsTrigger value="settings">Paramètres</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Gérez les paramètres de votre compte.
  </TabsContent>
  <TabsContent value="password">
    Changez votre mot de passe.
  </TabsContent>
  <TabsContent value="settings">
    Configurez vos préférences.
  </TabsContent>
</Tabs>`,
    },
  ],
}

// ============================================
// DROPDOWN MENU SHOWCASE
// ============================================
export const dropdownMenuShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Menu simple",
      description: "Menu déroulant basique avec actions",
      preview: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Options <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Paramètres
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Déconnexion
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      Options <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <User className="mr-2 h-4 w-4" />
      Profil
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="mr-2 h-4 w-4" />
      Paramètres
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">
      <LogOut className="mr-2 h-4 w-4" />
      Déconnexion
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    },
  ],
}

// ============================================
// TOGGLE SHOWCASE
// ============================================
export const toggleShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Variantes",
      description: "Toggle default et outline",
      preview: (
        <div className="flex gap-4">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      ),
      code: `<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`,
    },
    {
      title: "Groupe de toggles",
      description: "Plusieurs toggles pour le formatage de texte",
      preview: (
        <div className="flex gap-1 border rounded-lg p-1">
          <Toggle size="sm" aria-label="Bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="sm" aria-label="Italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle size="sm" aria-label="Underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      ),
      code: `<div className="flex gap-1 border rounded-lg p-1">
  <Toggle size="sm" aria-label="Bold">
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle size="sm" aria-label="Italic">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle size="sm" aria-label="Underline">
    <Underline className="h-4 w-4" />
  </Toggle>
</div>`,
    },
    {
      title: "Avec texte",
      description: "Toggle avec label texte",
      preview: (
        <div className="flex gap-4">
          <Toggle aria-label="Toggle">
            <Bold className="mr-2 h-4 w-4" />
            Gras
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle">
            <Italic className="mr-2 h-4 w-4" />
            Italique
          </Toggle>
        </div>
      ),
      code: `<Toggle aria-label="Toggle">
  <Bold className="mr-2 h-4 w-4" />
  Gras
</Toggle>`,
    },
  ],
  variants: [
    {
      name: "variant",
      values: ["default", "outline"],
      default: "default",
    },
    {
      name: "size",
      values: ["default", "sm", "lg"],
      default: "default",
    },
  ],
  renderPlayground: (variants) => (
    <Toggle
      variant={variants.variant as "default" | "outline"}
      size={variants.size as "default" | "sm" | "lg"}
      aria-label="Toggle"
    >
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
  getPlaygroundCode: (variants) => {
    const variantProp = variants.variant !== "default" ? ` variant="${variants.variant}"` : ""
    const sizeProp = variants.size !== "default" ? ` size="${variants.size}"` : ""
    return `<Toggle${variantProp}${sizeProp} aria-label="Toggle">
  <Bold className="h-4 w-4" />
</Toggle>`
  },
}

// ============================================
// SPINNER SHOWCASE
// ============================================
export const spinnerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Mode Infinite",
      description: "Animation continue style Jarvis pour processus indéfinis",
      preview: (
        <div className="flex items-center gap-8">
          <WakaSpinner mode="infinite" label="SYSTEM" size="lg" />
          <WakaSpinner mode="infinite" label="JARVIS" subLabel="Active" size="lg" color="accent" />
        </div>
      ),
      code: `<WakaSpinner mode="infinite" label="SYSTEM" size="lg" />
<WakaSpinner mode="infinite" label="JARVIS" subLabel="Active" size="lg" color="accent" />`,
    },
    {
      title: "Mode Loading",
      description: "Animation avec effet de scan pour indiquer une récupération de données",
      preview: (
        <div className="flex items-center gap-8">
          <WakaSpinner mode="loading" label="Loading" subLabel="Fetching data..." size="lg" />
          <WakaSpinner mode="loading" label="Sync" subLabel="Please wait" size="lg" color="secondary" />
        </div>
      ),
      code: `<WakaSpinner mode="loading" label="Loading" subLabel="Fetching data..." size="lg" />
<WakaSpinner mode="loading" label="Sync" subLabel="Please wait" size="lg" color="secondary" />`,
    },
    {
      title: "Tailles",
      description: "Différentes tailles de spinner",
      preview: (
        <div className="flex items-end gap-6">
          <div className="text-center">
            <WakaSpinner size="xs" />
            <p className="text-xs text-muted-foreground mt-2">XS</p>
          </div>
          <div className="text-center">
            <WakaSpinner size="sm" />
            <p className="text-xs text-muted-foreground mt-2">SM</p>
          </div>
          <div className="text-center">
            <WakaSpinner size="md" />
            <p className="text-xs text-muted-foreground mt-2">MD</p>
          </div>
          <div className="text-center">
            <WakaSpinner size="lg" />
            <p className="text-xs text-muted-foreground mt-2">LG</p>
          </div>
          <div className="text-center">
            <WakaSpinner size="xl" label="XL" />
            <p className="text-xs text-muted-foreground mt-2">XL</p>
          </div>
        </div>
      ),
      code: `<WakaSpinner size="xs" />
<WakaSpinner size="sm" />
<WakaSpinner size="md" />
<WakaSpinner size="lg" />
<WakaSpinner size="xl" label="XL" />`,
    },
    {
      title: "Couleurs",
      description: "Différentes couleurs thématiques",
      preview: (
        <div className="flex items-center gap-6">
          <WakaSpinner size="md" color="primary" />
          <WakaSpinner size="md" color="secondary" />
          <WakaSpinner size="md" color="accent" />
          <WakaSpinner size="md" color="destructive" />
          <WakaSpinner size="md" color="#8B5CF6" />
        </div>
      ),
      code: `<WakaSpinner color="primary" />
<WakaSpinner color="secondary" />
<WakaSpinner color="accent" />
<WakaSpinner color="destructive" />
<WakaSpinner color="#8B5CF6" />`,
    },
    {
      title: "Nombre d'anneaux",
      description: "Configuration du nombre de cercles concentriques",
      preview: (
        <div className="flex items-center gap-6">
          <div className="text-center">
            <WakaSpinner size="lg" rings={2} />
            <p className="text-xs text-muted-foreground mt-2">2 rings</p>
          </div>
          <div className="text-center">
            <WakaSpinner size="lg" rings={3} />
            <p className="text-xs text-muted-foreground mt-2">3 rings</p>
          </div>
          <div className="text-center">
            <WakaSpinner size="lg" rings={4} />
            <p className="text-xs text-muted-foreground mt-2">4 rings</p>
          </div>
          <div className="text-center">
            <WakaSpinner size="lg" rings={5} />
            <p className="text-xs text-muted-foreground mt-2">5 rings</p>
          </div>
        </div>
      ),
      code: `<WakaSpinner rings={2} />
<WakaSpinner rings={3} />
<WakaSpinner rings={4} />
<WakaSpinner rings={5} />`,
    },
    {
      title: "Options visuelles",
      description: "Personnalisation des éléments visuels",
      preview: (
        <div className="flex items-center gap-6">
          <div className="text-center">
            <WakaSpinner size="lg" showParticles={false} label="Sans particules" />
          </div>
          <div className="text-center">
            <WakaSpinner size="lg" showPulse={false} label="Sans pulse" />
          </div>
          <div className="text-center">
            <WakaSpinner size="lg" ringOpacity={0.9} label="Haute opacité" />
          </div>
        </div>
      ),
      code: `<WakaSpinner showParticles={false} label="Sans particules" />
<WakaSpinner showPulse={false} label="Sans pulse" />
<WakaSpinner ringOpacity={0.9} label="Haute opacité" />`,
    },
    {
      title: "Dans un bouton",
      description: "Spinner intégré dans un bouton de chargement",
      preview: (
        <Button disabled className="gap-2">
          <WakaSpinner size="xs" showParticles={false} />
          Chargement...
        </Button>
      ),
      code: `<Button disabled className="gap-2">
  <WakaSpinner size="xs" showParticles={false} />
  Chargement...
</Button>`,
    },
  ],
  variants: [
    {
      name: "mode",
      values: ["infinite", "loading"],
      default: "infinite",
    },
    {
      name: "size",
      values: ["xs", "sm", "md", "lg", "xl"],
      default: "md",
    },
    {
      name: "rings",
      values: ["2", "3", "4", "5"],
      default: "3",
    },
    {
      name: "color",
      values: ["primary", "secondary", "accent", "destructive", "muted"],
      default: "primary",
    },
  ],
  renderPlayground: (variants) => (
    <WakaSpinner
      mode={variants.mode as "infinite" | "loading"}
      size={variants.size as "xs" | "sm" | "md" | "lg" | "xl"}
      rings={parseInt(variants.rings) as 2 | 3 | 4 | 5}
      color={variants.color}
      label={variants.mode === "loading" ? "Loading" : "System"}
      subLabel={variants.mode === "loading" ? "Please wait..." : undefined}
    />
  ),
  getPlaygroundCode: (variants) => {
    const props = [`mode="${variants.mode}"`, `size="${variants.size}"`, `rings={${variants.rings}}`, `color="${variants.color}"`]
    if (variants.mode === "loading") {
      props.push('label="Loading"', 'subLabel="Please wait..."')
    } else {
      props.push('label="System"')
    }
    return `<WakaSpinner ${props.join(" ")} />`
  },
}

// ============================================
// AVATAR SHOWCASE
// ============================================
export const avatarShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Avec image",
      description: "Avatar affichant une image",
      preview: (
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
        </div>
      ),
      code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
    },
    {
      title: "Fallback",
      description: "Avatar avec initiales quand pas d'image",
      preview: (
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-green-500 text-white">MK</AvatarFallback>
          </Avatar>
        </div>
      ),
      code: `<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
</Avatar>`,
    },
    {
      title: "Groupe d'avatars",
      description: "Avatars empilés",
      preview: (
        <div className="flex -space-x-4">
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>+3</AvatarFallback>
          </Avatar>
        </div>
      ),
      code: `<div className="flex -space-x-4">
  <Avatar className="border-2 border-background">
    <AvatarImage src="..." />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`,
    },
  ],
}

// ============================================
// PROGRESS SHOWCASE
// ============================================
export const progressShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Valeurs",
      description: "Progress avec différentes valeurs",
      preview: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>0%</span>
            </div>
            <Progress value={0} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>33%</span>
            </div>
            <Progress value={33} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>66%</span>
            </div>
            <Progress value={66} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      ),
      code: `<Progress value={0} />
<Progress value={33} />
<Progress value={66} />
<Progress value={100} />`,
    },
  ],
}

// ============================================
// SKELETON SHOWCASE
// ============================================
export const skeletonShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Formes",
      description: "Différentes formes de skeleton",
      preview: (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ),
      code: `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
    },
    {
      title: "Carte skeleton",
      description: "Skeleton pour une carte complète",
      preview: (
        <Card className="w-[300px]">
          <CardHeader>
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-9 w-24" />
          </CardFooter>
        </Card>
      ),
      code: `<Card className="w-[300px]">
  <CardHeader>
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-3 w-1/2" />
  </CardHeader>
  <CardContent className="space-y-2">
    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-2/3" />
  </CardContent>
  <CardFooter>
    <Skeleton className="h-9 w-24" />
  </CardFooter>
</Card>`,
    },
  ],
}

// ============================================
// DATATABLE SHOWCASE
// ============================================

// Types pour les exemples DataTable
interface User extends Record<string, unknown> {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive" | "pending"
  createdAt: string
}

// Données d'exemple
const sampleUsers: User[] = [
  { id: "1", name: "Jean Dupont", email: "jean@example.com", role: "Admin", status: "active", createdAt: "2024-01-15" },
  { id: "2", name: "Marie Martin", email: "marie@example.com", role: "User", status: "active", createdAt: "2024-02-20" },
  { id: "3", name: "Pierre Bernard", email: "pierre@example.com", role: "Editor", status: "pending", createdAt: "2024-03-10" },
  { id: "4", name: "Sophie Petit", email: "sophie@example.com", role: "User", status: "inactive", createdAt: "2024-01-05" },
  { id: "5", name: "Lucas Moreau", email: "lucas@example.com", role: "Admin", status: "active", createdAt: "2024-04-12" },
]

// Colonnes pour DataTable simple
const simpleColumns: any[] = [
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
  },
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }: { row: any }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "active" ? "default" :
            status === "pending" ? "secondary" : "outline"
          }
        >
          {status === "active" ? "Actif" : status === "pending" ? "En attente" : "Inactif"}
        </Badge>
      )
    },
  },
]

// Colonnes pour DataTable avancée
const advancedColumns: any[] = [
  {
    accessorKey: "name",
    header: ({ column }: { column: any }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4"
      >
        Nom
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }: { column: any }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4"
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "role",
    header: "Rôle",
    filterFn: (row: any, id: any, value: any) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }: { row: any }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "active" ? "default" :
            status === "pending" ? "secondary" : "outline"
          }
        >
          {status === "active" ? "Actif" : status === "pending" ? "En attente" : "Inactif"}
        </Badge>
      )
    },
    filterFn: (row: any, id: any, value: any) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "createdAt",
    header: "Date création",
    cell: ({ row }: { row: any }) => {
      const date = new Date(row.getValue("createdAt"))
      return date.toLocaleDateString("fr-FR")
    },
  },
  {
    id: "actions",
    cell: ({ row }: { row: any }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Eye className="mr-2 h-4 w-4" />
            Voir
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Pencil className="mr-2 h-4 w-4" />
            Modifier
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Supprimer
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

export const tableShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Table simple",
      description: "Table HTML stylisée basique",
      preview: (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleUsers.slice(0, 3).map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.status === "active" ? "default" :
                      user.status === "pending" ? "secondary" : "outline"
                    }
                  >
                    {user.status === "active" ? "Actif" : user.status === "pending" ? "En attente" : "Inactif"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ),
      code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Nom</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Rôle</TableHead>
      <TableHead>Statut</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.role}</TableCell>
        <TableCell>
          <Badge variant={user.status === "active" ? "default" : "outline"}>
            {user.status}
          </Badge>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
    },
  ],
}

// ============================================
// DATATABLEADVANCED SHOWCASE
// ============================================

// Données enrichies pour les démos avancées
type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "available" | "low_stock" | "out_of_stock"
  [key: string]: unknown
}

const sampleProducts: Product[] = [
  { id: "1", name: "MacBook Pro 14\"", category: "Électronique", price: 2499, stock: 15, status: "available" },
  { id: "2", name: "iPhone 15 Pro", category: "Électronique", price: 1199, stock: 3, status: "low_stock" },
  { id: "3", name: "AirPods Pro", category: "Audio", price: 279, stock: 50, status: "available" },
  { id: "4", name: "iPad Air", category: "Électronique", price: 799, stock: 0, status: "out_of_stock" },
  { id: "5", name: "Apple Watch", category: "Accessoires", price: 449, stock: 25, status: "available" },
  { id: "6", name: "Magic Keyboard", category: "Accessoires", price: 349, stock: 8, status: "low_stock" },
  { id: "7", name: "HomePod Mini", category: "Audio", price: 99, stock: 40, status: "available" },
  { id: "8", name: "Studio Display", category: "Électronique", price: 1799, stock: 5, status: "low_stock" },
]

// Colonnes avec édition inline
const editableColumns: any[] = [
  {
    accessorKey: "name",
    header: "Produit",
    enableEditing: true,
  },
  {
    accessorKey: "category",
    header: "Catégorie",
    enableEditing: true,
    editConfig: {
      type: "select",
      options: [
        { label: "Électronique", value: "Électronique" },
        { label: "Audio", value: "Audio" },
        { label: "Accessoires", value: "Accessoires" },
      ],
    },
  },
  {
    accessorKey: "price",
    header: ({ column }: { column: any }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4"
      >
        Prix
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }: { row: any }) => {
      const price = row.getValue("price") as number
      return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price)
    },
    enableEditing: true,
    editConfig: { type: "number" },
  },
  {
    accessorKey: "stock",
    header: ({ column }: { column: any }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4"
      >
        Stock
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    enableEditing: true,
    editConfig: { type: "number" },
  },
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }: { row: any }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "available" ? "default" :
            status === "low_stock" ? "secondary" : "destructive"
          }
        >
          {status === "available" ? "Disponible" : status === "low_stock" ? "Stock bas" : "Rupture"}
        </Badge>
      )
    },
  },
]

// Colonnes pour groupage
const groupableColumns: any[] = [
  {
    accessorKey: "name",
    header: "Produit",
  },
  {
    accessorKey: "category",
    header: "Catégorie",
    enableGrouping: true,
  },
  {
    accessorKey: "price",
    header: "Prix",
    cell: ({ row }: { row: any }) => {
      const price = row.getValue("price") as number
      return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price)
    },
    aggregationFn: "sum",
    aggregatedCell: ({ getValue }: any) => {
      const value = getValue() as number
      return <span className="font-semibold">{new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value)}</span>
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
    aggregationFn: "sum",
    aggregatedCell: ({ getValue }: any) => <span className="font-semibold">{getValue()} unités</span>,
  },
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }: { row: any }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "available" ? "default" :
            status === "low_stock" ? "secondary" : "destructive"
          }
        >
          {status === "available" ? "Disponible" : status === "low_stock" ? "Stock bas" : "Rupture"}
        </Badge>
      )
    },
  },
]

// Composant de démo interactive pour DataTable avec filtres
function DataTableWithFiltersDemo() {
  const [data] = useState(sampleProducts)

  return (
    <DataTableAdvanced
      data={data}
      columns={editableColumns}
      filters={[
        {
          id: "category",
          label: "Catégorie",
          type: "select",
          column: "category",
          options: [
            { label: "Électronique", value: "Électronique" },
            { label: "Audio", value: "Audio" },
            { label: "Accessoires", value: "Accessoires" },
          ],
        },
        {
          id: "status",
          label: "Statut",
          type: "select",
          column: "status",
          options: [
            { label: "Disponible", value: "available" },
            { label: "Stock bas", value: "low_stock" },
            { label: "Rupture", value: "out_of_stock" },
          ],
        },
        {
          id: "price",
          label: "Prix",
          type: "range",
          column: "price",
        },
      ]}
      pagination={{ mode: "client", pageSize: 5 }}
      toolbar={{
        showSearch: true,
      }}
    />
  )
}

// Composant de démo interactive pour édition inline
function DataTableEditableDemo() {
  const [data, setData] = useState(sampleProducts)

  return (
    <DataTableAdvanced
      data={data}
      columns={editableColumns}
      edit={{
        mode: "inline",
        editableColumns: [
          {
            field: "name",
            config: { type: "text", placeholder: "Nom du produit" },
          },
          {
            field: "price",
            config: { type: "number", min: 0, step: 0.01, placeholder: "Prix" },
          },
          {
            field: "stock",
            config: { type: "number", min: 0, step: 1, placeholder: "Stock" },
          },
          {
            field: "status",
            config: {
              type: "select",
              options: [
                { value: "available", label: "Disponible" },
                { value: "low_stock", label: "Stock faible" },
                { value: "out_of_stock", label: "Rupture" },
              ],
            },
          },
        ],
        onSave: async (rowId, changes) => {
          setData(prev => prev.map(item =>
            item.id === rowId ? { ...item, ...changes } : item
          ))
          toast({
            title: "Modification enregistrée",
            description: "Les données ont été mises à jour.",
          })
        },
      }}
      pagination={{ mode: "client", pageSize: 5 }}
    />
  )
}

// Composant de démo pour groupage
function DataTableGroupingDemo() {
  return (
    <DataTableAdvanced
      data={sampleProducts}
      columns={groupableColumns}
      grouping={{
        columns: ["category"],
        showTotals: true,
      }}
      pagination={{ mode: "client", pageSize: 10 }}
    />
  )
}

// Composant de démo pour expansion de lignes
function DataTableExpansionDemo() {
  return (
    <DataTableAdvanced
      data={sampleProducts}
      columns={editableColumns.slice(0, 4)}
      rowExpansion={{
        enabled: true,
        renderExpanded: (row: any) => (
          <div className="p-4 bg-muted/50 rounded-md">
            <h4 className="font-semibold mb-2">Détails du produit</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">ID:</span> {row.id}
              </div>
              <div>
                <span className="text-muted-foreground">Catégorie:</span> {row.category}
              </div>
              <div>
                <span className="text-muted-foreground">Prix unitaire:</span> {new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(row.price)}
              </div>
              <div>
                <span className="text-muted-foreground">Valeur stock:</span> {new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(row.price * row.stock)}
              </div>
            </div>
          </div>
        ),
      }}
      pagination={{ mode: "client", pageSize: 5 }}
    />
  )
}

export const dataTableAdvancedShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "DataTable basique avec tri et pagination",
      description: "Tableau de données avec tri sur colonnes et pagination client",
      preview: (
        <div className="w-full">
          <DataTableAdvanced
            data={sampleUsers}
            columns={advancedColumns}
            pagination={{ mode: "client", pageSize: 5 }}
          />
        </div>
      ),
      code: `<DataTableAdvanced
  data={users}
  columns={columns}
  pagination={{ mode: "client", pageSize: 5 }}
/>`,
    },
    {
      title: "Avec filtres avancés",
      description: "Filtres par catégorie, statut, et plage de prix avec recherche globale",
      preview: (
        <div className="w-full">
          <DataTableWithFiltersDemo />
        </div>
      ),
      code: `<DataTableAdvanced
  data={products}
  columns={columns}
  filters={[
    {
      id: "category",
      label: "Catégorie",
      type: "select",
      column: "category",
      options: [
        { label: "Électronique", value: "Électronique" },
        { label: "Audio", value: "Audio" },
      ],
    },
    {
      id: "status",
      label: "Statut",
      type: "select",
      column: "status",
      options: [
        { label: "Disponible", value: "available" },
        { label: "Rupture", value: "out_of_stock" },
      ],
    },
    {
      id: "price",
      label: "Prix",
      type: "range",
      column: "price",
    },
  ]}
  toolbar={{
    showSearch: true,
  }}
/>`,
    },
    {
      title: "Édition inline",
      description: "Cliquez sur le bouton 'Edit' pour modifier une ligne. Les colonnes éditables sont définies via editableColumns.",
      preview: (
        <div className="w-full">
          <DataTableEditableDemo />
        </div>
      ),
      code: `<DataTableAdvanced
  data={products}
  columns={columns}
  edit={{
    mode: "inline", // ou "row" ou "modal"
    editableColumns: [
      {
        field: "name",
        config: { type: "text", placeholder: "Nom" },
      },
      {
        field: "price",
        config: { type: "number", min: 0, step: 0.01 },
      },
      {
        field: "status",
        config: {
          type: "select",
          options: [
            { value: "available", label: "Disponible" },
            { value: "out_of_stock", label: "Rupture" },
          ],
        },
      },
    ],
    onSave: async (rowId, changes) => {
      await updateProduct(rowId, changes)
    },
  }}
/>`,
    },
    {
      title: "Groupage par catégorie",
      description: "Regroupement des lignes avec agrégations (somme des prix et stocks)",
      preview: (
        <div className="w-full">
          <DataTableGroupingDemo />
        </div>
      ),
      code: `<DataTableAdvanced
  data={products}
  columns={columns}
  grouping={{
    columns: ["category"],
    showTotals: true,
  }}
/>

// Colonnes avec agrégation:
{
  accessorKey: "price",
  header: "Prix",
  aggregationFn: "sum",
  aggregatedCell: ({ getValue }) => (
    <span className="font-semibold">
      {formatCurrency(getValue())}
    </span>
  ),
}`,
    },
    {
      title: "Expansion de lignes",
      description: "Cliquez sur la flèche pour voir les détails d'un produit",
      preview: (
        <div className="w-full">
          <DataTableExpansionDemo />
        </div>
      ),
      code: `<DataTableAdvanced
  data={products}
  columns={columns}
  rowExpansion={{
    enabled: true,
    renderExpanded: (row) => (
      <div className="p-4 bg-muted/50">
        <h4>Détails du produit</h4>
        <p>ID: {row.id}</p>
        <p>Valeur stock: {row.price * row.stock}€</p>
      </div>
    ),
  }}
/>`,
    },
    {
      title: "Avec sélection de lignes",
      description: "Sélection multiple avec actions groupées",
      preview: (
        <div className="w-full">
          <DataTableAdvanced
            data={sampleUsers}
            columns={simpleColumns}
            selection="multiple"
            actions={[
              {
                id: "delete",
                label: "Supprimer",
                icon: <Trash2 className="h-4 w-4" />,
                onClick: (selected) => toast({ title: `${selected.length} élément(s) sélectionné(s)` }),
                requiresSelection: true,
                variant: "destructive",
              },
            ]}
            pagination={{ mode: "client", pageSize: 5 }}
          />
        </div>
      ),
      code: `<DataTableAdvanced
  data={users}
  columns={columns}
  selection="multiple" // ou "single"
  actions={[
    {
      id: "delete",
      label: "Supprimer",
      icon: <Trash2 />,
      onClick: (selected) => deleteUsers(selected),
      requiresSelection: true,
      variant: "destructive",
    },
  ]}
  onSelectionChange={(selected) => console.log(selected)}
/>`,
    },
    {
      title: "Variantes visuelles",
      description: "Différents styles : bordered, minimal, striped, glass",
      preview: (
        <div className="w-full space-y-4">
          <DataTableAdvanced
            data={sampleUsers.slice(0, 3)}
            columns={simpleColumns}
            variant="striped"
            pagination={{ mode: "client", pageSize: 3 }}
          />
        </div>
      ),
      code: `// Variante striped (rayé)
<DataTableAdvanced
  data={users}
  columns={columns}
  variant="striped" // "bordered" | "minimal" | "striped" | "glass"
/>`,
    },
    {
      title: "Densité d'affichage",
      description: "Ajustez l'espacement : comfortable, compact, spacious",
      preview: (
        <div className="w-full">
          <DataTableAdvanced
            data={sampleUsers.slice(0, 4)}
            columns={simpleColumns}
            density="compact"
            pagination={{ mode: "client", pageSize: 4 }}
          />
        </div>
      ),
      code: `<DataTableAdvanced
  data={users}
  columns={columns}
  density="compact" // "comfortable" | "compact" | "spacious"
/>`,
    },
  ],
}

// ============================================
// DATETIME PICKER SHOWCASE
// ============================================

function DateTimePickerDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState<Date | undefined>(new Date())
  const [datetime, setDatetime] = useState<Date | undefined>(new Date())
  const [range, setRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  })

  return (
    <div className="space-y-6 w-full max-w-sm">
      <div className="space-y-2">
        <Label>Date seule</Label>
        <WakaDateTimePicker
          value={date}
          onChange={(d) => setDate(d as Date | undefined)}
          variant="date"
          placeholder="Sélectionner une date"
        />
      </div>
      <div className="space-y-2">
        <Label>Heure seule</Label>
        <WakaDateTimePicker
          value={time}
          onChange={(d) => setTime(d as Date | undefined)}
          variant="time"
          placeholder="Sélectionner une heure"
        />
      </div>
      <div className="space-y-2">
        <Label>Date et heure</Label>
        <WakaDateTimePicker
          value={datetime}
          onChange={(d) => setDatetime(d as Date | undefined)}
          variant="datetime"
          placeholder="Sélectionner date et heure"
        />
      </div>
    </div>
  )
}

function DateTimePickerSizesDemo() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label>Small</Label>
        <WakaDateTimePicker
          variant="date"
          size="sm"
          placeholder="Taille small"
        />
      </div>
      <div className="space-y-2">
        <Label>Medium (défaut)</Label>
        <WakaDateTimePicker
          variant="date"
          size="md"
          placeholder="Taille medium"
        />
      </div>
      <div className="space-y-2">
        <Label>Large</Label>
        <WakaDateTimePicker
          variant="date"
          size="lg"
          placeholder="Taille large"
        />
      </div>
    </div>
  )
}

function DateTimePickerPresetsDemo() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <div className="space-y-2 w-full max-w-sm">
      <Label>Avec presets rapides</Label>
      <WakaDateTimePicker
        value={date}
        onChange={(d) => setDate(d as Date | undefined)}
        variant="date"
        showPresets
        placeholder="Sélectionner une date"
      />
    </div>
  )
}

function DateTimePickerRangeDemo() {
  const [range, setRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })

  return (
    <div className="space-y-2 w-full max-w-md">
      <Label>Plage de dates</Label>
      <WakaDateTimePicker
        value={range}
        onChange={(d) => setRange(d as { from: Date | undefined; to: Date | undefined })}
        variant="range"
        placeholder="Sélectionner une plage"
      />
    </div>
  )
}

export const datetimePickerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Variantes",
      description: "Date seule, heure seule ou date et heure combinées",
      preview: <DateTimePickerDemo />,
      code: `// Date seule
<WakaDateTimePicker
  value={date}
  onChange={setDate}
  variant="date"
  placeholder="Sélectionner une date"
/>

// Heure seule
<WakaDateTimePicker
  value={time}
  onChange={setTime}
  variant="time"
  placeholder="Sélectionner une heure"
/>

// Date et heure
<WakaDateTimePicker
  value={datetime}
  onChange={setDatetime}
  variant="datetime"
  placeholder="Sélectionner date et heure"
/>`,
    },
    {
      title: "Tailles",
      description: "Trois tailles disponibles : small, medium et large",
      preview: <DateTimePickerSizesDemo />,
      code: `<WakaDateTimePicker variant="date" size="sm" />
<WakaDateTimePicker variant="date" size="md" />
<WakaDateTimePicker variant="date" size="lg" />`,
    },
    {
      title: "Avec presets rapides",
      description: "Boutons de sélection rapide pour aujourd'hui, demain, etc.",
      preview: <DateTimePickerPresetsDemo />,
      code: `<WakaDateTimePicker
  value={date}
  onChange={setDate}
  variant="date"
  showPresets // Active les presets rapides
  placeholder="Sélectionner une date"
/>`,
    },
    {
      title: "Plage de dates",
      description: "Sélection d'une plage avec deux dates",
      preview: <DateTimePickerRangeDemo />,
      code: `<WakaDateTimePicker
  value={{ from: startDate, to: endDate }}
  onChange={setRange}
  variant="range"
  placeholder="Sélectionner une plage"
/>`,
    },
  ],
  variants: [
    {
      name: "variant",
      values: ["date", "time", "datetime", "range"],
      default: "date",
    },
    {
      name: "size",
      values: ["sm", "md", "lg"],
      default: "md",
    },
  ],
  renderPlayground: (variants) => (
    <WakaDateTimePicker
      variant={variants.variant as "date" | "time" | "datetime" | "range"}
      size={variants.size as "sm" | "md" | "lg"}
      placeholder="Sélectionner..."
    />
  ),
  getPlaygroundCode: (variants) => {
    const variantProp = variants.variant !== "date" ? ` variant="${variants.variant}"` : ""
    const sizeProp = variants.size !== "md" ? ` size="${variants.size}"` : ""
    return `<WakaDateTimePicker${variantProp}${sizeProp} placeholder="Sélectionner..." />`
  },
}

// ============================================
// WAKA STEPPER SHOWCASE
// ============================================

const sampleSteps: Step[] = [
  {
    id: "account",
    title: "Compte",
    description: "Créer votre compte",
  },
  {
    id: "profile",
    title: "Profil",
    description: "Compléter votre profil",
  },
  {
    id: "preferences",
    title: "Préférences",
    description: "Configurer vos préférences",
    optional: true,
  },
  {
    id: "confirmation",
    title: "Confirmation",
    description: "Valider vos informations",
  },
]

function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="w-full space-y-6">
      <WakaStepper
        steps={sampleSteps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        clickable
      />
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          Précédent
        </Button>
        <Button
          onClick={() => setCurrentStep(Math.min(sampleSteps.length - 1, currentStep + 1))}
          disabled={currentStep === sampleSteps.length - 1}
        >
          Suivant
        </Button>
      </div>
    </div>
  )
}

function VerticalStepperDemo() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <WakaStepper
      steps={sampleSteps}
      currentStep={currentStep}
      onStepChange={setCurrentStep}
      orientation="vertical"
      clickable
    />
  )
}

export const stepperShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Stepper horizontal interactif",
      description: "Assistant multi-étapes avec navigation",
      preview: <StepperDemo />,
      code: `const [currentStep, setCurrentStep] = useState(0)

const steps = [
  { id: "account", title: "Compte", description: "Créer votre compte" },
  { id: "profile", title: "Profil", description: "Compléter votre profil" },
  { id: "confirmation", title: "Confirmation" },
]

<WakaStepper
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  clickable
/>`,
    },
    {
      title: "Stepper vertical",
      description: "Orientation verticale pour les formulaires longs",
      preview: <VerticalStepperDemo />,
      code: `<WakaStepper
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  orientation="vertical"
  clickable
/>`,
    },
    {
      title: "Stepper simple (points)",
      description: "Variante minimaliste avec des points",
      preview: (
        <WakaStepper
          steps={sampleSteps}
          currentStep={2}
          variant="simple"
        />
      ),
      code: `<WakaStepper
  steps={steps}
  currentStep={2}
  variant="simple"
/>`,
    },
    {
      title: "Tailles",
      description: "Différentes tailles disponibles",
      preview: (
        <div className="space-y-6">
          <WakaStepper steps={sampleSteps.slice(0, 3)} currentStep={1} size="sm" />
          <WakaStepper steps={sampleSteps.slice(0, 3)} currentStep={1} size="md" />
          <WakaStepper steps={sampleSteps.slice(0, 3)} currentStep={1} size="lg" />
        </div>
      ),
      code: `<WakaStepper steps={steps} currentStep={1} size="sm" />
<WakaStepper steps={steps} currentStep={1} size="md" />
<WakaStepper steps={steps} currentStep={1} size="lg" />`,
    },
  ],
}

// ============================================
// WAKA BREADCRUMB SHOWCASE
// ============================================

const sampleBreadcrumbItems: BreadcrumbItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Composants", href: "/components" },
  { label: "Navigation", href: "/components?category=navigation" },
  { label: "Breadcrumb" },
]

export const breadcrumbShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Breadcrumb basique",
      description: "Fil d'Ariane simple",
      preview: (
        <WakaBreadcrumb items={sampleBreadcrumbItems} />
      ),
      code: `const items = [
  { label: "Accueil", href: "/" },
  { label: "Composants", href: "/components" },
  { label: "Breadcrumb" }, // Pas de href = page active
]

<WakaBreadcrumb items={items} />`,
    },
    {
      title: "Avec icône Home",
      description: "Affiche une icône maison pour le premier élément",
      preview: (
        <WakaBreadcrumb items={sampleBreadcrumbItems} showHomeIcon />
      ),
      code: `<WakaBreadcrumb items={items} showHomeIcon />`,
    },
    {
      title: "Avec collapse",
      description: "Collapse automatique quand il y a trop d'éléments",
      preview: (
        <WakaBreadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Documents", href: "/docs" },
            { label: "Projets", href: "/docs/projects" },
            { label: "2024", href: "/docs/projects/2024" },
            { label: "Rapports", href: "/docs/projects/2024/reports" },
            { label: "Janvier" },
          ]}
          maxItems={4}
          showHomeIcon
        />
      ),
      code: `<WakaBreadcrumb
  items={items}
  maxItems={4}
  showHomeIcon
/>`,
    },
    {
      title: "Séparateur personnalisé",
      description: "Utiliser un séparateur différent",
      preview: (
        <WakaBreadcrumb
          items={sampleBreadcrumbItems}
          separator={<span className="text-muted-foreground mx-1">/</span>}
        />
      ),
      code: `<WakaBreadcrumb
  items={items}
  separator={<span>/</span>}
/>`,
    },
    {
      title: "Variantes visuelles",
      description: "Différents styles : default, ghost, outline",
      preview: (
        <div className="space-y-4">
          <WakaBreadcrumb items={sampleBreadcrumbItems} variant="default" />
          <WakaBreadcrumb items={sampleBreadcrumbItems} variant="ghost" />
          <WakaBreadcrumb items={sampleBreadcrumbItems} variant="outline" />
        </div>
      ),
      code: `<WakaBreadcrumb items={items} variant="default" />
<WakaBreadcrumb items={items} variant="ghost" />
<WakaBreadcrumb items={items} variant="outline" />`,
    },
    {
      title: "Tailles",
      description: "Différentes tailles disponibles",
      preview: (
        <div className="space-y-4">
          <WakaBreadcrumb items={sampleBreadcrumbItems.slice(0, 3)} size="sm" />
          <WakaBreadcrumb items={sampleBreadcrumbItems.slice(0, 3)} size="md" />
          <WakaBreadcrumb items={sampleBreadcrumbItems.slice(0, 3)} size="lg" />
        </div>
      ),
      code: `<WakaBreadcrumb items={items} size="sm" />
<WakaBreadcrumb items={items} size="md" />
<WakaBreadcrumb items={items} size="lg" />`,
    },
  ],
}

// ============================================
// WAKA MODAL SHOWCASE
// ============================================

function ModalDemo() {
  const { isOpen, open, close, onOpenChange } = useModal()

  return (
    <>
      <Button onClick={open}>Ouvrir le modal</Button>
      <WakaModal
        open={isOpen}
        onOpenChange={onOpenChange}
        title="Confirmation"
        description="Voulez-vous vraiment effectuer cette action ?"
        footer={
          <div className="flex gap-2">
            <Button variant="outline" onClick={close}>Annuler</Button>
            <Button onClick={close}>Confirmer</Button>
          </div>
        }
      >
        <p>Le contenu de votre modal va ici. Vous pouvez y mettre n&apos;importe quel contenu React.</p>
      </WakaModal>
    </>
  )
}

function ModalSizesDemo() {
  const [size, setSize] = useState<"sm" | "md" | "lg" | "xl" | "full">("md")
  const { isOpen, open, close, onOpenChange } = useModal()

  return (
    <div className="flex flex-wrap gap-2">
      {(["sm", "md", "lg", "xl", "full"] as const).map((s) => (
        <Button
          key={s}
          variant={size === s ? "default" : "outline"}
          onClick={() => {
            setSize(s)
            open()
          }}
        >
          {s.toUpperCase()}
        </Button>
      ))}
      <WakaModal
        open={isOpen}
        onOpenChange={onOpenChange}
        title={`Modal ${size.toUpperCase()}`}
        size={size}
      >
        <p>Ceci est un modal de taille <strong>{size}</strong>.</p>
        <p className="mt-2 text-muted-foreground">
          Les tailles disponibles sont : sm, md, lg, xl, full.
        </p>
      </WakaModal>
    </div>
  )
}

function ModalAnimationsDemo() {
  const [animation, setAnimation] = useState<"fade" | "slide" | "scale">("scale")
  const { isOpen, open, close, onOpenChange } = useModal()

  return (
    <div className="flex flex-wrap gap-2">
      {(["fade", "slide", "scale"] as const).map((a) => (
        <Button
          key={a}
          variant={animation === a ? "default" : "outline"}
          onClick={() => {
            setAnimation(a)
            open()
          }}
        >
          {a.charAt(0).toUpperCase() + a.slice(1)}
        </Button>
      ))}
      <WakaModal
        open={isOpen}
        onOpenChange={onOpenChange}
        title={`Animation: ${animation}`}
        animation={animation}
      >
        <p>Ce modal utilise l&apos;animation <strong>{animation}</strong>.</p>
      </WakaModal>
    </div>
  )
}

export const modalShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Modal basique avec hook",
      description: "Utilisation du hook useModal pour gérer l'état",
      preview: <ModalDemo />,
      code: `const { isOpen, open, close, onOpenChange } = useModal()

<Button onClick={open}>Ouvrir le modal</Button>

<WakaModal
  open={isOpen}
  onOpenChange={onOpenChange}
  title="Confirmation"
  description="Voulez-vous vraiment effectuer cette action ?"
  footer={
    <div className="flex gap-2">
      <Button variant="outline" onClick={close}>Annuler</Button>
      <Button onClick={close}>Confirmer</Button>
    </div>
  }
>
  <p>Le contenu de votre modal va ici.</p>
</WakaModal>`,
    },
    {
      title: "Différentes tailles",
      description: "5 tailles disponibles : sm, md, lg, xl, full",
      preview: <ModalSizesDemo />,
      code: `<WakaModal
  open={isOpen}
  onOpenChange={onOpenChange}
  title="Mon Modal"
  size="lg" // sm | md | lg | xl | full
>
  Contenu...
</WakaModal>`,
    },
    {
      title: "Animations",
      description: "Animations d'entrée/sortie : fade, slide, scale",
      preview: <ModalAnimationsDemo />,
      code: `<WakaModal
  open={isOpen}
  onOpenChange={onOpenChange}
  animation="slide" // fade | slide | scale | none
>
  Contenu...
</WakaModal>`,
    },
  ],
}

// ============================================
// WakaTree Showcase
// ============================================

function TreeDemo() {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([])

  const treeData: TreeNode[] = [
    {
      id: "1",
      label: "Documents",
      children: [
        {
          id: "1-1",
          label: "Projets",
          children: [
            { id: "1-1-1", label: "Projet A.pdf" },
            { id: "1-1-2", label: "Projet B.docx" },
          ],
        },
        {
          id: "1-2",
          label: "Images",
          children: [
            { id: "1-2-1", label: "photo1.jpg" },
            { id: "1-2-2", label: "photo2.png" },
          ],
        },
      ],
    },
    {
      id: "2",
      label: "Downloads",
      children: [
        { id: "2-1", label: "archive.zip" },
        { id: "2-2", label: "installer.exe" },
      ],
    },
  ]

  return (
    <div className="border rounded-lg p-4 max-w-md">
      <WakaTree
        data={treeData}
        selectedIds={selectedIds}
        onSelect={setSelectedIds}
        selectionMode="single"
        showIcons
        defaultExpandAll
      />
    </div>
  )
}

function TreeMultipleDemo() {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([])

  const treeData: TreeNode[] = [
    {
      id: "src",
      label: "src",
      children: [
        {
          id: "components",
          label: "components",
          children: [
            { id: "button", label: "Button.tsx" },
            { id: "input", label: "Input.tsx" },
            { id: "card", label: "Card.tsx" },
          ],
        },
        {
          id: "hooks",
          label: "hooks",
          children: [
            { id: "useState", label: "useState.ts" },
            { id: "useEffect", label: "useEffect.ts" },
          ],
        },
      ],
    },
  ]

  return (
    <div className="border rounded-lg p-4 max-w-md">
      <WakaTree
        data={treeData}
        selectedIds={selectedIds}
        onSelect={setSelectedIds}
        selectionMode="multiple"
        showCheckboxes
        showIcons
        defaultExpandAll
      />
      {selectedIds.length > 0 && (
        <div className="mt-2 text-sm text-muted-foreground">
          Sélection: {selectedIds.join(", ")}
        </div>
      )}
    </div>
  )
}

const treeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Arbre basique",
      description: "Navigation dans une structure de fichiers",
      preview: <TreeDemo />,
      code: `const treeData = [
  {
    id: "1",
    label: "Documents",
    children: [
      { id: "1-1", label: "Projets", children: [...] },
      { id: "1-2", label: "Images", children: [...] },
    ],
  },
]

<WakaTree
  data={treeData}
  selectedIds={selectedIds}
  onSelect={setSelectedIds}
  selectionMode="single"
  showIcons
  defaultExpandAll
/>`,
    },
    {
      title: "Sélection multiple",
      description: "Avec checkboxes pour sélection multiple",
      preview: <TreeMultipleDemo />,
      code: `<WakaTree
  data={treeData}
  selectedIds={selectedIds}
  onSelect={setSelectedIds}
  selectionMode="multiple"
  showCheckboxes
  showIcons
  defaultExpandAll
/>`,
    },
  ],
}

// ============================================
// WakaPagination Showcase
// ============================================

function PaginationDemo() {
  const [page, setPage] = React.useState(1)
  const totalPages = 10

  return (
    <WakaPagination
      page={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  )
}

function PaginationFullDemo() {
  const [page, setPage] = React.useState(1)
  const [pageSize, setPageSize] = React.useState(10)
  const totalItems = 250

  return (
    <WakaPagination
      page={page}
      totalPages={Math.ceil(totalItems / pageSize)}
      onPageChange={setPage}
      pageSize={pageSize}
      onPageSizeChange={setPageSize}
      totalItems={totalItems}
      showPageSizeSelector
      showItemsInfo
    />
  )
}

const paginationShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Pagination basique",
      description: "Navigation simple entre les pages",
      preview: <PaginationDemo />,
      code: `<WakaPagination
  page={page}
  totalPages={10}
  onPageChange={setPage}
/>`,
    },
    {
      title: "Pagination complète",
      description: "Avec sélecteur de taille et infos sur les éléments",
      preview: <PaginationFullDemo />,
      code: `<WakaPagination
  page={page}
  totalPages={Math.ceil(totalItems / pageSize)}
  onPageChange={setPage}
  pageSize={pageSize}
  onPageSizeChange={setPageSize}
  totalItems={250}
  showPageSizeSelector
  showItemsInfo
/>`,
    },
  ],
}

// ============================================
// WakaTimePicker Showcase
// ============================================

function TimePickerDemo() {
  const [time, setTime] = React.useState("")

  return (
    <div className="max-w-xs">
      <WakaTimePicker
        value={time}
        onChange={setTime}
        placeholder="Sélectionner une heure"
      />
      {time && (
        <div className="mt-2 text-sm text-muted-foreground">
          Heure sélectionnée: {time}
        </div>
      )}
    </div>
  )
}

function TimePicker12hDemo() {
  const [time, setTime] = React.useState("")

  return (
    <div className="max-w-xs">
      <WakaTimePicker
        value={time}
        onChange={setTime}
        format="12h"
        showSeconds
        placeholder="Heure (12h)"
      />
    </div>
  )
}

const timePickerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Sélecteur d'heure 24h",
      description: "Format 24 heures standard",
      preview: <TimePickerDemo />,
      code: `<WakaTimePicker
  value={time}
  onChange={setTime}
  placeholder="Sélectionner une heure"
/>`,
    },
    {
      title: "Format 12h avec secondes",
      description: "Format AM/PM avec affichage des secondes",
      preview: <TimePicker12hDemo />,
      code: `<WakaTimePicker
  value={time}
  onChange={setTime}
  format="12h"
  showSeconds
/>`,
    },
  ],
}

// ============================================
// WakaDateRangePicker Showcase
// ============================================

function DateRangePickerDemo() {
  const [range, setRange] = React.useState<WakaDateRange | undefined>()

  return (
    <div className="max-w-sm">
      <WakaDateRangePicker
        value={range}
        onChange={setRange}
        placeholder="Sélectionner une période"
      />
    </div>
  )
}

function DateRangePickerPresetsDemo() {
  const [range, setRange] = React.useState<WakaDateRange | undefined>()

  return (
    <div className="max-w-sm">
      <WakaDateRangePicker
        value={range}
        onChange={setRange}
        showPresets
        numberOfMonths={2}
      />
      {range?.from && range?.to && (
        <div className="mt-2 text-sm text-muted-foreground">
          Du {range.from.toLocaleDateString()} au {range.to.toLocaleDateString()}
        </div>
      )}
    </div>
  )
}

const dateRangePickerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Sélecteur basique",
      description: "Sélection d'une plage de dates",
      preview: <DateRangePickerDemo />,
      code: `<WakaDateRangePicker
  value={range}
  onChange={setRange}
  placeholder="Sélectionner une période"
/>`,
    },
    {
      title: "Avec presets",
      description: "Presets rapides et calendrier double",
      preview: <DateRangePickerPresetsDemo />,
      code: `<WakaDateRangePicker
  value={range}
  onChange={setRange}
  showPresets
  numberOfMonths={2}
/>`,
    },
  ],
}

// ============================================
// WakaCombobox Showcase
// ============================================

function ComboboxDemo() {
  const [value, setValue] = React.useState<string | undefined>()

  const options: ComboboxOption<string>[] = [
    { value: "react", label: "React", description: "Bibliothèque JavaScript" },
    { value: "vue", label: "Vue.js", description: "Framework progressif" },
    { value: "angular", label: "Angular", description: "Plateforme complète" },
    { value: "svelte", label: "Svelte", description: "Compilateur JS" },
    { value: "solid", label: "SolidJS", description: "Performances optimales" },
  ]

  return (
    <div className="max-w-xs">
      <WakaCombobox
        options={options}
        value={value}
        onChange={(v) => setValue(v as string)}
        placeholder="Choisir un framework..."
      />
    </div>
  )
}

function ComboboxMultipleDemo() {
  const [value, setValue] = React.useState<string[]>([])

  const options: ComboboxOption<string>[] = [
    { value: "typescript", label: "TypeScript", group: "Langages" },
    { value: "javascript", label: "JavaScript", group: "Langages" },
    { value: "python", label: "Python", group: "Langages" },
    { value: "react", label: "React", group: "Frameworks" },
    { value: "nextjs", label: "Next.js", group: "Frameworks" },
    { value: "tailwind", label: "Tailwind CSS", group: "CSS" },
  ]

  return (
    <div className="max-w-sm">
      <WakaCombobox
        options={options}
        value={value}
        onChange={(v) => setValue((v as string[]) || [])}
        multiple
        placeholder="Sélectionner des technologies..."
        maxSelections={4}
      />
    </div>
  )
}

function ComboboxCreatableDemo() {
  const [value, setValue] = React.useState<string | undefined>()
  const [options, setOptions] = React.useState<ComboboxOption<string>[]>([
    { value: "tag1", label: "Important" },
    { value: "tag2", label: "Urgent" },
    { value: "tag3", label: "Review" },
  ])

  return (
    <div className="max-w-xs">
      <WakaCombobox
        options={options}
        value={value}
        onChange={(v) => setValue(v as string)}
        creatable
        onCreate={(inputValue) => {
          const newOption = { value: inputValue.toLowerCase(), label: inputValue }
          setOptions((prev) => [...prev, newOption])
          return newOption
        }}
        placeholder="Choisir ou créer un tag..."
      />
    </div>
  )
}

const comboboxShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Combobox simple",
      description: "Sélection unique avec recherche",
      preview: <ComboboxDemo />,
      code: `const options = [
  { value: "react", label: "React", description: "..." },
  { value: "vue", label: "Vue.js", description: "..." },
]

<WakaCombobox
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Choisir un framework..."
/>`,
    },
    {
      title: "Sélection multiple",
      description: "Avec groupes et limite de sélections",
      preview: <ComboboxMultipleDemo />,
      code: `<WakaCombobox
  options={options}
  value={value}
  onChange={setValue}
  multiple
  maxSelections={4}
/>`,
    },
    {
      title: "Création d'options",
      description: "Permet de créer de nouvelles options",
      preview: <ComboboxCreatableDemo />,
      code: `<WakaCombobox
  options={options}
  value={value}
  onChange={setValue}
  creatable
  onCreate={(inputValue) => {
    const newOption = { value: inputValue, label: inputValue }
    setOptions((prev) => [...prev, newOption])
    return newOption
  }}
/>`,
    },
  ],
}

// ============================================
// WakaDrawer Showcase
// ============================================

function DrawerDemo() {
  const { open, onOpenChange, openDrawer } = useDrawer()

  return (
    <>
      <Button onClick={openDrawer}>Ouvrir le drawer</Button>
      <WakaDrawer
        open={open}
        onOpenChange={onOpenChange}
        title="Paramètres"
        description="Configurez les options de l'application"
        position="right"
        size="md"
        footer={
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Annuler
            </Button>
            <Button onClick={() => onOpenChange(false)}>Enregistrer</Button>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <Label>Nom du projet</Label>
            <Input placeholder="Mon projet" className="mt-1" />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea placeholder="Description du projet..." className="mt-1" />
          </div>
        </div>
      </WakaDrawer>
    </>
  )
}

function DrawerPositionsDemo() {
  const [position, setPosition] = React.useState<"left" | "right" | "top" | "bottom">("right")
  const { open, onOpenChange, openDrawer } = useDrawer()

  return (
    <div className="flex gap-2 flex-wrap">
      {(["left", "right", "top", "bottom"] as const).map((pos) => (
        <Button
          key={pos}
          variant="outline"
          onClick={() => {
            setPosition(pos)
            openDrawer()
          }}
        >
          {pos.charAt(0).toUpperCase() + pos.slice(1)}
        </Button>
      ))}
      <WakaDrawer
        open={open}
        onOpenChange={onOpenChange}
        title={`Drawer ${position}`}
        position={position}
        size="sm"
      >
        <p>Contenu du drawer positionné à {position}</p>
      </WakaDrawer>
    </div>
  )
}

const drawerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Drawer basique",
      description: "Panneau latéral avec formulaire",
      preview: <DrawerDemo />,
      code: `const { open, onOpenChange, openDrawer } = useDrawer()

<Button onClick={openDrawer}>Ouvrir le drawer</Button>
<WakaDrawer
  open={open}
  onOpenChange={onOpenChange}
  title="Paramètres"
  description="Configurez les options"
  position="right"
  size="md"
  footer={<Button>Enregistrer</Button>}
>
  {/* Contenu */}
</WakaDrawer>`,
    },
    {
      title: "Différentes positions",
      description: "Le drawer peut s'ouvrir de chaque côté",
      preview: <DrawerPositionsDemo />,
      code: `<WakaDrawer
  open={open}
  onOpenChange={onOpenChange}
  position="left" // right | top | bottom
  size="sm"
>
  Contenu...
</WakaDrawer>`,
    },
  ],
}

// ============================================
// WakaNumberInput Showcase
// ============================================

function NumberInputDemo() {
  const [value, setValue] = React.useState<number | undefined>(50)
  return (
    <div className="max-w-xs">
      <WakaNumberInput
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={5}
        placeholder="Quantité"
      />
    </div>
  )
}

function NumberInputVariantsDemo() {
  return (
    <div className="space-y-4 max-w-xs">
      <WakaNumberInput
        value={10}
        buttonPosition="sides"
        placeholder="Boutons sur les côtés"
      />
      <WakaNumberInput
        value={10}
        buttonPosition="right"
        placeholder="Boutons à droite"
      />
      <WakaNumberInput
        value={10}
        buttonPosition="none"
        placeholder="Sans boutons"
      />
    </div>
  )
}

const numberInputShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Input numérique basique",
      description: "Avec boutons +/- et min/max",
      preview: <NumberInputDemo />,
      code: `<WakaNumberInput
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  step={5}
  label="Quantité"
/>`,
    },
    {
      title: "Positions des boutons",
      description: "Différentes dispositions des contrôles",
      preview: <NumberInputVariantsDemo />,
      code: `<WakaNumberInput buttonPosition="sides" />
<WakaNumberInput buttonPosition="right" />
<WakaNumberInput buttonPosition="none" />`,
    },
  ],
}

// ============================================
// WakaImage Showcase
// ============================================

const imageShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Image avec lazy loading",
      description: "Chargement différé automatique",
      preview: (
        <div className="grid gap-4 grid-cols-2 max-w-md">
          <WakaImage
            src="https://picsum.photos/400/300?random=1"
            alt="Image exemple 1"
            width={200}
            height={150}
          />
          <WakaImage
            src="https://picsum.photos/400/300?random=2"
            alt="Image exemple 2"
            width={200}
            height={150}
          />
        </div>
      ),
      code: `<WakaImage
  src="https://picsum.photos/400/300"
  alt="Image exemple"
  width={200}
  height={150}
/>`,
    },
    {
      title: "Image avec zoom",
      description: "Cliquez pour agrandir",
      preview: (
        <WakaImage
          src="https://picsum.photos/800/600?random=3"
          alt="Image zoomable"
          width={300}
          height={225}
          zoomable
        />
      ),
      code: `<WakaImage
  src="https://picsum.photos/800/600"
  alt="Image zoomable"
  width={300}
  height={225}
  zoomable
/>`,
    },
  ],
}

// ============================================
// WakaQRCode Showcase
// ============================================

const qrcodeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "QR Code basique",
      description: "Génération d'un QR code simple",
      preview: (
        <WakaQRCode
          value="https://example.com"
          size={150}
        />
      ),
      code: `<WakaQRCode
  value="https://example.com"
  size={150}
/>`,
    },
    {
      title: "Avec couleurs personnalisées",
      description: "QR code avec style personnalisé",
      preview: (
        <div className="flex gap-4">
          <WakaQRCode
            value="https://example.com"
            size={120}
            fgColor="#1e40af"
          />
          <WakaQRCode
            value="https://example.com"
            size={120}
            fgColor="#059669"
          />
        </div>
      ),
      code: `<WakaQRCode
  value="https://example.com"
  size={120}
  fgColor="#1e40af"
/>`,
    },
    {
      title: "Avec actions",
      description: "Téléchargement et copie",
      preview: (
        <WakaQRCode
          value="https://wakastellar.com"
          size={150}
          showActions
        />
      ),
      code: `<WakaQRCode
  value="https://wakastellar.com"
  size={150}
  showActions
/>`,
    },
  ],
}

// ============================================
// WakaBarcode Showcase
// ============================================

const barcodeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Code-barres CODE128",
      description: "Format standard CODE128",
      preview: (
        <WakaBarcode
          value="ABC-123456"
          format="CODE128"
          height={80}
        />
      ),
      code: `<WakaBarcode
  value="ABC-123456"
  format="CODE128"
  height={80}
/>`,
    },
    {
      title: "Code-barres CODE39",
      description: "Format CODE39 alphanumérique",
      preview: (
        <WakaBarcode
          value="HELLO123"
          format="CODE39"
          height={60}
        />
      ),
      code: `<WakaBarcode
  value="HELLO123"
  format="CODE39"
  height={60}
/>`,
    },
    {
      title: "Avec actions",
      description: "Téléchargement et copie",
      preview: (
        <WakaBarcode
          value="PRODUCT-001"
          showActions
        />
      ),
      code: `<WakaBarcode
  value="PRODUCT-001"
  showActions
/>`,
    },
  ],
}

// ============================================
// WakaVideo Showcase
// ============================================

const videoShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Lecteur vidéo basique",
      description: "Avec contrôles personnalisés",
      preview: (
        <div className="max-w-lg">
          <WakaVideo
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            poster="https://picsum.photos/640/360?random=10"
            aspectRatio="16/9"
          />
        </div>
      ),
      code: `<WakaVideo
  src="https://example.com/video.mp4"
  poster="https://example.com/poster.jpg"
  aspectRatio="16/9"
/>`,
    },
    {
      title: "Options avancées",
      description: "Autoplay, boucle, sans contrôles",
      preview: (
        <div className="max-w-sm">
          <WakaVideo
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted
            loop
            showFullscreen={false}
            showPlaybackSpeed={false}
          />
        </div>
      ),
      code: `<WakaVideo
  src="video.mp4"
  autoPlay
  muted
  loop
  showFullscreen={false}
  showPlaybackSpeed={false}
/>`,
    },
  ],
}

// ============================================
// WakaVirtualList Showcase
// ============================================

function VirtualListDemo() {
  const items = React.useMemo(
    () => Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: `Item ${i + 1}`,
      description: `Description de l'élément numéro ${i + 1}`,
    })),
    []
  )

  return (
    <div className="border rounded-lg">
      <WakaVirtualList
        items={items}
        itemHeight={60}
        height={300}
        renderItem={(item, index, style) => (
          <div
            style={style}
            className="flex items-center px-4 border-b hover:bg-muted/50"
          >
            <div className="flex-1">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-muted-foreground">{item.description}</div>
            </div>
          </div>
        )}
      />
    </div>
  )
}

const virtualListShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Liste virtualisée",
      description: "10 000 éléments avec performances optimales",
      preview: <VirtualListDemo />,
      code: `const items = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: \`Item \${i + 1}\`,
}))

<WakaVirtualList
  items={items}
  itemHeight={60}
  height={300}
  renderItem={(item, index, style) => (
    <div style={style} className="...">
      {item.name}
    </div>
  )}
/>`,
    },
  ],
}

// ============================================
// WakaSegmentedControl Showcase
// ============================================

function SegmentedControlDemo() {
  const [view, setView] = React.useState("grid")

  return (
    <WakaSegmentedControl
      options={[
        { value: "grid", label: "Grille", icon: <Grid className="h-4 w-4" /> },
        { value: "list", label: "Liste", icon: <List className="h-4 w-4" /> },
        { value: "layers", label: "Couches", icon: <Layers className="h-4 w-4" /> },
      ]}
      value={view}
      onChange={setView}
    />
  )
}

function SegmentedControlVariantsDemo() {
  return (
    <div className="space-y-4">
      <WakaSegmentedControl
        options={[
          { value: "day", label: "Jour" },
          { value: "week", label: "Semaine" },
          { value: "month", label: "Mois" },
        ]}
        value="week"
        variant="default"
      />
      <WakaSegmentedControl
        options={[
          { value: "day", label: "Jour" },
          { value: "week", label: "Semaine" },
          { value: "month", label: "Mois" },
        ]}
        value="week"
        variant="pills"
      />
    </div>
  )
}

const segmentedControlShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Contrôle segmenté avec icônes",
      description: "Sélection de vue",
      preview: <SegmentedControlDemo />,
      code: `<WakaSegmentedControl
  options={[
    { value: "grid", label: "Grille", icon: <Grid /> },
    { value: "list", label: "Liste", icon: <List /> },
  ]}
  value={view}
  onChange={setView}
/>`,
    },
    {
      title: "Variantes",
      description: "Style default et pills",
      preview: <SegmentedControlVariantsDemo />,
      code: `<WakaSegmentedControl
  options={options}
  value={value}
  variant="pills" // default | pills
/>`,
    },
  ],
}

// ============================================
// WakaKanban Showcase
// ============================================

function KanbanDemo() {
  const [columns, setColumns] = React.useState<KanbanColumn[]>([
    {
      id: "todo",
      title: "À faire",
      cards: [
        { id: "1", title: "Créer la maquette", description: "Design UI/UX", priority: "high" },
        { id: "2", title: "Rédiger les specs", priority: "medium" },
      ],
    },
    {
      id: "doing",
      title: "En cours",
      cards: [
        { id: "3", title: "Développer l'API", description: "Backend Node.js", priority: "high" },
      ],
    },
    {
      id: "done",
      title: "Terminé",
      cards: [
        { id: "4", title: "Configuration projet", priority: "low" },
      ],
    },
  ])

  return (
    <div className="w-full overflow-x-auto">
      <WakaKanban
        columns={columns}
        onCardMove={() => {}}
        allowAddCard
      />
    </div>
  )
}

const kanbanShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Tableau Kanban",
      description: "Glissez-déposez les cartes entre les colonnes",
      preview: <KanbanDemo />,
      code: `const [columns, setColumns] = useState([
  {
    id: "todo",
    title: "À faire",
    cards: [
      { id: "1", title: "Créer la maquette", priority: "high" },
    ],
  },
  { id: "doing", title: "En cours", cards: [] },
  { id: "done", title: "Terminé", cards: [] },
])

<WakaKanban
  columns={columns}
  onColumnsChange={setColumns}
  showAddCard
  showCardCount
/>`,
    },
  ],
}

// ============================================
// WakaTimeline Showcase
// ============================================

const timelineItems: TimelineItem[] = [
  {
    id: "1",
    title: "Commande passée",
    description: "Votre commande a été confirmée",
    date: new Date("2024-01-15T10:30:00"),
    status: "completed",
  },
  {
    id: "2",
    title: "En préparation",
    description: "Votre commande est en cours de préparation",
    date: new Date("2024-01-16T14:00:00"),
    status: "completed",
  },
  {
    id: "3",
    title: "Expédiée",
    description: "Votre commande a été expédiée",
    date: new Date("2024-01-17T09:15:00"),
    status: "current",
  },
  {
    id: "4",
    title: "Livraison",
    description: "Livraison prévue demain",
    status: "pending",
  },
]

const timelineShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Timeline verticale",
      description: "Suivi d'une commande",
      preview: (
        <div className="max-w-md">
          <WakaTimeline
            items={timelineItems}
            orientation="vertical"
            showDates
          />
        </div>
      ),
      code: `<WakaTimeline
  items={items}
  orientation="vertical"
  showDates
/>`,
    },
    {
      title: "Timeline horizontale",
      description: "Étapes d'un processus",
      preview: (
        <WakaTimeline
          items={timelineItems.slice(0, 3)}
          orientation="horizontal"
          size="sm"
        />
      ),
      code: `<WakaTimeline
  items={items}
  orientation="horizontal"
  size="sm"
/>`,
    },
  ],
}

// ============================================
// WakaStat Showcase
// ============================================

const statShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Statistiques basiques",
      description: "Cartes de statistiques avec tendances",
      preview: (
        <WakaStatGroup layout="grid" columns={3}>
          <WakaStat
            label="Revenus"
            value="€45,231"
            trend="up"
            trendValue="+20.1%"
            trendText="vs mois dernier"
            icon={<DollarSign className="h-5 w-5" />}
            variant="card"
            color="success"
          />
          <WakaStat
            label="Commandes"
            value="2,350"
            trend="up"
            trendValue="+180"
            trendText="cette semaine"
            icon={<ShoppingCart className="h-5 w-5" />}
            variant="card"
            color="blue"
          />
          <WakaStat
            label="Utilisateurs"
            value="12,543"
            trend="down"
            trendValue="-2.3%"
            invertTrend
            icon={<Users className="h-5 w-5" />}
            variant="card"
            color="purple"
          />
        </WakaStatGroup>
      ),
      code: `<WakaStatGroup layout="grid" columns={3}>
  <WakaStat
    label="Revenus"
    value="€45,231"
    trend="up"
    trendValue="+20.1%"
    icon={<DollarSign />}
    variant="card"
    color="success"
  />
  ...
</WakaStatGroup>`,
    },
    {
      title: "Variante gradient",
      description: "Statistiques avec fond dégradé",
      preview: (
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <WakaStat
            label="Revenus totaux"
            value="€128,430"
            trend="up"
            trendValue="+12%"
            icon={<TrendingUp className="h-5 w-5" />}
            variant="gradient"
            color="primary"
          />
          <WakaStat
            label="Performance"
            value="94.2%"
            trend="up"
            trendValue="+5.4%"
            icon={<Activity className="h-5 w-5" />}
            variant="gradient"
            color="success"
          />
        </div>
      ),
      code: `<WakaStat
  label="Revenus totaux"
  value="€128,430"
  trend="up"
  trendValue="+12%"
  icon={<TrendingUp />}
  variant="gradient"
  color="primary"
/>`,
    },
    {
      title: "Tailles",
      description: "Différentes tailles disponibles",
      preview: (
        <div className="space-y-4">
          <WakaStat label="Small" value="1,234" size="sm" variant="card" />
          <WakaStat label="Medium" value="5,678" size="md" variant="card" />
          <WakaStat label="Large" value="9,012" size="lg" variant="card" />
        </div>
      ),
      code: `<WakaStat label="Small" value="1,234" size="sm" variant="card" />
<WakaStat label="Medium" value="5,678" size="md" variant="card" />
<WakaStat label="Large" value="9,012" size="lg" variant="card" />`,
    },
  ],
}

// ============================================
// WakaThemeCreator Showcase
// ============================================

// Note: WakaThemeCreator est en cours de refactorisation pour correspondre à la nouvelle API theme-provider
const themeCreatorShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Créateur de thèmes",
      description: "Ce composant est en cours de refactorisation pour correspondre à la nouvelle API du ThemeProvider.",
      preview: (
        <div className="w-full p-8 text-center text-muted-foreground border rounded-lg">
          <p className="text-lg font-medium">WakaThemeCreator</p>
          <p className="text-sm">Ce composant est en cours de refactorisation</p>
        </div>
      ),
      code: `// WakaThemeCreator est en cours de refactorisation
// La documentation sera mise à jour une fois le composant terminé`,
    },
  ],
}

// ============================================
// ALERT DIALOG SHOWCASE
// ============================================
export const alertDialogShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Alert Dialog basique",
      description: "Dialogue de confirmation pour les actions importantes",
      preview: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Supprimer le compte</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
              <AlertDialogDescription>
                Cette action est irréversible. Cela supprimera définitivement votre
                compte et toutes vos données de nos serveurs.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
              <AlertDialogAction>Continuer</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ),
      code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Supprimer le compte</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
      <AlertDialogDescription>
        Cette action est irréversible.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Annuler</AlertDialogCancel>
      <AlertDialogAction>Continuer</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    },
  ],
}

// ============================================
// HOVER CARD SHOWCASE
// ============================================
export const hoverCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Hover Card basique",
      description: "Carte d'information affichée au survol",
      preview: (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@wakastellar</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>WS</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@wakastellar</h4>
                <p className="text-sm text-muted-foreground">
                  Bibliothèque de composants React professionnels et accessibles.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">
                    Créé en décembre 2024
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ),
      code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@wakastellar</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>WS</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@wakastellar</h4>
        <p className="text-sm text-muted-foreground">
          Bibliothèque de composants React.
        </p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
    },
  ],
}

// ============================================
// NAVIGATION MENU SHOWCASE
// ============================================
export const navigationMenuShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Menu de navigation",
      description: "Menu de navigation avec sous-menus et descriptions",
      preview: (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Composants</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="#"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          WakaStart UI
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          85+ composants React accessibles et personnalisables.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Button</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Boutons interactifs avec variantes.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Card</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conteneur pour afficher du contenu.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ),
      code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Composants</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px]">
          <li>
            <NavigationMenuLink asChild>
              <a href="#">Button</a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    },
  ],
}

// ============================================
// AUTOCOMPLETE SHOWCASE
// ============================================
const autocompleteOptions: AutocompleteOption[] = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "nextjs", label: "Next.js" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

function AutocompleteDemo() {
  const [value, setValue] = useState<string>("")
  return (
    <WakaAutocomplete
      options={autocompleteOptions}
      value={value}
      onChange={(v) => setValue(v as string)}
      placeholder="Choisir un framework..."
      label="Framework"
      description="Sélectionnez votre framework préféré"
    />
  )
}

function AutocompleteMultipleDemo() {
  const [values, setValues] = useState<string[]>([])
  return (
    <WakaAutocomplete
      options={autocompleteOptions}
      value={values}
      onChange={(v) => setValues(v as string[])}
      placeholder="Choisir des frameworks..."
      label="Frameworks"
      multiple
      maxSelections={3}
    />
  )
}

export const autocompleteShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Autocomplete simple",
      description: "Sélection unique avec recherche",
      preview: <AutocompleteDemo />,
      code: `const [value, setValue] = useState("")

<WakaAutocomplete
  options={[
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
  ]}
  value={value}
  onChange={setValue}
  placeholder="Choisir un framework..."
  label="Framework"
/>`,
    },
    {
      title: "Sélection multiple",
      description: "Permet de sélectionner plusieurs options",
      preview: <AutocompleteMultipleDemo />,
      code: `<WakaAutocomplete
  options={options}
  value={values}
  onChange={setValues}
  multiple
  maxSelections={3}
  placeholder="Choisir des frameworks..."
/>`,
    },
  ],
}

// ============================================
// COLOR PICKER SHOWCASE
// ============================================
function ColorPickerDemo() {
  const [color, setColor] = useState("#3b82f6")
  return (
    <div className="space-y-4">
      <WakaColorPicker
        value={color}
        onChange={setColor}
        showPresets
        showEyeDropper
      />
      <div
        className="w-full h-20 rounded-md border"
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

export const colorPickerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Color Picker",
      description: "Sélecteur de couleur avec presets et EyeDropper",
      preview: <ColorPickerDemo />,
      code: `const [color, setColor] = useState("#3b82f6")

<WakaColorPicker
  value={color}
  onChange={setColor}
  showPresets
  showEyeDropper
/>`,
    },
  ],
}

// ============================================
// FILE UPLOAD SHOWCASE
// ============================================
function FileUploadDemo() {
  return (
    <WakaFileUpload
      accept="image/*,.pdf"
      maxSize={5 * 1024 * 1024}
      maxFiles={3}
      multiple
      label="Documents"
      description="Images ou PDF, max 5MB"
      placeholder="Glissez vos fichiers ici ou cliquez pour sélectionner"
      onComplete={(files) => console.log("Uploaded:", files)}
      onError={(error) => toast({ title: "Erreur", description: error, variant: "destructive" })}
    />
  )
}

export const fileUploadShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Zone de dépôt",
      description: "Upload avec drag & drop et prévisualisation",
      preview: <FileUploadDemo />,
      code: `<WakaFileUpload
  accept="image/*,.pdf"
  maxSize={5 * 1024 * 1024}
  maxFiles={3}
  multiple
  label="Documents"
  description="Images ou PDF, max 5MB"
  onComplete={(files) => console.log("Uploaded:", files)}
  onError={(error) => console.error(error)}
/>`,
    },
  ],
}

// ============================================
// RICH TEXT EDITOR SHOWCASE
// ============================================
function RichTextEditorDemo() {
  const [content, setContent] = useState("<p>Bienvenue dans l'éditeur !</p>")
  return (
    <WakaRichTextEditor
      value={content}
      onChange={setContent}
      placeholder="Commencez à écrire..."
      label="Contenu"
      minHeight={200}
    />
  )
}

export const richTextEditorShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Éditeur de texte riche",
      description: "Éditeur avec barre d'outils complète",
      preview: <RichTextEditorDemo />,
      code: `const [content, setContent] = useState("<p>Hello</p>")

<WakaRichTextEditor
  value={content}
  onChange={setContent}
  placeholder="Commencez à écrire..."
  label="Contenu"
  minHeight={200}
/>`,
    },
  ],
}

// ============================================
// CHARTS SHOWCASES
// ============================================
const chartData = [
  { name: "Jan", ventes: 4000, visites: 2400 },
  { name: "Fév", ventes: 3000, visites: 1398 },
  { name: "Mar", ventes: 2000, visites: 9800 },
  { name: "Avr", ventes: 2780, visites: 3908 },
  { name: "Mai", ventes: 1890, visites: 4800 },
  { name: "Juin", ventes: 2390, visites: 3800 },
]

const pieData = [
  { name: "Desktop", value: 45 },
  { name: "Mobile", value: 35 },
  { name: "Tablet", value: 20 },
]

export const barChartShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Graphique en barres",
      description: "Affiche des données comparatives",
      preview: (
        <div className="w-full">
          <WakaBarChart
            data={chartData}
            dataKeys={["ventes", "visites"]}
            height={300}
            title="Ventes et Visites"
            description="Comparaison mensuelle"
            tooltip
            legend
            responsive
          />
        </div>
      ),
      code: `<WakaBarChart
  data={[
    { name: "Jan", ventes: 4000, visites: 2400 },
    { name: "Fév", ventes: 3000, visites: 1398 },
    { name: "Mar", ventes: 2000, visites: 9800 },
  ]}
  dataKeys={["ventes", "visites"]}
  height={300}
  title="Ventes et Visites"
  tooltip
  legend
/>`,
    },
    {
      title: "Barres empilées",
      description: "Affichage empilé des données",
      preview: (
        <div className="w-full">
          <WakaBarChart
            data={chartData}
            dataKeys={["ventes", "visites"]}
            height={300}
            stacked
            tooltip
            responsive
          />
        </div>
      ),
      code: `<WakaBarChart
  data={data}
  dataKeys={["ventes", "visites"]}
  stacked
  height={300}
/>`,
    },
  ],
}

export const lineChartShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Graphique en lignes",
      description: "Affiche l'évolution des données",
      preview: (
        <div className="w-full">
          <WakaLineChart
            data={chartData}
            dataKeys={["ventes", "visites"]}
            height={300}
            title="Évolution"
            dots
            tooltip
            legend
            responsive
          />
        </div>
      ),
      code: `<WakaLineChart
  data={data}
  dataKeys={["ventes", "visites"]}
  height={300}
  title="Évolution"
  dots
  tooltip
  legend
/>`,
    },
  ],
}

export const areaChartShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Graphique en aires",
      description: "Affiche des données avec remplissage",
      preview: (
        <div className="w-full">
          <WakaAreaChart
            data={chartData}
            dataKeys={["ventes", "visites"]}
            height={300}
            title="Performance"
            tooltip
            legend
            responsive
          />
        </div>
      ),
      code: `<WakaAreaChart
  data={data}
  dataKeys={["ventes", "visites"]}
  height={300}
  title="Performance"
  tooltip
  legend
/>`,
    },
  ],
}

export const pieChartShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Graphique circulaire",
      description: "Distribution en camembert",
      preview: (
        <div className="w-full">
          <WakaPieChart
            data={pieData}
            dataKey="value"
            nameKey="name"
            height={300}
            title="Répartition des appareils"
            tooltip
            legend
            responsive
          />
        </div>
      ),
      code: `<WakaPieChart
  data={[
    { name: "Desktop", value: 45 },
    { name: "Mobile", value: 35 },
    { name: "Tablet", value: 20 },
  ]}
  dataKey="value"
  nameKey="name"
  height={300}
  tooltip
  legend
/>`,
    },
    {
      title: "Donut",
      description: "Camembert avec trou central",
      preview: (
        <div className="w-full">
          <WakaPieChart
            data={pieData}
            dataKey="value"
            nameKey="name"
            height={300}
            innerRadius="60%"
            tooltip
            legend
            responsive
          />
        </div>
      ),
      code: `<WakaPieChart
  data={data}
  innerRadius="60%"
  tooltip
  legend
/>`,
    },
  ],
}

export const sparklineShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Sparkline",
      description: "Mini-graphique inline",
      preview: (
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Tendance:</span>
          <WakaSparkline
            data={[10, 15, 8, 22, 18, 25, 30]}
            width={100}
            height={30}
          />
          <span className="text-sm font-medium text-green-500">+15%</span>
        </div>
      ),
      code: `<WakaSparkline
  data={[10, 15, 8, 22, 18, 25, 30]}
  width={100}
  height={30}
/>`,
    },
  ],
}

// ============================================
// CONTEXT MENU SHOWCASE
// ============================================
export const contextMenuShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Menu contextuel basique",
      description: "Faites un clic droit sur la zone pour ouvrir le menu",
      preview: (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
            Clic droit ici
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem inset>
              Retour
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
              Suivant
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              Recharger
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem inset>
              <Copy className="mr-2 h-4 w-4" />
              Copier
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              <Scissors className="mr-2 h-4 w-4" />
              Couper
              <ContextMenuShortcut>⌘X</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              <Clipboard className="mr-2 h-4 w-4" />
              Coller
              <ContextMenuShortcut>⌘V</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed">
    Clic droit ici
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem inset>
      Retour
      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset>
      <Copy className="mr-2 h-4 w-4" />
      Copier
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    },
    {
      title: "Avec sous-menus et cases à cocher",
      description: "Menu contextuel avancé avec sous-menus",
      preview: (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
            Clic droit pour plus d'options
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>Plus d'outils</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  Enregistrer la page sous...
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Créer un raccourci...</ContextMenuItem>
                <ContextMenuItem>Nommer la fenêtre...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Outils de développement</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
              Afficher la barre de favoris
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Afficher l'URL complète</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value="claude">
              <ContextMenuLabel inset>Personnes</ContextMenuLabel>
              <ContextMenuRadioItem value="claude">Claude</ContextMenuRadioItem>
              <ContextMenuRadioItem value="assistant">Assistant</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `<ContextMenu>
  <ContextMenuTrigger>Clic droit</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuSub>
      <ContextMenuSubTrigger>Plus d'outils</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Option 1</ContextMenuItem>
        <ContextMenuItem>Option 2</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuCheckboxItem checked>
      Option activée
    </ContextMenuCheckboxItem>
    <ContextMenuRadioGroup value="option1">
      <ContextMenuRadioItem value="option1">Option 1</ContextMenuRadioItem>
      <ContextMenuRadioItem value="option2">Option 2</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>`,
    },
  ],
}

// ============================================
// MENUBAR SHOWCASE
// ============================================
export const menubarShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Barre de menu application",
      description: "Barre de menu style desktop application",
      preview: (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Fichier</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Nouveau fichier <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Ouvrir <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Enregistrer <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Enregistrer sous... <MenubarShortcut>⇧⌘S</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Quitter <MenubarShortcut>⌘Q</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Édition</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Annuler <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Rétablir <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Couper <MenubarShortcut>⌘X</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Copier <MenubarShortcut>⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Coller <MenubarShortcut>⌘V</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Affichage</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>Barre d'état</MenubarCheckboxItem>
              <MenubarCheckboxItem checked>Barre d'outils</MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Zoom</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Zoom avant <MenubarShortcut>⌘+</MenubarShortcut></MenubarItem>
                  <MenubarItem>Zoom arrière <MenubarShortcut>⌘-</MenubarShortcut></MenubarItem>
                  <MenubarItem>Taille réelle <MenubarShortcut>⌘0</MenubarShortcut></MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Aide</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Documentation</MenubarItem>
              <MenubarItem>À propos</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      ),
      code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Fichier</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Nouveau <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Quitter</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Édition</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Copier</MenubarItem>
      <MenubarItem>Coller</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    },
  ],
}

// ============================================
// ADMINCRUMB SHOWCASE
// ============================================
function AdmincrumbDemo() {
  const [partner, setPartner] = useState<AdmincrumbItem | undefined>()
  const [network, setNetwork] = useState<AdmincrumbItem | undefined>()
  const [customer, setCustomer] = useState<AdmincrumbItem | undefined>()

  const levels: AdmincrumbLevel[] = [
    {
      type: "partner",
      items: [
        { id: "1", name: "Partenaire Alpha", type: "partner", metadata: { count: 12 } },
        { id: "2", name: "Partenaire Beta", type: "partner", metadata: { count: 8 } },
        { id: "3", name: "Partenaire Gamma", type: "partner", metadata: { count: 5 } },
      ],
      selected: partner,
      onSelect: (item) => {
        setPartner(item.id ? item : undefined)
        setNetwork(undefined)
        setCustomer(undefined)
      },
      placeholder: "Sélectionner un partenaire",
    },
    {
      type: "network",
      items: partner ? [
        { id: "n1", name: "Réseau Paris", type: "network", metadata: { count: 25 } },
        { id: "n2", name: "Réseau Lyon", type: "network", metadata: { count: 18 } },
      ] : [],
      selected: network,
      onSelect: (item) => {
        setNetwork(item.id ? item : undefined)
        setCustomer(undefined)
      },
      placeholder: "Sélectionner un réseau",
    },
    {
      type: "customer",
      items: network ? [
        { id: "c1", name: "Client Entreprise A", type: "customer" },
        { id: "c2", name: "Client Entreprise B", type: "customer" },
        { id: "c3", name: "Client PME C", type: "customer" },
      ] : [],
      selected: customer,
      onSelect: (item) => setCustomer(item.id ? item : undefined),
      placeholder: "Sélectionner un client",
    },
  ]

  const handleReset = () => {
    setPartner(undefined)
    setNetwork(undefined)
    setCustomer(undefined)
  }

  return (
    <WakaAdmincrumb
      levels={levels}
      showIcons
      showHome
      resetable
      onReset={handleReset}
    />
  )
}

export const admincrumbShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Fil d'Ariane administrateur",
      description: "Navigation hiérarchique avec sélection en cascade (Partenaire > Réseau > Client)",
      preview: <AdmincrumbDemo />,
      code: `const levels: AdmincrumbLevel[] = [
  {
    type: "partner",
    items: [
      { id: "1", name: "Partenaire Alpha", type: "partner" },
      { id: "2", name: "Partenaire Beta", type: "partner" },
    ],
    selected: partner,
    onSelect: (item) => setPartner(item),
  },
  {
    type: "network",
    items: partner ? [...] : [],
    selected: network,
    onSelect: (item) => setNetwork(item),
  },
  {
    type: "customer",
    items: network ? [...] : [],
    selected: customer,
    onSelect: (item) => setCustomer(item),
  },
]

<WakaAdmincrumb
  levels={levels}
  showIcons
  showHome
  resetable
  onReset={handleReset}
/>`,
    },
    {
      title: "Variantes visuelles",
      description: "Différents styles : default, minimal, pills, inline, compact",
      preview: (
        <div className="space-y-4">
          <WakaAdmincrumb
            variant="pills"
            levels={[
              {
                type: "partner",
                items: [{ id: "1", name: "Partenaire A", type: "partner" }],
                selected: { id: "1", name: "Partenaire A", type: "partner" },
                onSelect: () => {},
              },
            ]}
            showIcons
          />
          <WakaAdmincrumb
            variant="compact"
            levels={[
              {
                type: "partner",
                items: [{ id: "1", name: "Partenaire A", type: "partner" }],
                selected: { id: "1", name: "Partenaire A", type: "partner" },
                onSelect: () => {},
              },
            ]}
            showIcons
          />
        </div>
      ),
      code: `<WakaAdmincrumb
  variant="pills" // "default" | "minimal" | "pills" | "inline" | "compact"
  levels={levels}
  showIcons
/>`,
    },
  ],
}

// ============================================
// CAROUSEL SHOWCASE
// ============================================
const carouselImages: CarouselImage[] = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
    alt: "Montagnes",
    title: "Paysage alpin",
    description: "Vue panoramique sur les Alpes",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    alt: "Océan",
    title: "Bord de mer",
    description: "Coucher de soleil sur l'océan",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop",
    alt: "Forêt",
    title: "Forêt mystique",
    description: "Lumière filtrant à travers les arbres",
  },
]

export const carouselShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Carrousel basique",
      description: "Carrousel d'images avec navigation",
      preview: (
        <div className="w-full max-w-2xl">
          <WakaCarousel
            images={carouselImages}
            showIndicators
            showNavigation
            aspectRatio="16/9"
          />
        </div>
      ),
      code: `<WakaCarousel
  images={[
    { src: "image1.jpg", alt: "Image 1", title: "Titre" },
    { src: "image2.jpg", alt: "Image 2" },
  ]}
  showIndicators
  showNavigation
  aspectRatio="16/9"
/>`,
    },
    {
      title: "Avec autoplay et miniatures",
      description: "Carrousel automatique avec vignettes",
      preview: (
        <div className="w-full max-w-2xl">
          <WakaCarousel
            images={carouselImages}
            autoplay
            autoplayInterval={4000}
            showIndicators
            showNavigation
            showThumbnails
            showCounter
            showProgress
            aspectRatio="16/9"
          />
        </div>
      ),
      code: `<WakaCarousel
  images={images}
  autoplay
  autoplayInterval={4000}
  showThumbnails
  showCounter
  showProgress
/>`,
    },
    {
      title: "Mode plein écran",
      description: "Avec bouton plein écran",
      preview: (
        <div className="w-full max-w-2xl">
          <WakaCarousel
            images={carouselImages}
            showNavigation
            showIndicators
            showFullscreen
            transition="slide"
            aspectRatio="16/9"
          />
        </div>
      ),
      code: `<WakaCarousel
  images={images}
  showFullscreen
  transition="slide" // "fade" | "slide" | "zoom" | "flip"
/>`,
    },
  ],
}

// ============================================
// COLLAPSIBLE SHOWCASE
// ============================================
function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full max-w-md space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte a créé 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export const collapsibleShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Section repliable",
      description: "Contenu qui peut être affiché/masqué",
      preview: <CollapsibleDemo />,
      code: `function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center justify-between">
        <h4>@peduarte a créé 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
    },
    {
      title: "Collapsible contrôlé",
      description: "Ouvert par défaut et contrôlé",
      preview: (
        <Collapsible defaultOpen className="w-full max-w-md space-y-2">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Afficher les détails
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="rounded-md border p-4 space-y-2">
              <p className="text-sm">Voici le contenu détaillé qui était masqué.</p>
              <p className="text-sm text-muted-foreground">
                Ce contenu peut contenir n'importe quels éléments React.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ),
      code: `<Collapsible defaultOpen>
  <CollapsibleTrigger asChild>
    <Button variant="outline" className="w-full justify-between">
      Afficher les détails
      <ChevronsUpDown className="h-4 w-4" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="rounded-md border p-4">
      <p>Contenu détaillé ici...</p>
    </div>
  </CollapsibleContent>
</Collapsible>`,
    },
  ],
}

// ============================================
// THEME MANAGER SHOWCASE
// ============================================
export const themeManagerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Gestionnaire de thèmes",
      description: "Interface complète pour créer, importer et prévisualiser des thèmes",
      preview: (
        <div className="w-full">
          <WakaThemeManager
            size="full"
            showPreview
            showExport
            showImport
            allowCustomColors
            onThemeChange={(theme) => console.log("Theme changed:", theme)}
          />
        </div>
      ),
      code: `<WakaThemeManager
  size="full" // "sm" | "base" | "lg" | "full"
  showPreview
  showExport
  showImport
  allowCustomColors
  onThemeChange={(theme) => console.log(theme)}
  onThemeSave={(theme) => saveTheme(theme)}
/>`,
    },
    {
      title: "Version compacte",
      description: "Gestionnaire de thèmes simplifié sans prévisualisation",
      preview: (
        <div className="w-full max-w-2xl">
          <WakaThemeManager
            size="sm"
            showPreview={false}
            showExport
            showImport
            allowCustomColors={false}
          />
        </div>
      ),
      code: `<WakaThemeManager
  size="sm"
  showPreview={false}
  allowCustomColors={false}
/>`,
    },
  ],
}

// ============================================
// FORM SHOWCASE
// ============================================
const formSchema = z.object({
  username: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
})

function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Formulaire soumis",
      description: `Nom: ${values.username}, Email: ${values.email}`,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom d'utilisateur</FormLabel>
              <FormControl>
                <Input placeholder="john_doe" {...field} />
              </FormControl>
              <FormDescription>
                Votre nom d'affichage public.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@exemple.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Soumettre</Button>
      </form>
    </Form>
  )
}

export const formShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Formulaire avec validation",
      description: "Formulaire intégré avec react-hook-form et Zod",
      preview: <FormDemo />,
      code: `const formSchema = z.object({
  username: z.string().min(2, "Min 2 caractères"),
  email: z.string().email("Email invalide"),
})

function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Votre nom.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Soumettre</Button>
      </form>
    </Form>
  )
}`,
    },
  ],
}

// ============================================
// E-COMMERCE COMPONENTS
// ============================================

export const pricingTableShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Table de tarification",
      description: "Affiche les plans tarifaires avec comparaison des fonctionnalites",
      preview: (
        <WakaPricingTable
          tiers={[
            {
              id: "starter",
              name: "Starter",
              description: "Pour les petites equipes",
              monthlyPrice: 900,
              annualPrice: 9000,
              currency: "\u20AC",
              features: [
                { name: "5 projets", included: true },
                { name: "10 Go stockage", included: true },
                { name: "Support email", included: true },
                { name: "API access", included: false },
              ],
              ctaText: "Choisir Starter",
            },
            {
              id: "pro",
              name: "Pro",
              description: "Pour les equipes en croissance",
              monthlyPrice: 2900,
              annualPrice: 29000,
              currency: "\u20AC",
              features: [
                { name: "Projets illimites", included: true },
                { name: "100 Go stockage", included: true },
                { name: "Support prioritaire", included: true },
                { name: "API access", included: true },
              ],
              highlighted: true,
              highlightLabel: "Populaire",
              ctaText: "Choisir Pro",
            },
            {
              id: "enterprise",
              name: "Enterprise",
              description: "Pour les grandes organisations",
              monthlyPrice: 9900,
              annualPrice: 99000,
              currency: "\u20AC",
              features: [
                { name: "Tout illimite", included: true },
                { name: "Support dedie", included: true },
                { name: "SLA garanti", included: true },
                { name: "SSO", included: true },
              ],
              ctaText: "Contacter",
            },
          ]}
          onCtaClick={(tier) => console.log("Selected:", tier)}
        />
      ),
      code: `<WakaPricingTable
  tiers={[
    {
      id: "starter",
      name: "Starter",
      monthlyPrice: 900,
      annualPrice: 9000,
      features: [
        { name: "5 projets", included: true },
        { name: "10 Go stockage", included: true },
      ],
    },
    {
      id: "pro",
      name: "Pro",
      monthlyPrice: 2900,
      annualPrice: 29000,
      features: [
        { name: "Projets illimites", included: true },
        { name: "Support prioritaire", included: true },
      ],
      highlighted: true,
    },
  ]}
  onCtaClick={(tier) => console.log("Selected:", tier)}
/>`,
    },
  ],
}

export const cartSummaryShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Resume du panier",
      description: "Affiche le resume des articles dans le panier",
      preview: (
        <WakaCartSummary
          items={[
            { id: "1", name: "T-shirt Premium", price: 29.99, quantity: 2, image: "/placeholder.svg" },
            { id: "2", name: "Jean Slim", price: 79.99, quantity: 1, image: "/placeholder.svg" },
          ]}
          currency="EUR"
          taxRate={0.20}
          shippingCost={5.99}
          onQuantityChange={(id, qty) => console.log(id, qty)}
          onRemoveItem={(id) => console.log("Remove:", id)}
        />
      ),
      code: `<WakaCartSummary
  items={[
    { id: "1", name: "T-shirt Premium", price: 29.99, quantity: 2 },
    { id: "2", name: "Jean Slim", price: 79.99, quantity: 1 },
  ]}
  currency="EUR"
  taxRate={0.20}
  shippingCost={5.99}
  onQuantityChange={(id, qty) => console.log(id, qty)}
  onRemoveItem={(id) => console.log("Remove:", id)}
/>`,
    },
  ],
}

export const productCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Carte produit",
      description: "Affiche un produit avec image, prix et actions",
      preview: (
        <div className="grid gap-4 md:grid-cols-2 max-w-lg">
          <WakaProductCard
            name="Sneakers Premium"
            price={149.99}
            originalPrice={199.99}
            images={[
              { src: "/placeholder.svg", alt: "Sneakers Premium" },
              { src: "/placeholder.svg", alt: "Sneakers Premium Side" },
            ]}
            rating={4.5}
            reviewCount={128}
            discountBadge="-25%"
            onAddToCart={() => console.log("Add to cart")}
            onWishlistToggle={(wishlisted) => console.log("Wishlist:", wishlisted)}
          />
        </div>
      ),
      code: `<WakaProductCard
  name="Sneakers Premium"
  price={149.99}
  originalPrice={199.99}
  images={[
    { src: "/placeholder.svg", alt: "Sneakers Premium" },
    { src: "/placeholder.svg", alt: "Sneakers Premium Side" },
  ]}
  rating={4.5}
  reviewCount={128}
  discountBadge="-25%"
  onAddToCart={() => console.log("Add to cart")}
  onWishlistToggle={(wishlisted) => console.log("Wishlist:", wishlisted)}
/>`,
    },
  ],
}

export const checkoutStepperShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Etapes de checkout",
      description: "Affiche les etapes du processus de commande",
      preview: (
        <WakaCheckoutStepper
          currentStep={1}
          steps={[
            { id: "cart", title: "Panier", description: "Vérifiez votre panier" },
            { id: "shipping", title: "Livraison", description: "Adresse de livraison" },
            { id: "payment", title: "Paiement", description: "Mode de paiement" },
            { id: "confirmation", title: "Confirmation", description: "Confirmez votre commande" },
          ]}
          onStepChange={(index, stepId) => console.log("Step:", index, stepId)}
        />
      ),
      code: `<WakaCheckoutStepper
  currentStep={1}
  steps={[
    { id: "cart", title: "Panier", description: "Vérifiez votre panier" },
    { id: "shipping", title: "Livraison", description: "Adresse de livraison" },
    { id: "payment", title: "Paiement", description: "Mode de paiement" },
    { id: "confirmation", title: "Confirmation", description: "Confirmez votre commande" },
  ]}
  onStepChange={(index, stepId) => console.log("Step:", index, stepId)}
/>`,
    },
  ],
}

export const couponInputShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Champ code promo",
      description: "Permet de saisir et valider un code promotionnel",
      preview: (
        <WakaCouponInput
          onApply={(coupon) => console.log("Applied:", coupon)}
          onRemove={(code) => console.log("Removed:", code)}
          validateCoupon={async (code) => ({
            isValid: code === "PROMO20",
            coupon: code === "PROMO20" ? { code: "PROMO20", discountValue: 20, discountType: "percentage" as const } : undefined,
            errorMessage: code !== "PROMO20" ? "Code invalide" : undefined,
          })}
          placeholder="Entrez votre code promo"
          applyButtonText="Appliquer"
        />
      ),
      code: `<WakaCouponInput
  onApply={(coupon) => console.log("Applied:", coupon)}
  onRemove={(code) => console.log("Removed:", code)}
  validateCoupon={async (code) => ({
    isValid: code === "PROMO20",
    coupon: code === "PROMO20" ? { code: "PROMO20", discountValue: 20, discountType: "percentage" } : undefined,
    errorMessage: code !== "PROMO20" ? "Code invalide" : undefined,
  })}
  placeholder="Entrez votre code promo"
  applyButtonText="Appliquer"
/>`,
    },
  ],
}

export const paymentMethodPickerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Selection de paiement",
      description: "Permet de choisir un mode de paiement",
      preview: (
        <WakaPaymentMethodPicker
          value="credit_card"
          onChange={(value, method) => console.log("Selected:", value, method)}
          options={[
            { type: "credit_card", label: "Carte bancaire", description: "Visa, Mastercard, Amex", acceptedBrands: ["visa", "mastercard", "amex"] },
            { type: "paypal", label: "PayPal", description: "Paiement securise" },
            { type: "apple_pay", label: "Apple Pay", description: "Paiement rapide" },
          ]}
        />
      ),
      code: `<WakaPaymentMethodPicker
  value="credit_card"
  onChange={(value, method) => console.log("Selected:", value, method)}
  options={[
    { type: "credit_card", label: "Carte bancaire", description: "Visa, Mastercard, Amex", acceptedBrands: ["visa", "mastercard", "amex"] },
    { type: "paypal", label: "PayPal", description: "Paiement securise" },
    { type: "apple_pay", label: "Apple Pay", description: "Paiement rapide" },
  ]}
/>`,
    },
  ],
}

export const orderTrackerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Suivi de commande",
      description: "Affiche la progression d une commande",
      preview: (
        <WakaOrderTracker
          order={{
            orderId: "ORD-2024-001",
            status: "shipped",
            orderDate: new Date("2024-01-15T10:30:00"),
            estimatedDelivery: new Date("2024-01-17"),
            deliveryAddress: {
              name: "Jean Dupont",
              street1: "123 Rue de la Paix",
              city: "Paris",
              state: "Ile-de-France",
              postalCode: "75001",
              country: "France",
            },
            carrier: { name: "Colissimo", serviceType: "Express" },
            trackingNumber: "1Z999AA10123456784",
            updates: [
              { id: "1", status: "ordered", message: "Commande confirmée", timestamp: new Date("2024-01-15T10:30:00") },
              { id: "2", status: "processing", message: "En préparation", timestamp: new Date("2024-01-15T14:00:00") },
              { id: "3", status: "shipped", message: "Expédié", timestamp: new Date("2024-01-16T09:00:00"), location: "Paris" },
            ],
          }}
        />
      ),
      code: `<WakaOrderTracker
  order={{
    orderId: "ORD-2024-001",
    status: "shipped",
    orderDate: new Date("2024-01-15T10:30:00"),
    estimatedDelivery: new Date("2024-01-17"),
    deliveryAddress: {
      name: "Jean Dupont",
      street1: "123 Rue de la Paix",
      city: "Paris",
      state: "Ile-de-France",
      postalCode: "75001",
      country: "France",
    },
    carrier: { name: "Colissimo", serviceType: "Express" },
    trackingNumber: "1Z999AA10123456784",
    updates: [
      { id: "1", status: "ordered", message: "Commande confirmée", timestamp: new Date() },
      { id: "2", status: "processing", message: "En préparation", timestamp: new Date() },
      { id: "3", status: "shipped", message: "Expédié", timestamp: new Date(), location: "Paris" },
    ],
  }}
/>`,
    },
  ],
}

export const invoicePreviewShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Apercu facture",
      description: "Affiche un apercu de facture telechargeable",
      preview: (
        <WakaInvoicePreview
          invoice={{
            invoiceNumber: "INV-2024-001",
            invoiceDate: new Date("2024-01-15"),
            dueDate: new Date("2024-02-15"),
            status: "pending",
            currency: "EUR",
            company: {
              name: "Ma Societe",
              address: { name: "Ma Societe", street1: "123 Rue Commerce", city: "Paris", postalCode: "75001", country: "France" },
              email: "contact@masociete.fr",
              taxId: "FR12345678",
            },
            billTo: { name: "Client SARL", street1: "456 Avenue Client", city: "Lyon", postalCode: "69001", country: "France" },
            items: [
              { id: "1", description: "Service Premium", quantity: 1, unitPrice: 499 },
              { id: "2", description: "Support annuel", quantity: 12, unitPrice: 49 },
            ],
            taxRate: 0.20,
          }}
          onDownload={() => console.log("Download PDF")}
        />
      ),
      code: `<WakaInvoicePreview
  invoice={{
    invoiceNumber: "INV-2024-001",
    invoiceDate: new Date("2024-01-15"),
    dueDate: new Date("2024-02-15"),
    status: "pending",
    currency: "EUR",
    company: {
      name: "Ma Societe",
      address: { name: "Ma Societe", street1: "123 Rue Commerce", city: "Paris", postalCode: "75001", country: "France" },
      email: "contact@masociete.fr",
      taxId: "FR12345678",
    },
    billTo: { name: "Client SARL", street1: "456 Avenue Client", city: "Lyon", postalCode: "69001", country: "France" },
    items: [
      { id: "1", description: "Service Premium", quantity: 1, unitPrice: 499 },
      { id: "2", description: "Support annuel", quantity: 12, unitPrice: 49 },
    ],
    taxRate: 0.20,
  }}
  onDownload={() => console.log("Download PDF")}
/>`,
    },
  ],
}

// ============================================
// SECURITY COMPONENTS
// ============================================

export const passwordStrengthShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Indicateur de force",
      description: "Affiche la force du mot de passe en temps reel",
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <WakaPasswordStrength
            password="MyP@ssw0rd!"
            showInput={false}
            showStrengthBar
            showChecklist
            minLength={8}
            requireUppercase
            requireLowercase
            requireNumber
            requireSpecialChar
          />
        </div>
      ),
      code: `<WakaPasswordStrength
  password={password}
  showInput={false}
  showStrengthBar
  showChecklist
  minLength={8}
  requireUppercase
  requireLowercase
  requireNumber
  requireSpecialChar
/>`,
    },
  ],
}

export const twoFactorSetupShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Configuration 2FA",
      description: "Guide de configuration de l authentification a deux facteurs",
      preview: (
        <WakaTwoFactorSetup
          config={{
            qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=otpauth://totp/App:user@example.com",
            secretKey: "JBSWY3DPEHPK3PXP",
            issuer: "MonApp",
            accountName: "user@example.com",
            backupCodes: [
              { code: "ABCD-1234", used: false },
              { code: "EFGH-5678", used: false },
              { code: "IJKL-9012", used: false },
              { code: "MNOP-3456", used: false },
            ],
          }}
          onVerify={async (code) => {
            console.log("Verifying:", code)
            return code === "123456"
          }}
          onCancel={() => console.log("Cancelled")}
        />
      ),
      code: `<WakaTwoFactorSetup
  config={{
    qrCodeUrl: "https://api.qrserver.com/...",
    secretKey: "JBSWY3DPEHPK3PXP",
    issuer: "MonApp",
    accountName: "user@example.com",
    backupCodes: [
      { code: "ABCD-1234", used: false },
      { code: "EFGH-5678", used: false },
    ],
  }}
  onVerify={async (code) => code === "123456"}
  onCancel={() => console.log("Cancelled")}
/>`,
    },
  ],
}

export const sessionManagerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Gestionnaire de sessions",
      description: "Liste et gere les sessions actives",
      preview: (
        <WakaSessionManager
          sessions={[
            {
              id: "1",
              device: { type: "desktop", browser: "Chrome", browserVersion: "120", os: "macOS", name: "MacBook Pro" },
              location: { city: "Paris", country: "FR" },
              ipAddress: "192.168.1.1",
              lastActive: new Date(),
              isCurrent: true,
              status: "active",
            },
            {
              id: "2",
              device: { type: "mobile", browser: "Safari", os: "iOS", name: "iPhone 15" },
              location: { city: "Lyon", country: "FR" },
              ipAddress: "192.168.1.2",
              lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000),
              isCurrent: false,
              status: "active",
            },
            {
              id: "3",
              device: { type: "desktop", browser: "Firefox", os: "Windows", name: "Windows PC" },
              location: { city: "Marseille", country: "FR" },
              ipAddress: "192.168.1.3",
              lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000),
              isCurrent: false,
              status: "idle",
            },
          ]}
          onRevokeSession={(id) => console.log("Revoke:", id)}
          onRevokeAllOtherSessions={() => console.log("Revoke all others")}
        />
      ),
      code: `<WakaSessionManager
  sessions={[
    {
      id: "1",
      device: { type: "desktop", browser: "Chrome", os: "macOS", name: "MacBook Pro" },
      location: { city: "Paris", country: "FR" },
      lastActive: new Date(),
      isCurrent: true,
      status: "active",
    },
    {
      id: "2",
      device: { type: "mobile", browser: "Safari", os: "iOS", name: "iPhone 15" },
      location: { city: "Lyon", country: "FR" },
      lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000),
      isCurrent: false,
    },
  ]}
  onRevokeSession={(id) => console.log("Revoke:", id)}
  onRevokeAllOtherSessions={() => console.log("Revoke all")}
/>`,
    },
  ],
}

export const permissionMatrixShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Matrice de permissions",
      description: "Affiche et gere les permissions par role",
      preview: (
        <WakaPermissionMatrix
          roles={[
            { id: "admin", name: "Admin", color: "#ef4444" },
            { id: "manager", name: "Manager", color: "#f59e0b" },
            { id: "user", name: "User", color: "#3b82f6" },
            { id: "guest", name: "Guest", color: "#6b7280" },
          ]}
          permissions={[
            { id: "read", name: "Lecture", categoryId: "data" },
            { id: "write", name: "Ecriture", categoryId: "data" },
            { id: "delete", name: "Suppression", categoryId: "data" },
            { id: "admin", name: "Administration", categoryId: "settings" },
          ]}
          categories={[
            { id: "data", name: "Donnees" },
            { id: "settings", name: "Parametres" },
          ]}
          initialValues={[
            { roleId: "admin", permissionId: "read", granted: true },
            { roleId: "admin", permissionId: "write", granted: true },
            { roleId: "admin", permissionId: "delete", granted: true },
            { roleId: "admin", permissionId: "admin", granted: true },
            { roleId: "manager", permissionId: "read", granted: true },
            { roleId: "manager", permissionId: "write", granted: true },
            { roleId: "user", permissionId: "read", granted: true },
            { roleId: "guest", permissionId: "read", granted: true },
          ]}
          onPermissionChange={(roleId, permissionId, granted) => console.log("Changed:", roleId, permissionId, granted)}
        />
      ),
      code: `<WakaPermissionMatrix
  roles={[
    { id: "admin", name: "Admin", color: "#ef4444" },
    { id: "user", name: "User", color: "#3b82f6" },
  ]}
  permissions={[
    { id: "read", name: "Lecture", categoryId: "data" },
    { id: "write", name: "Ecriture", categoryId: "data" },
  ]}
  categories={[{ id: "data", name: "Donnees" }]}
  initialValues={[
    { roleId: "admin", permissionId: "read", granted: true },
    { roleId: "admin", permissionId: "write", granted: true },
    { roleId: "user", permissionId: "read", granted: true },
  ]}
  onChange={(values) => console.log(values)}
/>`,
    },
  ],
}

export const auditLogShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Journal d audit",
      description: "Affiche l historique des actions securisees",
      preview: (
        <WakaAuditLog
          events={[
            {
              id: "1",
              type: "login",
              severity: "info",
              user: { id: "u1", name: "John Doe", email: "john@example.com" },
              description: "Connexion reussie",
              ipAddress: "192.168.1.1",
              timestamp: new Date("2024-01-15T10:30:00"),
            },
            {
              id: "2",
              type: "password_change",
              severity: "info",
              user: { id: "u1", name: "John Doe", email: "john@example.com" },
              description: "Mot de passe modifie",
              ipAddress: "192.168.1.1",
              timestamp: new Date("2024-01-15T10:35:00"),
            },
            {
              id: "3",
              type: "login",
              severity: "warning",
              user: { id: "u2", name: "Unknown", email: "unknown@example.com" },
              description: "Echec de connexion",
              ipAddress: "10.0.0.1",
              timestamp: new Date("2024-01-15T11:00:00"),
            },
          ]}
          onFilterChange={(filters) => console.log("Filters:", filters)}
          onExport={(format) => console.log("Export:", format)}
        />
      ),
      code: `<WakaAuditLog
  events={[
    {
      id: "1",
      type: "login",
      severity: "info",
      user: { id: "u1", name: "John Doe", email: "john@example.com" },
      description: "Connexion reussie",
      timestamp: new Date(),
    },
  ]}
  onFilterChange={(filters) => console.log(filters)}
  onExport={(format) => console.log(format)}
/>`,
    },
  ],
}

export const securityScoreShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Score de securite",
      description: "Affiche un score de securite global avec recommandations",
      preview: (
        <WakaSecurityScore
          score={75}
          categories={[
            { id: "authentication", name: "Authentification", score: 85 },
            { id: "encryption", name: "Chiffrement", score: 70 },
            { id: "access", name: "Controle d'acces", score: 60 },
          ]}
          recommendations={[
            { id: "1", title: "Activer 2FA", description: "Activez l'authentification a deux facteurs", priority: "high", status: "pending", impact: 10 },
            { id: "2", title: "Mot de passe fort", description: "Utilisez un mot de passe plus complexe", priority: "medium", status: "completed", impact: 5 },
          ]}
          showCategories
          showRecommendations
          onRecommendationAction={(rec) => console.log("Action:", rec)}
        />
      ),
      code: `<WakaSecurityScore
  score={75}
  categories={[
    { id: "authentication", name: "Authentification", score: 85 },
    { id: "encryption", name: "Chiffrement", score: 70 },
  ]}
  recommendations={[
    { id: "1", title: "Activer 2FA", description: "Activez l'authentification a deux facteurs", priority: "high", status: "pending", impact: 10 },
  ]}
  showCategories
  showRecommendations
  onRecommendationAction={(rec) => console.log("Action:", rec)}
/>`,
    },
  ],
}

export const biometricPromptShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Authentification biometrique",
      description: "Invite l utilisateur a s authentifier par biometrie",
      preview: (
        <WakaBiometricPrompt
          biometricTypes={[
            { type: "fingerprint", label: "Empreinte digitale" },
            { type: "face", label: "Face ID" },
          ]}
          selectedType="fingerprint"
          title="Verification requise"
          description="Utilisez votre empreinte digitale pour continuer"
          onAuthenticate={() => console.log("Authenticate")}
          onCancel={() => console.log("Cancelled")}
          onFallbackToPassword={() => console.log("Use password")}
          showPasswordFallback
        />
      ),
      code: `<WakaBiometricPrompt
  biometricTypes={[
    { type: "fingerprint", label: "Empreinte digitale" },
    { type: "face", label: "Face ID" },
  ]}
  selectedType="fingerprint"
  title="Verification requise"
  description="Utilisez votre empreinte digitale"
  onAuthenticate={() => console.log("Authenticate")}
  onCancel={() => console.log("Cancelled")}
  onFallbackToPassword={() => console.log("Use password")}
/>`,
    },
  ],
}

export const deviceTrustShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Appareils de confiance",
      description: "Gere les appareils autorises",
      preview: (
        <WakaDeviceTrust
          devices={[
            { id: "1", name: "MacBook Pro", type: "laptop", status: "trusted", trustedAt: new Date("2024-01-01"), os: "macOS", isCurrentDevice: true },
            { id: "2", name: "iPhone 15", type: "mobile", status: "trusted", trustedAt: new Date("2024-01-05"), os: "iOS" },
            { id: "3", name: "iPad Air", type: "tablet", status: "pending", trustedAt: new Date("2024-01-10"), os: "iPadOS" },
          ]}
          onRemoveDevice={async (id) => { console.log("Remove:", id); return true; }}
          onAddDevice={() => console.log("Add device")}
        />
      ),
      code: `<WakaDeviceTrust
  devices={[
    { id: "1", name: "MacBook Pro", type: "laptop", status: "trusted", trustedAt: new Date(), isCurrentDevice: true },
    { id: "2", name: "iPhone 15", type: "mobile", status: "trusted", trustedAt: new Date() },
  ]}
  onRemoveDevice={async (id) => { console.log("Remove:", id); return true; }}
  onAddDevice={() => console.log("Add device")}
/>`,
    },
  ],
}

// ============================================
// COMMUNICATION COMPONENTS
// ============================================

export const chatBubbleShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Bulles de chat",
      description: "Affiche des messages de conversation",
      preview: (
        <div className="space-y-4 max-w-md">
          <WakaChatBubble
            message="Bonjour, comment puis-je vous aider ?"
            sender={{ id: "1", name: "Support", avatar: "/placeholder.svg" }}
            timestamp={new Date()}
            isSent={false}
          />
          <WakaChatBubble
            message="J ai une question concernant ma commande"
            sender={{ id: "2", name: "Moi" }}
            timestamp={new Date()}
            isSent={true}
            status="read"
          />
        </div>
      ),
      code: `<WakaChatBubble
  message="Bonjour, comment puis-je vous aider ?"
  sender={{ id: "1", name: "Support", avatar: "/avatar.png" }}
  timestamp={new Date()}
  isSent={false}
/>
<WakaChatBubble
  message="J ai une question"
  sender={{ id: "2", name: "Moi" }}
  timestamp={new Date()}
  isSent={true}
  status="read"
/>`,
    },
  ],
}

export const typingIndicatorShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Indicateur de saisie",
      description: "Montre qu un utilisateur est en train d ecrire",
      preview: (
        <div className="flex items-center gap-4">
          <WakaTypingIndicator users={[{ id: "1", name: "Marie", avatar: "/placeholder.svg" }]} />
          <WakaTypingIndicator users={[{ id: "1", name: "Marie" }, { id: "2", name: "Jean" }]} showAvatars />
        </div>
      ),
      code: `<WakaTypingIndicator
  users={[{ id: "1", name: "Marie", avatar: "/avatar.png" }]}
/>
<WakaTypingIndicator
  users={[{ id: "1", name: "Marie" }, { id: "2", name: "Jean" }]}
  showAvatars
/>`,
    },
  ],
}

export const videoCallShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Interface appel video",
      description: "Controles pour un appel video",
      preview: (
        <WakaVideoCall
          participants={[
            { id: "1", name: "Alice", avatar: "/placeholder.svg", isMuted: false, isVideoOff: false, isScreenSharing: false, hasRaisedHand: false, isSpeaking: false, isPinned: false, isLocal: true },
            { id: "2", name: "Bob", avatar: "/placeholder.svg", isMuted: true, isVideoOff: false, isScreenSharing: false, hasRaisedHand: false, isSpeaking: false, isPinned: false },
          ]}
          localParticipantId="1"
          onToggleMute={() => console.log("Mute")}
          onToggleVideo={() => console.log("Video toggle")}
          onToggleScreenShare={() => console.log("Screen share")}
          onEndCall={() => console.log("Hang up")}
        />
      ),
      code: `<WakaVideoCall
  participants={[
    { id: "1", name: "Alice", isMuted: false, isVideoOff: false, isScreenSharing: false, hasRaisedHand: false, isSpeaking: false, isPinned: false, isLocal: true },
    { id: "2", name: "Bob", isMuted: true, isVideoOff: false, isScreenSharing: false, hasRaisedHand: false, isSpeaking: false, isPinned: false },
  ]}
  localParticipantId="1"
  onToggleMute={() => console.log("Mute")}
  onToggleVideo={() => console.log("Video")}
  onEndCall={() => console.log("Hang up")}
/>`,
    },
  ],
}

export const mentionInputShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Champ avec mentions",
      description: "Permet de mentionner des utilisateurs avec @",
      preview: (
        <WakaMentionInput
          placeholder="Tapez @ pour mentionner quelqu un..."
          triggers={[
            {
              trigger: "@",
              type: "user",
              data: [
                { id: "1", type: "user", display: "Alice Martin", value: "alice", avatar: "/placeholder.svg" },
                { id: "2", type: "user", display: "Bob Dupont", value: "bob", avatar: "/placeholder.svg" },
                { id: "3", type: "user", display: "Charlie Durand", value: "charlie", avatar: "/placeholder.svg" },
              ],
            },
          ]}
          onChange={(value, plainText, mentions) => console.log("Value:", value, mentions)}
        />
      ),
      code: `<WakaMentionInput
  placeholder="Tapez @ pour mentionner..."
  triggers={[
    {
      trigger: "@",
      type: "user",
      data: [
        { id: "1", type: "user", display: "Alice Martin", value: "alice" },
        { id: "2", type: "user", display: "Bob Dupont", value: "bob" },
      ],
    },
  ]}
  onChange={(value, plainText, mentions) => console.log("Value:", value, mentions)}
/>`,
    },
  ],
}

export const threadViewShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Vue en fil",
      description: "Affiche une conversation en fil de discussion",
      preview: (
        <WakaThreadView
          thread={{
            id: "thread-1",
            title: "Discussion",
            parentMessage: {
              id: "1",
              content: "Quelqu un peut m aider ?",
              author: { id: "1", name: "Alice" },
              timestamp: new Date(),
              replies: [
                { id: "2", content: "Bien sur, quel est le probleme ?", author: { id: "2", name: "Bob" }, timestamp: new Date() },
                { id: "3", content: "J ai une erreur 404", author: { id: "1", name: "Alice" }, timestamp: new Date() },
              ],
            },
            replyCount: 2,
            participants: [
              { id: "1", name: "Alice" },
              { id: "2", name: "Bob" },
            ],
          }}
          onReply={(content) => console.log("Reply:", content)}
        />
      ),
      code: `<WakaThreadView
  thread={{
    id: "thread-1",
    parentMessage: {
      id: "1",
      content: "Question?",
      author: { id: "1", name: "Alice" },
      timestamp: new Date(),
      replies: [{ id: "2", content: "Reponse!", author: { id: "2", name: "Bob" }, timestamp: new Date() }],
    },
    replyCount: 1,
    participants: [{ id: "1", name: "Alice" }, { id: "2", name: "Bob" }],
  }}
  onReply={(content) => console.log("Reply:", content)}
/>`,
    },
  ],
}

export const presenceIndicatorShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Indicateur de presence",
      description: "Montre le statut en ligne des utilisateurs",
      preview: (
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2"><WakaPresenceIndicator status="online" /> <span>En ligne</span></div>
          <div className="flex items-center gap-2"><WakaPresenceIndicator status="away" /> <span>Absent</span></div>
          <div className="flex items-center gap-2"><WakaPresenceIndicator status="busy" /> <span>Occupe</span></div>
          <div className="flex items-center gap-2"><WakaPresenceIndicator status="offline" /> <span>Hors ligne</span></div>
        </div>
      ),
      code: `<WakaPresenceIndicator status="online" />
<WakaPresenceIndicator status="away" />
<WakaPresenceIndicator status="busy" />
<WakaPresenceIndicator status="offline" />`,
    },
  ],
}

export const reactionPickerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Selecteur de reactions",
      description: "Permet de choisir une reaction emoji",
      preview: (
        <WakaReactionPicker
          quickReactions={["\u{1F44D}", "\u2764\uFE0F", "\u{1F602}", "\u{1F62E}", "\u{1F622}", "\u{1F621}"]}
          onSelect={(emoji, data) => console.log("Selected:", emoji, data)}
          showSearch
          showRecent
          mode="inline"
        />
      ),
      code: `<WakaReactionPicker
  quickReactions={["\u{1F44D}", "\u2764\uFE0F", "\u{1F602}", "\u{1F62E}"]}
  onSelect={(emoji, data) => console.log("Selected:", emoji, data)}
  showSearch
  showRecent
/>`,
    },
  ],
}

export const voiceMessageShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Message vocal",
      description: "Lecteur de message vocal avec forme d onde",
      preview: (
        <WakaVoiceMessage
          mode="player"
          src="/audio-sample.mp3"
          waveform={[0.2, 0.5, 0.8, 0.3, 0.9, 0.4, 0.7, 0.2, 0.6, 0.5]}
          variant="bubble-received"
          showSpeedControl
        />
      ),
      code: `<WakaVoiceMessage
  mode="player"
  src="/audio-sample.mp3"
  waveform={[0.2, 0.5, 0.8, 0.3, 0.9, 0.4]}
  variant="bubble-received"
  showSpeedControl
/>`,
    },
  ],
}

// ============================================
// ANALYTICS COMPONENTS
// ============================================

export const funnelChartShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Entonnoir de conversion",
      description: "Visualise les etapes d un tunnel de conversion",
      preview: (
        <WakaFunnelChart
          data={[
            { id: "visitors", label: "Visiteurs", value: 10000, color: "#3b82f6" },
            { id: "signups", label: "Inscrits", value: 5000, color: "#8b5cf6" },
            { id: "active", label: "Actifs", value: 2500, color: "#ec4899" },
            { id: "paying", label: "Payants", value: 1000, color: "#10b981" },
          ]}
          height={300}
          showPercentages
          showValues
        />
      ),
      code: `<WakaFunnelChart
  data={[
    { id: "visitors", label: "Visiteurs", value: 10000 },
    { id: "signups", label: "Inscrits", value: 5000 },
    { id: "active", label: "Actifs", value: 2500 },
    { id: "paying", label: "Payants", value: 1000 },
  ]}
  height={300}
  showPercentages
  showValues
/>`,
    },
  ],
}

export const cohortTableShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Analyse de cohorte",
      description: "Affiche la retention par cohorte temporelle",
      preview: (
        <WakaCohortTable
          data={[
            { id: "jan", label: "Jan 2024", date: new Date("2024-01-01"), size: 1000, data: [{ value: 100 }, { value: 80 }, { value: 65 }, { value: 55 }] },
            { id: "feb", label: "Fev 2024", date: new Date("2024-02-01"), size: 1200, data: [{ value: 100 }, { value: 75 }, { value: 60 }] },
            { id: "mar", label: "Mar 2024", date: new Date("2024-03-01"), size: 900, data: [{ value: 100 }, { value: 82 }] },
          ]}
          period="month"
          showAsPercentage
          colorScale={{ min: "#fee2e2", max: "#ef4444" }}
        />
      ),
      code: `<WakaCohortTable
  data={[
    { id: "jan", label: "Jan 2024", date: new Date("2024-01-01"), size: 1000, data: [{ value: 100 }, { value: 80 }, { value: 65 }] },
    { id: "feb", label: "Fev 2024", date: new Date("2024-02-01"), size: 1200, data: [{ value: 100 }, { value: 75 }] },
  ]}
  period="month"
  showAsPercentage
/>`,
    },
  ],
}

export const kpiDashboardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Dashboard KPI",
      description: "Affiche les indicateurs cles de performance",
      preview: (
        <WakaKPIDashboard
          kpis={[
            { id: "revenue", title: "Chiffre d affaires", value: 125000, previousValue: 110000, trend: "up", trendValue: "+13.6%", unit: "EUR" },
            { id: "users", title: "Utilisateurs actifs", value: 8500, previousValue: 7200, trend: "up", trendValue: "+18%" },
            { id: "conversion", title: "Taux de conversion", value: "3.2%", previousValue: "2.8%", trend: "up", trendValue: "+0.4%" },
            { id: "nps", title: "NPS", value: 72, previousValue: 68, trend: "up", trendValue: "+4" },
          ]}
        />
      ),
      code: `<WakaKPIDashboard
  kpis={[
    { id: "revenue", title: "CA", value: 125000, previousValue: 110000, trend: "up", trendValue: "+13.6%" },
    { id: "users", title: "Utilisateurs", value: 8500, previousValue: 7200, trend: "up", trendValue: "+18%" },
  ]}
/>`,
    },
  ],
}

export const comparePeriodShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Comparaison de periodes",
      description: "Compare les metriques entre deux periodes",
      preview: (
        <WakaComparePeriod
          currentPeriod={{ label: "Cette semaine", start: new Date("2024-01-08"), end: new Date("2024-01-14") }}
          previousPeriod={{ label: "Semaine derniere", start: new Date("2024-01-01"), end: new Date("2024-01-07") }}
          metrics={[
            { id: "sales", name: "Ventes", value: { current: 15000, previous: 12000 }, unit: "EUR" },
            { id: "orders", name: "Commandes", value: { current: 450, previous: 380 } },
            { id: "avg", name: "Panier moyen", value: { current: 33.33, previous: 31.58 }, unit: "EUR" },
          ]}
          onPeriodChange={(current, previous) => console.log(current, previous)}
        />
      ),
      code: `<WakaComparePeriod
  currentPeriod={{ label: "Cette semaine", start: new Date(), end: new Date() }}
  previousPeriod={{ label: "Semaine derniere", start: new Date(), end: new Date() }}
  metrics={[
    { id: "sales", name: "Ventes", value: { current: 15000, previous: 12000 } },
    { id: "orders", name: "Commandes", value: { current: 450, previous: 380 } },
  ]}
/>`,
    },
  ],
}

export const goalProgressShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Progression objectif",
      description: "Affiche la progression vers un objectif",
      preview: (
        <div className="space-y-4 max-w-md">
          <WakaGoalProgress
            title="Chiffre d affaires Q1"
            currentValue={75000}
            targetValue={100000}
            unit="EUR"
            unitPosition="suffix"
          />
          <WakaGoalProgress
            title="Nouveaux clients"
            currentValue={420}
            targetValue={500}
            unit="clients"
            unitPosition="suffix"
          />
        </div>
      ),
      code: `<WakaGoalProgress
  title="CA Q1"
  currentValue={75000}
  targetValue={100000}
  unit="EUR"
/>`,
    },
  ],
}

export const heatmapShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Carte de chaleur",
      description: "Visualise des donnees en grille avec intensite",
      preview: (
        <WakaHeatmap
          data={{
            values: [
              [10, 25, 15],
              [45, 60, 55],
              [30, 40, 35],
            ],
            rowLabels: ["9h", "12h", "15h"],
            columnLabels: ["Lun", "Mar", "Mer"],
          }}
          colorSchemeName="greens"
          showLegend
        />
      ),
      code: `<WakaHeatmap
  data={{
    values: [[10, 25, 15], [45, 60, 55], [30, 40, 35]],
    rowLabels: ["9h", "12h", "15h"],
    columnLabels: ["Lun", "Mar", "Mer"],
  }}
  colorSchemeName="greens"
  showLegend
/>`,
    },
  ],
}

export const sankeyDiagramShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Diagramme de Sankey",
      description: "Visualise les flux entre categories",
      preview: (
        <WakaSankeyDiagram
          nodes={[
            { id: "source1", label: "Organic" },
            { id: "source2", label: "Paid" },
            { id: "source3", label: "Social" },
            { id: "page1", label: "Homepage" },
            { id: "page2", label: "Product" },
            { id: "conv", label: "Conversion" },
          ]}
          links={[
            { source: "source1", target: "page1", value: 1000 },
            { source: "source2", target: "page1", value: 500 },
            { source: "source3", target: "page1", value: 300 },
            { source: "page1", target: "page2", value: 1200 },
            { source: "page2", target: "conv", value: 400 },
          ]}
          height={300}
        />
      ),
      code: `<WakaSankeyDiagram
  nodes={[
    { id: "organic", label: "Organic" },
    { id: "homepage", label: "Homepage" },
    { id: "conversion", label: "Conversion" },
  ]}
  links={[
    { source: "organic", target: "homepage", value: 1000 },
    { source: "homepage", target: "conversion", value: 400 },
  ]}
  height={300}
/>`,
    },
  ],
}

export const treemapChartShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Treemap",
      description: "Visualise des donnees hierarchiques en rectangles",
      preview: (
        <WakaTreemapChart
          data={[
            { id: "electronics", label: "Electronique", value: 45000, category: "tech", children: [
              { id: "phones", label: "Smartphones", value: 25000, category: "tech" },
              { id: "laptops", label: "Laptops", value: 15000, category: "tech" },
              { id: "accessories", label: "Accessoires", value: 5000, category: "tech" },
            ]},
            { id: "clothing", label: "Vetements", value: 30000, category: "fashion" },
            { id: "home", label: "Maison", value: 20000, category: "home" },
            { id: "sports", label: "Sports", value: 15000, category: "sports" },
          ]}
          height={300}
          colorScheme="default"
        />
      ),
      code: `<WakaTreemapChart
  data={[
    { id: "electronics", label: "Electronique", value: 45000, children: [
      { id: "phones", label: "Smartphones", value: 25000 },
      { id: "laptops", label: "Laptops", value: 15000 },
    ]},
    { id: "clothing", label: "Vetements", value: 30000 },
  ]}
  height={300}
/>`,
    },
  ],
}

// ============================================
// FORMS COMPONENTS
// ============================================

export const signaturePadShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Pad de signature",
      description: "Permet de capturer une signature manuscrite",
      preview: (
        <WakaSignaturePad
          width={400}
          height={200}
          penColor="#1e293b"
          backgroundColor="#f8fafc"
          onSave={(dataUrl, format) => console.log("Signature saved:", format)}
          showToolbar
        />
      ),
      code: `<WakaSignaturePad
  width={400}
  height={200}
  penColor="#1e293b"
  backgroundColor="#f8fafc"
  onSave={(dataUrl, format) => console.log("Saved:", format)}
  showToolbar
/>`,
    },
  ],
}

export const addressAutocompleteShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Autocompletion d adresse",
      description: "Champ avec suggestions d adresses",
      preview: (
        <WakaAddressAutocomplete
          placeholder="Entrez une adresse..."
          onChange={(address) => console.log("Selected:", address)}
          showRecentAddresses
          allowManualEntry
        />
      ),
      code: `<WakaAddressAutocomplete
  placeholder="Entrez une adresse..."
  onChange={(address) => console.log("Selected:", address)}
  showRecentAddresses
  allowManualEntry
/>`,
    },
  ],
}

export const phoneInputShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Champ telephone",
      description: "Saisie de numero avec indicatif pays",
      preview: (
        <WakaPhoneInput
          defaultCountry="FR"
          value="+33612345678"
          onChange={(value) => console.log("Phone:", value)}
          placeholder="Numero de telephone"
        />
      ),
      code: `<WakaPhoneInput
  defaultCountry="FR"
  value={phone}
  onChange={(value) => setPhone(value)}
  placeholder="Numero de telephone"
/>`,
    },
  ],
}

export const creditCardInputShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Champ carte bancaire",
      description: "Saisie formatee de carte de credit",
      preview: (
        <WakaCreditCardInput
          onChange={(data) => console.log("Card data:", data)}
          showCardPreview
          showCardTypeIcon
        />
      ),
      code: `<WakaCreditCardInput
  onChange={(data) => console.log("Card:", data)}
  showCardPreview
  showCardTypeIcon
/>`,
    },
  ],
}

export const tagInputShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Champ de tags",
      description: "Permet d ajouter plusieurs tags",
      preview: (
        <WakaTagInput
          tags={[
            { id: "1", value: "React" },
            { id: "2", value: "TypeScript" },
            { id: "3", value: "Tailwind" },
          ]}
          onChange={(tags) => console.log("Tags:", tags)}
          placeholder="Ajouter un tag..."
          maxTags={10}
          suggestions={[
            { value: "Vue" },
            { value: "Angular" },
            { value: "Svelte" },
          ]}
        />
      ),
      code: `<WakaTagInput
  tags={[{ id: "1", value: "React" }, { id: "2", value: "TypeScript" }]}
  onChange={(newTags) => setTags(newTags)}
  placeholder="Ajouter un tag..."
  maxTags={10}
/>`,
    },
  ],
}

export const sliderRangeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Slider de plage",
      description: "Selection d une plage de valeurs",
      preview: (
        <div className="w-full max-w-sm space-y-6">
          <WakaSliderRange
            min={0}
            max={1000}
            step={10}
            value={[200, 800]}
            onChange={(value) => console.log("Range:", value)}
            formatValue={(v) => `${v} EUR`}
            showLabels
          />
        </div>
      ),
      code: `<WakaSliderRange
  min={0}
  max={1000}
  step={10}
  value={[200, 800]}
  onChange={(value) => console.log("Range:", value)}
  formatLabel={(v) => \`\${v} EUR\`}
/>`,
    },
  ],
}

export const ratingInputShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Notation par etoiles",
      description: "Permet de donner une note",
      preview: (
        <div className="space-y-4">
          <WakaRatingInput
            value={4}
            max={5}
            onChange={(value) => console.log("Rating:", value)}
            size="md"
          />
          <WakaRatingInput
            value={3.5}
            max={5}
            onChange={(value) => console.log("Rating:", value)}
            allowHalf
            size="lg"
          />
        </div>
      ),
      code: `<WakaRatingInput
  value={rating}
  max={5}
  onChange={(value) => setRating(value)}
  size="md"
/>
<WakaRatingInput
  value={rating}
  max={5}
  onChange={(value) => setRating(value)}
  allowHalf
/>`,
    },
  ],
}

export const schedulePickerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Selecteur d horaires",
      description: "Permet de definir des creneaux horaires",
      preview: (
        <WakaSchedulePicker
          slots={[
            { id: "1", date: new Date("2024-01-15"), startTime: "09:00", endTime: "10:00", status: "available" },
            { id: "2", date: new Date("2024-01-15"), startTime: "10:00", endTime: "11:00", status: "available" },
            { id: "3", date: new Date("2024-01-15"), startTime: "14:00", endTime: "15:00", status: "booked" },
            { id: "4", date: new Date("2024-01-16"), startTime: "09:00", endTime: "10:00", status: "available" },
          ]}
          selectedSlots={["1"]}
          onSlotsChange={(slotIds) => console.log("Selected:", slotIds)}
          durations={[30, 60, 90]}
          selectedDuration={60}
        />
      ),
      code: `<WakaSchedulePicker
  slots={[
    { id: "1", date: new Date(), startTime: "09:00", endTime: "10:00", status: "available" },
    { id: "2", date: new Date(), startTime: "10:00", endTime: "11:00", status: "booked" },
  ]}
  selectedSlots={["1"]}
  onSlotsChange={(slotIds) => console.log("Selected:", slotIds)}
/>`,
    },
  ],
}

// ============================================
// ONBOARDING COMPONENTS
// ============================================

function TourGuidePreview() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentStep, setCurrentStep] = React.useState(0)

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <Button id="tour-step1" variant="outline">Accueil</Button>
        <Button id="tour-step2" variant="outline">Projets</Button>
        <Button id="tour-step3" variant="default">Nouveau</Button>
      </div>
      <Button onClick={() => { setIsOpen(true); setCurrentStep(0) }}>
        Lancer la visite guidee
      </Button>
      <WakaTourGuide
        steps={[
          { id: "1", target: "#tour-step1", title: "Bienvenue", content: "Ceci est la page d accueil", placement: "bottom" },
          { id: "2", target: "#tour-step2", title: "Projets", content: "Gerez vos projets ici", placement: "bottom" },
          { id: "3", target: "#tour-step3", title: "Creer", content: "Cliquez pour creer un nouveau projet", placement: "bottom" },
        ]}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        onSkip={() => setIsOpen(false)}
        onComplete={() => setIsOpen(false)}
        showProgress
        showSkip
        showStepCounter
      />
    </div>
  )
}

export const tourGuideShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Guide de visite",
      description: "Visite guidee interactive de l interface",
      preview: <TourGuidePreview />,
      code: `const [isOpen, setIsOpen] = useState(false)
const [currentStep, setCurrentStep] = useState(0)

<Button onClick={() => { setIsOpen(true); setCurrentStep(0) }}>
  Lancer la visite guidee
</Button>

<WakaTourGuide
  steps={[
    { id: "1", target: "#step1", title: "Bienvenue", content: "Page d accueil" },
    { id: "2", target: "#step2", title: "Projets", content: "Vos projets" },
    { id: "3", target: "#step3", title: "Creer", content: "Nouveau projet" },
  ]}
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  onComplete={() => setIsOpen(false)}
  showProgress
  showSkip
/>`,
    },
  ],
}

export const hotspotShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Point d interet",
      description: "Met en evidence un element avec animation",
      preview: (
        <div className="relative p-8">
          <Button>
            Nouveau
            <WakaHotspot
              id="new-feature"
              content="Nouvelle fonctionnalite !"
              position="top-right"
              variant="dot"
              size="default"
            />
          </Button>
        </div>
      ),
      code: `<Button>
  Nouveau
  <WakaHotspot
    id="new-feature"
    content="Nouvelle fonctionnalite !"
    position="top-right"
    variant="dot"
  />
</Button>`,
    },
  ],
}

export const checklistShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Liste de taches",
      description: "Checklist de configuration initiale",
      preview: (
        <WakaChecklist
          checklistId="setup-checklist"
          title="Configuration du compte"
          tasks={[
            { id: "1", title: "Verifier l email" },
            { id: "2", title: "Completer le profil" },
            { id: "3", title: "Activer la 2FA" },
            { id: "4", title: "Inviter l equipe" },
          ]}
          onTaskChange={(id, status) => console.log("Task:", id, status)}
          showProgress
        />
      ),
      code: `<WakaChecklist
  checklistId="setup-checklist"
  title="Configuration du compte"
  tasks={[
    { id: "1", title: "Verifier l email" },
    { id: "2", title: "Completer le profil" },
    { id: "3", title: "Activer la 2FA" },
  ]}
  onTaskChange={(id, status) => console.log(id, status)}
  showProgress
/>`,
    },
  ],
}

export const emptyStateShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Etat vide",
      description: "Affiche un message quand il n y a pas de contenu",
      preview: (
        <WakaEmptyState
          illustration="inbox"
          title="Aucun message"
          description="Votre boite de reception est vide. Les nouveaux messages apparaitront ici."
          primaryAction={{
            label: "Composer un message",
            onClick: () => console.log("Compose"),
          }}
        />
      ),
      code: `<WakaEmptyState
  illustration="inbox"
  title="Aucun message"
  description="Votre boite de reception est vide."
  primaryAction={{
    label: "Composer un message",
    onClick: () => console.log("Compose"),
  }}
/>`,
    },
  ],
}

export const featureAnnouncementShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Annonce de fonctionnalite",
      description: "Met en avant une nouvelle fonctionnalite",
      preview: (
        <WakaFeatureAnnouncement
          features={[
            {
              id: "dark-mode",
              title: "Nouveau : Mode sombre",
              description: "Profitez d une experience plus confortable pour vos yeux avec le nouveau mode sombre.",
              version: "2.0.0",
              badgeText: "Nouveau",
              badgeVariant: "primary",
            },
          ]}
          mode="banner"
          open={true}
          onDismiss={() => console.log("Dismissed")}
        />
      ),
      code: `<WakaFeatureAnnouncement
  features={[
    {
      id: "dark-mode",
      title: "Nouveau : Mode sombre",
      description: "Profitez d une experience plus confortable.",
      version: "2.0.0",
      badgeText: "Nouveau",
      badgeVariant: "primary",
    },
  ]}
  mode="banner"
  open={true}
  onDismiss={() => console.log("Dismissed")}
/>`,
    },
  ],
}

export const progressOnboardingShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Progression onboarding",
      description: "Affiche la progression de la configuration",
      preview: (
        <WakaProgressOnboarding
          steps={[
            { id: "1", label: "Creer un compte", completed: true },
            { id: "2", label: "Configurer le profil", completed: true },
            { id: "3", label: "Connecter les services", completed: false },
            { id: "4", label: "Inviter l equipe", completed: false },
          ]}
          currentStep={2}
          variant="full"
          showPercentage
          onStepClick={(index) => console.log("Step:", index)}
          clickable
        />
      ),
      code: `<WakaProgressOnboarding
  steps={[
    { id: "1", label: "Creer un compte", completed: true },
    { id: "2", label: "Configurer le profil", completed: true },
    { id: "3", label: "Connecter les services" },
    { id: "4", label: "Inviter l equipe" },
  ]}
  currentStep={2}
  variant="full"
  showPercentage
  onStepClick={(index) => console.log("Step:", index)}
  clickable
/>`,
    },
  ],
}

function TooltipTourPreview() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentStep, setCurrentStep] = React.useState(0)

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <Button id="tooltip-btn1" variant="outline">Accueil</Button>
        <Button id="tooltip-btn2" variant="outline">Parametres</Button>
        <Button id="tooltip-btn3" variant="default">Action</Button>
      </div>
      <Button onClick={() => { setIsOpen(true); setCurrentStep(0) }}>
        Lancer la visite par tooltips
      </Button>
      <WakaTourGuide
        variant="tooltip"
        steps={[
          { id: "1", target: "#tooltip-btn1", title: "Etape 1", content: "Cliquez ici pour commencer", placement: "bottom" },
          { id: "2", target: "#tooltip-btn2", title: "Etape 2", content: "Configurez vos preferences", placement: "bottom" },
          { id: "3", target: "#tooltip-btn3", title: "Etape 3", content: "Lancez votre premier projet", placement: "bottom" },
        ]}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        onComplete={() => setIsOpen(false)}
        onSkip={() => setIsOpen(false)}
        showProgress
        showSkip
      />
    </div>
  )
}

export const tooltipTourShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Visite par tooltips (leger)",
      description: "Tooltips sans overlay bloquant - utilise WakaTourGuide avec variant='tooltip'",
      preview: <TooltipTourPreview />,
      code: `const [isOpen, setIsOpen] = useState(false)
const [currentStep, setCurrentStep] = useState(0)

<Button onClick={() => { setIsOpen(true); setCurrentStep(0) }}>Lancer</Button>

<WakaTourGuide
  variant="tooltip"  // Mode leger sans overlay
  steps={[
    { id: "1", target: "#btn1", title: "Etape 1", content: "Commencez ici" },
    { id: "2", target: "#btn2", title: "Etape 2", content: "Puis ici" },
  ]}
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  onComplete={() => setIsOpen(false)}
  showProgress
/>`,
    },
  ],
}

function WelcomeModalPreview() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>
        Ouvrir la modal de bienvenue
      </Button>
      <WakaWelcomeModal
        open={open}
        onOpenChange={setOpen}
        steps={[
          {
            id: "welcome",
            title: "Bienvenue sur WakaStellar !",
            description: "Nous sommes ravis de vous compter parmi nous. Decouvrez notre plateforme en quelques etapes.",
          },
          {
            id: "features",
            title: "Vos preferences",
            description: "Choisissez ce qui vous interesse le plus.",
            options: [
              { id: "speed", label: "Rapidite", description: "Interface optimisee" },
              { id: "security", label: "Securite", description: "Donnees protegees" },
              { id: "collab", label: "Collaboration", description: "Travaillez en equipe" },
            ],
            multiSelect: true,
          },
          {
            id: "ready",
            title: "Vous etes pret !",
            description: "Commencez a utiliser WakaStellar des maintenant.",
          },
        ]}
        userName="Utilisateur"
        onComplete={(selections) => {
          console.log("Complete:", selections)
          setOpen(false)
        }}
        onSkip={() => setOpen(false)}
        allowSkip
      />
    </div>
  )
}

export const welcomeModalShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Modal de bienvenue",
      description: "Accueille les nouveaux utilisateurs",
      preview: <WelcomeModalPreview />,
      code: `const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Ouvrir</Button>

<WakaWelcomeModal
  open={open}
  onOpenChange={setOpen}
  steps={[
    {
      id: "welcome",
      title: "Bienvenue !",
      description: "Decouvrez notre plateforme.",
    },
    {
      id: "features",
      title: "Vos preferences",
      description: "Choisissez ce qui vous interesse.",
      options: [
        { id: "speed", label: "Rapidite" },
        { id: "security", label: "Securite" },
      ],
      multiSelect: true,
    },
  ]}
  onComplete={(selections) => console.log(selections)}
  allowSkip
/>`,
    },
  ],
}

// ============================================
// BOTTOM SHEET SHOWCASE
// ============================================
function BottomSheetPreview() {
  const { open, onOpenChange, openSheet } = useBottomSheet()
  return (
    <div>
      <Button onClick={() => openSheet()}>Open Bottom Sheet</Button>
      <WakaBottomSheet
        open={open}
        onOpenChange={onOpenChange}
        snapPoints={[25, 50, 90]}
        header={<h3 className="font-semibold">Bottom Sheet</h3>}
      >
        <div className="space-y-4">
          <p>Drag the handle to snap to different heights.</p>
          <p>This component is mobile-first with touch gestures.</p>
        </div>
      </WakaBottomSheet>
    </div>
  )
}

export const bottomSheetShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Basic Bottom Sheet",
      description: "A mobile-first bottom sheet with snap points and drag gestures",
      preview: <BottomSheetPreview />,
      code: `const { open, onOpenChange, openSheet } = useBottomSheet()

<Button onClick={() => openSheet()}>Open</Button>
<WakaBottomSheet
  open={open}
  onOpenChange={onOpenChange}
  snapPoints={[25, 50, 90]}
  header={<h3>Bottom Sheet</h3>}
>
  <p>Content here</p>
</WakaBottomSheet>`,
    },
    {
      title: "Variants",
      description: "Different visual styles for the bottom sheet",
      preview: (
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => {}}>Default</Button>
          <Button variant="outline" onClick={() => {}}>Glass</Button>
          <Button variant="outline" onClick={() => {}}>Flat</Button>
        </div>
      ),
      code: `<WakaBottomSheet variant="default" ... />
<WakaBottomSheet variant="glass" ... />
<WakaBottomSheet variant="flat" ... />`,
    },
  ],
}

// ============================================
// HAPTIC BUTTON SHOWCASE
// ============================================
export const hapticButtonShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Variants",
      description: "Different button styles with haptic feedback and ripple effects",
      preview: (
        <div className="flex flex-wrap gap-4">
          <WakaHapticButton>Default</WakaHapticButton>
          <WakaHapticButton variant="secondary">Secondary</WakaHapticButton>
          <WakaHapticButton variant="destructive">Destructive</WakaHapticButton>
          <WakaHapticButton variant="outline">Outline</WakaHapticButton>
          <WakaHapticButton variant="ghost">Ghost</WakaHapticButton>
          <WakaHapticButton variant="glass">Glass</WakaHapticButton>
        </div>
      ),
      code: `<WakaHapticButton>Default</WakaHapticButton>
<WakaHapticButton variant="secondary">Secondary</WakaHapticButton>
<WakaHapticButton variant="destructive">Destructive</WakaHapticButton>
<WakaHapticButton variant="outline">Outline</WakaHapticButton>
<WakaHapticButton variant="ghost">Ghost</WakaHapticButton>
<WakaHapticButton variant="glass">Glass</WakaHapticButton>`,
    },
    {
      title: "Haptic Patterns",
      description: "Different haptic feedback patterns for various interactions",
      preview: (
        <div className="flex flex-wrap gap-4">
          <WakaHapticButton hapticPattern="light">Light</WakaHapticButton>
          <WakaHapticButton hapticPattern="medium">Medium</WakaHapticButton>
          <WakaHapticButton hapticPattern="heavy">Heavy</WakaHapticButton>
          <WakaHapticButton hapticPattern="success">Success</WakaHapticButton>
          <WakaHapticButton hapticPattern="error">Error</WakaHapticButton>
        </div>
      ),
      code: `<WakaHapticButton hapticPattern="light">Light</WakaHapticButton>
<WakaHapticButton hapticPattern="medium">Medium</WakaHapticButton>
<WakaHapticButton hapticPattern="heavy">Heavy</WakaHapticButton>
<WakaHapticButton hapticPattern="success">Success</WakaHapticButton>
<WakaHapticButton hapticPattern="error">Error</WakaHapticButton>`,
    },
    {
      title: "With Icons and Loading",
      description: "Buttons with icons, loading states, and glow effects",
      preview: (
        <div className="flex flex-wrap gap-4">
          <WakaHapticButton leftIcon={<Mail className="h-4 w-4" />}>Email</WakaHapticButton>
          <WakaHapticButton loading>Loading...</WakaHapticButton>
          <WakaHapticButton glowOnPress glowColor="rgba(59, 130, 246, 0.5)">Glow</WakaHapticButton>
        </div>
      ),
      code: `<WakaHapticButton leftIcon={<Mail />}>Email</WakaHapticButton>
<WakaHapticButton loading>Loading...</WakaHapticButton>
<WakaHapticButton glowOnPress>Glow</WakaHapticButton>`,
    },
  ],
}

// ============================================
// MORPH BUTTON SHOWCASE
// ============================================
function MorphButtonPreview() {
  const [state, setState] = React.useState<"idle" | "loading" | "success" | "error">("idle")

  const handleClick = () => {
    setState("loading")
    setTimeout(() => {
      setState(Math.random() > 0.5 ? "success" : "error")
    }, 2000)
  }

  return (
    <WakaMorphButton
      state={state}
      idleText="Submit"
      loadingText="Processing..."
      successText="Done!"
      errorText="Failed"
      onClick={handleClick}
      onReset={() => setState("idle")}
    />
  )
}

export const morphButtonShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "State Morphing",
      description: "Button that morphs between idle, loading, success, and error states",
      preview: <MorphButtonPreview />,
      code: `const [state, setState] = useState<MorphState>("idle")

<WakaMorphButton
  state={state}
  idleText="Submit"
  loadingText="Processing..."
  successText="Done!"
  errorText="Failed"
  onClick={handleSubmit}
  onReset={() => setState("idle")}
/>`,
    },
    {
      title: "Variants",
      description: "Different visual variants of the morph button",
      preview: (
        <div className="flex flex-wrap gap-4">
          <WakaMorphButton state="idle" idleText="Default" />
          <WakaMorphButton state="idle" idleText="Outline" variant="outline" />
          <WakaMorphButton state="idle" idleText="Ghost" variant="ghost" />
        </div>
      ),
      code: `<WakaMorphButton state="idle" idleText="Default" />
<WakaMorphButton variant="outline" state="idle" idleText="Outline" />
<WakaMorphButton variant="ghost" state="idle" idleText="Ghost" />`,
    },
  ],
}

// ============================================
// PULL TO REFRESH SHOWCASE
// ============================================
function PullToRefreshPreview() {
  const [items, setItems] = React.useState(["Item 1", "Item 2", "Item 3"])

  const handleRefresh = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    setItems(prev => [`New Item ${Date.now()}`, ...prev])
  }

  return (
    <div className="h-64 border rounded-lg overflow-hidden">
      <WakaPullToRefresh onRefresh={handleRefresh}>
        <div className="p-4 space-y-2">
          {items.map((item, i) => (
            <div key={i} className="p-3 bg-muted rounded">{item}</div>
          ))}
        </div>
      </WakaPullToRefresh>
    </div>
  )
}

export const pullToRefreshShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Basic Pull to Refresh",
      description: "Pull down to trigger a refresh action (works on touch devices)",
      preview: <PullToRefreshPreview />,
      code: `<WakaPullToRefresh onRefresh={handleRefresh}>
  <div className="p-4 space-y-2">
    {items.map((item, i) => (
      <div key={i} className="p-3 bg-muted rounded">{item}</div>
    ))}
  </div>
</WakaPullToRefresh>`,
    },
    {
      title: "Variants",
      description: "Different visual styles: default, iOS, and Material Design",
      preview: (
        <div className="flex gap-4">
          <Badge>Default</Badge>
          <Badge variant="outline">iOS</Badge>
          <Badge variant="secondary">Material</Badge>
        </div>
      ),
      code: `<WakaPullToRefresh variant="default" ... />
<WakaPullToRefresh variant="ios" ... />
<WakaPullToRefresh variant="material" ... />`,
    },
  ],
}

// ============================================
// SWIPE CARD SHOWCASE
// ============================================
function SwipeCardPreview() {
  const cards = [
    { id: 1, name: "Card 1", image: "https://picsum.photos/300/400?1" },
    { id: 2, name: "Card 2", image: "https://picsum.photos/300/400?2" },
    { id: 3, name: "Card 3", image: "https://picsum.photos/300/400?3" },
  ]

  return (
    <div className="h-96 flex items-center justify-center">
      <WakaSwipeCard
        cards={cards}
        renderCard={(card) => (
          <div className="h-full bg-gradient-to-br from-primary/20 to-secondary/20 p-6 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">{card.name}</h3>
            <p className="text-muted-foreground">Swipe left or right</p>
          </div>
        )}
        onSwipe={(card, direction) => console.log(`Swiped ${direction}:`, card)}
      />
    </div>
  )
}

export const swipeCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Tinder-style Cards",
      description: "Swipeable card stack with gesture support",
      preview: <SwipeCardPreview />,
      code: `const cards = [
  { id: 1, name: "Card 1" },
  { id: 2, name: "Card 2" },
]

<WakaSwipeCard
  cards={cards}
  renderCard={(card) => (
    <div className="p-6">
      <h3>{card.name}</h3>
    </div>
  )}
  onSwipe={(card, direction) => console.log(direction, card)}
/>`,
    },
    {
      title: "Configuration",
      description: "Customize swipe directions, thresholds, and overlays",
      preview: (
        <div className="text-sm text-muted-foreground">
          <p>allowedDirections: left, right, up, down</p>
          <p>swipeThreshold: 0.3 (30% of card width)</p>
          <p>showOverlay: true (shows like/nope indicators)</p>
        </div>
      ),
      code: `<WakaSwipeCard
  allowedDirections={["left", "right", "up"]}
  swipeThreshold={0.3}
  showOverlay={true}
  overlayContent={{ left: "NOPE", right: "LIKE" }}
  ...
/>`,
    },
  ],
}

// ============================================
// LIQUID BUTTON SHOWCASE
// ============================================
export const liquidButtonShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Liquid Effect",
      description: "Buttons with animated liquid/blob morphing effect",
      preview: (
        <div className="flex flex-wrap gap-4">
          <WakaLiquidButton>Default</WakaLiquidButton>
          <WakaLiquidButton variant="secondary">Secondary</WakaLiquidButton>
          <WakaLiquidButton variant="destructive">Destructive</WakaLiquidButton>
          <WakaLiquidButton variant="success">Success</WakaLiquidButton>
        </div>
      ),
      code: `<WakaLiquidButton>Default</WakaLiquidButton>
<WakaLiquidButton variant="secondary">Secondary</WakaLiquidButton>
<WakaLiquidButton variant="destructive">Destructive</WakaLiquidButton>
<WakaLiquidButton variant="success">Success</WakaLiquidButton>`,
    },
    {
      title: "Gradient & Neon",
      description: "Special effect variants",
      preview: (
        <div className="flex flex-wrap gap-4">
          <WakaLiquidButton variant="gradient">Gradient</WakaLiquidButton>
          <WakaLiquidButton variant="neon">Neon</WakaLiquidButton>
        </div>
      ),
      code: `<WakaLiquidButton variant="gradient">Gradient</WakaLiquidButton>
<WakaLiquidButton variant="neon">Neon</WakaLiquidButton>`,
    },
    {
      title: "Customization",
      description: "Control liquid intensity, speed, and blob points",
      preview: (
        <div className="flex flex-wrap gap-4">
          <WakaLiquidButton liquidIntensity={0.3} liquidSpeed={2000}>Subtle</WakaLiquidButton>
          <WakaLiquidButton liquidIntensity={0.8} liquidSpeed={500} blobPoints={12}>Intense</WakaLiquidButton>
        </div>
      ),
      code: `<WakaLiquidButton liquidIntensity={0.3} liquidSpeed={2000}>
  Subtle
</WakaLiquidButton>
<WakaLiquidButton liquidIntensity={0.8} liquidSpeed={500} blobPoints={12}>
  Intense
</WakaLiquidButton>`,
    },
  ],
}

// ============================================
// MAGNETIC BUTTON SHOWCASE
// ============================================
export const magneticButtonShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Magnetic Effect",
      description: "Button attracted to cursor within a radius",
      preview: (
        <div className="flex flex-wrap gap-4">
          <WakaMagneticButton>Hover Near Me</WakaMagneticButton>
          <WakaMagneticButton variant="secondary">Secondary</WakaMagneticButton>
          <WakaMagneticButton variant="outline">Outline</WakaMagneticButton>
        </div>
      ),
      code: `<WakaMagneticButton>Hover Near Me</WakaMagneticButton>
<WakaMagneticButton variant="secondary">Secondary</WakaMagneticButton>
<WakaMagneticButton variant="outline">Outline</WakaMagneticButton>`,
    },
    {
      title: "Attraction Settings",
      description: "Customize the magnetic attraction radius and strength",
      preview: (
        <div className="flex flex-wrap gap-8">
          <WakaMagneticButton attractionRadius={100} attractionStrength={0.2}>Weak</WakaMagneticButton>
          <WakaMagneticButton attractionRadius={200} attractionStrength={0.6}>Strong</WakaMagneticButton>
        </div>
      ),
      code: `<WakaMagneticButton attractionRadius={100} attractionStrength={0.2}>
  Weak
</WakaMagneticButton>
<WakaMagneticButton attractionRadius={200} attractionStrength={0.6}>
  Strong
</WakaMagneticButton>`,
    },
    {
      title: "With Ripple",
      description: "Magnetic button with ripple effect on click",
      preview: (
        <WakaMagneticButton rippleEnabled rippleColor="rgba(255,255,255,0.5)">
          Click Me
        </WakaMagneticButton>
      ),
      code: `<WakaMagneticButton rippleEnabled rippleColor="rgba(255,255,255,0.5)">
  Click Me
</WakaMagneticButton>`,
    },
  ],
}

// ============================================
// ERROR SHAKE SHOWCASE
// ============================================
function ErrorShakePreview() {
  const [trigger, setTrigger] = React.useState(false)

  return (
    <div className="space-y-4">
      <Button onClick={() => setTrigger(true)}>Trigger Shake</Button>
      <WakaErrorShake
        trigger={trigger}
        onComplete={() => setTrigger(false)}
        flashEffect
      >
        <div className="p-4 border rounded-lg bg-card">
          <Input placeholder="Invalid input..." className="border-destructive" />
        </div>
      </WakaErrorShake>
    </div>
  )
}

export const errorShakeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Basic Error Shake",
      description: "Shake animation to indicate errors with optional flash effect",
      preview: <ErrorShakePreview />,
      code: `const [trigger, setTrigger] = useState(false)

<WakaErrorShake
  trigger={trigger}
  onComplete={() => setTrigger(false)}
  flashEffect
>
  <Input className="border-destructive" />
</WakaErrorShake>`,
    },
    {
      title: "Intensity Levels",
      description: "Different shake intensities for various error severities",
      preview: (
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>Light</span>
          <span>Medium</span>
          <span>Strong</span>
        </div>
      ),
      code: `<WakaErrorShake intensity="light" ... />
<WakaErrorShake intensity="medium" ... />
<WakaErrorShake intensity="strong" ... />`,
    },
    {
      title: "With Glitch Effect",
      description: "Optional chromatic aberration glitch effect",
      preview: (
        <div className="text-sm text-muted-foreground">
          Enable glitchEffect for a more dramatic error indication
        </div>
      ),
      code: `<WakaErrorShake glitchEffect flashEffect intensity="strong">
  <FormField />
</WakaErrorShake>`,
    },
  ],
}

// ============================================
// LOADING ORBIT SHOWCASE
// ============================================
export const loadingOrbitShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Sizes",
      description: "Different sizes of the orbital loading animation",
      preview: (
        <div className="flex items-end gap-8">
          <WakaLoadingOrbit size="sm" />
          <WakaLoadingOrbit size="md" />
          <WakaLoadingOrbit size="lg" />
          <WakaLoadingOrbit size="xl" />
        </div>
      ),
      code: `<WakaLoadingOrbit size="sm" />
<WakaLoadingOrbit size="md" />
<WakaLoadingOrbit size="lg" />
<WakaLoadingOrbit size="xl" />`,
    },
    {
      title: "Custom Orbits",
      description: "Configure number of orbits and their colors",
      preview: (
        <div className="flex gap-8">
          <WakaLoadingOrbit orbitCount={2} primaryColor="#3b82f6" secondaryColor="#f59e0b" />
          <WakaLoadingOrbit orbitCount={4} showPaths={false} />
        </div>
      ),
      code: `<WakaLoadingOrbit
  orbitCount={2}
  primaryColor="#3b82f6"
  secondaryColor="#f59e0b"
/>
<WakaLoadingOrbit orbitCount={4} showPaths={false} />`,
    },
    {
      title: "With Center Content",
      description: "Add custom content to the center of the orbit",
      preview: (
        <WakaLoadingOrbit
          size="lg"
          centerIcon={<span className="text-xl">%</span>}
        />
      ),
      code: `<WakaLoadingOrbit
  size="lg"
  centerIcon={<span className="text-xl">%</span>}
/>`,
    },
  ],
}

// ============================================
// SKELETON WAVE SHOWCASE
// ============================================
export const skeletonWaveShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Presets",
      description: "Pre-configured skeleton shapes for common use cases",
      preview: (
        <div className="space-y-4">
          <WakaSkeletonWave preset="text" width={200} />
          <WakaSkeletonWave preset="avatar" />
          <WakaSkeletonWave preset="button" />
          <WakaSkeletonWave preset="thumbnail" />
        </div>
      ),
      code: `<WakaSkeletonWave preset="text" width={200} />
<WakaSkeletonWave preset="avatar" />
<WakaSkeletonWave preset="button" />
<WakaSkeletonWave preset="thumbnail" />`,
    },
    {
      title: "Multi-line Text",
      description: "Text skeleton with multiple lines and random widths",
      preview: (
        <WakaSkeletonWave preset="text" lines={4} randomWidths />
      ),
      code: `<WakaSkeletonWave preset="text" lines={4} randomWidths />`,
    },
    {
      title: "Custom Styling",
      description: "Customize colors and animation speed",
      preview: (
        <div className="space-y-4">
          <WakaSkeletonWave width={200} height={20} speed={1} />
          <WakaSkeletonWave width={150} height={20} speed={2} baseColor="hsl(var(--primary) / 0.2)" />
        </div>
      ),
      code: `<WakaSkeletonWave width={200} height={20} speed={1} />
<WakaSkeletonWave
  width={150}
  height={20}
  speed={2}
  baseColor="hsl(var(--primary) / 0.2)"
/>`,
    },
  ],
}

// ============================================
// SUCCESS EXPLOSION SHOWCASE
// ============================================
function SuccessExplosionPreview() {
  const [trigger, setTrigger] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setTrigger(true)}>Celebrate!</Button>
      <WakaSuccessExplosion
        trigger={trigger}
        onComplete={() => setTrigger(false)}
        showCheckmark
        size="lg"
      />
    </div>
  )
}

export const successExplosionShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Success Animation",
      description: "Confetti explosion with checkmark for success states",
      preview: <SuccessExplosionPreview />,
      code: `const [trigger, setTrigger] = useState(false)

<Button onClick={() => setTrigger(true)}>Celebrate!</Button>
<WakaSuccessExplosion
  trigger={trigger}
  onComplete={() => setTrigger(false)}
  showCheckmark
  size="lg"
/>`,
    },
    {
      title: "Sizes",
      description: "Different explosion sizes",
      preview: (
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>sm (80px)</span>
          <span>md (120px)</span>
          <span>lg (180px)</span>
          <span>xl (240px)</span>
        </div>
      ),
      code: `<WakaSuccessExplosion size="sm" ... />
<WakaSuccessExplosion size="md" ... />
<WakaSuccessExplosion size="lg" ... />
<WakaSuccessExplosion size="xl" ... />`,
    },
    {
      title: "Custom Colors",
      description: "Customize particle colors for branding",
      preview: (
        <div className="text-sm text-muted-foreground">
          primaryColor, secondaryColor, accentColor, checkmarkColor
        </div>
      ),
      code: `<WakaSuccessExplosion
  primaryColor="#22c55e"
  secondaryColor="#3b82f6"
  accentColor="#f59e0b"
  checkmarkColor="#22c55e"
  particleCount={32}
  ...
/>`,
    },
  ],
}

// ============================================
// TYPEWRITER SHOWCASE
// ============================================
export const typewriterShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Basic Typewriter",
      description: "Animated text typing effect with cursor",
      preview: (
        <WakaTypewriter
          strings={["Hello, World!", "Welcome to WakaStellar", "Build amazing UIs"]}
          typeSpeed="normal"
          deleteSpeed="fast"
          loop
        />
      ),
      code: `<WakaTypewriter
  strings={["Hello, World!", "Welcome to WakaStellar", "Build amazing UIs"]}
  typeSpeed="normal"
  deleteSpeed="fast"
  loop
/>`,
    },
    {
      title: "Speed Variants",
      description: "Different typing speeds",
      preview: (
        <div className="space-y-4">
          <div><span className="text-muted-foreground mr-2">Slow:</span><WakaTypewriter strings={["Typing slowly..."]} typeSpeed="slow" loop={false} /></div>
          <div><span className="text-muted-foreground mr-2">Normal:</span><WakaTypewriter strings={["Typing normally..."]} typeSpeed="normal" loop={false} /></div>
          <div><span className="text-muted-foreground mr-2">Fast:</span><WakaTypewriter strings={["Typing fast..."]} typeSpeed="fast" loop={false} /></div>
        </div>
      ),
      code: `<WakaTypewriter strings={["..."]} typeSpeed="slow" />
<WakaTypewriter strings={["..."]} typeSpeed="normal" />
<WakaTypewriter strings={["..."]} typeSpeed="fast" />`,
    },
    {
      title: "Custom Cursor",
      description: "Customize cursor character and blink speed",
      preview: (
        <div className="space-y-4">
          <WakaTypewriter strings={["Custom cursor"]} cursorChar="_" cursorBlinkSpeed={300} loop={false} />
          <WakaTypewriter strings={["Block cursor"]} cursorChar="\u2588" loop={false} />
        </div>
      ),
      code: `<WakaTypewriter strings={["..."]} cursorChar="_" cursorBlinkSpeed={300} />
<WakaTypewriter strings={["..."]} cursorChar="\u2588" />`,
    },
  ],
}

// ============================================
// WAKA FLOATING NAV SHOWCASE
// ============================================
function FloatingNavDemo() {
  const [activeItem, setActiveItem] = useState("home")

  const items = [
    { id: "home", label: "Home", icon: <Home className="h-4 w-4" />, active: activeItem === "home" },
    { id: "products", label: "Products", icon: <Package className="h-4 w-4" />, active: activeItem === "products" },
    { id: "about", label: "About", icon: <Users className="h-4 w-4" />, active: activeItem === "about" },
    { id: "contact", label: "Contact", icon: <Mail className="h-4 w-4" />, active: activeItem === "contact" },
  ]

  return (
    <div className="relative h-32 bg-muted/30 rounded-lg overflow-hidden">
      <WakaFloatingNav
        items={items.map(item => ({
          ...item,
          onClick: () => setActiveItem(item.id),
        }))}
        logo={<span className="font-bold text-lg">Logo</span>}
        alwaysVisible
        className="!relative !translate-y-0"
        actions={<Button size="sm">Sign Up</Button>}
      />
    </div>
  )
}

export const floatingNavShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Navigation flottante",
      description: "Barre de navigation responsive avec effet de compactage au scroll",
      preview: <FloatingNavDemo />,
      code: `const [activeItem, setActiveItem] = useState("home")

const items = [
  { id: "home", label: "Home", icon: <Home />, active: activeItem === "home" },
  { id: "products", label: "Products", icon: <Package />, active: activeItem === "products" },
  { id: "about", label: "About", icon: <Users />, active: activeItem === "about" },
  { id: "contact", label: "Contact", icon: <Mail />, active: activeItem === "contact" },
]

<WakaFloatingNav
  items={items.map(item => ({
    ...item,
    onClick: () => setActiveItem(item.id),
  }))}
  logo={<span className="font-bold">Logo</span>}
  actions={<Button size="sm">Sign Up</Button>}
  scrollThreshold={100}
  alwaysVisible
/>`,
    },
    {
      title: "Position en bas",
      description: "Navigation positionnee en bas de l'ecran",
      preview: (
        <div className="relative h-32 bg-muted/30 rounded-lg overflow-hidden flex items-end">
          <WakaFloatingNav
            items={[
              { id: "home", label: "Home", icon: <Home className="h-4 w-4" />, active: true },
              { id: "search", label: "Search", icon: <Search className="h-4 w-4" /> },
              { id: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
            ]}
            position="bottom"
            alwaysVisible
            className="!relative !translate-y-0"
          />
        </div>
      ),
      code: `<WakaFloatingNav
  items={items}
  position="bottom"
  alwaysVisible
/>`,
    },
  ],
}

// ============================================
// WAKA BREADCRUMB PATH SHOWCASE
// ============================================
function BreadcrumbPathDemo() {
  const [items, setItems] = useState([
    { id: "home", label: "Home", icon: <Home className="h-3 w-3" /> },
    { id: "docs", label: "Documents", icon: <FileText className="h-3 w-3" /> },
    { id: "project", label: "Project Alpha" },
  ])

  const addItem = () => {
    const newItem = { id: `item-${Date.now()}`, label: `Folder ${items.length}` }
    setItems([...items, newItem])
  }

  return (
    <div className="space-y-4">
      <WakaBreadcrumbPath
        items={items}
        showPath
        size="md"
      />
      <Button size="sm" variant="outline" onClick={addItem}>
        <Plus className="h-4 w-4 mr-2" /> Add Level
      </Button>
    </div>
  )
}

export const breadcrumbPathShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Fil d'Ariane anime",
      description: "Breadcrumb avec animation SVG de chemin",
      preview: <BreadcrumbPathDemo />,
      code: `const [items, setItems] = useState([
  { id: "home", label: "Home", icon: <Home /> },
  { id: "docs", label: "Documents", icon: <FileText /> },
  { id: "project", label: "Project Alpha" },
])

<WakaBreadcrumbPath
  items={items}
  showPath
  size="md"
/>`,
    },
    {
      title: "Avec items collapsed",
      description: "Collapse automatique des items intermediaires",
      preview: (
        <WakaBreadcrumbPath
          items={[
            { id: "1", label: "Home" },
            { id: "2", label: "Documents" },
            { id: "3", label: "Work" },
            { id: "4", label: "Projects" },
            { id: "5", label: "2024" },
            { id: "6", label: "Current" },
          ]}
          maxItems={4}
          showPath={false}
        />
      ),
      code: `<WakaBreadcrumbPath
  items={longItemsList}
  maxItems={4}
  showPath={false}
/>`,
    },
    {
      title: "Tailles",
      description: "Differentes tailles disponibles",
      preview: (
        <div className="space-y-4">
          <WakaBreadcrumbPath
            items={[{ id: "1", label: "Home" }, { id: "2", label: "Docs" }, { id: "3", label: "Page" }]}
            size="sm"
            showPath={false}
          />
          <WakaBreadcrumbPath
            items={[{ id: "1", label: "Home" }, { id: "2", label: "Docs" }, { id: "3", label: "Page" }]}
            size="md"
            showPath={false}
          />
          <WakaBreadcrumbPath
            items={[{ id: "1", label: "Home" }, { id: "2", label: "Docs" }, { id: "3", label: "Page" }]}
            size="lg"
            showPath={false}
          />
        </div>
      ),
      code: `<WakaBreadcrumbPath items={items} size="sm" />
<WakaBreadcrumbPath items={items} size="md" />
<WakaBreadcrumbPath items={items} size="lg" />`,
    },
  ],
}

// ============================================
// WAKA TABS MORPH SHOWCASE
// ============================================
function TabsMorphDemo() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview", icon: <Grid className="h-4 w-4" /> },
    { id: "analytics", label: "Analytics", icon: <Activity className="h-4 w-4" />, badge: 3 },
    { id: "reports", label: "Reports", icon: <FileText className="h-4 w-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
  ]

  return (
    <WakaTabsMorph
      tabs={tabs}
      activeTab={activeTab}
      onChange={setActiveTab}
      variant="default"
    />
  )
}

export const tabsMorphShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Tabs avec indicateur morphing",
      description: "L'indicateur s'anime fluidement entre les tabs",
      preview: <TabsMorphDemo />,
      code: `const [activeTab, setActiveTab] = useState("overview")

const tabs = [
  { id: "overview", label: "Overview", icon: <Grid /> },
  { id: "analytics", label: "Analytics", badge: 3 },
  { id: "reports", label: "Reports" },
  { id: "settings", label: "Settings" },
]

<WakaTabsMorph
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
/>`,
    },
    {
      title: "Variantes de style",
      description: "Differents styles visuels disponibles",
      preview: (
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Default</p>
            <WakaTabsMorph
              tabs={[
                { id: "1", label: "Tab 1" },
                { id: "2", label: "Tab 2" },
                { id: "3", label: "Tab 3" },
              ]}
              defaultTab="1"
              variant="default"
            />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Pills</p>
            <WakaTabsMorph
              tabs={[
                { id: "1", label: "Tab 1" },
                { id: "2", label: "Tab 2" },
                { id: "3", label: "Tab 3" },
              ]}
              defaultTab="1"
              variant="pills"
            />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Underline</p>
            <WakaTabsMorph
              tabs={[
                { id: "1", label: "Tab 1" },
                { id: "2", label: "Tab 2" },
                { id: "3", label: "Tab 3" },
              ]}
              defaultTab="1"
              variant="underline"
            />
          </div>
        </div>
      ),
      code: `<WakaTabsMorph tabs={tabs} variant="default" />
<WakaTabsMorph tabs={tabs} variant="pills" />
<WakaTabsMorph tabs={tabs} variant="underline" />`,
    },
    {
      title: "Orientation verticale",
      description: "Tabs empiles verticalement",
      preview: (
        <WakaTabsMorph
          tabs={[
            { id: "general", label: "General", icon: <Settings className="h-4 w-4" /> },
            { id: "security", label: "Security", icon: <Eye className="h-4 w-4" /> },
            { id: "notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
          ]}
          defaultTab="general"
          orientation="vertical"
        />
      ),
      code: `<WakaTabsMorph
  tabs={tabs}
  orientation="vertical"
/>`,
    },
  ],
}

// ============================================
// WAKA ORBITAL MENU SHOWCASE
// ============================================
function OrbitalMenuDemo() {
  const [isOpen, setIsOpen] = useState(false)

  const items = [
    { id: "home", icon: <Home className="h-5 w-5" />, label: "Home", onClick: () => console.log("Home") },
    { id: "search", icon: <Search className="h-5 w-5" />, label: "Search", onClick: () => console.log("Search") },
    { id: "star", icon: <Star className="h-5 w-5" />, label: "Favorites", onClick: () => console.log("Star") },
    { id: "settings", icon: <Settings className="h-5 w-5" />, label: "Settings", onClick: () => console.log("Settings") },
    { id: "user", icon: <User className="h-5 w-5" />, label: "Profile", onClick: () => console.log("Profile") },
  ]

  return (
    <div className="flex items-center justify-center py-8">
      <WakaOrbitalMenu
        items={items}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        radius={100}
      />
    </div>
  )
}

export const orbitalMenuShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Menu orbital",
      description: "Menu circulaire avec items disposes en orbite",
      preview: <OrbitalMenuDemo />,
      code: `const [isOpen, setIsOpen] = useState(false)

const items = [
  { id: "home", icon: <Home />, label: "Home", onClick: () => {} },
  { id: "search", icon: <Search />, label: "Search", onClick: () => {} },
  { id: "star", icon: <Star />, label: "Favorites", onClick: () => {} },
  { id: "settings", icon: <Settings />, label: "Settings", onClick: () => {} },
]

<WakaOrbitalMenu
  items={items}
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  radius={100}
/>`,
    },
    {
      title: "Tailles et configurations",
      description: "Differentes tailles d'items et bouton central",
      preview: (
        <div className="flex items-center justify-center py-8">
          <WakaOrbitalMenu
            items={[
              { id: "1", icon: <Heart className="h-5 w-5" />, label: "Like" },
              { id: "2", icon: <MessageCircle className="h-5 w-5" />, label: "Comment" },
              { id: "3", icon: <Send className="h-5 w-5" />, label: "Share" },
            ]}
            radius={80}
            itemSize="sm"
            centerSize="default"
            angleSpan={180}
            startAngle={-180}
          />
        </div>
      ),
      code: `<WakaOrbitalMenu
  items={items}
  radius={80}
  itemSize="sm"
  angleSpan={180}
  startAngle={-180}
/>`,
    },
  ],
}

// ============================================
// WAKA DOCK SHOWCASE
// ============================================
function DockDemo() {
  const items = [
    { id: "home", icon: <Home className="h-6 w-6" />, label: "Home", active: true },
    { id: "search", icon: <Search className="h-6 w-6" />, label: "Search" },
    { id: "mail", icon: <Mail className="h-6 w-6" />, label: "Mail", badge: 5 },
    { id: "calendar", icon: <CalendarIcon className="h-6 w-6" />, label: "Calendar" },
    { id: "settings", icon: <Settings className="h-6 w-6" />, label: "Settings" },
  ]

  return (
    <div className="flex items-end justify-center h-32 pb-4">
      <WakaDock
        items={items}
        position="bottom"
        fixed={false}
        magnification={1.5}
      />
    </div>
  )
}

export const dockShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Dock style macOS",
      description: "Barre de dock avec effet de magnification au survol",
      preview: <DockDemo />,
      code: `const items = [
  { id: "home", icon: <Home />, label: "Home", active: true },
  { id: "search", icon: <Search />, label: "Search" },
  { id: "mail", icon: <Mail />, label: "Mail", badge: 5 },
  { id: "calendar", icon: <Calendar />, label: "Calendar" },
  { id: "settings", icon: <Settings />, label: "Settings" },
]

<WakaDock
  items={items}
  position="bottom"
  magnification={1.5}
/>`,
    },
    {
      title: "Positions",
      description: "Dock positionne a gauche ou a droite",
      preview: (
        <div className="flex gap-8 h-40">
          <div className="flex items-center">
            <WakaDock
              items={[
                { id: "1", icon: <Home className="h-5 w-5" />, label: "Home" },
                { id: "2", icon: <FileText className="h-5 w-5" />, label: "Files" },
                { id: "3", icon: <Settings className="h-5 w-5" />, label: "Settings" },
              ]}
              position="left"
              fixed={false}
              size="sm"
            />
          </div>
          <div className="flex items-center ml-auto">
            <WakaDock
              items={[
                { id: "1", icon: <Home className="h-5 w-5" />, label: "Home" },
                { id: "2", icon: <FileText className="h-5 w-5" />, label: "Files" },
                { id: "3", icon: <Settings className="h-5 w-5" />, label: "Settings" },
              ]}
              position="right"
              fixed={false}
              size="sm"
            />
          </div>
        </div>
      ),
      code: `<WakaDock items={items} position="left" />
<WakaDock items={items} position="right" />`,
    },
    {
      title: "Tailles",
      description: "Differentes tailles disponibles",
      preview: (
        <div className="space-y-8">
          <div className="flex justify-center">
            <WakaDock
              items={[
                { id: "1", icon: <Home className="h-4 w-4" />, label: "Home" },
                { id: "2", icon: <Search className="h-4 w-4" />, label: "Search" },
                { id: "3", icon: <Settings className="h-4 w-4" />, label: "Settings" },
              ]}
              size="sm"
              fixed={false}
            />
          </div>
          <div className="flex justify-center">
            <WakaDock
              items={[
                { id: "1", icon: <Home className="h-5 w-5" />, label: "Home" },
                { id: "2", icon: <Search className="h-5 w-5" />, label: "Search" },
                { id: "3", icon: <Settings className="h-5 w-5" />, label: "Settings" },
              ]}
              size="default"
              fixed={false}
            />
          </div>
          <div className="flex justify-center">
            <WakaDock
              items={[
                { id: "1", icon: <Home className="h-7 w-7" />, label: "Home" },
                { id: "2", icon: <Search className="h-7 w-7" />, label: "Search" },
                { id: "3", icon: <Settings className="h-7 w-7" />, label: "Settings" },
              ]}
              size="lg"
              fixed={false}
            />
          </div>
        </div>
      ),
      code: `<WakaDock items={items} size="sm" />
<WakaDock items={items} size="default" />
<WakaDock items={items} size="lg" />`,
    },
  ],
}

// ============================================
// WAKA SPOTLIGHT SHOWCASE
// ============================================
function SpotlightDemo() {
  const { open, onOpenChange } = useSpotlight()

  const handleSearch = async (query: string) => {
    // Simulate search
    await new Promise(resolve => setTimeout(resolve, 100))
    const allResults = [
      { id: "1", title: "Dashboard", subtitle: "View your dashboard", type: "page" as const },
      { id: "2", title: "Create Project", subtitle: "Start a new project", type: "action" as const },
      { id: "3", title: "User Settings", subtitle: "Manage your account", type: "setting" as const },
      { id: "4", title: "Documentation", subtitle: "Read the docs", type: "external" as const },
    ]
    return allResults.filter(r =>
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.subtitle?.toLowerCase().includes(query.toLowerCase())
    )
  }

  return (
    <div className="space-y-4">
      <Button onClick={() => onOpenChange(true)}>
        <Search className="h-4 w-4 mr-2" />
        Ouvrir Spotlight (Cmd+/)
      </Button>
      <WakaSpotlight
        open={open}
        onOpenChange={onOpenChange}
        onSearch={handleSearch}
        placeholder="Rechercher des pages, actions..."
        recentItems={[
          { id: "r1", title: "Dashboard", type: "page" as const },
          { id: "r2", title: "Settings", type: "setting" as const },
        ]}
        filters={[
          { id: "pages", label: "Pages", type: "page" },
          { id: "actions", label: "Actions", type: "action" },
        ]}
      />
    </div>
  )
}

export const spotlightShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Spotlight Search",
      description: "Recherche globale style macOS Spotlight",
      preview: <SpotlightDemo />,
      code: `const { open, onOpenChange } = useSpotlight()

const handleSearch = async (query: string) => {
  const results = await fetchResults(query)
  return results
}

<Button onClick={() => onOpenChange(true)}>
  <Search /> Ouvrir Spotlight
</Button>

<WakaSpotlight
  open={open}
  onOpenChange={onOpenChange}
  onSearch={handleSearch}
  placeholder="Rechercher..."
  recentItems={recentItems}
  filters={[
    { id: "pages", label: "Pages" },
    { id: "actions", label: "Actions" },
  ]}
/>`,
    },
  ],
}

// ============================================
// WAKA COMMAND BAR SHOWCASE
// ============================================
function CommandBarDemo() {
  const { open, onOpenChange } = useCommandBar()

  const commands = [
    {
      id: "navigation",
      label: "Navigation",
      items: [
        { id: "home", label: "Go to Home", description: "Navigate to homepage", icon: <Home className="h-4 w-4" />, shortcut: ["G", "H"] },
        { id: "settings", label: "Open Settings", description: "Manage preferences", icon: <Settings className="h-4 w-4" />, shortcut: ["G", "S"] },
        { id: "profile", label: "View Profile", description: "See your profile", icon: <User className="h-4 w-4" /> },
      ],
    },
    {
      id: "actions",
      label: "Actions",
      items: [
        { id: "new", label: "Create New", description: "Create a new item", icon: <Plus className="h-4 w-4" />, shortcut: ["C", "N"] },
        { id: "search", label: "Search", description: "Search everything", icon: <Search className="h-4 w-4" />, shortcut: ["Cmd", "K"] },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      <Button onClick={() => onOpenChange(true)}>
        <Terminal className="h-4 w-4 mr-2" />
        Ouvrir Command Bar (Cmd+K)
      </Button>
      <WakaCommandBar
        open={open}
        onOpenChange={onOpenChange}
        items={commands}
        placeholder="Tapez une commande..."
        onSelect={(item) => console.log("Selected:", item)}
      />
    </div>
  )
}

export const commandBarShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Command Bar",
      description: "Palette de commandes style VS Code",
      preview: <CommandBarDemo />,
      code: `const { open, onOpenChange } = useCommandBar()

const commands = [
  {
    label: "Navigation",
    items: [
      { id: "home", label: "Go to Home", icon: <Home />, shortcut: ["G", "H"] },
      { id: "settings", label: "Settings", icon: <Settings />, shortcut: ["G", "S"] },
    ],
  },
  {
    label: "Actions",
    items: [
      { id: "new", label: "Create New", icon: <Plus />, shortcut: ["C", "N"] },
    ],
  },
]

<Button onClick={() => onOpenChange(true)}>
  <Terminal /> Ouvrir Command Bar
</Button>

<WakaCommandBar
  open={open}
  onOpenChange={onOpenChange}
  items={commands}
  placeholder="Tapez une commande..."
  onSelect={(item) => handleCommand(item)}
/>`,
    },
    {
      title: "Items avec shortcuts",
      description: "Commandes avec raccourcis clavier affiches",
      preview: (
        <div className="border rounded-lg p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground mb-2">Exemple de rendu des items:</p>
          <div className="space-y-1">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 bg-accent">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border bg-background">
                <Home className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <div className="font-medium">Go to Home</div>
                <div className="text-xs text-muted-foreground">Navigate to homepage</div>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs">G</kbd>
                <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs">H</kbd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-accent/50">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border bg-background">
                <Settings className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <div className="font-medium">Open Settings</div>
                <div className="text-xs text-muted-foreground">Manage preferences</div>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs">G</kbd>
                <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs">S</kbd>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `const commands = [
  {
    id: "home",
    label: "Go to Home",
    description: "Navigate to homepage",
    icon: <Home />,
    shortcut: ["G", "H"],
    action: () => router.push("/")
  },
  {
    id: "settings",
    label: "Open Settings",
    description: "Manage preferences",
    icon: <Settings />,
    shortcut: ["G", "S"]
  },
]`,
    },
  ],
}

// ============================================
// BADGE SHOWCASE (Gamification)
// ============================================
export const badgeShowcaseShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Badge Collection Grid",
      description: "Display a collection of badges in a grid layout with unlock states and progress",
      preview: (
        <WakaBadgeShowcase
          badges={[
            {
              id: "1",
              name: "First Steps",
              description: "Complete your first quest",
              icon: <Star className="h-6 w-6" />,
              rarity: "common",
              unlocked: true,
              unlockedAt: new Date(),
            },
            {
              id: "2",
              name: "Streak Master",
              description: "Maintain a 7-day streak",
              icon: <Flame className="h-6 w-6" />,
              rarity: "rare",
              unlocked: true,
              isNew: true,
            },
            {
              id: "3",
              name: "Elite Achiever",
              description: "Unlock 50 achievements",
              icon: <Trophy className="h-6 w-6" />,
              rarity: "epic",
              unlocked: false,
              progress: 68,
            },
            {
              id: "4",
              name: "Legendary Hero",
              description: "Reach the top of the leaderboard",
              icon: <Crown className="h-6 w-6" />,
              rarity: "legendary",
              unlocked: false,
              progress: 25,
            },
          ]}
          variant="grid"
          showProgress
          showLocked
          size="md"
          columns={4}
        />
      ),
      code: `<WakaBadgeShowcase
  badges={[
    {
      id: "1",
      name: "First Steps",
      description: "Complete your first quest",
      icon: <Star className="h-6 w-6" />,
      rarity: "common",
      unlocked: true,
    },
    {
      id: "2",
      name: "Streak Master",
      description: "Maintain a 7-day streak",
      icon: <Flame className="h-6 w-6" />,
      rarity: "rare",
      unlocked: true,
      isNew: true,
    },
    // ... more badges
  ]}
  variant="grid"
  showProgress
  showLocked
/>`,
    },
  ],
}

// ============================================
// DAILY REWARD SHOWCASE
// ============================================
export const dailyRewardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Weekly Daily Rewards",
      description: "A 7-day reward calendar with streak tracking and claim functionality",
      preview: (
        <WakaDailyReward
          currentDay={3}
          streak={5}
          rewards={[
            { day: 1, reward: { type: "coins", value: 100 }, claimed: true },
            { day: 2, reward: { type: "xp", value: 50 }, claimed: true },
            { day: 3, reward: { type: "coins", value: 150 }, claimed: false },
            { day: 4, reward: { type: "item", value: "Mystery Box" }, claimed: false },
            { day: 5, reward: { type: "xp", value: 100 }, claimed: false },
            { day: 6, reward: { type: "coins", value: 200 }, claimed: false },
            { day: 7, reward: { type: "badge", value: "Weekly Champion" }, claimed: false, isBonus: true },
          ]}
          canClaim={true}
          nextRewardIn={3600}
          size="md"
          onClaim={(day) => console.log("Claimed day:", day)}
        />
      ),
      code: `<WakaDailyReward
  currentDay={3}
  streak={5}
  rewards={[
    { day: 1, reward: { type: "coins", value: 100 }, claimed: true },
    { day: 2, reward: { type: "xp", value: 50 }, claimed: true },
    { day: 3, reward: { type: "coins", value: 150 }, claimed: false },
    { day: 4, reward: { type: "item", value: "Mystery Box" }, claimed: false },
    { day: 5, reward: { type: "xp", value: 100 }, claimed: false },
    { day: 6, reward: { type: "coins", value: 200 }, claimed: false },
    { day: 7, reward: { type: "badge", value: "Weekly Champion" }, claimed: false, isBonus: true },
  ]}
  canClaim={true}
  nextRewardIn={3600}
  onClaim={(day) => console.log("Claimed day:", day)}
/>`,
    },
  ],
}

// ============================================
// LOOT BOX SHOWCASE
// ============================================
export const lootBoxShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Loot Box with Items",
      description: "An interactive loot box with animated opening sequence and item reveals",
      preview: (
        <WakaLootBox
          items={[
            { id: "1", name: "Golden Sword", description: "A legendary weapon", rarity: "legendary" },
            { id: "2", name: "Health Potion", description: "Restores 50 HP", rarity: "common", quantity: 3 },
            { id: "3", name: "Magic Shield", description: "Blocks magic attacks", rarity: "epic" },
          ]}
          variant="chest"
          size="default"
          onOpen={() => console.log("Opening loot box")}
          onRevealComplete={(items) => console.log("Revealed items:", items)}
        />
      ),
      code: `<WakaLootBox
  items={[
    { id: "1", name: "Golden Sword", description: "A legendary weapon", rarity: "legendary" },
    { id: "2", name: "Health Potion", description: "Restores 50 HP", rarity: "common", quantity: 3 },
    { id: "3", name: "Magic Shield", description: "Blocks magic attacks", rarity: "epic" },
  ]}
  variant="chest"
  size="default"
  onOpen={() => console.log("Opening")}
  onRevealComplete={(items) => console.log("Items:", items)}
/>`,
    },
  ],
}

// ============================================
// SKILL TREE SHOWCASE
// ============================================
export const skillTreeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "RPG Skill Tree",
      description: "An interactive skill tree with branches, prerequisites, and unlock mechanics",
      preview: (
        <div className="h-[500px] w-full">
          <WakaSkillTree
            skillPoints={5}
            skills={[
              { id: "s1", name: "Fireball", description: "Basic fire spell", unlocked: true, available: true, position: { x: 200, y: 100 }, branch: "fire", cost: 1 },
              { id: "s2", name: "Inferno", description: "Advanced fire spell", unlocked: false, available: true, prerequisites: ["s1"], position: { x: 200, y: 200 }, branch: "fire", cost: 2 },
              { id: "s3", name: "Ice Shard", description: "Basic ice spell", unlocked: true, available: true, position: { x: 400, y: 100 }, branch: "ice", cost: 1 },
              { id: "s4", name: "Blizzard", description: "Advanced ice spell", unlocked: false, available: false, prerequisites: ["s3"], position: { x: 400, y: 200 }, branch: "ice", cost: 3 },
            ]}
            branches={[
              { id: "fire", name: "Fire Magic", color: "#ef4444" },
              { id: "ice", name: "Ice Magic", color: "#3b82f6" },
            ]}
            onUnlock={(skillId) => console.log("Unlocked:", skillId)}
          />
        </div>
      ),
      code: `<WakaSkillTree
  skillPoints={5}
  skills={[
    { id: "s1", name: "Fireball", description: "Basic fire spell", unlocked: true, available: true, position: { x: 200, y: 100 }, branch: "fire", cost: 1 },
    { id: "s2", name: "Inferno", description: "Advanced fire spell", unlocked: false, available: true, prerequisites: ["s1"], position: { x: 200, y: 200 }, branch: "fire", cost: 2 },
    // ... more skills
  ]}
  branches={[
    { id: "fire", name: "Fire Magic", color: "#ef4444" },
    { id: "ice", name: "Ice Magic", color: "#3b82f6" },
  ]}
  onUnlock={(skillId) => console.log("Unlocked:", skillId)}
/>`,
    },
  ],
}

// ============================================
// CHALLENGE TIMER SHOWCASE
// ============================================
export const challengeTimerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Daily Challenge Timer",
      description: "A countdown timer for time-limited challenges with tasks and rewards",
      preview: (
        <WakaChallengeTimer
          challenge={{
            id: "daily-1",
            name: "Daily Quest",
            description: "Complete all tasks before time runs out",
            endTime: new Date(Date.now() + 3600000),
            category: "daily",
            tasks: [
              { id: "t1", text: "Win 3 matches", completed: true, current: 3, target: 3 },
              { id: "t2", text: "Score 1000 points", completed: false, current: 650, target: 1000 },
              { id: "t3", text: "Use 5 power-ups", completed: false, current: 2, target: 5 },
            ],
            rewards: [
              { type: "xp", label: "Experience", value: 500 },
              { type: "currency", label: "Gold", value: 100 },
            ],
          }}
          size="default"
          onComplete={(id) => console.log("Challenge completed:", id)}
          onTaskClick={(challengeId, taskId) => console.log("Task clicked:", taskId)}
        />
      ),
      code: `<WakaChallengeTimer
  challenge={{
    id: "daily-1",
    name: "Daily Quest",
    description: "Complete all tasks before time runs out",
    endTime: new Date(Date.now() + 3600000),
    category: "daily",
    tasks: [
      { id: "t1", text: "Win 3 matches", completed: true, current: 3, target: 3 },
      { id: "t2", text: "Score 1000 points", completed: false, current: 650, target: 1000 },
    ],
    rewards: [
      { type: "xp", label: "Experience", value: 500 },
    ],
  }}
  onComplete={(id) => console.log("Completed:", id)}
/>`,
    },
  ],
}

// ============================================
// RANK BADGE SHOWCASE
// ============================================
export const rankBadgeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Player Rank Badges",
      description: "Display competitive rank badges with divisions and point progress",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-6">
          <WakaRankBadge rank="bronze" division={3} size="md" showDivision />
          <WakaRankBadge rank="silver" division={1} size="md" showDivision />
          <WakaRankBadge rank="gold" division={2} points={1250} pointsToNext={500} size="md" showPoints showDivision />
          <WakaRankBadge rank="platinum" division={1} size="md" showDivision animated />
          <WakaRankBadge rank="diamond" size="lg" animated />
          <WakaRankBadge rank="master" size="lg" animated />
          <WakaRankBadge rank="grandmaster" size="xl" animated />
        </div>
      ),
      code: `<WakaRankBadge
  rank="gold"
  division={2}
  points={1250}
  pointsToNext={500}
  size="md"
  showPoints
  showDivision
  animated
/>`,
    },
  ],
}

// ============================================
// TOURNAMENT BRACKET SHOWCASE
// ============================================
export const tournamentBracketShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Single Elimination Bracket",
      description: "A tournament bracket visualization with match results and progression",
      preview: (
        <div className="h-[400px] w-full overflow-auto">
          <WakaTournamentBracket
            title="Spring Championship"
            type="single_elimination"
            rounds={[
              {
                name: "Semi Finals",
                matches: [
                  { id: "m1", round: 0, position: 0, participant1: { id: "p1", name: "Team Alpha", seed: 1 }, participant2: { id: "p2", name: "Team Beta", seed: 4 }, score1: 3, score2: 1, status: "completed", winnerId: "p1" },
                  { id: "m2", round: 0, position: 1, participant1: { id: "p3", name: "Team Gamma", seed: 2 }, participant2: { id: "p4", name: "Team Delta", seed: 3 }, score1: 2, score2: 3, status: "completed", winnerId: "p4" },
                ],
              },
              {
                name: "Finals",
                matches: [
                  { id: "m3", round: 1, position: 0, participant1: { id: "p1", name: "Team Alpha", seed: 1 }, participant2: { id: "p4", name: "Team Delta", seed: 3 }, status: "in_progress" },
                ],
              },
            ]}
            enableZoomPan
            showTimes
            onMatchClick={(match) => console.log("Match clicked:", match)}
          />
        </div>
      ),
      code: `<WakaTournamentBracket
  title="Spring Championship"
  type="single_elimination"
  rounds={[
    {
      name: "Semi Finals",
      matches: [
        { id: "m1", round: 0, position: 0, participant1: { id: "p1", name: "Team Alpha" }, participant2: { id: "p2", name: "Team Beta" }, score1: 3, score2: 1, status: "completed", winnerId: "p1" },
      ],
    },
    {
      name: "Finals",
      matches: [
        { id: "m2", round: 1, position: 0, status: "pending" },
      ],
    },
  ]}
  enableZoomPan
  onMatchClick={(match) => console.log("Match:", match)}
/>`,
    },
  ],
}

// ============================================
// TEAM BANNER SHOWCASE
// ============================================
export const teamBannerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Team Profile Banner",
      description: "Display team information with stats, members, and achievements",
      preview: (
        <WakaTeamBanner
          name="Phoenix Rising"
          motto="From the ashes, we rise"
          stats={{
            wins: 156,
            rank: 12,
            totalRanks: 500,
            members: 8,
            maxMembers: 10,
            winRate: 72,
            streak: 5,
            points: 25000,
          }}
          members={[
            { id: "1", name: "Alex", avatar: "https://i.pravatar.cc/100?u=1", role: "Leader", isLeader: true },
            { id: "2", name: "Jordan", avatar: "https://i.pravatar.cc/100?u=2", role: "Co-Leader" },
            { id: "3", name: "Sam", avatar: "https://i.pravatar.cc/100?u=3" },
            { id: "4", name: "Taylor", avatar: "https://i.pravatar.cc/100?u=4" },
          ]}
          achievements={[
            { id: "a1", name: "Tournament Winner", icon: <Trophy className="h-4 w-4" />, rarity: "legendary" },
            { id: "a2", name: "Undefeated Week", icon: <Flame className="h-4 w-4" />, rarity: "epic" },
          ]}
          theme={{ primary: "#f97316", secondary: "#ea580c" }}
          size="md"
        />
      ),
      code: `<WakaTeamBanner
  name="Phoenix Rising"
  motto="From the ashes, we rise"
  stats={{
    wins: 156,
    rank: 12,
    members: 8,
    winRate: 72,
  }}
  members={[
    { id: "1", name: "Alex", role: "Leader", isLeader: true },
    { id: "2", name: "Jordan", role: "Co-Leader" },
  ]}
  achievements={[
    { id: "a1", name: "Tournament Winner", icon: <Trophy />, rarity: "legendary" },
  ]}
  theme={{ primary: "#f97316" }}
/>`,
    },
  ],
}

// ============================================
// ACTIVITY FEED SHOWCASE
// ============================================
export const activityFeedShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Social Activity Feed",
      description: "A feed showing recent activities with likes, timestamps, and load more",
      preview: (
        <WakaActivityFeed
          activities={[
            {
              id: "1",
              type: "achievement",
              user: { id: "u1", name: "Alex Chen", avatar: "https://i.pravatar.cc/100?u=alex" },
              content: "unlocked the 'First Victory' achievement",
              timestamp: new Date(Date.now() - 300000),
              likes: 12,
              liked: false,
            },
            {
              id: "2",
              type: "level_up",
              user: { id: "u2", name: "Sarah Miller", avatar: "https://i.pravatar.cc/100?u=sarah" },
              content: "reached Level 25",
              timestamp: new Date(Date.now() - 900000),
              likes: 8,
              liked: true,
            },
            {
              id: "3",
              type: "challenge",
              user: { id: "u3", name: "Mike Johnson", avatar: "https://i.pravatar.cc/100?u=mike" },
              content: "completed the Daily Challenge",
              timestamp: new Date(Date.now() - 1800000),
              likes: 5,
            },
          ]}
          showLikes
          hasMore
          animated
          onLike={(id) => console.log("Liked:", id)}
          onLoadMore={() => console.log("Load more")}
        />
      ),
      code: `<WakaActivityFeed
  activities={[
    {
      id: "1",
      type: "achievement",
      user: { id: "u1", name: "Alex Chen" },
      content: "unlocked the 'First Victory' achievement",
      timestamp: new Date(),
      likes: 12,
    },
    // ... more activities
  ]}
  showLikes
  hasMore
  animated
  onLike={(id) => console.log("Liked:", id)}
  onLoadMore={() => console.log("Load more")}
/>`,
    },
  ],
}

// ============================================
// POWER-UP SHOWCASE
// ============================================
export const powerUpShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Active Power-Ups",
      description: "Display active power-ups with countdown timers and effects",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-4">
          <WakaPowerUp
            powerUp={{
              id: "1",
              type: "speed",
              name: "Speed Boost",
              description: "Move 50% faster",
              duration: 30000,
              multiplier: 1.5,
              isActive: true,
              activatedAt: Date.now(),
            }}
            variant="card"
            showCountdown
            showDescription
            glowEnabled
          />
          <WakaPowerUp
            powerUp={{
              id: "2",
              type: "shield",
              name: "Energy Shield",
              description: "Block all damage",
              duration: 15000,
              multiplier: 1,
              isActive: true,
              activatedAt: Date.now(),
            }}
            variant="badge"
            showCountdown
            pulseEnabled
          />
          <WakaPowerUp
            powerUp={{
              id: "3",
              type: "damage",
              name: "Double Damage",
              description: "Deal 2x damage",
              duration: 20000,
              multiplier: 2,
              stackCount: 2,
              maxStack: 3,
              isActive: true,
              activatedAt: Date.now(),
            }}
            variant="compact"
            showCountdown
          />
        </div>
      ),
      code: `<WakaPowerUp
  powerUp={{
    id: "1",
    type: "speed",
    name: "Speed Boost",
    description: "Move 50% faster",
    duration: 30000,
    multiplier: 1.5,
    isActive: true,
    activatedAt: Date.now(),
  }}
  variant="card"
  showCountdown
  showDescription
  glowEnabled
/>`,
    },
  ],
}

// ============================================
// POINTS POPUP SHOWCASE
// ============================================
function PointsPopupPreview() {
  const [popups, setPopups] = React.useState<Array<{ id: string; points: number; x: number; y: number }>>([])

  const triggerPopup = (points: number) => {
    const id = Math.random().toString(36).slice(2)
    setPopups((prev) => [...prev, { id, points, x: 50 + Math.random() * 100, y: 50 + Math.random() * 50 }])
    setTimeout(() => {
      setPopups((prev) => prev.filter((p) => p.id !== id))
    }, 1000)
  }

  return (
    <div className="relative h-40 w-full rounded-lg border bg-muted/30">
      <div className="flex h-full items-center justify-center gap-4">
        <Button onClick={() => triggerPopup(100)} variant="outline">+100 Points</Button>
        <Button onClick={() => triggerPopup(500)} variant="outline">+500 Points</Button>
        <Button onClick={() => triggerPopup(-50)} variant="destructive">-50 Points</Button>
      </div>
      {popups.map((popup) => (
        <WakaPointsPopup
          key={popup.id}
          points={popup.points}
          x={popup.x}
          y={popup.y}
          size="lg"
        />
      ))}
    </div>
  )
}

export const pointsPopupShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Points Popup Animation",
      description: "Animated floating points that appear when players earn or lose points",
      preview: <PointsPopupPreview />,
      code: `const { trigger, PopupContainer } = usePointsPopup()

// Trigger a popup
trigger(100, { prefix: "XP" })
trigger(-50, { color: "red" })

// Render the container
<PopupContainer />`,
    },
  ],
}

// ============================================
// SPIN WHEEL SHOWCASE
// ============================================
export const spinWheelShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Prize Wheel",
      description: "An interactive spinning wheel for prizes and rewards",
      preview: (
        <WakaSpinWheel
          segments={[
            { id: "1", label: "100 Coins", color: "#fbbf24", weight: 30 },
            { id: "2", label: "50 XP", color: "#a855f7", weight: 25 },
            { id: "3", label: "Rare Item", color: "#3b82f6", weight: 15 },
            { id: "4", label: "200 Coins", color: "#22c55e", weight: 20 },
            { id: "5", label: "Epic Chest", color: "#ec4899", weight: 5 },
            { id: "6", label: "Try Again", color: "#6b7280", weight: 5 },
          ]}
          size="md"
          showLabels
          onSpin={() => console.log("Spinning...")}
          onResult={(segment) => console.log("Won:", segment.label)}
        />
      ),
      code: `<WakaSpinWheel
  segments={[
    { id: "1", label: "100 Coins", color: "#fbbf24", weight: 30 },
    { id: "2", label: "50 XP", color: "#a855f7", weight: 25 },
    { id: "3", label: "Rare Item", color: "#3b82f6", weight: 15 },
    { id: "4", label: "200 Coins", color: "#22c55e", weight: 20 },
    { id: "5", label: "Epic Chest", color: "#ec4899", weight: 5 },
    { id: "6", label: "Try Again", color: "#6b7280", weight: 5 },
  ]}
  size="md"
  showLabels
  onSpin={() => console.log("Spinning...")}
  onResult={(segment) => console.log("Won:", segment.label)}
/>`,
    },
  ],
}

// ============================================
// PLAYER CARD SHOWCASE
// ============================================
export const playerCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Player Profile Cards",
      description: "Collectible player cards with stats, rarity, and flip animation",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-6">
          <WakaPlayerCard
            player={{
              id: "1",
              name: "ShadowBlade",
              avatar: "https://i.pravatar.cc/200?u=shadow",
              title: "Master Assassin",
              level: 75,
              rarity: "legendary",
              stats: [
                { name: "Attack", value: 95, max: 100 },
                { name: "Defense", value: 60, max: 100 },
                { name: "Speed", value: 88, max: 100 },
              ],
              achievements: 142,
            }}
            variant="default"
            size="md"
            showBack
            animated
          />
          <WakaPlayerCard
            player={{
              id: "2",
              name: "FrostMage",
              avatar: "https://i.pravatar.cc/200?u=frost",
              title: "Ice Sorceress",
              level: 62,
              rarity: "epic",
              stats: [
                { name: "Magic", value: 92, max: 100 },
                { name: "Defense", value: 45, max: 100 },
                { name: "Mana", value: 98, max: 100 },
              ],
            }}
            variant="default"
            size="md"
            animated
          />
        </div>
      ),
      code: `<WakaPlayerCard
  player={{
    id: "1",
    name: "ShadowBlade",
    avatar: "https://example.com/avatar.jpg",
    title: "Master Assassin",
    level: 75,
    rarity: "legendary",
    stats: [
      { name: "Attack", value: 95, max: 100 },
      { name: "Defense", value: 60, max: 100 },
      { name: "Speed", value: 88, max: 100 },
    ],
    achievements: 142,
  }}
  variant="default"
  size="md"
  showBack
  animated
/>`,
    },
  ],
}

// ============================================
// STATS HEXAGON SHOWCASE
// ============================================
export const statsHexagonShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Character Stats Hexagon",
      description: "A hexagonal radar chart for displaying 6 character attributes",
      preview: (
        <WakaStatsHexagon
          stats={[
            { id: "str", label: "Strength", value: 85, max: 100 },
            { id: "dex", label: "Dexterity", value: 72, max: 100 },
            { id: "int", label: "Intelligence", value: 90, max: 100 },
            { id: "vit", label: "Vitality", value: 65, max: 100 },
            { id: "wis", label: "Wisdom", value: 78, max: 100 },
            { id: "luk", label: "Luck", value: 55, max: 100 },
          ]}
          profile={{
            id: "player1",
            name: "Hero",
            stats: [85, 72, 90, 65, 78, 55],
            color: "#3b82f6",
            fillOpacity: 0.3,
          }}
          comparisonProfile={{
            id: "average",
            name: "Average",
            stats: [60, 60, 60, 60, 60, 60],
            color: "#94a3b8",
            fillOpacity: 0.1,
          }}
          size={300}
          theme="blue"
          showGrid
          showLabels
          showValues
          showLegend
          animated
        />
      ),
      code: `<WakaStatsHexagon
  stats={[
    { id: "str", label: "Strength", value: 85, max: 100 },
    { id: "dex", label: "Dexterity", value: 72, max: 100 },
    { id: "int", label: "Intelligence", value: 90, max: 100 },
    { id: "vit", label: "Vitality", value: 65, max: 100 },
    { id: "wis", label: "Wisdom", value: 78, max: 100 },
    { id: "luk", label: "Luck", value: 55, max: 100 },
  ]}
  profile={{
    id: "player1",
    name: "Hero",
    stats: [85, 72, 90, 65, 78, 55],
    color: "#3b82f6",
  }}
  size={300}
  theme="blue"
  showGrid
  showLabels
  showValues
  animated
/>`,
    },
  ],
}

// ============================================
// SEASON PASS SHOWCASE
// ============================================
export const seasonPassShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Battle Pass Progress",
      description: "A season pass with free and premium tiers, rewards, and progress tracking",
      preview: (
        <WakaSeasonPass
          levels={[
            { level: 1, freeReward: { type: "coins", value: 100 }, premiumReward: { type: "skin", value: "Golden Armor" }, xpRequired: 0 },
            { level: 2, freeReward: { type: "xp", value: 500 }, premiumReward: { type: "emote", value: "Victory Dance" }, xpRequired: 1000 },
            { level: 3, freeReward: { type: "coins", value: 200 }, premiumReward: { type: "banner", value: "Fire Banner" }, xpRequired: 2500 },
            { level: 4, premiumReward: { type: "pet", value: "Shadow Cat" }, xpRequired: 4500 },
            { level: 5, freeReward: { type: "chest", value: "Rare Chest" }, premiumReward: { type: "title", value: "Champion" }, xpRequired: 7000 },
          ]}
          currentLevel={3}
          currentXP={3200}
          isPremium={false}
          seasonEndsAt={new Date(Date.now() + 86400000 * 14)}
          onClaimReward={(level, tier) => console.log("Claim:", level, tier)}
          onUpgrade={() => console.log("Upgrade to premium")}
        />
      ),
      code: `<WakaSeasonPass
  levels={[
    { level: 1, freeReward: { type: "coins", value: 100 }, premiumReward: { type: "skin", value: "Golden Armor" }, xpRequired: 0 },
    { level: 2, freeReward: { type: "xp", value: 500 }, premiumReward: { type: "emote", value: "Victory Dance" }, xpRequired: 1000 },
    { level: 3, freeReward: { type: "coins", value: 200 }, premiumReward: { type: "banner", value: "Fire Banner" }, xpRequired: 2500 },
    // ... more levels
  ]}
  currentLevel={3}
  currentXP={3200}
  isPremium={false}
  seasonEndsAt={new Date(Date.now() + 86400000 * 14)}
  onClaimReward={(level, tier) => console.log("Claim:", level, tier)}
  onUpgrade={() => console.log("Upgrade")}
/>`,
    },
  ],
}

// ============================================
// GAMIFICATION COMPONENTS (Part 1)
// ============================================

export const achievementUnlockShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Achievement Unlock",
      description: "Celebrate user achievements with animated unlock effects",
      preview: (
        <div className="flex flex-col gap-4">
          <WakaAchievementUnlock
            achievement={{
              id: "first-login",
              title: "First Steps",
              description: "Complete your first login",
              rarity: "common",
              xpReward: 50,
            }}
            isUnlocked={true}
            size="default"
          />
        </div>
      ),
      code: `<WakaAchievementUnlock
  achievement={{
    id: "first-login",
    title: "First Steps",
    description: "Complete your first login",
    rarity: "common",
    xpReward: 50,
  }}
  isUnlocked={true}
/>`,
    },
    {
      title: "Rarity Variants",
      description: "Different rarity levels with unique visual styles",
      preview: (
        <div className="flex flex-wrap gap-4">
          <WakaAchievementUnlock
            achievement={{
              id: "common-ach",
              title: "Beginner",
              description: "Started the journey",
              rarity: "common",
              xpReward: 50,
            }}
            isUnlocked={true}
            autoHideDelay={0}
          />
          <WakaAchievementUnlock
            achievement={{
              id: "rare-ach",
              title: "Explorer",
              description: "Discovered 10 features",
              rarity: "rare",
              xpReward: 150,
            }}
            isUnlocked={true}
            autoHideDelay={0}
          />
          <WakaAchievementUnlock
            achievement={{
              id: "epic-ach",
              title: "Champion",
              description: "Won 50 challenges",
              rarity: "epic",
              xpReward: 500,
            }}
            isUnlocked={true}
            autoHideDelay={0}
          />
          <WakaAchievementUnlock
            achievement={{
              id: "legendary-ach",
              title: "Legend",
              description: "Mastered all skills",
              rarity: "legendary",
              xpReward: 1000,
            }}
            isUnlocked={true}
            autoHideDelay={0}
          />
        </div>
      ),
      code: `<WakaAchievementUnlock
  achievement={{
    id: "legendary-ach",
    title: "Legend",
    description: "Mastered all skills",
    rarity: "legendary",
    xpReward: 1000,
  }}
  isUnlocked={true}
/>`,
    },
  ],
}

export const comboCounterShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Combo Counter",
      description: "Track consecutive actions with fire effects and multipliers",
      preview: (
        <div className="flex flex-wrap gap-8 items-center">
          <WakaComboCounter
            combo={25}
            multiplier={3}
            timeRemaining={75}
            intensity="medium"
            showTimer
            showMultiplier
          />
          <WakaComboCounter
            combo={100}
            multiplier={8}
            timeRemaining={90}
            intensity="extreme"
            showTimer
            showMultiplier
          />
        </div>
      ),
      code: `<WakaComboCounter
  combo={25}
  multiplier={3}
  timeRemaining={75}
  intensity="medium"
  showTimer
  showMultiplier
/>`,
    },
    {
      title: "Size Variants",
      description: "Different sizes for various contexts",
      preview: (
        <div className="flex flex-wrap gap-6 items-end">
          <WakaComboCounter combo={10} size="sm" />
          <WakaComboCounter combo={25} size="md" />
          <WakaComboCounter combo={50} size="lg" />
        </div>
      ),
      code: `<WakaComboCounter combo={25} size="md" />`,
    },
  ],
}

export const levelProgressShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Level Progress",
      description: "Display XP progress towards the next level",
      preview: (
        <WakaLevelProgress
          currentXp={2500}
          currentLevel={7}
          xpForNextLevel={4000}
          xpAtCurrentLevel={2000}
          showXpNumbers
          theme="gold"
        />
      ),
      code: `<WakaLevelProgress
  currentXp={2500}
  currentLevel={7}
  xpForNextLevel={4000}
  xpAtCurrentLevel={2000}
  showXpNumbers
  theme="gold"
/>`,
    },
    {
      title: "Theme Variants",
      description: "Different color themes for various game styles",
      preview: (
        <div className="space-y-6">
          <WakaLevelProgress currentXp={750} currentLevel={3} xpForNextLevel={1000} theme="default" showXpNumbers />
          <WakaLevelProgress currentXp={600} currentLevel={5} xpForNextLevel={1000} theme="purple" showXpNumbers />
          <WakaLevelProgress currentXp={800} currentLevel={10} xpForNextLevel={1500} theme="green" showXpNumbers />
        </div>
      ),
      code: `<WakaLevelProgress
  currentXp={750}
  currentLevel={3}
  xpForNextLevel={1000}
  theme="purple"
  showXpNumbers
/>`,
    },
  ],
}

export const leaderboardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Leaderboard",
      description: "Display player rankings with podium and scores",
      preview: (
        <WakaLeaderboard
          entries={[
            { id: "1", name: "NinjaMaster", score: 15250, rank: 1 },
            { id: "2", name: "ShadowFox", score: 14800, rank: 2 },
            { id: "3", name: "CyberWolf", score: 13500, rank: 3 },
            { id: "4", name: "BlazingPhoenix", score: 12900, rank: 4, previousRank: 6 },
            { id: "5", name: "IceQueen", score: 12100, rank: 5 },
            { id: "current", name: "You", score: 8500, rank: 12, isCurrentUser: true },
          ]}
          title="Weekly Rankings"
          showPodium
          showRankChange
          scoreLabel="pts"
        />
      ),
      code: `<WakaLeaderboard
  entries={[
    { id: "1", name: "NinjaMaster", score: 15250, rank: 1 },
    { id: "2", name: "ShadowFox", score: 14800, rank: 2 },
    { id: "3", name: "CyberWolf", score: 13500, rank: 3 },
    { id: "4", name: "BlazingPhoenix", score: 12900, rank: 4 },
    { id: "current", name: "You", score: 8500, rank: 12, isCurrentUser: true },
  ]}
  title="Weekly Rankings"
  showPodium
  showRankChange
  scoreLabel="pts"
/>`,
    },
  ],
}

export const milestoneRoadShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Milestone Road",
      description: "Visual journey map showing progress through milestones",
      preview: (
        <div style={{ height: 500 }}>
          <WakaMilestoneRoad
            milestones={[
              { id: "m1", name: "Start", completed: true, rewards: [{ type: "xp", value: 100 }] },
              { id: "m2", name: "First Win", completed: true, rewards: [{ type: "badge", value: "Winner" }] },
              { id: "m3", name: "10 Streak", completed: false, isCurrent: true, rewards: [{ type: "xp", value: 500 }] },
              { id: "m4", name: "Champion", completed: false, rewards: [{ type: "item", value: "Gold Trophy" }] },
              { id: "m5", name: "Legend", completed: false, rewards: [{ type: "xp", value: 2000 }] },
            ]}
            progress={45}
            theme="gold"
            variant="winding"
            showCharacter
            showProgressLabel
          />
        </div>
      ),
      code: `<WakaMilestoneRoad
  milestones={[
    { id: "m1", name: "Start", completed: true, rewards: [{ type: "xp", value: 100 }] },
    { id: "m2", name: "First Win", completed: true },
    { id: "m3", name: "10 Streak", completed: false, isCurrent: true },
    { id: "m4", name: "Champion", completed: false },
  ]}
  progress={45}
  theme="gold"
  variant="winding"
  showCharacter
/>`,
    },
  ],
}

export const streakCounterShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Streak Counter",
      description: "Track consecutive day streaks with fire animations",
      preview: (
        <div className="flex flex-wrap gap-6">
          <WakaStreakCounter
            count={7}
            label="day streak"
            variant="flame"
            bestStreak={14}
            milestones={[7, 30, 100, 365]}
          />
          <WakaStreakCounter
            count={30}
            label="day streak"
            variant="flame"
            bestStreak={30}
            milestones={[7, 30, 100, 365]}
          />
        </div>
      ),
      code: `<WakaStreakCounter
  count={7}
  label="day streak"
  variant="flame"
  bestStreak={14}
  milestones={[7, 30, 100, 365]}
/>`,
    },
    {
      title: "Variant Icons",
      description: "Different visual styles for various streak types",
      preview: (
        <div className="flex flex-wrap gap-4">
          <WakaStreakCounter count={12} variant="flame" size="sm" />
          <WakaStreakCounter count={25} variant="lightning" size="sm" />
          <WakaStreakCounter count={50} variant="trophy" size="sm" />
          <WakaStreakCounter count={100} variant="star" size="sm" />
        </div>
      ),
      code: `<WakaStreakCounter count={25} variant="lightning" />`,
    },
  ],
}

export const questCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Quest Card",
      description: "Display quest details with objectives and rewards",
      preview: (
        <div className="max-w-md">
          <WakaQuestCard
            quest={{
              id: "daily-1",
              title: "Daily Champion",
              description: "Complete these objectives to earn bonus rewards today!",
              type: "daily",
              difficulty: "medium",
              progress: 66,
              status: "in_progress",
              objectives: [
                { id: "obj1", text: "Win 3 matches", completed: true, current: 3, target: 3 },
                { id: "obj2", text: "Score 1000 points", completed: true, current: 1000, target: 1000 },
                { id: "obj3", text: "Complete a challenge", completed: false, current: 0, target: 1 },
              ],
              rewards: [
                { type: "xp", value: 500 },
                { type: "currency", value: 100 },
              ],
              expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000),
            }}
          />
        </div>
      ),
      code: `<WakaQuestCard
  quest={{
    id: "daily-1",
    title: "Daily Champion",
    description: "Complete these objectives!",
    type: "daily",
    difficulty: "medium",
    progress: 66,
    status: "in_progress",
    objectives: [
      { id: "obj1", text: "Win 3 matches", completed: true },
      { id: "obj2", text: "Score 1000 points", completed: false },
    ],
    rewards: [
      { type: "xp", value: 500 },
      { type: "currency", value: 100 },
    ],
  }}
/>`,
    },
    {
      title: "Quest Types",
      description: "Different quest types for various gameplay loops",
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WakaQuestCard
            quest={{
              id: "story-1",
              title: "The Beginning",
              description: "Start your adventure",
              type: "story",
              difficulty: "easy",
              progress: 100,
              status: "completed",
              objectives: [{ id: "obj1", text: "Create your character", completed: true }],
              rewards: [{ type: "xp", value: 200 }],
            }}
            variant="compact"
          />
          <WakaQuestCard
            quest={{
              id: "challenge-1",
              title: "Speed Demon",
              description: "Complete in record time",
              type: "challenge",
              difficulty: "hard",
              progress: 50,
              status: "in_progress",
              objectives: [{ id: "obj1", text: "Finish in under 2 minutes", completed: false }],
              rewards: [{ type: "badge", value: "Speedster" }],
            }}
            variant="compact"
          />
        </div>
      ),
      code: `<WakaQuestCard
  quest={{
    id: "story-1",
    title: "The Beginning",
    type: "story",
    difficulty: "easy",
    status: "completed",
    progress: 100,
    objectives: [{ id: "obj1", text: "Create your character", completed: true }],
    rewards: [{ type: "xp", value: 200 }],
  }}
  variant="compact"
/>`,
    },
  ],
}

export const scratchCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Scratch Card",
      description: "Interactive scratch-to-reveal prize card",
      preview: (
        <div className="flex justify-center">
          <WakaScratchCard
            prize={{
              id: "prize-1",
              name: "Golden Reward",
              description: "You won an exclusive item!",
              rarity: "legendary",
              value: "1000 Coins",
            }}
            width={300}
            height={200}
            revealThreshold={0.5}
            showProgress
          />
        </div>
      ),
      code: `<WakaScratchCard
  prize={{
    id: "prize-1",
    name: "Golden Reward",
    description: "You won an exclusive item!",
    rarity: "legendary",
    value: "1000 Coins",
  }}
  width={300}
  height={200}
  revealThreshold={0.5}
  showProgress
/>`,
    },
    {
      title: "Rarity Styles",
      description: "Different prize rarities with unique visual effects",
      preview: (
        <div className="flex flex-wrap gap-4 justify-center">
          <WakaScratchCard
            prize={{ id: "p1", name: "Basic Reward", rarity: "common", value: "50 Coins" }}
            width={200}
            height={150}
          />
          <WakaScratchCard
            prize={{ id: "p2", name: "Rare Find", rarity: "rare", value: "250 Coins" }}
            width={200}
            height={150}
          />
          <WakaScratchCard
            prize={{ id: "p3", name: "Epic Loot", rarity: "epic", value: "500 Coins" }}
            width={200}
            height={150}
          />
        </div>
      ),
      code: `<WakaScratchCard
  prize={{
    id: "p2",
    name: "Rare Find",
    rarity: "rare",
    value: "250 Coins",
  }}
  width={200}
  height={150}
/>`,
    },
  ],
}

export const versusCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Versus Card",
      description: "Head-to-head competition display with live updates",
      preview: (
        <WakaVersusCard
          competitorLeft={{
            id: "player1",
            name: "DragonSlayer",
            score: 2850,
            winStreak: 5,
          }}
          competitorRight={{
            id: "player2",
            name: "StormBringer",
            score: 2720,
            isCurrentUser: true,
          }}
          challenge={{
            type: "score",
            name: "Weekly Showdown",
            description: "First to 3000 points wins!",
            targetScore: 3000,
            rewards: [
              { type: "xp", value: 500 },
              { type: "badge", value: "Champion" },
            ],
          }}
          status="live"
          showLivePulse
        />
      ),
      code: `<WakaVersusCard
  competitorLeft={{
    id: "player1",
    name: "DragonSlayer",
    score: 2850,
    winStreak: 5,
  }}
  competitorRight={{
    id: "player2",
    name: "StormBringer",
    score: 2720,
    isCurrentUser: true,
  }}
  challenge={{
    type: "score",
    name: "Weekly Showdown",
    targetScore: 3000,
    rewards: [{ type: "xp", value: 500 }],
  }}
  status="live"
/>`,
    },
    {
      title: "Challenge Types",
      description: "Different competition formats",
      preview: (
        <div className="space-y-4">
          <WakaVersusCard
            competitorLeft={{ id: "p1", name: "SpeedRunner", score: 145 }}
            competitorRight={{ id: "p2", name: "TimeKeeper", score: 132 }}
            challenge={{
              type: "time",
              name: "Time Trial",
              rewards: [{ type: "xp", value: 300 }],
            }}
            status="finished"
            winnerId="p1"
            size="sm"
          />
          <WakaVersusCard
            competitorLeft={{ id: "p3", name: "FireStarter", score: 15 }}
            competitorRight={{ id: "p4", name: "IceBreaker", score: 12 }}
            challenge={{
              type: "streak",
              name: "Streak Battle",
              rewards: [{ type: "currency", value: 200 }],
            }}
            status="live"
            size="sm"
          />
        </div>
      ),
      code: `<WakaVersusCard
  competitorLeft={{ id: "p1", name: "SpeedRunner", score: 145 }}
  competitorRight={{ id: "p2", name: "TimeKeeper", score: 132 }}
  challenge={{
    type: "time",
    name: "Time Trial",
    rewards: [{ type: "xp", value: 300 }],
  }}
  status="finished"
  winnerId="p1"
/>`,
    },
  ],
}

export const xpBarShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "XP Bar",
      description: "Animated experience points progress bar with particles",
      preview: (
        <WakaXPBar
          currentXP={750}
          requiredXP={1000}
          level={12}
          showLevel
          showXPCount
          showParticles
          animated
          size="md"
        />
      ),
      code: `<WakaXPBar
  currentXP={750}
  requiredXP={1000}
  level={12}
  showLevel
  showXPCount
  showParticles
  animated
/>`,
    },
    {
      title: "Size Variants",
      description: "Different sizes for various UI contexts",
      preview: (
        <div className="space-y-6">
          <WakaXPBar currentXP={300} requiredXP={500} level={5} size="sm" showXPCount />
          <WakaXPBar currentXP={750} requiredXP={1000} level={12} size="md" showXPCount />
          <WakaXPBar currentXP={4500} requiredXP={5000} level={25} size="lg" showXPCount />
        </div>
      ),
      code: `<WakaXPBar
  currentXP={750}
  requiredXP={1000}
  level={12}
  size="md"
  showXPCount
/>`,
    },
    {
      title: "Level Colors",
      description: "Colors change based on level tiers",
      preview: (
        <div className="space-y-4">
          <WakaXPBar currentXP={800} requiredXP={1000} level={3} size="sm" showLevel showXPCount />
          <WakaXPBar currentXP={800} requiredXP={1000} level={15} size="sm" showLevel showXPCount />
          <WakaXPBar currentXP={800} requiredXP={1000} level={35} size="sm" showLevel showXPCount />
          <WakaXPBar currentXP={800} requiredXP={1000} level={75} size="sm" showLevel showXPCount />
        </div>
      ),
      code: `<WakaXPBar
  currentXP={800}
  requiredXP={1000}
  level={35}
  showLevel
  showXPCount
  levelColors={{
    1: "#3b82f6",
    10: "#8b5cf6",
    30: "#ef4444",
    50: "#ec4899",
  }}
/>`,
    },
  ],
}

// ============================================
// 3D PIE CHART SHOWCASE
// ============================================
export const threeDPieChartShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Graphique 3D basique",
      description: "Graphique circulaire 3D avec donnees de revenus",
      preview: (
        <Waka3DPieChart
          data={[
            { id: "product", label: "Produits", value: 45000, color: "#3b82f6" },
            { id: "services", label: "Services", value: 32000, color: "#22c55e" },
            { id: "subscriptions", label: "Abonnements", value: 28000, color: "#f59e0b" },
            { id: "consulting", label: "Conseil", value: 18000, color: "#8b5cf6" },
          ]}
          size={280}
          depth={25}
          showLegend={true}
          legendPosition="right"
          showPercentages={true}
        />
      ),
      code: `<Waka3DPieChart data={[{ id: "product", label: "Produits", value: 45000 }, ...]} size={280} depth={25} showLegend={true} />`,
    },
  ],
}

// ============================================
// RADAR SCORE SHOWCASE
// ============================================
export const radarScoreShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Score radar",
      description: "Visualisation des competences",
      preview: (
        <WakaRadarScore
          axes={["JavaScript", "TypeScript", "React", "Node.js", "CSS", "Testing"]}
          datasets={[{ id: "skills", label: "Competences", data: [85, 90, 88, 75, 70, 65], color: "#3b82f6", fillOpacity: 0.3 }]}
          size={300}
          levels={5}
          maxValue={100}
          showPoints={true}
          animated={true}
        />
      ),
      code: `<WakaRadarScore axes={["JavaScript", ...]} datasets={[{ id: "skills", data: [85, 90, 88, 75, 70, 65], color: "#3b82f6" }]} size={300} />`,
    },
  ],
}

// ============================================
// RESOURCE GAUGE SHOWCASE
// ============================================
export const resourceGaugeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Jauges de ressources",
      description: "Monitoring des ressources serveur",
      preview: (
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <WakaResourceGauge value={72} max={100} label="CPU" unit="%" size="md" thresholds={{ warning: 70, danger: 85 }} animated={true} glowOnDanger={true} />
          <WakaResourceGauge value={12.4} max={16} label="RAM" unit="GB" size="md" thresholds={{ warning: 70, danger: 85 }} animated={true} />
        </div>
      ),
      code: `<WakaResourceGauge value={72} max={100} label="CPU" unit="%" thresholds={{ warning: 70, danger: 85 }} />`,
    },
  ],
}

// ============================================
// STATUS MATRIX SHOWCASE
// ============================================
export const statusMatrixShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Matrice de contribution",
      description: "Style GitHub - historique des contributions",
      preview: (() => {
        const data = Array.from({ length: 90 }, (_, i) => { const date = new Date(); date.setDate(date.getDate() - (89 - i)); return { date, value: Math.random() > 0.3 ? Math.floor(Math.random() * 10) : 0 } })
        return <WakaStatusMatrix data={data} view="quarter" colorScheme="green" cellSize="sm" showLabels={true} showLegend={true} />
      })(),
      code: `<WakaStatusMatrix data={contributions} view="year" colorScheme="green" cellSize="sm" showLabels={true} showLegend={true} />`,
    },
  ],
}

// ============================================
// CONTRIBUTION GRAPH SHOWCASE
// ============================================
export const contributionGraphShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Graphique de contribution",
      description: "Activite de code sur l'annee",
      preview: (() => {
        const contributions = Array.from({ length: 120 }, (_, i) => { const date = new Date(); date.setDate(date.getDate() - (119 - i)); return { date, count: Math.random() > 0.25 ? Math.floor(Math.random() * 12) + 1 : 0 } })
        return <WakaContributionGraph contributions={contributions} colorScheme="green" showStreak={true} showWeekdayLabels={true} showMonthLabels={true} showLegend={true} cellSize={10} />
      })(),
      code: `<WakaContributionGraph contributions={data} colorScheme="green" showStreak={true} showWeekdayLabels={true} showLegend={true} />`,
    },
  ],
}

// ============================================
// COST BREAKDOWN SHOWCASE
// ============================================
export const costBreakdownShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Ventilation des couts",
      description: "Repartition hierarchique des depenses",
      preview: (
        <WakaCostBreakdown
          data={[
            { id: "compute", name: "Compute", value: 12500, change: 5.2, children: [{ id: "ec2", name: "EC2", value: 8000 }, { id: "lambda", name: "Lambda", value: 4500 }] },
            { id: "storage", name: "Stockage", value: 5200, change: -1.8 },
            { id: "database", name: "Database", value: 4800, change: 8.5 },
          ]}
          variant="treemap"
          currency="$"
          showLegend={true}
          showComparison={true}
          animated={true}
        />
      ),
      code: `<WakaCostBreakdown data={[{ id: "compute", name: "Compute", value: 12500, children: [...] }]} variant="treemap" currency="$" showLegend={true} />`,
    },
  ],
}

// ============================================
// BUDGET BURN SHOWCASE
// ============================================
export const budgetBurnShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Suivi de budget",
      description: "Visualisation du burn-down budgetaire",
      preview: (() => {
        const startDate = new Date(); startDate.setDate(1)
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0)
        const spendHistory = Array.from({ length: Math.min(new Date().getDate(), 15) }, (_, i) => { const date = new Date(startDate); date.setDate(date.getDate() + i); return { date, amount: 1500 + Math.random() * 500 } })
        return <WakaBudgetBurn budget={50000} startDate={startDate} endDate={endDate} spendHistory={spendHistory} categories={[{ id: "infra", name: "Infrastructure", budget: 20000, spent: 12500, color: "#3b82f6" }, { id: "services", name: "Services", budget: 15000, spent: 8800, color: "#22c55e" }]} currency="$" showProjection={true} showIdealLine={true} showCategories={true} showTrends={true} animated={true} height={280} />
      })(),
      code: `<WakaBudgetBurn budget={50000} startDate={startDate} endDate={endDate} spendHistory={history} categories={categories} showProjection={true} showIdealLine={true} />`,
    },
  ],
}

// ============================================
// METRIC SPARKLINE SHOWCASE
// ============================================
export const metricSparklineShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Sparklines avec tendance",
      description: "Mini-graphiques pour KPIs",
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <span className="text-sm text-muted-foreground">Revenus</span>
            <WakaMetricSparkline data={[12000, 14500, 13200, 15800, 17200, 16500, 18900, 21000]} value={21000} previousValue={18900} variant="area" width={100} height={28} showValue={true} showTrend={true} formatValue={(v) => `$${(v / 1000).toFixed(1)}k`} />
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <span className="text-sm text-muted-foreground">Utilisateurs</span>
            <WakaMetricSparkline data={[1200, 1350, 1280, 1420, 1380, 1510, 1620, 1750]} value={1750} previousValue={1620} variant="line" width={100} height={28} color="#22c55e" showValue={true} showTrend={true} />
          </div>
        </div>
      ),
      code: `<WakaMetricSparkline data={[12000, 14500, ...]} value={21000} previousValue={18900} variant="area" showValue={true} showTrend={true} />`,
    },
  ],
}

// ============================================
// RESOURCE POOL SHOWCASE
// ============================================
export const resourcePoolShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Pools de ressources avec blocs",
      description: "Visualisation des ressources infrastructure sous forme de blocs",
      preview: (
        <WakaResourcePool
          pools={[
            { id: "cpu", name: "CPU Cluster", total: 100, used: 72, reserved: 10, type: "compute", unit: "vCPUs" },
            { id: "memory", name: "Memory Pool", total: 256, used: 180, reserved: 32, type: "memory", unit: "GB" },
            { id: "storage", name: "SSD Storage", total: 2000, used: 1400, reserved: 200, type: "storage", unit: "GB" },
          ]}
          variant="blocks"
          showLabels={true}
          showCapacity={true}
          animated={true}
        />
      ),
      code: `<WakaResourcePool
  pools={[
    { id: "cpu", name: "CPU Cluster", total: 100, used: 72, reserved: 10, type: "compute", unit: "vCPUs" },
    { id: "memory", name: "Memory Pool", total: 256, used: 180, reserved: 32, type: "memory", unit: "GB" },
    { id: "storage", name: "SSD Storage", total: 2000, used: 1400, reserved: 200, type: "storage", unit: "GB" },
  ]}
  variant="blocks"
  showLabels={true}
  showCapacity={true}
  animated={true}
/>`,
    },
    {
      title: "Visualisation en barres",
      description: "Affichage des pools avec barres de progression",
      preview: (
        <WakaResourcePool
          pools={[
            { id: "network", name: "Network Bandwidth", total: 10000, used: 6500, type: "network", unit: "Mbps" },
            { id: "gpu", name: "GPU Compute", total: 8, used: 5, reserved: 1, type: "compute", unit: "GPUs" },
          ]}
          variant="bar"
          showLabels={true}
          showCapacity={true}
        />
      ),
      code: `<WakaResourcePool
  pools={[
    { id: "network", name: "Network Bandwidth", total: 10000, used: 6500, type: "network", unit: "Mbps" },
    { id: "gpu", name: "GPU Compute", total: 8, used: 5, reserved: 1, type: "compute", unit: "GPUs" },
  ]}
  variant="bar"
/>`,
    },
  ],
}

// ============================================
// QUOTA BAR SHOWCASE
// ============================================
export const quotaBarShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Quotas avec limites souples et dures",
      description: "Barres de quota montrant l'utilisation par rapport aux seuils",
      preview: (
        <div className="space-y-6">
          <WakaQuotaBar
            current={7500}
            softLimit={8000}
            hardLimit={10000}
            label="API Requests"
            unit="requests"
            showLabels={true}
            showMarkers={true}
            variant="detailed"
          />
          <WakaQuotaBar
            current={450}
            softLimit={400}
            hardLimit={500}
            label="Storage Usage"
            unit="GB"
            showLabels={true}
            showMarkers={true}
            variant="simple"
          />
          <WakaQuotaBar
            current={520}
            hardLimit={500}
            label="Bandwidth (Over Limit)"
            unit="TB"
            showLabels={true}
          />
        </div>
      ),
      code: `<WakaQuotaBar
  current={7500}
  softLimit={8000}
  hardLimit={10000}
  label="API Requests"
  unit="requests"
  variant="detailed"
  showLabels={true}
  showMarkers={true}
/>`,
    },
  ],
}

// ============================================
// CAPACITY PLANNER SHOWCASE
// ============================================
export const capacityPlannerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Planification de capacite avec projections",
      description: "Vue d'ensemble des ressources avec timeline et recommandations",
      preview: (
        <WakaCapacityPlanner
          resources={[
            {
              id: "cpu",
              name: "CPU Compute",
              type: "cpu",
              current: 68,
              total: 100,
              unit: "vCPUs",
              projections: { "1m": 72, "3m": 80, "6m": 92, "12m": 110 },
              growthRate: 4,
            },
            {
              id: "memory",
              name: "Memory",
              type: "memory",
              current: 180,
              total: 256,
              unit: "GB",
              projections: { "1m": 190, "3m": 210, "6m": 235, "12m": 280 },
              growthRate: 5,
            },
            {
              id: "storage",
              name: "Block Storage",
              type: "storage",
              current: 1800,
              total: 2000,
              unit: "GB",
              projections: { "1m": 1850, "3m": 1950, "6m": 2100, "12m": 2400 },
              growthRate: 3,
            },
          ]}
          recommendations={[
            {
              id: "rec-1",
              resourceId: "storage",
              type: "scale_up",
              priority: "high",
              title: "Expand Storage Capacity",
              description: "Storage projected to exceed capacity in 3 months",
              action: "Add 500GB",
              timeframe: "2-3 months",
              costImpact: "+$50/month",
            },
            {
              id: "rec-2",
              resourceId: "memory",
              type: "monitor",
              priority: "medium",
              title: "Monitor Memory Growth",
              description: "Memory usage approaching warning threshold",
              action: "Review",
              timeframe: "6 months",
            },
          ]}
          showTimeline={true}
          showProjectionChart={true}
          showRecommendations={true}
          size="md"
        />
      ),
      code: `<WakaCapacityPlanner
  resources={[
    { id: "cpu", name: "CPU Compute", type: "cpu", current: 68, total: 100, unit: "vCPUs", projections: { "1m": 72, "3m": 80, "6m": 92 }, growthRate: 4 },
    { id: "memory", name: "Memory", type: "memory", current: 180, total: 256, unit: "GB", projections: { "1m": 190, "3m": 210, "6m": 235 }, growthRate: 5 },
  ]}
  recommendations={[...]}
  showTimeline={true}
  showProjectionChart={true}
  showRecommendations={true}
/>`,
    },
  ],
}

// ============================================
// ALLOCATION MATRIX SHOWCASE
// ============================================
export const allocationMatrixShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Matrice d'allocation des ressources",
      description: "Visualisation des allocations entre ressources et projets",
      preview: (
        <WakaAllocationMatrix
          resources={[
            { id: "dev-team", name: "Dev Team", category: "Engineering" },
            { id: "qa-team", name: "QA Team", category: "Engineering" },
            { id: "infra", name: "Infrastructure", category: "Platform" },
            { id: "security", name: "Security", category: "Platform" },
          ]}
          consumers={[
            { id: "project-alpha", name: "Alpha", priority: "high" },
            { id: "project-beta", name: "Beta", priority: "medium" },
            { id: "project-gamma", name: "Gamma", priority: "low" },
            { id: "maintenance", name: "Maintenance", priority: "critical" },
          ]}
          allocations={[
            { resourceId: "dev-team", consumerId: "project-alpha", value: 40 },
            { resourceId: "dev-team", consumerId: "project-beta", value: 35 },
            { resourceId: "dev-team", consumerId: "project-gamma", value: 15 },
            { resourceId: "dev-team", consumerId: "maintenance", value: 10 },
            { resourceId: "qa-team", consumerId: "project-alpha", value: 50 },
            { resourceId: "qa-team", consumerId: "project-beta", value: 30 },
            { resourceId: "qa-team", consumerId: "project-gamma", value: 20 },
            { resourceId: "infra", consumerId: "project-alpha", value: 25 },
            { resourceId: "infra", consumerId: "project-beta", value: 25 },
            { resourceId: "infra", consumerId: "maintenance", value: 50 },
            { resourceId: "security", consumerId: "project-alpha", value: 30 },
            { resourceId: "security", consumerId: "maintenance", value: 40 },
          ]}
          editable={true}
          showRowTotals={true}
          showColumnTotals={true}
          showSummary={true}
          cellSize="md"
          colorScheme="blue"
        />
      ),
      code: `<WakaAllocationMatrix
  resources={[
    { id: "dev-team", name: "Dev Team", category: "Engineering" },
    { id: "qa-team", name: "QA Team", category: "Engineering" },
    ...
  ]}
  consumers={[
    { id: "project-alpha", name: "Alpha", priority: "high" },
    { id: "project-beta", name: "Beta", priority: "medium" },
    ...
  ]}
  allocations={[
    { resourceId: "dev-team", consumerId: "project-alpha", value: 40 },
    ...
  ]}
  editable={true}
  showRowTotals={true}
  showColumnTotals={true}
/>`,
    },
  ],
}

// ============================================
// DEPLOYMENT LANE SHOWCASE
// ============================================
export const deploymentLaneShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Pipeline de deploiement",
      description: "Visualisation des deploiements par environnement avec promotion",
      preview: (
        <WakaDeploymentLane
          environments={[
            {
              id: "dev",
              name: "Development",
              deployments: [
                { id: "dep-1", version: "2.4.1", commit: "a1b2c3d", status: "running", deployedAt: new Date(Date.now() - 3600000), deployedBy: "CI Pipeline" },
                { id: "dep-2", version: "2.4.0", commit: "e4f5g6h", status: "stopped", deployedAt: new Date(Date.now() - 86400000), deployedBy: "john.dev" },
              ],
            },
            {
              id: "staging",
              name: "Staging",
              requiresApproval: false,
              deployments: [
                { id: "dep-3", version: "2.3.5", commit: "i7j8k9l", status: "running", deployedAt: new Date(Date.now() - 7200000), deployedBy: "CI Pipeline" },
              ],
            },
            {
              id: "prod",
              name: "Production",
              requiresApproval: true,
              approvers: ["Tech Lead", "SRE Team"],
              deployments: [
                { id: "dep-4", version: "2.3.4", commit: "m0n1o2p", status: "running", deployedAt: new Date(Date.now() - 172800000), deployedBy: "release-bot" },
              ],
            },
          ]}
          draggable={true}
          onPromote={(deploymentId, fromEnv, toEnv) => console.log(`Promote ${deploymentId} from ${fromEnv} to ${toEnv}`)}
          onRollback={(deploymentId, envId) => console.log(`Rollback ${deploymentId} in ${envId}`)}
        />
      ),
      code: `<WakaDeploymentLane
  environments={[
    { id: "dev", name: "Development", deployments: [...] },
    { id: "staging", name: "Staging", deployments: [...] },
    { id: "prod", name: "Production", requiresApproval: true, approvers: ["Tech Lead"], deployments: [...] },
  ]}
  draggable={true}
  onPromote={(deploymentId, fromEnv, toEnv) => {...}}
  onRollback={(deploymentId, envId) => {...}}
/>`,
    },
  ],
}

// ============================================
// APPROVAL CHAIN SHOWCASE
// ============================================
export const approvalChainShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Chaine d'approbation horizontale",
      description: "Workflow d'approbation multi-niveaux",
      preview: (
        <WakaApprovalChain
          steps={[
            { id: "step-1", approver: { id: "user-1", name: "Sarah Chen", role: "Team Lead" }, status: "approved", timestamp: new Date(Date.now() - 86400000), comment: "LGTM, good to proceed" },
            { id: "step-2", approver: { id: "user-2", name: "Mike Johnson", role: "Security Officer" }, status: "approved", timestamp: new Date(Date.now() - 43200000) },
            { id: "step-3", approver: { id: "user-3", name: "Emily Davis", role: "VP Engineering" }, status: "pending" },
            { id: "step-4", approver: { id: "user-4", name: "Alex Thompson", role: "CTO" }, status: "pending" },
          ]}
          variant="horizontal"
          size="md"
          showComments={true}
          currentUserId="user-3"
          onApprove={(stepId, comment) => console.log(`Approved step ${stepId}`, comment)}
          onReject={(stepId, comment) => console.log(`Rejected step ${stepId}`, comment)}
        />
      ),
      code: `<WakaApprovalChain
  steps={[
    { id: "step-1", approver: { id: "user-1", name: "Sarah Chen", role: "Team Lead" }, status: "approved", timestamp: new Date(), comment: "LGTM" },
    { id: "step-2", approver: { id: "user-2", name: "Mike Johnson", role: "Security" }, status: "approved" },
    { id: "step-3", approver: { id: "user-3", name: "Emily Davis", role: "VP" }, status: "pending" },
  ]}
  variant="horizontal"
  showComments={true}
  onApprove={(stepId, comment) => {...}}
/>`,
    },
    {
      title: "Chaine d'approbation verticale",
      description: "Vue detaillee avec timeline verticale",
      preview: (
        <WakaApprovalChain
          steps={[
            { id: "v-step-1", approver: { id: "v-user-1", name: "DevOps Team", role: "Infrastructure Review" }, status: "approved", timestamp: new Date(Date.now() - 172800000), comment: "Infrastructure changes verified" },
            { id: "v-step-2", approver: { id: "v-user-2", name: "QA Lead", role: "Quality Assurance" }, status: "rejected", timestamp: new Date(Date.now() - 86400000), comment: "Tests failing on edge cases" },
            { id: "v-step-3", approver: { id: "v-user-3", name: "Product Owner", role: "Business Sign-off" }, status: "skipped" },
          ]}
          variant="vertical"
          size="md"
          showComments={true}
        />
      ),
      code: `<WakaApprovalChain
  steps={[...]}
  variant="vertical"
  showComments={true}
/>`,
    },
  ],
}

// ============================================
// CONNECTION MATRIX SHOWCASE
// ============================================
export const connectionMatrixShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Matrice de connexions des services",
      description: "Visualisation des dependances entre microservices",
      preview: (
        <WakaConnectionMatrix
          services={[
            { id: "api-gateway", name: "API Gateway", category: "Frontend" },
            { id: "auth-service", name: "Auth Service", category: "Core" },
            { id: "user-service", name: "User Service", category: "Core" },
            { id: "order-service", name: "Order Service", category: "Business" },
            { id: "payment-service", name: "Payment Service", category: "Business" },
            { id: "notification", name: "Notifications", category: "Support" },
          ]}
          connections={[
            { source: "api-gateway", target: "auth-service", weight: 95, type: "http", count: 15420, latency: 12, errorRate: 0.1 },
            { source: "api-gateway", target: "user-service", weight: 80, type: "http", count: 12300, latency: 18, errorRate: 0.2 },
            { source: "api-gateway", target: "order-service", weight: 70, type: "http", count: 8540, latency: 25, errorRate: 0.3 },
            { source: "auth-service", target: "user-service", weight: 60, type: "grpc", count: 9200, latency: 5, errorRate: 0.05 },
            { source: "order-service", target: "payment-service", weight: 85, type: "grpc", count: 4200, latency: 45, errorRate: 0.8 },
            { source: "order-service", target: "notification", weight: 40, type: "queue", count: 4100, latency: 120, errorRate: 0.1 },
            { source: "payment-service", target: "notification", weight: 50, type: "queue", count: 2100, latency: 100, errorRate: 0.2 },
            { source: "user-service", target: "notification", weight: 30, type: "queue", count: 3500, latency: 80, errorRate: 0.1 },
          ]}
          title="Service Dependencies"
          showStatistics={true}
          showFilters={true}
          colorScheme="blue"
          cellSize="md"
          showCounts={false}
        />
      ),
      code: `<WakaConnectionMatrix
  services={[
    { id: "api-gateway", name: "API Gateway", category: "Frontend" },
    { id: "auth-service", name: "Auth Service", category: "Core" },
    ...
  ]}
  connections={[
    { source: "api-gateway", target: "auth-service", weight: 95, type: "http", count: 15420, latency: 12 },
    ...
  ]}
  title="Service Dependencies"
  showStatistics={true}
  colorScheme="blue"
/>`,
    },
  ],
}

// ============================================
// ALERT STACK SHOWCASE
// ============================================
export const alertStackShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Pile d'alertes infrastructure",
      description: "Alertes empilees avec priorite et actions",
      preview: (
        <WakaAlertStack
          alerts={[
            {
              id: "alert-1",
              title: "High CPU Usage on prod-web-01",
              description: "CPU utilization has exceeded 90% for the last 15 minutes. Consider scaling horizontally or investigating resource-intensive processes.",
              severity: "critical",
              source: "Prometheus",
              timestamp: new Date(Date.now() - 300000),
              count: 3,
            },
            {
              id: "alert-2",
              title: "Database Connection Pool Exhausted",
              description: "PostgreSQL connection pool at 95% capacity. New connections may be rejected.",
              severity: "warning",
              source: "PgBouncer",
              timestamp: new Date(Date.now() - 900000),
            },
            {
              id: "alert-3",
              title: "SSL Certificate Expiring Soon",
              description: "Certificate for api.example.com expires in 7 days",
              severity: "warning",
              source: "Cert Manager",
              timestamp: new Date(Date.now() - 3600000),
              acknowledged: true,
              acknowledgedBy: "ops-team",
            },
            {
              id: "alert-4",
              title: "New Deployment Completed",
              description: "Version 2.4.1 successfully deployed to production",
              severity: "info",
              source: "ArgoCD",
              timestamp: new Date(Date.now() - 7200000),
            },
          ]}
          maxVisible={3}
          groupSimilar={true}
          animated={true}
          onAcknowledge={(alertId) => console.log(`Acknowledged: ${alertId}`)}
          onSnooze={(alertId, duration) => console.log(`Snoozed ${alertId} for ${duration}ms`)}
          onDismiss={(alertId) => console.log(`Dismissed: ${alertId}`)}
        />
      ),
      code: `<WakaAlertStack
  alerts={[
    { id: "alert-1", title: "High CPU Usage", severity: "critical", source: "Prometheus", timestamp: new Date(), count: 3 },
    { id: "alert-2", title: "Connection Pool Exhausted", severity: "warning", source: "PgBouncer", timestamp: new Date() },
    ...
  ]}
  maxVisible={3}
  groupSimilar={true}
  onAcknowledge={(alertId) => {...}}
  onSnooze={(alertId, duration) => {...}}
  onDismiss={(alertId) => {...}}
/>`,
    },
  ],
}

// ============================================
// SLA TRACKER SHOWCASE
// ============================================
export const slaTrackerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Suivi SLA detaille",
      description: "Tableau de bord SLA avec budget d'erreur et tendances",
      preview: (
        <div className="space-y-6">
          <WakaSLATracker
            uptime={99.95}
            target={99.9}
            period="month"
            downtimeMinutes={21.6}
            incidentCount={2}
            trend="up"
            variant="detailed"
            size="md"
          />
        </div>
      ),
      code: `<WakaSLATracker
  uptime={99.95}
  target={99.9}
  period="month"
  downtimeMinutes={21.6}
  incidentCount={2}
  trend="up"
  variant="detailed"
/>`,
    },
    {
      title: "Variantes de SLA",
      description: "Differents formats d'affichage",
      preview: (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <WakaSLATracker
              uptime={99.99}
              target={99.9}
              period="week"
              variant="compact"
              size="md"
            />
            <WakaSLATracker
              uptime={99.85}
              target={99.9}
              period="month"
              variant="compact"
              size="md"
            />
          </div>
          <WakaSLATracker
            uptime={99.92}
            target={99.9}
            period="quarter"
            downtimeMinutes={115}
            incidentCount={5}
            trend="stable"
            variant="card"
            size="md"
          />
        </div>
      ),
      code: `// Compact variant
<WakaSLATracker uptime={99.99} target={99.9} period="week" variant="compact" />

// Card variant
<WakaSLATracker uptime={99.92} target={99.9} period="quarter" variant="card" />`,
    },
  ],
}

// ============================================
// GLOW CARD SHOWCASE
// ============================================
export const glowCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Glow Card basique",
      description: "Carte avec effet de lueur au survol qui suit le curseur",
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WakaGlowCard className="p-6">
            <h3 className="text-lg font-semibold mb-2">Effet Lift</h3>
            <p className="text-sm text-muted-foreground">
              La carte se souleve au survol avec une lueur qui suit le curseur.
            </p>
          </WakaGlowCard>
          <WakaGlowCard
            className="p-6"
            glowColor="hsl(142.1 76.2% 36.3%)"
            hoverEffect="scale"
          >
            <h3 className="text-lg font-semibold mb-2">Effet Scale</h3>
            <p className="text-sm text-muted-foreground">
              La carte s&apos;agrandit legerement au survol avec une lueur verte.
            </p>
          </WakaGlowCard>
        </div>
      ),
      code: `<WakaGlowCard className="p-6">
  <h3 className="text-lg font-semibold mb-2">Effet Lift</h3>
  <p className="text-sm text-muted-foreground">
    La carte se souleve au survol avec une lueur qui suit le curseur.
  </p>
</WakaGlowCard>

<WakaGlowCard
  className="p-6"
  glowColor="hsl(142.1 76.2% 36.3%)"
  hoverEffect="scale"
>
  <h3 className="text-lg font-semibold mb-2">Effet Scale</h3>
  <p className="text-sm text-muted-foreground">
    La carte s'agrandit legerement au survol avec une lueur verte.
  </p>
</WakaGlowCard>`,
    },
    {
      title: "Couleurs et intensites",
      description: "Differentes couleurs de lueur et niveaux d'intensite",
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <WakaGlowCard
            className="p-4"
            glowColor="#3b82f6"
            glowIntensity={0.3}
          >
            <h4 className="font-medium">Bleu intense</h4>
            <p className="text-xs text-muted-foreground mt-1">Intensite 0.3</p>
          </WakaGlowCard>
          <WakaGlowCard
            className="p-4"
            glowColor="#f59e0b"
            glowIntensity={0.2}
            gradient
          >
            <h4 className="font-medium">Orange gradient</h4>
            <p className="text-xs text-muted-foreground mt-1">Avec fond degrade</p>
          </WakaGlowCard>
          <WakaGlowCard
            className="p-4"
            glowColor="#ec4899"
            hoverEffect="tilt"
          >
            <h4 className="font-medium">Rose tilt</h4>
            <p className="text-xs text-muted-foreground mt-1">Effet 3D au survol</p>
          </WakaGlowCard>
        </div>
      ),
      code: `<WakaGlowCard
  className="p-4"
  glowColor="#3b82f6"
  glowIntensity={0.3}
>
  <h4 className="font-medium">Bleu intense</h4>
</WakaGlowCard>

<WakaGlowCard
  className="p-4"
  glowColor="#f59e0b"
  glowIntensity={0.2}
  gradient
>
  <h4 className="font-medium">Orange gradient</h4>
</WakaGlowCard>`,
    },
  ],
}

// ============================================
// TILT CARD SHOWCASE
// ============================================
export const tiltCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Tilt Card basique",
      description: "Carte avec effet de perspective 3D au survol",
      preview: (
        <div className="flex flex-wrap gap-6 justify-center">
          <WakaTiltCard maxTilt={15} className="w-64">
            <div className="p-6 rounded-xl border bg-card">
              <h3 className="text-lg font-semibold mb-2">Effet 3D</h3>
              <p className="text-sm text-muted-foreground">
                Deplacez votre curseur sur cette carte pour voir l&apos;effet de perspective 3D.
              </p>
            </div>
          </WakaTiltCard>
          <WakaTiltCard maxTilt={20} glare maxGlare={0.3} className="w-64">
            <div className="p-6 rounded-xl border bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <h3 className="text-lg font-semibold mb-2">Avec reflet</h3>
              <p className="text-sm text-muted-foreground">
                Effet de lumiere qui suit le curseur.
              </p>
            </div>
          </WakaTiltCard>
        </div>
      ),
      code: `<WakaTiltCard maxTilt={15}>
  <div className="p-6 rounded-xl border bg-card">
    <h3 className="text-lg font-semibold mb-2">Effet 3D</h3>
    <p className="text-sm text-muted-foreground">
      Deplacez votre curseur sur cette carte.
    </p>
  </div>
</WakaTiltCard>

<WakaTiltCard maxTilt={20} glare maxGlare={0.3}>
  <div className="p-6 rounded-xl border bg-gradient-to-br from-purple-500/10 to-pink-500/10">
    <h3 className="text-lg font-semibold mb-2">Avec reflet</h3>
  </div>
</WakaTiltCard>`,
    },
    {
      title: "Configuration avancee",
      description: "Differentes options de personnalisation",
      preview: (
        <div className="flex flex-wrap gap-4 justify-center">
          <WakaTiltCard
            maxTilt={25}
            scale={1.05}
            speed={200}
            className="w-48"
          >
            <div className="p-4 rounded-lg border bg-card text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <h4 className="font-medium">Rapide</h4>
              <p className="text-xs text-muted-foreground">200ms</p>
            </div>
          </WakaTiltCard>
          <WakaTiltCard
            maxTilt={10}
            reverse
            className="w-48"
          >
            <div className="p-4 rounded-lg border bg-card text-center">
              <RotateCcw className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <h4 className="font-medium">Inverse</h4>
              <p className="text-xs text-muted-foreground">Direction opposee</p>
            </div>
          </WakaTiltCard>
          <WakaTiltCard
            maxTilt={15}
            glare
            maxGlare={0.4}
            perspective={800}
            className="w-48"
          >
            <div className="p-4 rounded-lg border bg-card text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-amber-500" />
              <h4 className="font-medium">Premium</h4>
              <p className="text-xs text-muted-foreground">Reflet intense</p>
            </div>
          </WakaTiltCard>
        </div>
      ),
      code: `<WakaTiltCard
  maxTilt={25}
  scale={1.05}
  speed={200}
>
  <div className="p-4 rounded-lg border bg-card text-center">
    <Zap className="h-8 w-8 mx-auto mb-2" />
    <h4 className="font-medium">Rapide</h4>
  </div>
</WakaTiltCard>

<WakaTiltCard maxTilt={10} reverse>
  <div className="p-4 rounded-lg border bg-card text-center">
    <RotateCcw className="h-8 w-8 mx-auto mb-2" />
    <h4 className="font-medium">Inverse</h4>
  </div>
</WakaTiltCard>`,
    },
  ],
}

// ============================================
// MAGIC LINK SHOWCASE
// ============================================
export const magicLinkShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Magic Link basique",
      description: "Formulaire de connexion sans mot de passe par lien magique",
      preview: (
        <div className="max-w-md mx-auto">
          <WakaMagicLink
            onSubmit={async (email) => {
              await new Promise((resolve) => setTimeout(resolve, 1500))
              console.log("Magic link sent to:", email)
            }}
            placeholder="Entrez votre email"
            buttonText={{
              idle: "Envoyer le lien",
              loading: "Envoi...",
              sent: "Verifiez votre boite",
            }}
            successMessage="Nous avons envoye un lien magique a votre adresse email"
          />
        </div>
      ),
      code: `<WakaMagicLink
  onSubmit={async (email) => {
    await sendMagicLink(email)
  }}
  placeholder="Entrez votre email"
  buttonText={{
    idle: "Envoyer le lien",
    loading: "Envoi...",
    sent: "Verifiez votre boite",
  }}
  successMessage="Nous avons envoye un lien magique a votre adresse email"
/>`,
    },
    {
      title: "Variantes de style",
      description: "Differents styles visuels et tailles",
      preview: (
        <div className="space-y-6 max-w-md mx-auto">
          <div>
            <p className="text-sm font-medium mb-2">Style minimal</p>
            <WakaMagicLink
              onSubmit={async () => new Promise((r) => setTimeout(r, 1000))}
              variant="minimal"
              size="sm"
            />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Style gradient</p>
            <WakaMagicLink
              onSubmit={async () => new Promise((r) => setTimeout(r, 1000))}
              variant="gradient"
              size="lg"
            />
          </div>
        </div>
      ),
      code: `// Style minimal
<WakaMagicLink
  onSubmit={async (email) => sendMagicLink(email)}
  variant="minimal"
  size="sm"
/>

// Style gradient
<WakaMagicLink
  onSubmit={async (email) => sendMagicLink(email)}
  variant="gradient"
  size="lg"
/>`,
    },
  ],
}

// ============================================
// NOTIFICATIONS SHOWCASE
// ============================================
function NotificationsShowcaseDemo() {
  const sampleNotifications: Notification[] = [
    {
      id: "1",
      title: "Nouvelle commande",
      message: "Vous avez recu une nouvelle commande #12345",
      type: "success",
      read: false,
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
    },
    {
      id: "2",
      title: "Alerte de securite",
      message: "Une connexion suspecte a ete detectee sur votre compte",
      type: "warning",
      read: false,
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
    },
    {
      id: "3",
      title: "Mise a jour disponible",
      message: "Une nouvelle version de l'application est disponible",
      type: "info",
      read: true,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
    {
      id: "4",
      title: "Erreur de paiement",
      message: "Le paiement pour la facture #98765 a echoue",
      type: "error",
      read: false,
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
  ]

  const {
    notifications,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotifications(sampleNotifications)

  return (
    <div className="flex justify-center">
      <WakaNotifications
        notifications={notifications}
        onMarkAsRead={markAsRead}
        onMarkAllAsRead={markAllAsRead}
        onDelete={deleteNotification}
        showTabs
        showBadge
      />
    </div>
  )
}

export const notificationsShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Centre de notifications",
      description: "Popover de notifications avec onglets et actions",
      preview: <NotificationsShowcaseDemo />,
      code: `const {
  notifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
} = useNotifications(initialNotifications)

<WakaNotifications
  notifications={notifications}
  onMarkAsRead={markAsRead}
  onMarkAllAsRead={markAllAsRead}
  onDelete={deleteNotification}
  showTabs
  showBadge
/>`,
    },
    {
      title: "Types de notifications",
      description: "Differents types visuels pour les notifications",
      preview: (
        <div className="space-y-2 max-w-md mx-auto p-4 border rounded-lg">
          <div className="flex gap-3 p-3 rounded-lg border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-950/20">
            <Bell className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Info</p>
              <p className="text-xs text-muted-foreground">Notification informative</p>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-lg border-l-4 border-l-green-500 bg-green-50 dark:bg-green-950/20">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Succes</p>
              <p className="text-xs text-muted-foreground">Operation reussie</p>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-lg border-l-4 border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
            <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Avertissement</p>
              <p className="text-xs text-muted-foreground">Attention requise</p>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-lg border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950/20">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Erreur</p>
              <p className="text-xs text-muted-foreground">Action requise</p>
            </div>
          </div>
        </div>
      ),
      code: `// Types disponibles: "info" | "success" | "warning" | "error"
const notifications: Notification[] = [
  {
    id: "1",
    title: "Nouvelle commande",
    message: "Vous avez recu une nouvelle commande",
    type: "success",
    read: false,
    timestamp: new Date(),
  },
  {
    id: "2",
    title: "Alerte",
    message: "Attention requise",
    type: "warning",
    read: false,
    timestamp: new Date(),
  },
]`,
    },
  ],
}

// ============================================
// SIDEBAR SHOWCASE
// ============================================
export const sidebarShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Sidebar complete",
      description: "Sidebar avec logo, menu hierarchique et profil utilisateur",
      preview: (
        <div className="border rounded-lg overflow-hidden" style={{ height: 500 }}>
          <WakaSidebar
            position="relative"
            width={260}
            logo={{
              title: "WAKASTART",
            }}
            menu={[
              {
                id: "dashboard",
                label: "Tableau de bord",
                icon: <LayoutDashboard className="h-5 w-5" />,
                active: true,
              },
              {
                id: "analytics",
                label: "Analytics",
                icon: <BarChart className="h-5 w-5" />,
                badge: "New",
              },
              {
                id: "projects",
                label: "Projets",
                icon: <Folder className="h-5 w-5" />,
                children: [
                  { id: "project-list", label: "Liste des projets" },
                  { id: "project-create", label: "Nouveau projet" },
                  { id: "project-archive", label: "Archives" },
                ],
              },
              {
                id: "messages",
                label: "Messages",
                icon: <Inbox className="h-5 w-5" />,
                badge: 12,
              },
              {
                id: "settings",
                label: "Parametres",
                icon: <Settings className="h-5 w-5" />,
              },
            ]}
            user={{
              name: "Jean Dupont",
              email: "jean@wakastart.com",
              initials: "JD",
            }}
            showHamburger={false}
          />
        </div>
      ),
      code: `<WakaSidebar
  logo={{ title: "WAKASTART" }}
  menu={[
    {
      id: "dashboard",
      label: "Tableau de bord",
      icon: <LayoutDashboard className="h-5 w-5" />,
      active: true,
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: <BarChart className="h-5 w-5" />,
      badge: "New",
    },
    {
      id: "projects",
      label: "Projets",
      icon: <Folder className="h-5 w-5" />,
      children: [
        { id: "project-list", label: "Liste des projets" },
        { id: "project-create", label: "Nouveau projet" },
      ],
    },
  ]}
  user={{
    name: "Jean Dupont",
    email: "jean@wakastart.com",
    initials: "JD",
  }}
/>`,
    },
    {
      title: "Personnalisation des couleurs",
      description: "Sidebar avec theme de couleurs personnalise",
      preview: (
        <div className="border rounded-lg overflow-hidden" style={{ height: 400 }}>
          <WakaSidebar
            position="relative"
            width={240}
            backgroundColor="hsl(262 47% 15%)"
            activeColor="hsl(262 83% 58%)"
            textColor="hsl(262 20% 90%)"
            logo={{
              title: "PURPLE UI",
            }}
            menu={[
              {
                id: "home",
                label: "Accueil",
                icon: <Home className="h-5 w-5" />,
                active: true,
              },
              {
                id: "products",
                label: "Produits",
                icon: <Box className="h-5 w-5" />,
              },
              {
                id: "orders",
                label: "Commandes",
                icon: <ShoppingCart className="h-5 w-5" />,
                badge: 3,
              },
              {
                id: "users",
                label: "Utilisateurs",
                icon: <Users className="h-5 w-5" />,
              },
            ]}
            userPosition="top"
            user={{
              name: "Admin",
              email: "admin@purple.ui",
            }}
            showHamburger={false}
          />
        </div>
      ),
      code: `<WakaSidebar
  backgroundColor="hsl(262 47% 15%)"
  activeColor="hsl(262 83% 58%)"
  textColor="hsl(262 20% 90%)"
  logo={{ title: "PURPLE UI" }}
  menu={[
    { id: "home", label: "Accueil", icon: <Home />, active: true },
    { id: "products", label: "Produits", icon: <Box /> },
    { id: "orders", label: "Commandes", icon: <ShoppingCart />, badge: 3 },
    { id: "users", label: "Utilisateurs", icon: <Users /> },
  ]}
  userPosition="top"
  user={{
    name: "Admin",
    email: "admin@purple.ui",
  }}
/>`,
    },
  ],
}

// ============================================
// SERVER RACK SHOWCASE
// ============================================
export const serverRackShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Data Center Rack",
      description: "Interactive 3D server rack visualization with real-time metrics",
      preview: (() => {
        const servers = [
          { id: "srv-web-01", name: "Web Server 01", unit: 40, height: 2, status: "online" as const, cpu: 45, ram: 62, disk: 34, network: { in: 850, out: 420 } },
          { id: "srv-db-01", name: "Database Primary", unit: 37, height: 3, status: "online" as const, cpu: 78, ram: 85, disk: 67, network: { in: 1200, out: 980 } },
          { id: "srv-cache-01", name: "Redis Cache", unit: 35, height: 2, status: "warning" as const, cpu: 92, ram: 88, disk: 45, network: { in: 2100, out: 1850 } },
          { id: "srv-api-01", name: "API Gateway", unit: 33, height: 1, status: "online" as const, cpu: 34, ram: 41, disk: 22, network: { in: 3500, out: 3200 } },
          { id: "srv-worker-01", name: "Worker Node 01", unit: 31, height: 2, status: "online" as const, cpu: 56, ram: 67, disk: 41 },
          { id: "srv-worker-02", name: "Worker Node 02", unit: 29, height: 2, status: "offline" as const, cpu: 0, ram: 0, disk: 41 },
          { id: "srv-storage-01", name: "Storage Array", unit: 25, height: 4, status: "online" as const, cpu: 12, ram: 24, disk: 89, network: { in: 500, out: 4500 } },
          { id: "srv-backup-01", name: "Backup Server", unit: 22, height: 3, status: "maintenance" as const, cpu: 5, ram: 15, disk: 72 },
        ]
        return (
          <div className="p-4 bg-zinc-950 rounded-xl">
            <WakaServerRack
              servers={servers}
              totalUnits={42}
              showMetrics
              animated
            />
          </div>
        )
      })(),
      code: `const servers = [
  { id: "srv-web-01", name: "Web Server 01", unit: 40, height: 2, status: "online", cpu: 45, ram: 62, disk: 34, network: { in: 850, out: 420 } },
  { id: "srv-db-01", name: "Database Primary", unit: 37, height: 3, status: "online", cpu: 78, ram: 85, disk: 67 },
  { id: "srv-cache-01", name: "Redis Cache", unit: 35, height: 2, status: "warning", cpu: 92, ram: 88, disk: 45 },
  { id: "srv-worker-02", name: "Worker Node 02", unit: 29, height: 2, status: "offline", cpu: 0, ram: 0, disk: 41 },
]

<WakaServerRack
  servers={servers}
  totalUnits={42}
  showMetrics
  animated
/>`,
    },
    {
      title: "Compact Rack View",
      description: "Smaller rack configuration without metrics display",
      preview: (() => {
        const servers = [
          { id: "edge-01", name: "Edge Node 01", unit: 10, height: 1, status: "online" as const, cpu: 32, ram: 45, disk: 28 },
          { id: "edge-02", name: "Edge Node 02", unit: 9, height: 1, status: "online" as const, cpu: 28, ram: 42, disk: 25 },
          { id: "edge-03", name: "Edge Node 03", unit: 8, height: 1, status: "warning" as const, cpu: 85, ram: 78, disk: 62 },
          { id: "switch-01", name: "Network Switch", unit: 6, height: 2, status: "online" as const, cpu: 15, ram: 20, disk: 5 },
        ]
        return (
          <div className="p-4 bg-zinc-950 rounded-xl">
            <WakaServerRack
              servers={servers}
              totalUnits={12}
              showMetrics={false}
              animated
            />
          </div>
        )
      })(),
      code: `<WakaServerRack
  servers={edgeServers}
  totalUnits={12}
  showMetrics={false}
  animated
/>`,
    },
  ],
}

// ============================================
// NETWORK TOPOLOGY SHOWCASE
// ============================================
export const networkTopologyShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Network Topology Map",
      description: "Interactive network diagram with node status and traffic visualization",
      preview: (() => {
        const nodes = [
          { id: "internet", label: "Internet", type: "cloud" as const, status: "healthy" as const, x: 400, y: 50 },
          { id: "firewall", label: "Firewall", type: "firewall" as const, status: "healthy" as const, x: 400, y: 130, metrics: { cpu: 15, memory: 32 } },
          { id: "lb-01", label: "Load Balancer", type: "loadbalancer" as const, status: "healthy" as const, x: 400, y: 210, metrics: { connections: 1250 } },
          { id: "web-01", label: "Web Server 01", type: "server" as const, status: "healthy" as const, x: 250, y: 300, metrics: { cpu: 45, memory: 62 } },
          { id: "web-02", label: "Web Server 02", type: "server" as const, status: "warning" as const, x: 400, y: 300, metrics: { cpu: 88, memory: 75 } },
          { id: "web-03", label: "Web Server 03", type: "server" as const, status: "healthy" as const, x: 550, y: 300, metrics: { cpu: 52, memory: 48 } },
          { id: "db-primary", label: "DB Primary", type: "database" as const, status: "healthy" as const, x: 325, y: 400, metrics: { cpu: 65, memory: 80 } },
          { id: "db-replica", label: "DB Replica", type: "database" as const, status: "healthy" as const, x: 475, y: 400, metrics: { cpu: 35, memory: 60 } },
          { id: "cache", label: "Redis Cache", type: "server" as const, status: "healthy" as const, x: 250, y: 400, metrics: { memory: 45 } },
        ]
        const edges = [
          { source: "internet", target: "firewall", latency: 5, traffic: "high" as const, status: "active" as const },
          { source: "firewall", target: "lb-01", latency: 1, traffic: "high" as const, status: "active" as const },
          { source: "lb-01", target: "web-01", latency: 2, traffic: "medium" as const, status: "active" as const },
          { source: "lb-01", target: "web-02", latency: 2, traffic: "high" as const, status: "active" as const },
          { source: "lb-01", target: "web-03", latency: 2, traffic: "medium" as const, status: "active" as const },
          { source: "web-01", target: "db-primary", latency: 3, traffic: "medium" as const, status: "active" as const },
          { source: "web-02", target: "db-primary", latency: 3, traffic: "high" as const, status: "active" as const },
          { source: "web-03", target: "db-primary", latency: 3, traffic: "low" as const, status: "active" as const },
          { source: "db-primary", target: "db-replica", latency: 1, traffic: "medium" as const, status: "active" as const },
          { source: "web-01", target: "cache", latency: 1, traffic: "high" as const, status: "active" as const },
          { source: "web-02", target: "cache", latency: 1, traffic: "high" as const, status: "active" as const },
        ]
        return (
          <div className="h-[500px] w-full">
            <WakaNetworkTopology
              nodes={nodes}
              edges={edges}
              showLatency
              showTraffic
              animated
            />
          </div>
        )
      })(),
      code: `const nodes = [
  { id: "internet", label: "Internet", type: "cloud", status: "healthy", x: 400, y: 50 },
  { id: "firewall", label: "Firewall", type: "firewall", status: "healthy", x: 400, y: 130 },
  { id: "lb-01", label: "Load Balancer", type: "loadbalancer", status: "healthy", x: 400, y: 210 },
  { id: "web-01", label: "Web Server 01", type: "server", status: "healthy", x: 250, y: 300 },
  { id: "db-primary", label: "DB Primary", type: "database", status: "healthy", x: 325, y: 400 },
]

const edges = [
  { source: "internet", target: "firewall", latency: 5, traffic: "high", status: "active" },
  { source: "firewall", target: "lb-01", latency: 1, traffic: "high", status: "active" },
  { source: "lb-01", target: "web-01", latency: 2, traffic: "medium", status: "active" },
]

<WakaNetworkTopology
  nodes={nodes}
  edges={edges}
  showLatency
  showTraffic
  animated
/>`,
    },
  ],
}

// ============================================
// HEALTH PULSE SHOWCASE
// ============================================
export const healthPulseShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Service Health Monitor",
      description: "ECG-style health visualization with various status states",
      preview: (
        <div className="grid grid-cols-2 gap-4">
          <WakaHealthPulse
            status="healthy"
            label="API Gateway"
            value={99.9}
            unit="%"
            pulseRate={72}
            size="md"
            showValue
            animated
          />
          <WakaHealthPulse
            status="warning"
            label="Database"
            value={156}
            unit="ms"
            pulseRate={90}
            size="md"
            showValue
            animated
          />
          <WakaHealthPulse
            status="critical"
            label="Cache Server"
            value={2}
            unit="errors"
            pulseRate={120}
            size="md"
            showValue
            animated
          />
          <WakaHealthPulse
            status="down"
            label="Worker Node"
            pulseRate={0}
            size="md"
            animated
          />
        </div>
      ),
      code: `<WakaHealthPulse
  status="healthy"
  label="API Gateway"
  value={99.9}
  unit="%"
  pulseRate={72}
  size="md"
  showValue
  animated
/>

<WakaHealthPulse
  status="warning"
  label="Database"
  value={156}
  unit="ms"
  pulseRate={90}
  size="md"
  showValue
  animated
/>

<WakaHealthPulse
  status="critical"
  label="Cache Server"
  value={2}
  unit="errors"
  pulseRate={120}
  size="md"
  showValue
  animated
/>

<WakaHealthPulse
  status="down"
  label="Worker Node"
  pulseRate={0}
  size="md"
  animated
/>`,
    },
    {
      title: "Size Variants",
      description: "Different sizes for various dashboard layouts",
      preview: (
        <div className="space-y-4">
          <WakaHealthPulse status="healthy" label="Small" value={45} unit="req/s" size="sm" showValue animated />
          <WakaHealthPulse status="healthy" label="Medium" value={1250} unit="req/s" size="md" showValue animated />
          <WakaHealthPulse status="healthy" label="Large" value={8500} unit="req/s" size="lg" showValue animated />
        </div>
      ),
      code: `<WakaHealthPulse status="healthy" label="Small" size="sm" showValue animated />
<WakaHealthPulse status="healthy" label="Medium" size="md" showValue animated />
<WakaHealthPulse status="healthy" label="Large" size="lg" showValue animated />`,
    },
  ],
}

// ============================================
// TERMINAL OUTPUT SHOWCASE
// ============================================
export const terminalOutputShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Live Terminal Output",
      description: "Real-time log viewer with syntax highlighting and filtering",
      preview: (() => {
        const lines = [
          { content: "[2024-01-15 10:30:45] INFO Starting application server...", level: "info" as const, timestamp: new Date("2024-01-15T10:30:45") },
          { content: "[2024-01-15 10:30:46] INFO Connected to database at 192.168.1.100:5432", level: "info" as const, timestamp: new Date("2024-01-15T10:30:46") },
          { content: "[2024-01-15 10:30:47] DEBUG Loading configuration from /etc/app/config.yaml", level: "debug" as const, timestamp: new Date("2024-01-15T10:30:47") },
          { content: "[2024-01-15 10:30:48] INFO HTTP server listening on port 8080", level: "info" as const, timestamp: new Date("2024-01-15T10:30:48") },
          { content: "[2024-01-15 10:30:50] INFO GET /api/health 200 OK - 2ms", level: "info" as const, timestamp: new Date("2024-01-15T10:30:50") },
          { content: "[2024-01-15 10:30:52] WARN High memory usage detected: 85%", level: "warn" as const, timestamp: new Date("2024-01-15T10:30:52") },
          { content: "[2024-01-15 10:30:55] INFO POST /api/users 201 Created - 45ms", level: "info" as const, timestamp: new Date("2024-01-15T10:30:55") },
          { content: "[2024-01-15 10:31:00] ERROR Connection to cache server failed: ECONNREFUSED 192.168.1.50:6379", level: "error" as const, timestamp: new Date("2024-01-15T10:31:00") },
          { content: "[2024-01-15 10:31:01] WARN Retrying cache connection (attempt 1/3)...", level: "warn" as const, timestamp: new Date("2024-01-15T10:31:01") },
          { content: "[2024-01-15 10:31:03] INFO Cache connection restored", level: "info" as const, timestamp: new Date("2024-01-15T10:31:03") },
          { content: "[2024-01-15 10:31:05] DEBUG Request processed: {\"userId\": \"usr_12345\", \"action\": \"login\"}", level: "debug" as const, timestamp: new Date("2024-01-15T10:31:05") },
          { content: "[2024-01-15 10:31:10] INFO GET /api/products?page=1&limit=20 200 OK - 125ms", level: "info" as const, timestamp: new Date("2024-01-15T10:31:10") },
        ]
        return (
          <WakaTerminalOutput
            lines={lines}
            height={350}
            showLineNumbers
            showTimestamps
            searchable
            filterable
            autoScroll
          />
        )
      })(),
      code: `const lines = [
  { content: "[2024-01-15 10:30:45] INFO Starting application server...", level: "info", timestamp: new Date() },
  { content: "[2024-01-15 10:30:52] WARN High memory usage detected: 85%", level: "warn", timestamp: new Date() },
  { content: "[2024-01-15 10:31:00] ERROR Connection failed: ECONNREFUSED", level: "error", timestamp: new Date() },
]

<WakaTerminalOutput
  lines={lines}
  height={350}
  showLineNumbers
  showTimestamps
  searchable
  filterable
  autoScroll
/>`,
    },
    {
      title: "ANSI Color Support",
      description: "Terminal output with ANSI escape codes for colored output",
      preview: (() => {
        const lines = [
          { content: "\x1b[32m\x1b[1m✓\x1b[0m All tests passed (42 tests in 3.5s)", level: "info" as const },
          { content: "\x1b[33mwarning\x1b[0m: unused variable 'temp' in src/utils.ts:15", level: "warn" as const },
          { content: "\x1b[31m\x1b[1merror\x1b[0m: Cannot find module '@/components/Button'", level: "error" as const },
          { content: "\x1b[36minfo\x1b[0m: Building for production...", level: "info" as const },
          { content: "\x1b[35mdebug\x1b[0m: Resolved 1,234 dependencies", level: "debug" as const },
        ]
        return (
          <WakaTerminalOutput
            lines={lines}
            height={200}
            showLineNumbers={false}
          />
        )
      })(),
      code: `const lines = [
  { content: "\\x1b[32m\\x1b[1m✓\\x1b[0m All tests passed", level: "info" },
  { content: "\\x1b[33mwarning\\x1b[0m: unused variable", level: "warn" },
]

<WakaTerminalOutput
  lines={lines}
  height={200}
  showLineNumbers={false}
/>`,
    },
  ],
}

// ============================================
// INCIDENT TIMELINE SHOWCASE
// ============================================
export const incidentTimelineShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Incident Timeline",
      description: "Chronological view of system incidents with status tracking",
      preview: (() => {
        const now = new Date()
        const incidents = [
          {
            id: "inc-001",
            title: "Database Connection Pool Exhaustion",
            description: "High load caused connection pool to reach maximum capacity",
            severity: "critical" as const,
            status: "resolved" as const,
            startedAt: new Date(now.getTime() - 3600000 * 4),
            resolvedAt: new Date(now.getTime() - 3600000 * 2),
            impact: { services: 3, users: 15000 },
            updates: [
              { message: "Investigating increased database latency", timestamp: new Date(now.getTime() - 3600000 * 4), status: "Investigating" },
              { message: "Root cause identified: connection pool exhaustion", timestamp: new Date(now.getTime() - 3600000 * 3.5), status: "Identified" },
              { message: "Increased pool size and deployed fix", timestamp: new Date(now.getTime() - 3600000 * 2.5), status: "Monitoring" },
              { message: "All systems operating normally", timestamp: new Date(now.getTime() - 3600000 * 2), status: "Resolved" },
            ],
          },
          {
            id: "inc-002",
            title: "CDN Cache Invalidation Delay",
            description: "Cache purge requests experiencing higher than normal latency",
            severity: "minor" as const,
            status: "monitoring" as const,
            startedAt: new Date(now.getTime() - 3600000),
            impact: { services: 1 },
            updates: [
              { message: "Reports of stale content being served", timestamp: new Date(now.getTime() - 3600000), status: "Investigating" },
              { message: "CDN provider notified, implementing workaround", timestamp: new Date(now.getTime() - 1800000), status: "Monitoring" },
            ],
          },
          {
            id: "inc-003",
            title: "Scheduled Maintenance: API Version Upgrade",
            description: "Planned upgrade to API v2.5.0 with breaking changes",
            severity: "info" as const,
            status: "investigating" as const,
            startedAt: new Date(now.getTime() - 600000),
            impact: { services: 5 },
          },
        ]
        return (
          <WakaIncidentTimeline
            incidents={incidents}
            showFilters
            showImpact
          />
        )
      })(),
      code: `const incidents = [
  {
    id: "inc-001",
    title: "Database Connection Pool Exhaustion",
    severity: "critical",
    status: "resolved",
    startedAt: new Date(),
    resolvedAt: new Date(),
    impact: { services: 3, users: 15000 },
    updates: [
      { message: "Investigating increased latency", timestamp: new Date(), status: "Investigating" },
      { message: "All systems operating normally", timestamp: new Date(), status: "Resolved" },
    ],
  },
]

<WakaIncidentTimeline
  incidents={incidents}
  showFilters
  showImpact
/>`,
    },
  ],
}

// ============================================
// FLOW DIAGRAM SHOWCASE
// ============================================
export const flowDiagramShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Process Flow Diagram",
      description: "Interactive flow diagram with draggable nodes and connections",
      preview: (() => {
        const nodes = [
          { id: "start", type: "start" as const, label: "Start", position: { x: 150, y: 80 } },
          { id: "validate", type: "action" as const, label: "Validate Input", position: { x: 150, y: 160 } },
          { id: "check-auth", type: "decision" as const, label: "Authorized?", position: { x: 150, y: 260 } },
          { id: "process", type: "process" as const, label: "Process Request", position: { x: 250, y: 360 } },
          { id: "deny", type: "action" as const, label: "Deny Access", position: { x: 50, y: 360 } },
          { id: "end", type: "end" as const, label: "End", position: { x: 150, y: 460 } },
        ]
        const connections = [
          { id: "c1", from: "start", to: "validate", animated: true },
          { id: "c2", from: "validate", to: "check-auth", animated: true },
          { id: "c3", from: "check-auth", to: "process", label: "Yes", color: "#22c55e" },
          { id: "c4", from: "check-auth", to: "deny", label: "No", color: "#ef4444" },
          { id: "c5", from: "process", to: "end", animated: true },
          { id: "c6", from: "deny", to: "end" },
        ]
        return (
          <div className="h-[520px]">
            <WakaFlowDiagram
              nodes={nodes}
              connections={connections}
              draggable
              editable={false}
              showGrid
              zoom={1}
            />
          </div>
        )
      })(),
      code: `const nodes = [
  { id: "start", type: "start", label: "Start", position: { x: 150, y: 80 } },
  { id: "validate", type: "action", label: "Validate Input", position: { x: 150, y: 160 } },
  { id: "check-auth", type: "decision", label: "Authorized?", position: { x: 150, y: 260 } },
  { id: "process", type: "process", label: "Process Request", position: { x: 250, y: 360 } },
  { id: "end", type: "end", label: "End", position: { x: 150, y: 460 } },
]

const connections = [
  { id: "c1", from: "start", to: "validate", animated: true },
  { id: "c2", from: "validate", to: "check-auth", animated: true },
  { id: "c3", from: "check-auth", to: "process", label: "Yes", color: "#22c55e" },
  { id: "c4", from: "check-auth", to: "deny", label: "No", color: "#ef4444" },
]

<WakaFlowDiagram
  nodes={nodes}
  connections={connections}
  draggable
  showGrid
/>`,
    },
  ],
}

// ============================================
// PIPELINE VIEW SHOWCASE
// ============================================
export const pipelineViewShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "CI/CD Pipeline",
      description: "Visual representation of deployment pipeline stages",
      preview: (() => {
        const stages = [
          { id: "build", name: "Build", status: "success" as const, duration: 145, jobs: [
            { id: "compile", name: "Compile", status: "success" as const, duration: 85 },
            { id: "lint", name: "Lint", status: "success" as const, duration: 32 },
            { id: "unit-test", name: "Unit Tests", status: "success" as const, duration: 120 },
          ]},
          { id: "test", name: "Test", status: "success" as const, duration: 312, jobs: [
            { id: "integration", name: "Integration", status: "success" as const, duration: 180 },
            { id: "e2e", name: "E2E Tests", status: "success" as const, duration: 245 },
          ]},
          { id: "security", name: "Security Scan", status: "success" as const, duration: 89 },
          { id: "staging", name: "Deploy Staging", status: "running" as const, duration: 67, jobs: [
            { id: "deploy-stg", name: "Deploy", status: "running" as const, duration: 45 },
            { id: "smoke-stg", name: "Smoke Tests", status: "pending" as const },
          ]},
          { id: "production", name: "Deploy Production", status: "pending" as const, jobs: [
            { id: "deploy-prod", name: "Deploy", status: "pending" as const },
            { id: "smoke-prod", name: "Smoke Tests", status: "pending" as const },
          ]},
        ]
        return (
          <WakaPipelineView
            stages={stages}
            variant="horizontal"
            size="md"
            showDuration
            showJobs
            animated
          />
        )
      })(),
      code: `const stages = [
  { id: "build", name: "Build", status: "success", duration: 145, jobs: [
    { id: "compile", name: "Compile", status: "success", duration: 85 },
    { id: "lint", name: "Lint", status: "success", duration: 32 },
  ]},
  { id: "test", name: "Test", status: "success", duration: 312 },
  { id: "staging", name: "Deploy Staging", status: "running", duration: 67 },
  { id: "production", name: "Deploy Production", status: "pending" },
]

<WakaPipelineView
  stages={stages}
  variant="horizontal"
  size="md"
  showDuration
  showJobs
  animated
/>`,
    },
    {
      title: "Vertical Pipeline",
      description: "Pipeline stages displayed in vertical layout",
      preview: (() => {
        const stages = [
          { id: "checkout", name: "Checkout", status: "success" as const, duration: 8 },
          { id: "install", name: "Install Dependencies", status: "success" as const, duration: 45 },
          { id: "build", name: "Build Application", status: "success" as const, duration: 120 },
          { id: "test", name: "Run Tests", status: "failed" as const, duration: 89 },
          { id: "deploy", name: "Deploy", status: "skipped" as const },
        ]
        return (
          <WakaPipelineView
            stages={stages}
            variant="vertical"
            size="sm"
            showDuration
            animated
          />
        )
      })(),
      code: `<WakaPipelineView
  stages={stages}
  variant="vertical"
  size="sm"
  showDuration
  animated
/>`,
    },
  ],
}

// ============================================
// ROLLBACK SLIDER SHOWCASE
// ============================================
export const rollbackSliderShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Deployment Rollback",
      description: "Visual deployment history with rollback capabilities",
      preview: (() => {
        const now = new Date()
        const versions = [
          { id: "v1", version: "1.0.0", commit: "a1b2c3d", commitMessage: "Initial release", deployedBy: "John Doe", deployedAt: new Date(now.getTime() - 86400000 * 7), health: "healthy" as const },
          { id: "v2", version: "1.1.0", commit: "e4f5g6h", commitMessage: "Add user authentication", deployedBy: "Jane Smith", deployedAt: new Date(now.getTime() - 86400000 * 5), health: "healthy" as const },
          { id: "v3", version: "1.2.0", commit: "i7j8k9l", commitMessage: "Performance improvements", deployedBy: "Bob Johnson", deployedAt: new Date(now.getTime() - 86400000 * 3), health: "degraded" as const },
          { id: "v4", version: "1.2.1", commit: "m1n2o3p", commitMessage: "Fix memory leak in worker", deployedBy: "Alice Brown", deployedAt: new Date(now.getTime() - 86400000 * 2), health: "healthy" as const },
          { id: "v5", version: "1.3.0", commit: "q4r5s6t", commitMessage: "New dashboard features", deployedBy: "Charlie Davis", deployedAt: new Date(now.getTime() - 86400000), health: "healthy" as const, isActive: true },
          { id: "v6", version: "1.3.1", commit: "u7v8w9x", commitMessage: "Hotfix: API rate limiting", deployedBy: "Diana Wilson", deployedAt: new Date(now.getTime() - 3600000 * 2), health: "unhealthy" as const },
        ]
        return (
          <WakaRollbackSlider
            versions={versions}
            showDetails
            draggable
            onRollbackConfirm={(v) => console.log("Rolling back to:", v.version)}
          />
        )
      })(),
      code: `const versions = [
  { id: "v1", version: "1.0.0", commit: "a1b2c3d", deployedBy: "John Doe", deployedAt: new Date(), health: "healthy" },
  { id: "v2", version: "1.1.0", commit: "e4f5g6h", deployedBy: "Jane Smith", deployedAt: new Date(), health: "healthy" },
  { id: "v3", version: "1.2.0", commit: "i7j8k9l", deployedAt: new Date(), health: "degraded" },
  { id: "v4", version: "1.3.0", commit: "q4r5s6t", deployedAt: new Date(), health: "healthy", isActive: true },
]

<WakaRollbackSlider
  versions={versions}
  showDetails
  draggable
  onRollbackConfirm={(v) => console.log("Rolling back to:", v.version)}
/>`,
    },
  ],
}

// ============================================
// REGION MAP SHOWCASE
// ============================================
export const regionMapShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Cloud Region Map",
      description: "Interactive world map showing cloud region status and latency",
      preview: (() => {
        const regions = [
          { id: "us-east-1", name: "US East (N. Virginia)", location: { lat: 39.0481, lng: -77.4729 }, latency: 25, status: "active" as const, provider: "aws" as const },
          { id: "us-west-2", name: "US West (Oregon)", location: { lat: 45.5152, lng: -122.6784 }, latency: 45, status: "active" as const, provider: "aws" as const },
          { id: "eu-west-1", name: "EU (Ireland)", location: { lat: 53.3498, lng: -6.2603 }, latency: 85, status: "active" as const, provider: "aws" as const },
          { id: "eu-central-1", name: "EU (Frankfurt)", location: { lat: 50.1109, lng: 8.6821 }, latency: 92, status: "degraded" as const, provider: "aws" as const },
          { id: "ap-southeast-1", name: "Asia Pacific (Singapore)", location: { lat: 1.3521, lng: 103.8198 }, latency: 180, status: "active" as const, provider: "aws" as const },
          { id: "ap-northeast-1", name: "Asia Pacific (Tokyo)", location: { lat: 35.6762, lng: 139.6503 }, latency: 165, status: "active" as const, provider: "aws" as const },
          { id: "gcp-us-central", name: "GCP US Central", location: { lat: 41.2619, lng: -95.8608 }, latency: 32, status: "active" as const, provider: "gcp" as const },
          { id: "azure-westeurope", name: "Azure West Europe", location: { lat: 52.3676, lng: 4.9041 }, latency: 78, status: "offline" as const, provider: "azure" as const },
        ]
        return (
          <div className="h-[400px]">
            <WakaRegionMap
              regions={regions}
              userLocation={{ lat: 40.7128, lng: -74.006 }}
              showLatency
              showConnections
              animated
            />
          </div>
        )
      })(),
      code: `const regions = [
  { id: "us-east-1", name: "US East (N. Virginia)", location: { lat: 39.04, lng: -77.47 }, latency: 25, status: "active", provider: "aws" },
  { id: "eu-west-1", name: "EU (Ireland)", location: { lat: 53.35, lng: -6.26 }, latency: 85, status: "active", provider: "aws" },
  { id: "ap-southeast-1", name: "Asia Pacific (Singapore)", location: { lat: 1.35, lng: 103.82 }, latency: 180, status: "active", provider: "aws" },
  { id: "gcp-us-central", name: "GCP US Central", location: { lat: 41.26, lng: -95.86 }, latency: 32, status: "active", provider: "gcp" },
]

<WakaRegionMap
  regions={regions}
  userLocation={{ lat: 40.7128, lng: -74.006 }}
  showLatency
  showConnections
  animated
/>`,
    },
    {
      title: "Simple Region Display",
      description: "Basic region map without connections",
      preview: (() => {
        const regions = [
          { id: "us-1", name: "United States", location: { lat: 37.0902, lng: -95.7129 }, status: "active" as const, provider: "custom" as const },
          { id: "eu-1", name: "Europe", location: { lat: 54.526, lng: 15.2551 }, status: "active" as const, provider: "custom" as const },
          { id: "asia-1", name: "Asia Pacific", location: { lat: 34.0479, lng: 100.6197 }, status: "degraded" as const, provider: "custom" as const },
        ]
        return (
          <div className="h-[300px]">
            <WakaRegionMap
              regions={regions}
              showLatency={false}
              showConnections={false}
              animated
            />
          </div>
        )
      })(),
      code: `<WakaRegionMap
  regions={regions}
  showLatency={false}
  showConnections={false}
  animated
/>`,
    },
  ],
}

// ============================================
// Map des showcases par slug
// ============================================
export const componentShowcases: Record<string, ComponentShowcaseConfig> = {
  button: buttonShowcase,
  input: inputShowcase,
  card: cardShowcase,
  badge: badgeShowcase,
  alert: alertShowcase,
  dialog: dialogShowcase,
  tabs: tabsShowcase,
  "dropdown-menu": dropdownMenuShowcase,
  toggle: toggleShowcase,
  spinner: spinnerShowcase,
  avatar: avatarShowcase,
  progress: progressShowcase,
  skeleton: skeletonShowcase,
  table: tableShowcase,
  "data-table-advanced": dataTableAdvancedShowcase,
  "datetime-picker": datetimePickerShowcase,
  // Waka components
  stepper: stepperShowcase,
  breadcrumb: breadcrumbShowcase,
  modal: modalShowcase,
  tree: treeShowcase,
  pagination: paginationShowcase,
  "time-picker": timePickerShowcase,
  "date-range-picker": dateRangePickerShowcase,
  combobox: comboboxShowcase,
  drawer: drawerShowcase,
  // New components
  "number-input": numberInputShowcase,
  image: imageShowcase,
  qrcode: qrcodeShowcase,
  barcode: barcodeShowcase,
  video: videoShowcase,
  "virtual-list": virtualListShowcase,
  "segmented-control": segmentedControlShowcase,
  kanban: kanbanShowcase,
  timeline: timelineShowcase,
  stat: statShowcase,
  "theme-creator": themeCreatorShowcase,
  // Additional components
  "alert-dialog": alertDialogShowcase,
  "hover-card": hoverCardShowcase,
  "navigation-menu": navigationMenuShowcase,
  autocomplete: autocompleteShowcase,
  "color-picker": colorPickerShowcase,
  "file-upload": fileUploadShowcase,
  "rich-text-editor": richTextEditorShowcase,
  form: formShowcase,
  // Charts
  "bar-chart": barChartShowcase,
  "line-chart": lineChartShowcase,
  "area-chart": areaChartShowcase,
  "pie-chart": pieChartShowcase,
  sparkline: sparklineShowcase,
  // Menu components
  "context-menu": contextMenuShowcase,
  menubar: menubarShowcase,
  // Admin components
  admincrumb: admincrumbShowcase,
  // Media components
  carousel: carouselShowcase,
  // Utility components
  collapsible: collapsibleShowcase,
  "theme-manager": themeManagerShowcase,
  // E-commerce components
  "pricing-table": pricingTableShowcase,
  "cart-summary": cartSummaryShowcase,
  "product-card": productCardShowcase,
  "checkout-stepper": checkoutStepperShowcase,
  "coupon-input": couponInputShowcase,
  "payment-method-picker": paymentMethodPickerShowcase,
  "order-tracker": orderTrackerShowcase,
  "invoice-preview": invoicePreviewShowcase,
  // Security components
  "password-strength": passwordStrengthShowcase,
  "two-factor-setup": twoFactorSetupShowcase,
  "session-manager": sessionManagerShowcase,
  "permission-matrix": permissionMatrixShowcase,
  "audit-log": auditLogShowcase,
  "security-score": securityScoreShowcase,
  "biometric-prompt": biometricPromptShowcase,
  "device-trust": deviceTrustShowcase,
  // Communication components
  "chat-bubble": chatBubbleShowcase,
  "typing-indicator": typingIndicatorShowcase,
  "video-call": videoCallShowcase,
  "mention-input": mentionInputShowcase,
  "thread-view": threadViewShowcase,
  "presence-indicator": presenceIndicatorShowcase,
  "reaction-picker": reactionPickerShowcase,
  "voice-message": voiceMessageShowcase,
  // Analytics components
  "funnel-chart": funnelChartShowcase,
  "cohort-table": cohortTableShowcase,
  "kpi-dashboard": kpiDashboardShowcase,
  "compare-period": comparePeriodShowcase,
  "goal-progress": goalProgressShowcase,
  heatmap: heatmapShowcase,
  "sankey-diagram": sankeyDiagramShowcase,
  "treemap-chart": treemapChartShowcase,
  // Forms components
  "signature-pad": signaturePadShowcase,
  "address-autocomplete": addressAutocompleteShowcase,
  "phone-input": phoneInputShowcase,
  "credit-card-input": creditCardInputShowcase,
  "tag-input": tagInputShowcase,
  "slider-range": sliderRangeShowcase,
  "rating-input": ratingInputShowcase,
  "schedule-picker": schedulePickerShowcase,
  // Onboarding components
  "tour-guide": tourGuideShowcase,
  hotspot: hotspotShowcase,
  checklist: checklistShowcase,
  "empty-state": emptyStateShowcase,
  "feature-announcement": featureAnnouncementShowcase,
  "progress-onboarding": progressOnboardingShowcase,
  "tooltip-tour": tooltipTourShowcase,
  "welcome-modal": welcomeModalShowcase,
  // Mobile-first components
  "bottom-sheet": bottomSheetShowcase,
  "pull-to-refresh": pullToRefreshShowcase,
  "swipe-card": swipeCardShowcase,
  // Animation components
  "error-shake": errorShakeShowcase,
  "loading-orbit": loadingOrbitShowcase,
  "skeleton-wave": skeletonWaveShowcase,
  "success-explosion": successExplosionShowcase,
  typewriter: typewriterShowcase,
  // Button components
  "haptic-button": hapticButtonShowcase,
  "morph-button": morphButtonShowcase,
  "liquid-button": liquidButtonShowcase,
  "magnetic-button": magneticButtonShowcase,
  // Navigation components
  "floating-nav": floatingNavShowcase,
  "breadcrumb-path": breadcrumbPathShowcase,
  "tabs-morph": tabsMorphShowcase,
  "orbital-menu": orbitalMenuShowcase,
  dock: dockShowcase,
  spotlight: spotlightShowcase,
  "command-bar": commandBarShowcase,
  // Gamification components (Part 1)
  "achievement-unlock": achievementUnlockShowcase,
  "combo-counter": comboCounterShowcase,
  "level-progress": levelProgressShowcase,
  leaderboard: leaderboardShowcase,
  "milestone-road": milestoneRoadShowcase,
  "streak-counter": streakCounterShowcase,
  "quest-card": questCardShowcase,
  "scratch-card": scratchCardShowcase,
  "versus-card": versusCardShowcase,
  "xp-bar": xpBarShowcase,
  // Gamification components (Part 2)
  "badge-showcase": badgeShowcaseShowcase,
  "daily-reward": dailyRewardShowcase,
  "loot-box": lootBoxShowcase,
  "skill-tree": skillTreeShowcase,
  "challenge-timer": challengeTimerShowcase,
  "rank-badge": rankBadgeShowcase,
  "tournament-bracket": tournamentBracketShowcase,
  "team-banner": teamBannerShowcase,
  "activity-feed": activityFeedShowcase,
  "power-up": powerUpShowcase,
  "points-popup": pointsPopupShowcase,
  "spin-wheel": spinWheelShowcase,
  "player-card": playerCardShowcase,
  "stats-hexagon": statsHexagonShowcase,
  "season-pass": seasonPassShowcase,
  // Data Visualization components
  "3d-pie-chart": threeDPieChartShowcase,
  "radar-score": radarScoreShowcase,
  "resource-gauge": resourceGaugeShowcase,
  "status-matrix": statusMatrixShowcase,
  "contribution-graph": contributionGraphShowcase,
  "cost-breakdown": costBreakdownShowcase,
  "budget-burn": budgetBurnShowcase,
  "metric-sparkline": metricSparklineShowcase,
  // Infrastructure & Resource Management components (Part 2)
  "resource-pool": resourcePoolShowcase,
  "quota-bar": quotaBarShowcase,
  "capacity-planner": capacityPlannerShowcase,
  "allocation-matrix": allocationMatrixShowcase,
  "deployment-lane": deploymentLaneShowcase,
  "approval-chain": approvalChainShowcase,
  "connection-matrix": connectionMatrixShowcase,
  "alert-stack": alertStackShowcase,
  "sla-tracker": slaTrackerShowcase,
  // Card Effects components
  "glow-card": glowCardShowcase,
  "tilt-card": tiltCardShowcase,
  "magic-link": magicLinkShowcase,
  // Notifications component
  notifications: notificationsShowcase,
  // Sidebar component (from blocks)
  sidebar: sidebarShowcase,
  // Infrastructure & DevOps components (Part 1)
  "server-rack": serverRackShowcase,
  "network-topology": networkTopologyShowcase,
  "health-pulse": healthPulseShowcase,
  "terminal-output": terminalOutputShowcase,
  "incident-timeline": incidentTimelineShowcase,
  "flow-diagram": flowDiagramShowcase,
  "pipeline-view": pipelineViewShowcase,
  "rollback-slider": rollbackSliderShowcase,
  "region-map": regionMapShowcase,
  // DevOps components (new)
  ...devopsShowcases,
}
