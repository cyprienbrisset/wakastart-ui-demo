"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@wakastellar/ui"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const revenueData = [
  { month: "Jan", revenus: 4000, depenses: 2400, profit: 1600 },
  { month: "Fév", revenus: 3000, depenses: 1398, profit: 1602 },
  { month: "Mar", revenus: 2000, depenses: 9800, profit: -7800 },
  { month: "Avr", revenus: 2780, depenses: 3908, profit: -1128 },
  { month: "Mai", revenus: 1890, depenses: 4800, profit: -2910 },
  { month: "Juin", revenus: 2390, depenses: 3800, profit: -1410 },
  { month: "Juil", revenus: 3490, depenses: 4300, profit: -810 },
  { month: "Août", revenus: 4000, depenses: 2400, profit: 1600 },
  { month: "Sep", revenus: 5000, depenses: 3200, profit: 1800 },
  { month: "Oct", revenus: 6000, depenses: 3500, profit: 2500 },
  { month: "Nov", revenus: 5500, depenses: 3800, profit: 1700 },
  { month: "Déc", revenus: 7000, depenses: 4200, profit: 2800 },
]

const visitorsData = [
  { name: "Lun", visiteurs: 4000, pageVues: 2400 },
  { name: "Mar", visiteurs: 3000, pageVues: 1398 },
  { name: "Mer", visiteurs: 2000, pageVues: 9800 },
  { name: "Jeu", visiteurs: 2780, pageVues: 3908 },
  { name: "Ven", visiteurs: 1890, pageVues: 4800 },
  { name: "Sam", visiteurs: 2390, pageVues: 3800 },
  { name: "Dim", visiteurs: 3490, pageVues: 4300 },
]

const categoryData = [
  { name: "Électronique", value: 400 },
  { name: "Vêtements", value: 300 },
  { name: "Maison", value: 200 },
  { name: "Sports", value: 150 },
  { name: "Autres", value: 100 },
]

const salesByRegion = [
  { region: "Île-de-France", ventes: 4000 },
  { region: "Auvergne-Rhône-Alpes", ventes: 3000 },
  { region: "Nouvelle-Aquitaine", ventes: 2000 },
  { region: "Occitanie", ventes: 2780 },
  { region: "Hauts-de-France", ventes: 1890 },
  { region: "Provence-Alpes-Côte d'Azur", ventes: 2390 },
]

const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "#10b981", "#f59e0b", "#ef4444"]

export default function ChartsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Charts</h1>
        <p className="text-muted-foreground">
          Galerie de graphiques basés sur Recharts.
        </p>
      </header>

      <Tabs defaultValue="bar" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="bar">Barres</TabsTrigger>
          <TabsTrigger value="line">Lignes</TabsTrigger>
          <TabsTrigger value="area">Aires</TabsTrigger>
          <TabsTrigger value="pie">Camembert</TabsTrigger>
          <TabsTrigger value="mixed">Mixte</TabsTrigger>
        </TabsList>

        {/* Bar Charts */}
        <TabsContent value="bar" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenus mensuels</CardTitle>
                <CardDescription>Comparaison revenus vs dépenses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="revenus" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="depenses" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ventes par région</CardTitle>
                <CardDescription>Top régions en termes de ventes</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesByRegion} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis type="number" className="text-xs" />
                    <YAxis dataKey="region" type="category" className="text-xs" width={150} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Bar dataKey="ventes" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Line Charts */}
        <TabsContent value="line" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Évolution des profits</CardTitle>
                <CardDescription>Suivi mensuel des profits</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="profit"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trafic hebdomadaire</CardTitle>
                <CardDescription>Visiteurs et pages vues</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={visitorsData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="visiteurs"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="pageVues"
                      stroke="#10b981"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Area Charts */}
        <TabsContent value="area" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Analyse des revenus</CardTitle>
                  <CardDescription>Vue détaillée avec aires empilées</CardDescription>
                </div>
                <Select defaultValue="year">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="year">Cette année</SelectItem>
                    <SelectItem value="quarter">Ce trimestre</SelectItem>
                    <SelectItem value="month">Ce mois</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenus" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorDepenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="revenus"
                    stroke="hsl(var(--primary))"
                    fillOpacity={1}
                    fill="url(#colorRevenus)"
                  />
                  <Area
                    type="monotone"
                    dataKey="depenses"
                    stroke="#ef4444"
                    fillOpacity={1}
                    fill="url(#colorDepenses)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pie Charts */}
        <TabsContent value="pie" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Répartition par catégorie</CardTitle>
                <CardDescription>Distribution des ventes</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Donut Chart</CardTitle>
                <CardDescription>Avec trou central</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Mixed Charts */}
        <TabsContent value="mixed" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tableau de bord complet</CardTitle>
              <CardDescription>Combinaison de différents types de graphiques</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Mini stats */}
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">Revenus totaux</p>
                    <p className="text-2xl font-bold">€45,231</p>
                    <div className="h-[60px] mt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData.slice(-6)}>
                          <Line
                            type="monotone"
                            dataKey="revenus"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">Visiteurs</p>
                    <p className="text-2xl font-bold">12,543</p>
                    <div className="h-[60px] mt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={visitorsData}>
                          <Area
                            type="monotone"
                            dataKey="visiteurs"
                            stroke="#10b981"
                            fill="#10b98133"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Main chart */}
                <div className="lg:col-span-2">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)",
                        }}
                      />
                      <Bar dataKey="revenus" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      <Line type="monotone" dataKey="profit" stroke="#f59e0b" strokeWidth={2} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
