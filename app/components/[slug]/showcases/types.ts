import { ReactNode } from "react"

export interface ShowcaseExample {
  title: string
  description?: string
  preview: ReactNode
  code: string
}

export interface VariantOption {
  name: string
  values: string[]
  default: string
}

export interface ComponentShowcaseConfig {
  title?: string
  description?: string
  component?: string
  examples: ShowcaseExample[]
  variants?: VariantOption[]
  renderPlayground?: (variants: Record<string, string>) => ReactNode
  getPlaygroundCode?: (variants: Record<string, string>) => string
}
