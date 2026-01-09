"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@wakastellar/ui"
import { cn } from "@/lib/utils"

interface DocTabsProps {
  defaultValue: string
  children: React.ReactNode
  className?: string
}

interface DocTabProps {
  value: string
  label: string
  children: React.ReactNode
}

export function DocTabs({ defaultValue, children, className }: DocTabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className={cn("my-6", className)}>
      {children}
    </Tabs>
  )
}

export function DocTabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <TabsList className={cn("w-full justify-start rounded-none border-b bg-transparent p-0 h-auto", className)}>
      {children}
    </TabsList>
  )
}

export function DocTabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <TabsTrigger
      value={value}
      className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
    >
      {children}
    </TabsTrigger>
  )
}

export function DocTabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <TabsContent value={value} className="mt-4">
      {children}
    </TabsContent>
  )
}

// Pre-configured package manager tabs
interface PackageManagerTabsProps {
  npm: string
  pnpm?: string
  yarn?: string
  bun?: string
}

export function PackageManagerTabs({ npm, pnpm, yarn, bun }: PackageManagerTabsProps) {
  return (
    <DocTabs defaultValue="pnpm">
      <DocTabsList>
        <DocTabsTrigger value="pnpm">pnpm</DocTabsTrigger>
        <DocTabsTrigger value="npm">npm</DocTabsTrigger>
        <DocTabsTrigger value="yarn">yarn</DocTabsTrigger>
        {bun && <DocTabsTrigger value="bun">bun</DocTabsTrigger>}
      </DocTabsList>
      <DocTabsContent value="pnpm">
        <pre className="p-4 rounded-lg bg-muted text-foreground text-sm overflow-x-auto">
          <code>{pnpm || npm.replace("npm install", "pnpm add").replace("npm i", "pnpm add")}</code>
        </pre>
      </DocTabsContent>
      <DocTabsContent value="npm">
        <pre className="p-4 rounded-lg bg-muted text-foreground text-sm overflow-x-auto">
          <code>{npm}</code>
        </pre>
      </DocTabsContent>
      <DocTabsContent value="yarn">
        <pre className="p-4 rounded-lg bg-muted text-foreground text-sm overflow-x-auto">
          <code>{yarn || npm.replace("npm install", "yarn add").replace("npm i", "yarn add")}</code>
        </pre>
      </DocTabsContent>
      {bun && (
        <DocTabsContent value="bun">
          <pre className="p-4 rounded-lg bg-muted text-foreground text-sm overflow-x-auto">
            <code>{bun}</code>
          </pre>
        </DocTabsContent>
      )}
    </DocTabs>
  )
}
