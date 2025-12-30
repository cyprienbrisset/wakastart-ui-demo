"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Progress,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@wakastellar/ui"
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  CreditCard,
  Activity,
  DollarSign,
  MoreHorizontal,
} from "lucide-react"

const stats = [
  {
    title: "Revenus totaux",
    value: "€45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Abonnements",
    value: "+2,350",
    change: "+180.1%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Ventes",
    value: "+12,234",
    change: "+19%",
    trend: "up",
    icon: CreditCard,
  },
  {
    title: "Actifs maintenant",
    value: "+573",
    change: "+201",
    trend: "up",
    icon: Activity,
  },
]

const recentSales = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+€1,999.00", avatar: "OM" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+€39.00", avatar: "JL" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+€299.00", avatar: "IN" },
  { name: "William Kim", email: "will@email.com", amount: "+€99.00", avatar: "WK" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+€39.00", avatar: "SD" },
]

const transactions = [
  { id: "INV001", status: "Payé", method: "Carte de crédit", amount: "€250.00", date: "2024-01-15" },
  { id: "INV002", status: "En attente", method: "PayPal", amount: "€150.00", date: "2024-01-14" },
  { id: "INV003", status: "Payé", method: "Virement", amount: "€350.00", date: "2024-01-13" },
  { id: "INV004", status: "Annulé", method: "Carte de crédit", amount: "€450.00", date: "2024-01-12" },
  { id: "INV005", status: "Payé", method: "PayPal", amount: "€550.00", date: "2024-01-11" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Bienvenue dans votre tableau de bord.
          </p>
        </div>
        <Button>Télécharger le rapport</Button>
      </header>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span>par rapport au mois dernier</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="analytics">Analytiques</TabsTrigger>
          <TabsTrigger value="reports">Rapports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Chart Placeholder */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Aperçu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-lg">
                  <p className="text-muted-foreground">
                    Graphique des revenus (WakaBarChart)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Sales */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Ventes récentes</CardTitle>
                <CardDescription>Vous avez fait 265 ventes ce mois-ci.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentSales.map((sale) => (
                    <div key={sale.email} className="flex items-center">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback>{sale.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{sale.name}</p>
                        <p className="text-sm text-muted-foreground">{sale.email}</p>
                      </div>
                      <div className="ml-auto font-medium">{sale.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Objectif mensuel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€35,000 / €50,000</div>
                <Progress value={70} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">70% atteint</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Nouveaux clients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573 / 1,000</div>
                <Progress value={57} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">57% de l'objectif</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Taux de conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5%</div>
                <Progress value={85} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">+2.5% cette semaine</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytiques</CardTitle>
              <CardDescription>Analyse détaillée de vos performances.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">Graphiques analytiques avancés</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Transactions récentes</CardTitle>
              <CardDescription>Liste des dernières transactions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Facture</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Méthode</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Montant</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell className="font-medium">{tx.id}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            tx.status === "Payé"
                              ? "default"
                              : tx.status === "En attente"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {tx.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{tx.method}</TableCell>
                      <TableCell>{tx.date}</TableCell>
                      <TableCell className="text-right">{tx.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
