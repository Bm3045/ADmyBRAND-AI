"use client"

import { useState } from "react"
import { ModernCard } from "@/components/ui/modern-card"
import { ModernButton } from "@/components/ui/modern-button"
import { GradientText } from "@/components/ui/gradient-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Check, Sparkles, Crown, Zap } from "lucide-react"

const pricingPlans = {
  monthly: [
    {
      name: "Starter",
      price: "$49",
      period: "month",
      description: "Perfect for small businesses getting started with AI marketing",
      features: [
        "Up to 10 campaigns",
        "Basic AI insights",
        "Email support",
        "Standard templates",
        "Basic analytics",
        "5GB storage",
      ],
      buttonText: "Start Free Trial",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: "$149",
      period: "month",
      description: "Advanced features for growing marketing teams",
      features: [
        "Unlimited campaigns",
        "Advanced AI insights",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "A/B testing",
        "API access",
        "50GB storage",
        "Team collaboration",
      ],
      popular: true,
      buttonText: "Start Free Trial",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated support",
        "White-label solution",
        "Advanced integrations",
        "Custom reporting",
        "SLA guarantee",
        "Unlimited storage",
        "Advanced security",
        "Custom training",
      ],
      buttonText: "Contact Sales",
      icon: Sparkles,
      color: "from-emerald-500 to-teal-500",
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "$490",
      period: "year",
      description: "Perfect for small businesses getting started with AI marketing",
      features: [
        "Up to 10 campaigns",
        "Basic AI insights",
        "Email support",
        "Standard templates",
        "Basic analytics",
        "5GB storage",
      ],
      buttonText: "Start Free Trial",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      savings: "Save $98",
    },
    {
      name: "Professional",
      price: "$1,490",
      period: "year",
      description: "Advanced features for growing marketing teams",
      features: [
        "Unlimited campaigns",
        "Advanced AI insights",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "A/B testing",
        "API access",
        "50GB storage",
        "Team collaboration",
      ],
      popular: true,
      buttonText: "Start Free Trial",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      savings: "Save $298",
    },
    {
      name: "Enterprise",
      price: "$3,990",
      period: "year",
      description: "Complete solution for large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated support",
        "White-label solution",
        "Advanced integrations",
        "Custom reporting",
        "SLA guarantee",
        "Unlimited storage",
        "Advanced security",
        "Custom training",
      ],
      buttonText: "Contact Sales",
      icon: Sparkles,
      color: "from-emerald-500 to-teal-500",
      savings: "Save $798",
    },
  ],
}

export function ModernPricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const currentPlans = isYearly ? pricingPlans.yearly : pricingPlans.monthly

  return (
    <section id="pricing" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 backdrop-blur-sm">
              <Crown className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-purple-300 font-medium">Simple, Transparent Pricing</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Choose Your <GradientText variant="primary">Perfect Plan</GradientText>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Start with a 14-day free trial. No credit card required. Scale as you grow with transparent pricing and no
              hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-16">
              <span className={`mr-4 text-lg ${!isYearly ? "text-white font-semibold" : "text-gray-400"}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-16 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-lg ${
                    isYearly ? "translate-x-8" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`ml-4 text-lg ${isYearly ? "text-white font-semibold" : "text-gray-400"}`}>
                Yearly
                <span className="ml-2 text-green-400 text-sm font-medium">Save up to 20%</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <ModernCard
                  className={`p-8 relative ${
                    plan.popular
                      ? "ring-2 ring-purple-500 scale-105 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                      : ""
                  }`}
                  variant={plan.popular ? "gradient" : "glass"}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                    <div className="mb-4">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>

                    {plan.savings && <div className="text-green-400 text-sm font-semibold">{plan.savings}</div>}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="p-1 rounded-full bg-green-500/20 mr-3">
                          <Check className="w-4 h-4 text-green-400" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <ModernButton variant={plan.popular ? "gradient" : "outline"} className="w-full" size="lg">
                    {plan.buttonText}
                  </ModernButton>
                </ModernCard>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Need a custom solution? Our enterprise team is here to help.</p>
            <ModernButton variant="ghost" size="lg">
              Schedule a Demo
            </ModernButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
