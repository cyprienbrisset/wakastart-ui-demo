"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@wakastellar/ui"
import { CodeBlock } from "./code-block"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  className?: string
}

export function ComponentPreview({ children, code, className }: ComponentPreviewProps) {
  return (
    <Tabs defaultValue="preview" className={cn("w-full", className)}>
      <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="preview"
          className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
        >
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-0 border rounded-b-lg">
        <div className="flex min-h-[200px] items-center justify-center p-8">
          {children}
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-0">
        <CodeBlock code={code} />
      </TabsContent>
    </Tabs>
  )
}
