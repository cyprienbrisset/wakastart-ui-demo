"use client"

import Link from "next/link"
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
  const Wrapper = external ? "a" : Link

  return (
    <Wrapper
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group flex flex-col gap-2 rounded-lg border p-4 transition-all hover:bg-muted/50 hover:border-primary/20",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {icon && <div className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</div>}
        <h3 className="font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
          {title}
          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </h3>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </Wrapper>
  )
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
