"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@wakastellar/ui"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface LinkCardProps {
  href: string
  title: string
  description?: string
  icon?: React.ReactNode
  className?: string
  external?: boolean
}

export function LinkCard({ href, title, description, icon, className, external }: LinkCardProps) {
  const content = (
    <Card className={cn("group h-full transition-all hover:bg-muted/50 hover:border-primary/20", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          {icon && <div className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</div>}
          <CardTitle className="text-base group-hover:text-primary transition-colors flex items-center gap-2">
            {title}
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </CardTitle>
        </div>
      </CardHeader>
      {description && (
        <CardContent className="pt-0">
          <CardDescription>{description}</CardDescription>
        </CardContent>
      )}
    </Card>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <Link href={href}>{content}</Link>
}

interface LinkCardGridProps {
  children: React.ReactNode
  className?: string
  columns?: 1 | 2 | 3
}

export function LinkCardGrid({ children, className, columns = 2 }: LinkCardGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 my-6",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  )
}
