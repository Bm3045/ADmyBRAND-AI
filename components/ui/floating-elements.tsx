"use client"

import { useEffect, useState } from "react"
import { Sparkles, Zap, TrendingUp, Target, Brain, Shield } from "lucide-react"

const icons = [Sparkles, Zap, TrendingUp, Target, Brain, Shield]

export function FloatingElements() {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; icon: any; delay: number }>>([])

  useEffect(() => {
    const newElements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[i],
      delay: i * 2000,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => {
        const Icon = element.icon
        return (
          <div
            key={element.id}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}ms`,
            }}
          >
            <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
              <Icon className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
