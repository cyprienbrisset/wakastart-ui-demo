"use client"

import { Section } from "@/components/docs/section"
import { Callout } from "@/components/docs/callout"
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, CardDescription } from "@wakastellar/ui"
import { Figma, Download, Layers, Palette, Grid3X3, Copy } from "lucide-react"

export default function FigmaPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Figma</h1>
          <Badge>Coming Soon</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Kit UI Figma complet pour designer vos interfaces avec les composants @wakastellar/ui.
        </p>
      </div>

      {/* Overview */}
      <Section id="overview" title="Vue d'ensemble">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <Layers className="h-6 w-6 text-purple-500 shrink-0" />
                <div>
                  <CardTitle className="text-base">200+ Composants</CardTitle>
                  <CardDescription>Tous les composants de la librairie</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <Palette className="h-6 w-6 text-blue-500 shrink-0" />
                <div>
                  <CardTitle className="text-base">Variables de couleurs</CardTitle>
                  <CardDescription>Thèmes light et dark configurables</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <Grid3X3 className="h-6 w-6 text-green-500 shrink-0" />
                <div>
                  <CardTitle className="text-base">Auto Layout</CardTitle>
                  <CardDescription>Composants responsives et flexibles</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <Copy className="h-6 w-6 text-orange-500 shrink-0" />
                <div>
                  <CardTitle className="text-base">Variants</CardTitle>
                  <CardDescription>Toutes les variantes de chaque composant</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <Callout type="info" title="En développement">
          Le kit Figma est actuellement en cours de création. Inscrivez-vous pour être notifié de sa disponibilité.
        </Callout>
      </Section>

      {/* Preview */}
      <Section id="preview" title="Aperçu">
        <div className="aspect-video rounded-lg border bg-muted/30 flex items-center justify-center">
          <div className="text-center">
            <Figma className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Aperçu du kit Figma bientôt disponible</p>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" title="Fonctionnalités">
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Composants de base</CardTitle>
              <CardDescription>
                Button, Input, Select, Checkbox, Radio, Switch, Slider, Toggle, Badge, Avatar...
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Composants de layout</CardTitle>
              <CardDescription>
                Card, Dialog, Sheet, Tabs, Accordion, Collapsible, Separator...
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Composants de data</CardTitle>
              <CardDescription>
                Table, DataTable, Charts, Calendar, DatePicker, Progress...
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Composants de navigation</CardTitle>
              <CardDescription>
                Navigation Menu, Breadcrumb, Pagination, Tabs, Command Palette...
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Composants Waka</CardTitle>
              <CardDescription>
                Gamification, Infrastructure, Analytics, E-commerce, Onboarding...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Design Tokens */}
      <Section id="tokens" title="Design Tokens">
        <p className="text-muted-foreground mb-4">
          Le kit utilise des variables Figma alignées avec les CSS variables de la librairie.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Token Figma</th>
                <th className="text-left py-3 px-4 font-medium">CSS Variable</th>
                <th className="text-left py-3 px-4 font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">colors/background</td>
                <td className="py-3 px-4 font-mono text-sm">--background</td>
                <td className="py-3 px-4 text-muted-foreground">Fond principal</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">colors/foreground</td>
                <td className="py-3 px-4 font-mono text-sm">--foreground</td>
                <td className="py-3 px-4 text-muted-foreground">Texte principal</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">colors/primary</td>
                <td className="py-3 px-4 font-mono text-sm">--primary</td>
                <td className="py-3 px-4 text-muted-foreground">Couleur d'accent</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">colors/muted</td>
                <td className="py-3 px-4 font-mono text-sm">--muted</td>
                <td className="py-3 px-4 text-muted-foreground">Fonds secondaires</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-sm">radius/default</td>
                <td className="py-3 px-4 font-mono text-sm">--radius</td>
                <td className="py-3 px-4 text-muted-foreground">Border radius</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Get Notified */}
      <Section id="notify" title="Être notifié">
        <div className="p-6 rounded-lg border bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
          <div className="flex items-start gap-4">
            <Figma className="h-10 w-10 text-purple-600 dark:text-purple-400 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Kit Figma en préparation</h3>
              <p className="text-muted-foreground mb-4">
                Nous travaillons activement sur le kit Figma. Inscrivez-vous pour recevoir une notification
                dès sa sortie et bénéficier d'un accès anticipé.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href="https://github.com/wakastellar/ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    S'inscrire à la newsletter
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/wakastellar/ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Suivre sur GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
