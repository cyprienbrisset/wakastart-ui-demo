"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ScrollArea } from "@wakastellar/ui"
import { cn } from "@/lib/utils"
import { navigation } from "@/config/navigation"

interface SidebarNavProps {
  mobile?: boolean
  onNavigate?: () => void
}

export function SidebarNav({ mobile = false, onNavigate }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "border-r bg-background",
        mobile ? "h-full" : "hidden lg:block w-64 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)]"
      )}
    >
      <ScrollArea className="h-full py-6 px-4">
        <div className="space-y-6">
          {navigation.map((section) => (
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
    </aside>
  )
}
