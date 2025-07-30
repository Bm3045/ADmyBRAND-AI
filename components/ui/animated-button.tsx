"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}

export function AnimatedButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: AnimatedButtonProps) {
  const baseClasses =
    "relative overflow-hidden font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95"

  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25",
    secondary: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg hover:shadow-blue-500/25",
    outline: "border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button type={type} onClick={onClick} className={cn(baseClasses, variants[variant], sizes[size], className)}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
    </button>
  )
}
