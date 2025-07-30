import { GlassCard } from "./glass-card"
import { AnimatedButton } from "./animated-button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period: string
  features: string[]
  popular?: boolean
  buttonText: string
}

export function PricingCard({ title, price, period, features, popular, buttonText }: PricingCardProps) {
  return (
    <GlassCard className={`p-8 relative ${popular ? "ring-2 ring-purple-500 scale-105" : ""}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-300">/{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <AnimatedButton variant={popular ? "primary" : "outline"} className="w-full">
        {buttonText}
      </AnimatedButton>
    </GlassCard>
  )
}
