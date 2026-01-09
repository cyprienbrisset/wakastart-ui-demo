"use client"

import { cn } from "@/lib/utils"
import { AlertCircle, Info, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react"

type CalloutType = "info" | "warning" | "error" | "success" | "tip"

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
  className?: string
}

const calloutConfig: Record<CalloutType, { icon: React.ElementType; className: string }> = {
  info: {
    icon: Info,
    className: "bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800 text-yellow-900 dark:text-yellow-100",
  },
  error: {
    icon: AlertCircle,
    className: "bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800 text-red-900 dark:text-red-100",
  },
  success: {
    icon: CheckCircle2,
    className: "bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800 text-green-900 dark:text-green-100",
  },
  tip: {
    icon: Lightbulb,
    className: "bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-100",
  },
}

export function Callout({ type = "info", title, children, className }: CalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border p-4 my-4",
        config.className,
        className
      )}
    >
      <Icon className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="flex-1 space-y-1">
        {title && <p className="font-medium">{title}</p>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  )
}
