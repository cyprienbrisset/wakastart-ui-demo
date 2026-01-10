import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@wakastellar/ui/styles"
import "./globals.css"
import { Providers } from "@/components/providers"
import { SiteHeader } from "@/components/layout/site-header"
import { MainContent } from "@/components/layout/main-content"
import { AppNavigation } from "@/components/layout/app-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "@wakastellar/ui - Documentation",
  description: "Bibliotheque de 200+ composants React professionnels, accessibles et personnalisables.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <SiteHeader />
            <MainContent>{children}</MainContent>
            <AppNavigation />
          </div>
        </Providers>
      </body>
    </html>
  )
}
