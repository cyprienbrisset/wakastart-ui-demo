"use client"

import {
  WakaBarChart,
  WakaLineChart,
  WakaAreaChart,
  WakaPieChart,
  WakaSparkline,
  Waka3DPieChart,
  WakaRadarScore,
  WakaFunnelChart,
  WakaCohortTable,
  WakaSankeyDiagram,
  WakaTreemapChart,
  WakaHeatmap,
  WakaContributionGraph,
  WakaCostBreakdown,
  WakaBudgetBurn,
  WakaMetricSparkline,
} from '@wakastellar/ui'
import { ComponentShowcaseConfig } from './types'

// ============================================
// CHART DATA
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

// ============================================
// BAR CHART SHOWCASE
// ============================================
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

// ============================================
// LINE CHART SHOWCASE
// ============================================
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

// ============================================
// AREA CHART SHOWCASE
// ============================================
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

// ============================================
// PIE CHART SHOWCASE
// ============================================
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

// ============================================
// SPARKLINE SHOWCASE
// ============================================
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
// FUNNEL CHART SHOWCASE
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

// ============================================
// COHORT TABLE SHOWCASE
// ============================================
export const cohortTableShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Analyse de cohorte",
      description: "Affiche la retention par cohorte temporelle",
      preview: (
        <WakaCohortTable
          data={[
            { id: "jan24", label: "Jan 2024", size: 1000, date: new Date("2024-01-01"), data: [{ value: 100, count: 1000 }, { value: 80, count: 800 }, { value: 65, count: 650 }, { value: 55, count: 550 }] },
            { id: "feb24", label: "Fev 2024", size: 950, date: new Date("2024-02-01"), data: [{ value: 100, count: 950 }, { value: 75, count: 712 }, { value: 60, count: 570 }] },
            { id: "mar24", label: "Mar 2024", size: 1100, date: new Date("2024-03-01"), data: [{ value: 100, count: 1100 }, { value: 82, count: 902 }] },
          ]}
          period="month"
          colorScale={{ min: "#fee2e2", max: "#ef4444" }}
        />
      ),
      code: `<WakaCohortTable
  data={[
    { id: "jan24", label: "Jan 2024", size: 1000, date: new Date("2024-01-01"), data: [{ value: 100, count: 1000 }, { value: 80, count: 800 }] },
    { id: "feb24", label: "Fev 2024", size: 950, date: new Date("2024-02-01"), data: [{ value: 100, count: 950 }, { value: 75, count: 712 }] },
  ]}
  period="month"
  colorScale={{ min: "#fee2e2", max: "#ef4444" }}
/>`,
    },
  ],
}

// ============================================
// SANKEY DIAGRAM SHOWCASE
// ============================================
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

// ============================================
// TREEMAP CHART SHOWCASE
// ============================================
export const treemapChartShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Treemap",
      description: "Visualise des donnees hierarchiques en rectangles",
      preview: (
        <WakaTreemapChart
          data={[
            { id: "electronics", label: "Electronique", value: 45000, children: [
              { id: "phones", label: "Smartphones", value: 25000 },
              { id: "laptops", label: "Laptops", value: 15000 },
              { id: "accessories", label: "Accessoires", value: 5000 },
            ]},
            { id: "clothing", label: "Vetements", value: 30000 },
            { id: "home", label: "Maison", value: 20000 },
            { id: "sports", label: "Sports", value: 15000 },
          ]}
          height={300}
          colors={["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"]}
          showTooltip
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
  showTooltip
/>`,
    },
  ],
}

// ============================================
// HEATMAP SHOWCASE
// ============================================
export const heatmapShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Carte de chaleur",
      description: "Visualise des donnees en grille avec intensite",
      preview: (
        <WakaHeatmap
          data={{
            values: [
              [10, 25, 15, 20, 30],
              [45, 60, 55, 50, 65],
              [30, 40, 35, 45, 50],
              [20, 35, 25, 30, 40],
            ],
            rowLabels: ["9h", "12h", "15h", "18h"],
            columnLabels: ["Lun", "Mar", "Mer", "Jeu", "Ven"],
          }}
          colorScheme={{ type: "sequential", colors: ["#f0fdf4", "#22c55e"] }}
          showTooltip
        />
      ),
      code: `<WakaHeatmap
  data={{
    values: [
      [10, 25, 15],
      [45, 60, 55],
      [30, 40, 35],
    ],
    rowLabels: ["9h", "12h", "15h"],
    columnLabels: ["Lun", "Mar", "Mer"],
  }}
  colorScheme={{ type: "sequential", colors: ["#f0fdf4", "#22c55e"] }}
  showTooltip
/>`,
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
// EXPORT ALL CHART SHOWCASES
// ============================================
export const chartShowcases = {
  "bar-chart": barChartShowcase,
  "line-chart": lineChartShowcase,
  "area-chart": areaChartShowcase,
  "pie-chart": pieChartShowcase,
  "sparkline": sparklineShowcase,
  "3d-pie-chart": threeDPieChartShowcase,
  "radar-score": radarScoreShowcase,
  "funnel-chart": funnelChartShowcase,
  "cohort-table": cohortTableShowcase,
  "sankey-diagram": sankeyDiagramShowcase,
  "treemap-chart": treemapChartShowcase,
  "heatmap": heatmapShowcase,
  "contribution-graph": contributionGraphShowcase,
  "cost-breakdown": costBreakdownShowcase,
  "budget-burn": budgetBurnShowcase,
  "metric-sparkline": metricSparklineShowcase,
}
