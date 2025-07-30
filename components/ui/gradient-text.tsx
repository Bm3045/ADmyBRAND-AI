import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent" | "rainbow"
}

export function GradientText({ children, className, variant = "primary" }: GradientTextProps) {
  const variants = {
    primary: "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600",
    secondary: "bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600",
    accent: "bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-600",
    rainbow: "bg-gradient-to-r from-purple-400 via-pink-400 via-red-400 via-orange-400 to-yellow-400",
  }

  return <span className={cn("bg-clip-text text-transparent", variants[variant], className)}>{children}</span>
}
