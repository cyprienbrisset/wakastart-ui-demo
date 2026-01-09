"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ScrollArea, Sheet, SheetContent, SheetTrigger, Button } from "@wakastellar/ui"
import { cn } from "@/lib/utils"
import { docsNavigation } from "@/config/navigation"
import { Menu } from "lucide-react"

function DocsSidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <ScrollArea className="h-full py-6 px-4">
      <div className="space-y-6">
        {docsNavigation.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 px-2 text-sm font-semibold tracking-tight text-foreground">
              {section.title}
            </h4>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "block rounded-md px-2 py-1.5 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {item.title}
                  {item.isNew && (
                    <span className="ml-2 rounded bg-primary/10 px-1.5 py-0.5 text-xs text-primary">
                      New
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

function DocsSidebarNav() {
  return (
    <aside className="hidden lg:block w-56 xl:w-64 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] border-r bg-background">
      <DocsSidebarContent />
    </aside>
  )
}

function MobileDocsSidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const currentPage = docsNavigation
    .flatMap(section => section.items)
    .find(item => item.href === pathname)

  return (
    <div className="lg:hidden sticky top-14 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 bg-background/95 backdrop-blur border-b">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center gap-2">
              <Menu className="h-4 w-4" />
              <span className="font-medium">{currentPage?.title || "Documentation"}</span>
            </span>
            <span className="text-xs text-muted-foreground">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[min(100vw-3rem,280px)] p-0">
          <DocsSidebarContent onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col lg:flex-row -mx-4 sm:-mx-6 lg:-mx-10 -my-4 sm:-my-6 lg:-my-8">
      <DocsSidebarNav />
      <div className="flex-1 min-w-0">
        <MobileDocsSidebar />
        <main className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  )
}
