"use client"

import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { Badge } from "@wakastellar/ui"
import { Accessibility, Eye, Keyboard, Volume2, Check } from "lucide-react"

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Accessibilité</h1>
          <Badge variant="outline" className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
            <Accessibility className="h-3 w-3 mr-1" />
            WCAG 2.1
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          @wakastellar/ui est conçu pour être accessible à tous. Découvrez nos principes et bonnes pratiques.
        </p>
      </div>

      {/* Overview */}
      <Section id="overview" title="Vue d'ensemble">
        <p className="text-muted-foreground mb-4">
          Tous nos composants sont construits sur <strong>Radix UI</strong>, une bibliothèque de primitives
          accessibles qui respecte les standards WAI-ARIA.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Keyboard className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Navigation clavier</p>
              <p className="text-sm text-muted-foreground">Tous les composants interactifs sont accessibles au clavier</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Volume2 className="h-6 w-6 text-purple-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Lecteurs d'écran</p>
              <p className="text-sm text-muted-foreground">Attributs ARIA pour une lecture claire du contenu</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Eye className="h-6 w-6 text-green-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Contraste visuel</p>
              <p className="text-sm text-muted-foreground">Ratios de contraste conformes WCAG AA</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Accessibility className="h-6 w-6 text-orange-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Focus visible</p>
              <p className="text-sm text-muted-foreground">Indicateurs de focus clairs et visibles</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Keyboard Navigation */}
      <Section id="keyboard" title="Navigation clavier">
        <p className="text-muted-foreground mb-4">
          Tous les composants interactifs supportent la navigation au clavier selon les patterns WAI-ARIA.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-4">Raccourcis courants</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Touche</th>
                <th className="text-left py-3 px-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4"><kbd className="px-2 py-1 rounded bg-muted text-xs">Tab</kbd></td>
                <td className="py-3 px-4 text-muted-foreground">Naviguer vers l'élément suivant</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><kbd className="px-2 py-1 rounded bg-muted text-xs">Shift + Tab</kbd></td>
                <td className="py-3 px-4 text-muted-foreground">Naviguer vers l'élément précédent</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><kbd className="px-2 py-1 rounded bg-muted text-xs">Enter</kbd> / <kbd className="px-2 py-1 rounded bg-muted text-xs">Space</kbd></td>
                <td className="py-3 px-4 text-muted-foreground">Activer l'élément focalisé</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><kbd className="px-2 py-1 rounded bg-muted text-xs">Escape</kbd></td>
                <td className="py-3 px-4 text-muted-foreground">Fermer les modales, menus, popovers</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><kbd className="px-2 py-1 rounded bg-muted text-xs">↑</kbd> <kbd className="px-2 py-1 rounded bg-muted text-xs">↓</kbd></td>
                <td className="py-3 px-4 text-muted-foreground">Naviguer dans les listes, menus, selects</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><kbd className="px-2 py-1 rounded bg-muted text-xs">Home</kbd> / <kbd className="px-2 py-1 rounded bg-muted text-xs">End</kbd></td>
                <td className="py-3 px-4 text-muted-foreground">Aller au premier/dernier élément</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-4">Composants spécifiques</h3>

        <div className="space-y-4">
          <div className="p-4 rounded-lg border">
            <h4 className="font-medium mb-2">Dialog / Modal</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Focus trap automatique</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Fermeture avec Escape</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Retour du focus à l'élément déclencheur</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> aria-modal et role="dialog"</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border">
            <h4 className="font-medium mb-2">Tabs</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Navigation avec flèches gauche/droite</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Home/End pour premier/dernier onglet</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Activation automatique ou manuelle</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> role="tablist", "tab", "tabpanel"</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border">
            <h4 className="font-medium mb-2">Select / Dropdown</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Ouverture avec Enter, Space, flèches</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Recherche par frappe (typeahead)</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Fermeture avec Escape</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> aria-expanded, aria-selected</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ARIA Attributes */}
      <Section id="aria" title="Attributs ARIA">
        <p className="text-muted-foreground mb-4">
          Les composants incluent automatiquement les attributs ARIA appropriés.
          Vous pouvez également les personnaliser si nécessaire.
        </p>

        <CodeBlock
          code={`// Les attributs ARIA sont gérés automatiquement
<Dialog>
  <DialogTrigger>Ouvrir</DialogTrigger>
  <DialogContent>
    {/* Le DialogContent a automatiquement:
        - role="dialog"
        - aria-modal="true"
        - aria-labelledby (lié au DialogTitle)
        - aria-describedby (lié au DialogDescription)
    */}
    <DialogTitle>Titre</DialogTitle>
    <DialogDescription>Description</DialogDescription>
  </DialogContent>
</Dialog>

// Personnalisation si nécessaire
<Button aria-label="Fermer le menu" aria-expanded={isOpen}>
  <X className="h-4 w-4" />
</Button>`}
          language="tsx"
        />

        <Callout type="tip" title="Astuce">
          Utilisez <code>aria-label</code> pour les boutons avec uniquement des icônes,
          ou ajoutez un <code>&lt;span className="sr-only"&gt;</code> pour le texte accessible.
        </Callout>
      </Section>

      {/* Screen Reader Text */}
      <Section id="sr-only" title="Texte pour lecteurs d'écran">
        <p className="text-muted-foreground mb-4">
          La classe utilitaire <code className="px-1.5 py-0.5 rounded bg-muted text-sm">sr-only</code> masque visuellement
          le texte tout en le gardant accessible aux lecteurs d'écran.
        </p>

        <CodeBlock
          code={`// Bouton avec icône et texte accessible
<Button variant="ghost" size="icon">
  <Moon className="h-5 w-5" />
  <span className="sr-only">Activer le mode sombre</span>
</Button>

// Lien "Lire la suite" accessible
<a href="/article/1">
  <span className="sr-only">Lire l'article complet sur </span>
  Introduction à React
  <span className="sr-only"> - publié le 15 janvier 2024</span>
</a>

// Table avec en-tête accessible
<table>
  <caption className="sr-only">
    Liste des utilisateurs avec leur rôle et date d'inscription
  </caption>
  {/* ... */}
</table>`}
          language="tsx"
        />
      </Section>

      {/* Focus Management */}
      <Section id="focus" title="Gestion du focus">
        <p className="text-muted-foreground mb-4">
          Les indicateurs de focus sont essentiels pour la navigation au clavier.
          Nos composants utilisent des styles de focus visibles et cohérents.
        </p>

        <CodeBlock
          code={`/* Les styles de focus sont définis via les classes Tailwind */
.focus-visible:outline-none
.focus-visible:ring-2
.focus-visible:ring-ring
.focus-visible:ring-offset-2

/* Exemple de composant avec focus personnalisé */
<Input
  className="focus-visible:ring-primary"
  placeholder="Focus personnalisé"
/>`}
          language="css"
        />

        <Callout type="warning" title="Important">
          N'utilisez jamais <code>outline: none</code> sans fournir un indicateur de focus alternatif.
          Cela rendrait l'interface inutilisable pour les utilisateurs de clavier.
        </Callout>
      </Section>

      {/* Color Contrast */}
      <Section id="contrast" title="Contraste des couleurs">
        <p className="text-muted-foreground mb-4">
          Nos thèmes respectent les ratios de contraste WCAG AA (4.5:1 pour le texte normal, 3:1 pour le texte large).
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          <div className="p-4 rounded-lg bg-background border text-foreground text-center">
            <p className="font-medium">Foreground</p>
            <p className="text-xs text-muted-foreground mt-1">sur Background</p>
          </div>
          <div className="p-4 rounded-lg bg-primary text-primary-foreground text-center">
            <p className="font-medium">Primary</p>
            <p className="text-xs opacity-80 mt-1">Foreground</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary text-secondary-foreground text-center">
            <p className="font-medium">Secondary</p>
            <p className="text-xs opacity-80 mt-1">Foreground</p>
          </div>
          <div className="p-4 rounded-lg bg-destructive text-destructive-foreground text-center">
            <p className="font-medium">Destructive</p>
            <p className="text-xs opacity-80 mt-1">Foreground</p>
          </div>
        </div>

        <Callout type="info" title="Vérification du contraste">
          Utilisez des outils comme <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" className="underline">WebAIM Contrast Checker</a> pour
          vérifier le contraste de vos thèmes personnalisés.
        </Callout>
      </Section>

      {/* Reduced Motion */}
      <Section id="reduced-motion" title="Préférence de mouvement réduit">
        <p className="text-muted-foreground mb-4">
          Nos animations respectent la préférence <code className="px-1.5 py-0.5 rounded bg-muted text-sm">prefers-reduced-motion</code>
          pour les utilisateurs sensibles aux animations.
        </p>

        <CodeBlock
          code={`/* Les animations sont désactivées automatiquement */
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Utiliser motion-safe pour les animations optionnelles */
<div className="motion-safe:animate-bounce">
  Rebondit seulement si le mouvement est accepté
</div>`}
          language="css"
        />
      </Section>

      {/* Testing */}
      <Section id="testing" title="Tests d'accessibilité">
        <p className="text-muted-foreground mb-4">
          Nous recommandons de tester régulièrement l'accessibilité de votre application.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-4">Outils recommandés</h3>
        <div className="space-y-3">
          <div className="p-4 rounded-lg border">
            <h4 className="font-medium">axe DevTools</h4>
            <p className="text-sm text-muted-foreground">Extension navigateur pour détecter les problèmes d'accessibilité</p>
          </div>
          <div className="p-4 rounded-lg border">
            <h4 className="font-medium">WAVE</h4>
            <p className="text-sm text-muted-foreground">Outil d'évaluation d'accessibilité web</p>
          </div>
          <div className="p-4 rounded-lg border">
            <h4 className="font-medium">Lighthouse</h4>
            <p className="text-sm text-muted-foreground">Audit intégré dans Chrome DevTools</p>
          </div>
          <div className="p-4 rounded-lg border">
            <h4 className="font-medium">jest-axe</h4>
            <p className="text-sm text-muted-foreground">Tests automatisés d'accessibilité avec Jest</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-4">Tests avec jest-axe</h3>
        <CodeBlock
          code={`import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { Button } from "@wakastellar/ui"

expect.extend(toHaveNoViolations)

describe("Button", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Button>Click me</Button>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})`}
          language="tsx"
        />
      </Section>

      {/* Checklist */}
      <Section id="checklist" title="Checklist d'accessibilité">
        <div className="space-y-2">
          {[
            "Tous les éléments interactifs sont accessibles au clavier",
            "Les indicateurs de focus sont visibles",
            "Les images ont des attributs alt descriptifs",
            "Les formulaires ont des labels associés aux inputs",
            "Les erreurs de formulaire sont clairement identifiées",
            "Le contraste des couleurs est suffisant (WCAG AA)",
            "La hiérarchie des titres est logique (h1, h2, h3...)",
            "Les animations respectent prefers-reduced-motion",
            "Les modales ont un focus trap",
            "Le contenu dynamique est annoncé aux lecteurs d'écran",
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              <span className="text-sm">{item}</span>
            </label>
          ))}
        </div>
      </Section>
    </div>
  )
}
