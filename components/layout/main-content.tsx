"use client"

interface MainContentProps {
  children: React.ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1 overflow-auto">
      <div className="w-full py-6 lg:py-8 px-6 lg:px-10 max-w-7xl mx-auto">
        {children}
      </div>
    </main>
  )
}
