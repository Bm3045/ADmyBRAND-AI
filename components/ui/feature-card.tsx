import { GlassCard } from "./glass-card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <GlassCard hover className="p-6 text-center group">
      <div className="mb-4 flex justify-center">
        <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </GlassCard>
  )
}
