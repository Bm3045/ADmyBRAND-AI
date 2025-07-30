"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ModernButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
}

export function ModernButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ModernButtonProps) {
  const baseClasses =
    "relative overflow-hidden font-semibold rounded-2xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 hover:scale-105",
    secondary:
      "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg hover:shadow-blue-500/25 hover:scale-105",
    outline:
      "border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:border-white/50 hover:scale-105",
    ghost: "text-white hover:bg-white/10 hover:scale-105",
    gradient:
      "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white shadow-lg hover:shadow-purple-500/25 hover:scale-105",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
    >
      <span className="relative z-10 flex items-center justify-center">{children}</span>
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/50 to-pink-600/50 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
    </button>
  )
}
