import { ModernCard } from "@/components/ui/modern-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Brain, Target, BarChart3, Zap, Users, Shield, Sparkles, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Advanced neural networks analyze millions of data points to predict customer behavior and optimize campaigns in real-time.",
    color: "from-purple-500 to-pink-500",
    stats: "99.7% accuracy",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach your ideal customers with laser-focused targeting powered by machine learning algorithms.",
    color: "from-blue-500 to-cyan-500",
    stats: "3x better CTR",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor performance with beautiful, interactive dashboards that update in real-time.",
    color: "from-emerald-500 to-teal-500",
    stats: "Live updates",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Set up intelligent workflows that optimize themselves and scale your marketing efforts.",
    color: "from-yellow-500 to-orange-500",
    stats: "80% time saved",
  },
  {
    icon: Users,
    title: "Customer Journey",
    description: "Map and optimize every touchpoint in your customer's journey with AI-driven insights.",
    color: "from-pink-500 to-rose-500",
    stats: "45% more conversions",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance with global standards.",
    color: "from-slate-500 to-gray-500",
    stats: "SOC 2 certified",
  },
]

export function ModernFeaturesSection() {
  return (
    <section id="features" className="py-32 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-purple-300 font-medium">Powerful AI Features</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Built for the <GradientText variant="primary">Future of Marketing</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive AI suite provides everything you need to create, manage, and optimize marketing
              campaigns that deliver unprecedented results.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Showcase */}
        <ScrollReveal delay={200}>
          <ModernCard variant="gradient" className="p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-white mb-6">
                  Watch Your Marketing <GradientText variant="secondary">Transform</GradientText>
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Experience the power of AI as it analyzes your campaigns, identifies opportunities, and automatically
                  implements optimizations that drive real results.
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Real-time performance monitoring", value: "24/7" },
                    { label: "Automatic bid optimization", value: "+67% ROI" },
                    { label: "Predictive audience insights", value: "99.7% accuracy" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4"></div>
                        <span className="text-gray-300">{item.label}</span>
                      </div>
                      <span className="text-green-400 font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <ModernCard variant="elevated" className="p-6">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=AI+Dashboard+Preview"
                    alt="AI Marketing Dashboard"
                    className="w-full h-auto rounded-xl"
                  />
                </ModernCard>
              </div>
            </div>
          </ModernCard>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <ModernCard className="p-8 h-full group cursor-pointer">
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} inline-flex group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-purple-400">{feature.stats}</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </ModernCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
