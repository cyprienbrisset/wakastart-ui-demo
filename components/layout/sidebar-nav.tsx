"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ScrollArea, Badge } from "@wakastellar/ui"
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
        "border-r bg-card text-card-foreground",
        mobile ? "h-full" : "hidden lg:block w-56 xl:w-64 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)]"
      )}
    >
      <ScrollArea className="h-full py-6 px-4">
        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 px-2 text-sm font-semibold tracking-tight">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    <span className="truncate">{item.title}</span>
                    {item.isNew && (
                      <Badge variant="secondary" className="ml-auto text-[10px] px-1.5 py-0 h-4">
                        New
                      </Badge>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  )
}
