"use client"

import { useState, useEffect } from "react"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info"
  duration?: number
  onClose: () => void
}

export function Toast({ message, type = "info", duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
  }

  const colors = {
    success: "from-green-500/20 to-green-600/20 border-green-500/30",
    error: "from-red-500/20 to-red-600/20 border-red-500/30",
    info: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
  }

  const Icon = icons[type]

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 backdrop-blur-xl bg-gradient-to-r border rounded-lg p-4 shadow-2xl transition-all duration-300 max-w-sm",
        colors[type],
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full",
      )}
    >
      <div className="flex items-start space-x-3">
        <Icon
          className={cn(
            "w-5 h-5 flex-shrink-0 mt-0.5",
            type === "success" && "text-green-400",
            type === "error" && "text-red-400",
            type === "info" && "text-blue-400",
          )}
        />
        <p className="text-white text-sm leading-relaxed flex-1">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false)
            setTimeout(onClose, 300)
          }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
