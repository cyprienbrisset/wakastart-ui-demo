"use client"

import * as React from "react"
import {
  // Monitoring & Logs
  WakaLogViewer,
  defaultLogs,
  WakaTraceViewer,
  defaultTraceSpans,
  WakaAlertPanel,
  defaultPanelAlerts,
  // Containers & Kubernetes
  WakaContainerList,
  defaultContainers,
  WakaKubernetesOverview,
  defaultK8sNodes,
  defaultK8sPods,
  defaultK8sDeployments,
  defaultK8sServices,
  defaultK8sNamespaces,
  WakaPodCard,
  defaultPodDetails,
  WakaServiceGraph,
  defaultServices,
  defaultConnections,
  // CI/CD
  WakaBuildMatrix,
  defaultBuildMatrixColumns,
  defaultBuildMatrixRows,
  WakaTestReport,
  defaultTestSuites,
  defaultCoverage,
  WakaArtifactList,
  defaultArtifacts,
  WakaSecurityScanResult,
  defaultVulnerabilities,
  WakaDependencyTree,
  defaultDependencies,
  // Configuration
  WakaEnvVarEditor,
  defaultEnvVariables,
  WakaSecretCard,
  defaultSecret,
  WakaConfigComparator,
  defaultConfigEnvironments,
  WakaFeatureFlagRow,
  defaultFeatureFlags,
  // Database
  WakaDatabaseCard,
  defaultDatabase,
  defaultDatabases,
  WakaMigrationList,
  defaultMigrations,
  WakaQueryExplain,
  defaultQueryPlan,
} from "@wakastellar/ui"
import { ComponentShowcaseConfig } from "./types"

// ==================== Monitoring & Logs ====================

export const logViewerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Log Viewer par défaut",
      description: "Affichage des logs avec filtrage et recherche",
      preview: (
        <div className="w-full h-[400px] overflow-hidden">
          <WakaLogViewer
            logs={defaultLogs}
            showTimestamp
            showSource
          />
        </div>
      ),
      code: `import { WakaLogViewer, defaultLogs } from "@wakastellar/ui"

<WakaLogViewer
  logs={defaultLogs}
  showTimestamp
  showSource
/>`,
    },
    {
      title: "Avec streaming en temps réel",
      description: "Logs avec indicateur de streaming actif",
      preview: (
        <div className="w-full h-[400px] overflow-hidden">
          <WakaLogViewer
            logs={defaultLogs}
            isStreaming={true}
            showTimestamp
            showSource
            title="Application Logs"
          />
        </div>
      ),
      code: `<WakaLogViewer
  logs={logs}
  isStreaming={true}
  onToggleStreaming={() => setStreaming(!streaming)}
  showTimestamp
  showSource
  title="Application Logs"
/>`,
    },
  ],
}

export const traceViewerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Trace Viewer par défaut",
      description: "Visualisation des traces distribuées",
      preview: (
        <div className="w-full h-[500px] overflow-hidden">
          <WakaTraceViewer
            spans={defaultTraceSpans}
            traceId="abc123-xyz789"
          />
        </div>
      ),
      code: `import { WakaTraceViewer, defaultTraceSpans } from "@wakastellar/ui"

<WakaTraceViewer
  spans={defaultTraceSpans}
  traceId="abc123-xyz789"
/>`,
    },
  ],
}

export const alertPanelShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Panneau d'alertes",
      description: "Gestion des alertes avec filtrage par sévérité",
      preview: (
        <div className="w-full h-[500px] overflow-hidden">
          <WakaAlertPanel
            alerts={defaultPanelAlerts}
            title="Active Alerts"
          />
        </div>
      ),
      code: `import { WakaAlertPanel, defaultPanelAlerts } from "@wakastellar/ui"

<WakaAlertPanel
  alerts={defaultPanelAlerts}
  title="Active Alerts"
  onAcknowledge={(alert) => console.log("Acknowledged:", alert)}
  onResolve={(alert) => console.log("Resolved:", alert)}
/>`,
    },
  ],
}

// ==================== Containers & Kubernetes ====================

export const containerListShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Liste des conteneurs",
      description: "Affichage des conteneurs Docker avec actions",
      preview: (
        <div className="w-full h-[500px] overflow-hidden">
          <WakaContainerList
            containers={defaultContainers}
            title="Docker Containers"
          />
        </div>
      ),
      code: `import { WakaContainerList, defaultContainers } from "@wakastellar/ui"

<WakaContainerList
  containers={defaultContainers}
  title="Docker Containers"
  onStart={(container) => console.log("Start:", container)}
  onStop={(container) => console.log("Stop:", container)}
  onRestart={(container) => console.log("Restart:", container)}
/>`,
    },
  ],
}

export const kubernetesOverviewShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Vue d'ensemble Kubernetes",
      description: "Dashboard du cluster Kubernetes",
      preview: (
        <div className="w-full h-[600px] overflow-hidden">
          <WakaKubernetesOverview
            nodes={defaultK8sNodes}
            pods={defaultK8sPods}
            deployments={defaultK8sDeployments}
            services={defaultK8sServices}
            namespaces={defaultK8sNamespaces}
            clusterName="production-cluster"
          />
        </div>
      ),
      code: `import {
  WakaKubernetesOverview,
  defaultK8sNodes,
  defaultK8sPods,
  defaultK8sDeployments,
  defaultK8sServices,
  defaultK8sNamespaces
} from "@wakastellar/ui"

<WakaKubernetesOverview
  nodes={defaultK8sNodes}
  pods={defaultK8sPods}
  deployments={defaultK8sDeployments}
  services={defaultK8sServices}
  namespaces={defaultK8sNamespaces}
  clusterName="production-cluster"
/>`,
    },
  ],
}

export const podCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Carte de Pod",
      description: "Détails d'un pod Kubernetes",
      preview: (
        <WakaPodCard
          pod={defaultPodDetails}
          onViewLogs={() => console.log("View logs")}
          onExec={() => console.log("Exec into pod")}
          onDelete={() => console.log("Delete pod")}
        />
      ),
      code: `import { WakaPodCard, defaultPodDetails } from "@wakastellar/ui"

<WakaPodCard
  pod={defaultPodDetails}
  onViewLogs={() => console.log("View logs")}
  onExec={() => console.log("Exec into pod")}
  onDelete={() => console.log("Delete pod")}
/>`,
    },
  ],
}

export const serviceGraphShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Graphe des services",
      description: "Visualisation du maillage de services",
      preview: (
        <div className="w-full h-[500px] overflow-hidden">
          <WakaServiceGraph
            services={defaultServices}
            connections={defaultConnections}
          />
        </div>
      ),
      code: `import { WakaServiceGraph, defaultServices, defaultConnections } from "@wakastellar/ui"

<WakaServiceGraph
  services={defaultServices}
  connections={defaultConnections}
  onServiceClick={(service) => console.log("Clicked:", service)}
/>`,
    },
  ],
}

// ==================== CI/CD ====================

export const buildMatrixShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Matrice de build",
      description: "Vue matricielle des builds CI/CD",
      preview: (
        <WakaBuildMatrix
          columns={defaultBuildMatrixColumns}
          rows={defaultBuildMatrixRows}
          title="Build Matrix"
        />
      ),
      code: `import { WakaBuildMatrix, defaultBuildMatrixColumns, defaultBuildMatrixRows } from "@wakastellar/ui"

<WakaBuildMatrix
  columns={defaultBuildMatrixColumns}
  rows={defaultBuildMatrixRows}
  title="Build Matrix"
  onCellClick={(row, col) => console.log("Clicked:", row, col)}
/>`,
    },
  ],
}

export const testReportShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Rapport de tests",
      description: "Résultats des tests avec couverture",
      preview: (
        <div className="w-full h-[500px] overflow-hidden">
          <WakaTestReport
            suites={defaultTestSuites}
            coverage={defaultCoverage}
            title="Test Results"
          />
        </div>
      ),
      code: `import { WakaTestReport, defaultTestSuites, defaultCoverage } from "@wakastellar/ui"

<WakaTestReport
  suites={defaultTestSuites}
  coverage={defaultCoverage}
  title="Test Results"
/>`,
    },
  ],
}

export const artifactListShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Liste des artefacts",
      description: "Gestion des artefacts de build",
      preview: (
        <div className="w-full h-[400px] overflow-hidden">
          <WakaArtifactList
            artifacts={defaultArtifacts}
            title="Build Artifacts"
          />
        </div>
      ),
      code: `import { WakaArtifactList, defaultArtifacts } from "@wakastellar/ui"

<WakaArtifactList
  artifacts={defaultArtifacts}
  title="Build Artifacts"
  onDownload={(artifact) => console.log("Download:", artifact)}
  onDelete={(artifact) => console.log("Delete:", artifact)}
/>`,
    },
  ],
}

export const securityScanResultShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Résultats du scan de sécurité",
      description: "Vulnérabilités détectées avec sévérité",
      preview: (
        <div className="w-full h-[500px] overflow-hidden">
          <WakaSecurityScanResult
            vulnerabilities={defaultVulnerabilities}
            title="Security Scan"
          />
        </div>
      ),
      code: `import { WakaSecurityScanResult, defaultVulnerabilities } from "@wakastellar/ui"

<WakaSecurityScanResult
  vulnerabilities={defaultVulnerabilities}
  title="Security Scan"
  onVulnerabilityClick={(vuln) => console.log("View:", vuln)}
/>`,
    },
  ],
}

export const dependencyTreeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Arbre des dépendances",
      description: "Visualisation hiérarchique des dépendances",
      preview: (
        <div className="w-full h-[500px] overflow-hidden">
          <WakaDependencyTree
            dependencies={defaultDependencies}
            title="Dependencies"
          />
        </div>
      ),
      code: `import { WakaDependencyTree, defaultDependencies } from "@wakastellar/ui"

<WakaDependencyTree
  dependencies={defaultDependencies}
  title="Dependencies"
  onDependencyClick={(dep) => console.log("View:", dep)}
/>`,
    },
  ],
}

// ==================== Configuration ====================

export const envVarEditorShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Éditeur de variables d'environnement",
      description: "Gestion des variables avec support des secrets",
      preview: (
        <div className="w-full h-[400px] overflow-hidden">
          <WakaEnvVarEditor
            variables={defaultEnvVariables}
            title="Environment Variables"
          />
        </div>
      ),
      code: `import { WakaEnvVarEditor, defaultEnvVariables } from "@wakastellar/ui"

<WakaEnvVarEditor
  variables={defaultEnvVariables}
  title="Environment Variables"
  onChange={(vars) => console.log("Changed:", vars)}
  onSave={(vars) => console.log("Saved:", vars)}
/>`,
    },
  ],
}

export const secretCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Carte de secret",
      description: "Gestion d'un secret avec rotation",
      preview: (
        <WakaSecretCard
          secret={defaultSecret}
          onRotate={() => console.log("Rotate secret")}
          onCopy={() => console.log("Copy secret")}
          onView={() => console.log("View secret")}
          showHistory
        />
      ),
      code: `import { WakaSecretCard, defaultSecret } from "@wakastellar/ui"

<WakaSecretCard
  secret={defaultSecret}
  onRotate={() => console.log("Rotate secret")}
  onCopy={() => console.log("Copy secret")}
  onView={() => console.log("View secret")}
  showHistory
/>`,
    },
    {
      title: "Mode compact",
      description: "Version compacte pour les listes",
      preview: (
        <WakaSecretCard
          secret={defaultSecret}
          compact
          onCopy={() => console.log("Copy secret")}
          onRotate={() => console.log("Rotate secret")}
        />
      ),
      code: `<WakaSecretCard
  secret={defaultSecret}
  compact
  onCopy={() => console.log("Copy secret")}
  onRotate={() => console.log("Rotate secret")}
/>`,
    },
  ],
}

export const configComparatorShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Comparateur de configuration",
      description: "Comparaison des configurations entre environnements",
      preview: (
        <div className="w-full h-[500px] overflow-hidden">
          <WakaConfigComparator
            environments={defaultConfigEnvironments}
            title="Configuration Comparison"
          />
        </div>
      ),
      code: `import { WakaConfigComparator, defaultConfigEnvironments } from "@wakastellar/ui"

<WakaConfigComparator
  environments={defaultConfigEnvironments}
  title="Configuration Comparison"
/>`,
    },
  ],
}

export const featureFlagRowShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Ligne de feature flag",
      description: "Gestion des feature flags avec segments",
      preview: (
        <div className="space-y-2">
          {defaultFeatureFlags.slice(0, 3).map((flag) => (
            <WakaFeatureFlagRow
              key={flag.id}
              flag={flag}
              onToggle={() => console.log("Toggle:", flag.id)}
              onEdit={() => console.log("Edit:", flag.id)}
            />
          ))}
        </div>
      ),
      code: `import { WakaFeatureFlagRow, defaultFeatureFlags } from "@wakastellar/ui"

{featureFlags.map((flag) => (
  <WakaFeatureFlagRow
    key={flag.id}
    flag={flag}
    onToggle={() => console.log("Toggle:", flag.id)}
    onEdit={() => console.log("Edit:", flag.id)}
  />
))}`,
    },
  ],
}

// ==================== Database ====================

export const databaseCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Carte de base de données",
      description: "Métriques et statut d'une base de données",
      preview: (
        <WakaDatabaseCard
          database={defaultDatabase}
          onClick={() => console.log("Click")}
          onRefresh={() => console.log("Refresh")}
          detailed
        />
      ),
      code: `import { WakaDatabaseCard, defaultDatabase } from "@wakastellar/ui"

<WakaDatabaseCard
  database={defaultDatabase}
  onClick={() => console.log("Click")}
  onRefresh={() => console.log("Refresh")}
  detailed
/>`,
    },
    {
      title: "Grille de bases de données",
      description: "Vue multi-bases avec différents statuts",
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {defaultDatabases.slice(0, 2).map((db) => (
            <WakaDatabaseCard
              key={db.id}
              database={db}
              compact
            />
          ))}
        </div>
      ),
      code: `{databases.map((db) => (
  <WakaDatabaseCard
    key={db.id}
    database={db}
    compact
  />
))}`,
    },
  ],
}

export const migrationListShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Liste des migrations",
      description: "Historique des migrations de base de données",
      preview: (
        <div className="w-full">
          <WakaMigrationList
            migrations={defaultMigrations}
            currentVersion="20240125_001"
            showScripts
            title="Database Migrations"
          />
        </div>
      ),
      code: `import { WakaMigrationList, defaultMigrations } from "@wakastellar/ui"

<WakaMigrationList
  migrations={defaultMigrations}
  currentVersion="20240125_001"
  showScripts
  title="Database Migrations"
  onApply={(migration) => console.log("Apply:", migration)}
  onRollback={(migration) => console.log("Rollback:", migration)}
/>`,
    },
  ],
}

export const queryExplainShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "EXPLAIN de requête SQL",
      description: "Visualisation du plan d'exécution",
      preview: (
        <div className="w-full h-[500px] overflow-hidden">
          <WakaQueryExplain
            plan={defaultQueryPlan}
            title="Query Execution Plan"
          />
        </div>
      ),
      code: `import { WakaQueryExplain, defaultQueryPlan } from "@wakastellar/ui"

<WakaQueryExplain
  plan={defaultQueryPlan}
  title="Query Execution Plan"
/>`,
    },
  ],
}

// Export all DevOps showcases
export const devopsShowcases: Record<string, ComponentShowcaseConfig> = {
  // Monitoring & Logs
  "log-viewer": logViewerShowcase,
  "trace-viewer": traceViewerShowcase,
  "alert-panel": alertPanelShowcase,
  // Containers & Kubernetes
  "container-list": containerListShowcase,
  "kubernetes-overview": kubernetesOverviewShowcase,
  "pod-card": podCardShowcase,
  "service-graph": serviceGraphShowcase,
  // CI/CD
  "build-matrix": buildMatrixShowcase,
  "test-report": testReportShowcase,
  "artifact-list": artifactListShowcase,
  "security-scan-result": securityScanResultShowcase,
  "dependency-tree": dependencyTreeShowcase,
  // Configuration
  "env-var-editor": envVarEditorShowcase,
  "secret-card": secretCardShowcase,
  "config-comparator": configComparatorShowcase,
  "feature-flag-row": featureFlagRowShowcase,
  // Database
  "database-card": databaseCardShowcase,
  "migration-list": migrationListShowcase,
  "query-explain": queryExplainShowcase,
}
