import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ModernCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "gradient" | "glass" | "elevated"
  hover?: boolean
}

export function ModernCard({ children, className, variant = "default", hover = true }: ModernCardProps) {
  const variants = {
    default: "bg-white/5 border border-white/10",
    gradient: "bg-gradient-to-br from-white/10 to-white/5 border border-white/20",
    glass: "backdrop-blur-xl bg-white/5 border border-white/10",
    elevated: "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 shadow-2xl",
  }

  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        variants[variant],
        hover && "hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl",
        className,
      )}
    >
      {children}
    </div>
  )
}
