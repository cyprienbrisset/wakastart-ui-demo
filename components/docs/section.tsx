import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 mb-12", className)}>
      <h2 className="text-xl font-semibold mb-4">
        <a
          href={`#${id}`}
          className="hover:underline underline-offset-4"
        >
          {title}
        </a>
      </h2>
      {children}
    </section>
  )
}
