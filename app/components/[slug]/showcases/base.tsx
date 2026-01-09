"use client"

import * as React from "react"
import { useState } from "react"
import {
  Button,
  Input,
  Textarea,
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
  Toggle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  DataTableAdvanced,
  toast,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@wakastellar/ui"
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
  Settings,
  LogOut,
  CreditCard,
  Users,
  MoreHorizontal,
  ArrowUpDown,
  Trash2,
  Pencil,
  Eye,
} from "lucide-react"
import { ComponentShowcaseConfig } from "./types"

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
// TABLE SHOWCASE
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
// COMBINED EXPORT
// ============================================
export const baseShowcases = {
  button: buttonShowcase,
  input: inputShowcase,
  card: cardShowcase,
  badge: badgeShowcase,
  alert: alertShowcase,
  dialog: dialogShowcase,
  tabs: tabsShowcase,
  "dropdown-menu": dropdownMenuShowcase,
  toggle: toggleShowcase,
  avatar: avatarShowcase,
  progress: progressShowcase,
  skeleton: skeletonShowcase,
  table: tableShowcase,
  "data-table-advanced": dataTableAdvancedShowcase,
  form: formShowcase,
}
