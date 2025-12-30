"use client"

import * as React from "react"
import { ReactNode } from "react"
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
  WakaThemeCreator,
} from "@wakastellar/ui"
import type { Step, BreadcrumbItem, TreeNode, ComboboxOption, WakaDateRange, TimelineItem, KanbanColumn, ThemeMetadata, ThemeCreatorApiConfig, FileUploadResponse } from "@wakastellar/ui"
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

// Mock API pour la démo
const mockApiConfig: ThemeCreatorApiConfig = {
  onUploadFile: async (file: File, themeId: string, assetType: string): Promise<FileUploadResponse> => {
    // Simuler un délai d'upload
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Créer une URL locale pour la prévisualisation
    const url = URL.createObjectURL(file)
    return { url, filename: file.name, size: file.size }
  },
  onSaveTheme: async (theme: ThemeMetadata): Promise<void> => {
    // Simuler un délai de sauvegarde
    await new Promise(resolve => setTimeout(resolve, 500))
    console.log("[Demo] Theme saved:", theme)
  },
  onDeleteTheme: async (themeId: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    console.log("[Demo] Theme deleted:", themeId)
  },
  onLoadTheme: async (themeId: string): Promise<ThemeMetadata | null> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    // Retourner un thème mock
    return {
      id: themeId,
      label: "Thème Chargé",
      description: "Thème de démonstration",
      previewColor: "#3b82f6",
      author: "Demo",
      versions: [{ version: "1.0.0", createdAt: new Date(), createdBy: "Demo", css: "", changelog: "Initial" }],
      currentVersion: "1.0.0",
    }
  },
}

const mockExistingThemes: ThemeMetadata[] = [
  {
    id: "default",
    label: "Default",
    description: "Thème par défaut",
    previewColor: "#3b82f6",
    author: "System",
    versions: [],
    currentVersion: "1.0.0",
  },
  {
    id: "forest",
    label: "Forêt",
    description: "Thème naturel vert",
    previewColor: "#22c55e",
    author: "Demo",
    versions: [],
    currentVersion: "1.0.0",
  },
]

const themeCreatorShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Créateur de thèmes complet",
      description: "Interface complète avec onglets pour créer des thèmes, gérer les assets (logos, backgrounds) et les ressources personnalisées.",
      preview: (
        <div className="w-full max-w-[1200px]">
          <WakaThemeCreator
            apiConfig={mockApiConfig}
            existingThemes={mockExistingThemes}
            onSaveSuccess={(theme) => console.log("Theme saved:", theme)}
            onDeleteSuccess={(id) => console.log("Theme deleted:", id)}
          />
        </div>
      ),
      code: `const apiConfig: ThemeCreatorApiConfig = {
  onUploadFile: async (file, themeId, assetType) => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("themeId", themeId)
    formData.append("assetType", assetType)

    const response = await fetch("/api/themes/upload", {
      method: "POST",
      body: formData,
    })
    return response.json() // { url, filename, size }
  },

  onSaveTheme: async (theme) => {
    await fetch("/api/themes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(theme),
    })
  },

  onDeleteTheme: async (themeId) => {
    await fetch(\`/api/themes/\${themeId}\`, { method: "DELETE" })
  },

  onLoadTheme: async (themeId) => {
    const response = await fetch(\`/api/themes/\${themeId}\`)
    return response.json()
  },
}

<WakaThemeCreator
  apiConfig={apiConfig}
  existingThemes={existingThemes}
  onSaveSuccess={(theme) => console.log("Saved:", theme)}
  onDeleteSuccess={(id) => console.log("Deleted:", id)}
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
}
