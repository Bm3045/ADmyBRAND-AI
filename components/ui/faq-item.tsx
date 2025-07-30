"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { GlassCard } from "./glass-card"

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <GlassCard className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </div>
    </GlassCard>
  )
}
