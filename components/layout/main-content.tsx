"use client"

interface MainContentProps {
  children: React.ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1 overflow-auto">
      <div className="w-full py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto pb-24 lg:pb-32">
        {children}
      </div>
    </main>
  )
}
