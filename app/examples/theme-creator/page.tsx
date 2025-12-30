"use client"

import { WakaThemeCreatorBlock, defaultThemes } from "@wakastellar/ui"

export default function ThemeCreatorPage() {
  return (
    <WakaThemeCreatorBlock
      themes={defaultThemes}
      onSave={async (theme) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log("[Demo] Theme saved:", theme)
      }}
      onUploadAsset={async (file, assetType) => {
        await new Promise(resolve => setTimeout(resolve, 500))
        const url = URL.createObjectURL(file)
        console.log(`[Demo] Asset uploaded: ${assetType}`, url)
        return url
      }}
      onThemeChange={(theme) => {
        console.log("[Demo] Theme changed:", theme.name)
      }}
      previewTabs={['login', 'dashboard', 'chat']}
    />
  )
}
