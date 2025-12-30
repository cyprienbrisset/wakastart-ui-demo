import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@wakastellar/ui/dist/ui.css"
import "./globals.css"
import { Providers } from "@/components/providers"
import { SiteHeader } from "@/components/layout/site-header"
import { SidebarNav } from "@/components/layout/sidebar-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "@wakastellar/ui - Documentation",
  description: "Bibliothèque de 85+ composants React professionnels, accessibles et personnalisables.",
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
            <div className="flex-1 flex">
              <SidebarNav />
              <main className="flex-1 overflow-auto">
                <div className="container py-6 lg:py-8">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
