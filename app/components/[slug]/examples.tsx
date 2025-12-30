"use client"

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
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Code,
} from "@wakastellar/ui"
import { AlertCircle, ChevronDown, Mail, Terminal, User, Loader2, Plus, ArrowRight, Calculator, CreditCard, Settings, Smile } from "lucide-react"
import { useState } from "react"

interface ComponentExample {
  preview: React.ReactNode
  code: string
}

export const componentExamples: Record<string, ComponentExample> = {
  button: {
    preview: (
      <div className="space-y-6">
        {/* Variantes */}
        <div>
          <p className="text-sm text-muted-foreground mb-3">Variantes</p>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        {/* Tailles */}
        <div>
          <p className="text-sm text-muted-foreground mb-3">Tailles</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Plus className="h-4 w-4" /></Button>
          </div>
        </div>
        {/* États */}
        <div>
          <p className="text-sm text-muted-foreground mb-3">États</p>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Désactivé</Button>
            <Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Chargement</Button>
            <Button><Mail className="mr-2 h-4 w-4" />Avec icône</Button>
            <Button>Continuer<ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    ),
    code: `// Variantes
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tailles
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Plus className="h-4 w-4" /></Button>

// États
<Button disabled>Désactivé</Button>
<Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Chargement</Button>
<Button><Mail className="mr-2 h-4 w-4" />Avec icône</Button>`,
  },

  input: {
    preview: (
      <div className="w-full max-w-md space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-3">Types</p>
          <div className="space-y-3">
            <Input placeholder="Texte simple" />
            <Input type="email" placeholder="email@exemple.com" />
            <Input type="password" placeholder="Mot de passe" />
            <Input type="number" placeholder="123" />
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-3">Avec icônes</p>
          <div className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Email" className="pl-10" />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Nom d'utilisateur" className="pl-10" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-3">États</p>
          <div className="space-y-3">
            <Input placeholder="Normal" />
            <Input placeholder="Désactivé" disabled />
            <div>
              <Input placeholder="Avec erreur" className="border-destructive" />
              <p className="text-sm text-destructive mt-1">Ce champ est requis</p>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `// Types
<Input placeholder="Texte simple" />
<Input type="email" placeholder="email@exemple.com" />
<Input type="password" placeholder="Mot de passe" />
<Input type="number" placeholder="123" />

// Avec icône
<div className="relative">
  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
  <Input placeholder="Email" className="pl-10" />
</div>

// États
<Input placeholder="Normal" />
<Input placeholder="Désactivé" disabled />
<Input className="border-destructive" /> // Erreur`,
  },

  textarea: {
    preview: (
      <div className="w-full max-w-sm">
        <Textarea placeholder="Votre message..." rows={4} />
      </div>
    ),
    code: `<Textarea placeholder="Votre message..." rows={4} />`,
  },

  select: {
    preview: (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Choisir une option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Choisir une option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`,
  },

  checkbox: {
    preview: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">J'accepte les conditions</Label>
      </div>
    ),
    code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">J'accepte les conditions</Label>
</div>`,
  },

  "radio-group": {
    preview: (
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="r1" />
          <Label htmlFor="r1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="r2" />
          <Label htmlFor="r2">Option 2</Label>
        </div>
      </RadioGroup>
    ),
    code: `<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="r2" />
    <Label htmlFor="r2">Option 2</Label>
  </div>
</RadioGroup>`,
  },

  switch: {
    preview: (
      <div className="flex items-center space-x-2">
        <Switch id="airplane" />
        <Label htmlFor="airplane">Mode avion</Label>
      </div>
    ),
    code: `<div className="flex items-center space-x-2">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Mode avion</Label>
</div>`,
  },

  slider: {
    preview: (
      <div className="w-full max-w-sm">
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    ),
    code: `<Slider defaultValue={[50]} max={100} step={1} />`,
  },

  label: {
    preview: (
      <div className="flex items-center gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="email@example.com" />
      </div>
    ),
    code: `<div className="flex items-center gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>`,
  },

  card: {
    preview: (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Créer un projet</CardTitle>
          <CardDescription>Démarrez un nouveau projet en un clic.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Nom du projet" />
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
    <Input placeholder="Nom du projet" />
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Annuler</Button>
    <Button>Créer</Button>
  </CardFooter>
</Card>`,
  },

  badge: {
    preview: (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-3">Variantes</p>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-3">Cas d'usage</p>
          <div className="flex flex-wrap gap-2">
            <Badge>Nouveau</Badge>
            <Badge variant="secondary">En cours</Badge>
            <Badge variant="destructive">Urgent</Badge>
            <Badge variant="outline">v1.0.0</Badge>
            <Badge className="bg-green-500 hover:bg-green-600">Actif</Badge>
            <Badge className="bg-yellow-500 hover:bg-yellow-600">En attente</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-3">Avec icône</p>
          <div className="flex flex-wrap gap-2">
            <Badge><Plus className="mr-1 h-3 w-3" />Ajouter</Badge>
            <Badge variant="destructive"><AlertCircle className="mr-1 h-3 w-3" />Erreur</Badge>
          </div>
        </div>
      </div>
    ),
    code: `// Variantes
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>

// Couleurs personnalisées
<Badge className="bg-green-500">Actif</Badge>
<Badge className="bg-yellow-500">En attente</Badge>
<Badge className="bg-blue-500">Info</Badge>

// Avec icône
<Badge><Plus className="mr-1 h-3 w-3" />Ajouter</Badge>`,
  },

  avatar: {
    preview: (
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </div>
    ),
    code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>AB</AvatarFallback>
</Avatar>`,
  },

  progress: {
    preview: (
      <div className="w-full max-w-sm">
        <Progress value={66} />
      </div>
    ),
    code: `<Progress value={66} />`,
  },

  skeleton: {
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

  calendar: {
    preview: <Calendar mode="single" className="rounded-md border" />,
    code: `<Calendar mode="single" className="rounded-md border" />`,
  },

  alert: {
    preview: (
      <div className="space-y-4 w-full max-w-lg">
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
            Une erreur s'est produite.
          </AlertDescription>
        </Alert>
      </div>
    ),
    code: `<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>Ceci est une alerte informative.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Erreur</AlertTitle>
  <AlertDescription>Une erreur s'est produite.</AlertDescription>
</Alert>`,
  },

  dialog: {
    preview: (
      <Dialog>
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
      <Button>Confirmer</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  },

  toast: {
    preview: (
      <Button
        onClick={() => {
          toast({
            title: "Notification",
            description: "Ceci est une notification toast.",
          })
        }}
      >
        Afficher un toast
      </Button>
    ),
    code: `import { toast } from "@wakastellar/ui"

<Button onClick={() => {
  toast({
    title: "Notification",
    description: "Ceci est une notification toast.",
  })
}}>
  Afficher un toast
</Button>`,
  },

  tabs: {
    preview: (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Compte</TabsTrigger>
          <TabsTrigger value="password">Mot de passe</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="p-4">
          Gérez les paramètres de votre compte.
        </TabsContent>
        <TabsContent value="password" className="p-4">
          Changez votre mot de passe.
        </TabsContent>
      </Tabs>
    ),
    code: `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Compte</TabsTrigger>
    <TabsTrigger value="password">Mot de passe</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Gérez les paramètres de votre compte.
  </TabsContent>
  <TabsContent value="password">
    Changez votre mot de passe.
  </TabsContent>
</Tabs>`,
  },

  "dropdown-menu": {
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Options <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profil</DropdownMenuItem>
          <DropdownMenuItem>Paramètres</DropdownMenuItem>
          <DropdownMenuItem>Déconnexion</DropdownMenuItem>
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
    <DropdownMenuItem>Profil</DropdownMenuItem>
    <DropdownMenuItem>Paramètres</DropdownMenuItem>
    <DropdownMenuItem>Déconnexion</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },

  accordion: {
    preview: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>
            Contenu de la première section.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>
            Contenu de la deuxième section.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      Contenu de la première section.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>
      Contenu de la deuxième section.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
  },

  sheet: {
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button>Ouvrir le panneau</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Panneau latéral</SheetTitle>
            <SheetDescription>
              Contenu du panneau latéral.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    ),
    code: `<Sheet>
  <SheetTrigger asChild>
    <Button>Ouvrir le panneau</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Panneau latéral</SheetTitle>
      <SheetDescription>
        Contenu du panneau latéral.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
  },

  tooltip: {
    preview: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Survolez-moi</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Info-bulle</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Survolez-moi</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Info-bulle</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
  },

  popover: {
    preview: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Ouvrir popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-2">
            <h4 className="font-medium">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Définissez les dimensions du calque.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    ),
    code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Ouvrir popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-2">
      <h4 className="font-medium">Dimensions</h4>
      <p className="text-sm text-muted-foreground">
        Définissez les dimensions du calque.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
  },

  separator: {
    preview: (
      <div className="w-full max-w-sm">
        <div className="space-y-1">
          <h4 className="text-sm font-medium">@wakastellar/ui</h4>
          <p className="text-sm text-muted-foreground">
            Bibliothèque de composants React.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Composants</div>
          <Separator orientation="vertical" />
          <div>Blocks</div>
        </div>
      </div>
    ),
    code: `<div className="space-y-1">
  <h4 className="text-sm font-medium">@wakastellar/ui</h4>
  <p className="text-sm text-muted-foreground">
    Bibliothèque de composants React.
  </p>
</div>
<Separator className="my-4" />
<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Composants</div>
  <Separator orientation="vertical" />
  <div>Blocks</div>
</div>`,
  },

  "scroll-area": {
    preview: (
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        <div className="space-y-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="text-sm">
              Élément {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
    code: `<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  <div className="space-y-4">
    {items.map((item, i) => (
      <div key={i} className="text-sm">
        Élément {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>`,
  },

  "theme-selector": {
    preview: (
      <div className="flex gap-4">
        <ThemeSelector />
        <ThemeSelector variant="compact" />
      </div>
    ),
    code: `<ThemeSelector />
<ThemeSelector variant="compact" />`,
  },

  "language-selector": {
    preview: (
      <LanguageSelectorDemo />
    ),
    code: `import { LanguageSelector } from "@wakastellar/ui"

const languages = [
  { code: "fr", label: "Français", flagEmoji: "🇫🇷" },
  { code: "en", label: "English", flagEmoji: "🇬🇧" },
]

<LanguageSelector
  languages={languages}
  value="fr"
  onChange={(code) => console.log(code)}
/>

// Version compacte
<LanguageSelector
  languages={languages}
  value="fr"
  variant="compact"
/>`,
  },

  command: {
    preview: <CommandDemo />,
    code: `import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@wakastellar/ui"

// Command basique (inline)
<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Rechercher..." />
  <CommandList>
    <CommandEmpty>Aucun résultat.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendrier</span>
      </CommandItem>
      <CommandItem>
        <Smile className="mr-2 h-4 w-4" />
        <span>Rechercher des emojis</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Paramètres">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profil</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Paramètres</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// CommandDialog (modale avec ⌘K)
const [open, setOpen] = useState(false)

useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Rechercher..." />
  <CommandList>
    <CommandEmpty>Aucun résultat.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem onSelect={() => { /* action */ }}>
        <span>Action 1</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`,
  },

  code: {
    preview: (
      <div className="space-y-6">
        {/* Code inline */}
        <div>
          <p className="text-sm text-muted-foreground mb-3">Code inline</p>
          <p>
            Utilisez <Code>npm install @wakastellar/ui</Code> pour installer le package.
          </p>
        </div>

        {/* Code block simple */}
        <div>
          <p className="text-sm text-muted-foreground mb-3">Code block avec langage</p>
          <Code variant="block" language="typescript">
{`function greet(name: string): string {
  return \`Hello, \${name}!\`
}

const message = greet("World")
console.log(message)`}
          </Code>
        </div>

        {/* Code block avec filename et copy */}
        <div>
          <p className="text-sm text-muted-foreground mb-3">Avec nom de fichier et copie</p>
          <Code
            variant="block"
            language="tsx"
            filename="app.tsx"
            copyable
          >
{`import { Button } from "@wakastellar/ui"

export function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  )
}`}
          </Code>
        </div>

        {/* Code block avec numéros de ligne */}
        <div>
          <p className="text-sm text-muted-foreground mb-3">Avec numéros de ligne</p>
          <Code
            variant="block"
            language="javascript"
            showLineNumbers
          >
{`const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)`}
          </Code>
        </div>
      </div>
    ),
    code: `import { Code } from "@wakastellar/ui"

// Code inline
<p>
  Installez avec <Code>npm install @wakastellar/ui</Code>
</p>

// Code block avec coloration syntaxique
<Code variant="block" language="typescript">
  {\`function greet(name: string) {
    return \\\`Hello, \\\${name}!\\\`
  }\`}
</Code>

// Avec nom de fichier et bouton copier
<Code
  variant="block"
  language="tsx"
  filename="app.tsx"
  copyable
>
  {\`import { Button } from "@wakastellar/ui"\`}
</Code>

// Avec numéros de ligne
<Code
  variant="block"
  language="javascript"
  showLineNumbers
>
  {\`const app = express()\`}
</Code>

// Avec hauteur maximale (scroll)
<Code
  variant="block"
  language="json"
  maxHeight={200}
>
  {\`{ "long": "content" }\`}
</Code>`,
  },
}

function LanguageSelectorDemo() {
  const [lang, setLang] = useState("fr")
  const languages = [
    { code: "fr", label: "Français", flagEmoji: "🇫🇷" },
    { code: "en", label: "English", flagEmoji: "🇬🇧" },
  ]

  return (
    <div className="flex gap-4">
      <LanguageSelector
        languages={languages}
        value={lang}
        onChange={setLang}
      />
      <LanguageSelector
        languages={languages}
        value={lang}
        onChange={setLang}
        variant="compact"
      />
    </div>
  )
}

function CommandDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      {/* Command inline */}
      <div>
        <p className="text-sm text-muted-foreground mb-3">Command basique (inline)</p>
        <Command className="rounded-lg border shadow-md w-full max-w-[400px]">
          <CommandInput placeholder="Rechercher..." />
          <CommandList>
            <CommandEmpty>Aucun résultat.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculatrice</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Rechercher des emojis</span>
              </CommandItem>
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendrier</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Paramètres">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profil</span>
                <CommandShortcut>P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Facturation</span>
                <CommandShortcut>B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Paramètres</span>
                <CommandShortcut>S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      {/* CommandDialog */}
      <div>
        <p className="text-sm text-muted-foreground mb-3">CommandDialog (modale)</p>
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => setOpen(true)}>
            <span>Ouvrir Command Palette</span>
            <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">K</span>
            </kbd>
          </Button>
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Rechercher une commande..." />
          <CommandList>
            <CommandEmpty>Aucun résultat.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => setOpen(false)}>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculatrice</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Smile className="mr-2 h-4 w-4" />
                <span>Rechercher des emojis</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Paramètres">
              <CommandItem onSelect={() => setOpen(false)}>
                <User className="mr-2 h-4 w-4" />
                <span>Profil</span>
                <CommandShortcut>P</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Paramètres</span>
                <CommandShortcut>S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    </div>
  )
}
