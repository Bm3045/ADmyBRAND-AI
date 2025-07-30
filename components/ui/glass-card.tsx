import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl",
        hover &&
          "transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-3xl hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  )
}
