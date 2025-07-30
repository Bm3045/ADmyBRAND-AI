"use client"

import { useState } from "react"
import { PricingCard } from "@/components/ui/pricing-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const pricingPlans = {
  monthly: [
    {
      title: "Starter",
      price: "$29",
      period: "month",
      features: ["Up to 5 campaigns", "Basic AI insights", "Email support", "Standard templates", "Basic analytics"],
      buttonText: "Start Free Trial",
    },
    {
      title: "Professional",
      price: "$99",
      period: "month",
      features: [
        "Unlimited campaigns",
        "Advanced AI insights",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "A/B testing",
        "API access",
      ],
      popular: true,
      buttonText: "Start Free Trial",
    },
    {
      title: "Enterprise",
      price: "$299",
      period: "month",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated support",
        "White-label solution",
        "Advanced integrations",
        "Custom reporting",
        "SLA guarantee",
      ],
      buttonText: "Contact Sales",
    },
  ],
  yearly: [
    {
      title: "Starter",
      price: "$290",
      period: "year",
      features: ["Up to 5 campaigns", "Basic AI insights", "Email support", "Standard templates", "Basic analytics"],
      buttonText: "Start Free Trial",
    },
    {
      title: "Professional",
      price: "$990",
      period: "year",
      features: [
        "Unlimited campaigns",
        "Advanced AI insights",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "A/B testing",
        "API access",
      ],
      popular: true,
      buttonText: "Start Free Trial",
    },
    {
      title: "Enterprise",
      price: "$2990",
      period: "year",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated support",
        "White-label solution",
        "Advanced integrations",
        "Custom reporting",
        "SLA guarantee",
      ],
      buttonText: "Contact Sales",
    },
  ],
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const currentPlans = isYearly ? pricingPlans.yearly : pricingPlans.monthly

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start with a free trial and scale as you grow. No hidden fees, cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${!isYearly ? "text-white" : "text-gray-400"}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-14 h-7 bg-gray-600 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                    isYearly ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`ml-3 ${isYearly ? "text-white" : "text-gray-400"}`}>
                Yearly
                <span className="ml-1 text-green-400 text-sm">(Save 17%)</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <PricingCard {...plan} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
