"use client"

import Link from "next/link"

export function MinimalHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">@wakastellar/ui</span>
        </Link>
      </div>
    </header>
  )
}
