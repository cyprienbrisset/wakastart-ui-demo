"use client"

import { cn } from "@/lib/utils"

interface StepProps {
  title: string
  children: React.ReactNode
}

interface StepsProps {
  children: React.ReactNode
  className?: string
}

export function Steps({ children, className }: StepsProps) {
  return (
    <div className={cn("relative space-y-4 pl-8 my-6", className)}>
      <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
      {children}
    </div>
  )
}

export function Step({ title, children }: StepProps) {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-0 flex h-6 w-6 items-center justify-center rounded-full border bg-background text-xs font-medium">
        <span className="sr-only">Step</span>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">{title}</h3>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

// Numbered version
export function StepsNumbered({ children, className }: StepsProps) {
  return (
    <ol className={cn("relative space-y-6 pl-10 my-6 list-none", className)}>
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
      {children}
    </ol>
  )
}

interface StepNumberedProps {
  number: number
  title: string
  children: React.ReactNode
}

export function StepNumbered({ number, title, children }: StepNumberedProps) {
  return (
    <li className="relative">
      <div className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background text-sm font-bold text-primary">
        {number}
      </div>
      <div className="space-y-2 pt-0.5">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </li>
  )
}
