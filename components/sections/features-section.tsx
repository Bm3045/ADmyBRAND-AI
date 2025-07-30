import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Brain, Target, BarChart3, Zap, Users, Shield, Sparkles, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Advanced machine learning algorithms analyze your data to provide actionable insights and predictions.",
    image: "/placeholder.svg?height=300&width=400&text=AI+Brain+Analytics",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach the right audience at the right time with our intelligent targeting system.",
    image: "/placeholder.svg?height=300&width=400&text=Target+Audience",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor campaign performance with comprehensive real-time analytics and reporting.",
    image: "/placeholder.svg?height=300&width=400&text=Analytics+Dashboard",
  },
  {
    icon: Zap,
    title: "Automated Campaigns",
    description: "Set up intelligent automation workflows that optimize themselves for maximum ROI.",
    image: "/placeholder.svg?height=300&width=400&text=Automation+Workflow",
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description: "Visualize and optimize every touchpoint in your customer's journey.",
    image: "/placeholder.svg?height=300&width=400&text=Customer+Journey",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Enterprise-grade security ensures your data is protected with advanced encryption.",
    image: "/placeholder.svg?height=300&width=400&text=Security+Shield",
  },
  {
    icon: Sparkles,
    title: "Creative Generation",
    description: "AI-powered creative tools generate compelling ad copy and visuals automatically.",
    image: "/placeholder.svg?height=300&width=400&text=Creative+AI",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuous optimization algorithms improve campaign performance over time.",
    image: "/placeholder.svg?height=300&width=400&text=Performance+Graph",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-32 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300 font-medium">Powerful AI Features</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Everything You Need for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Modern Marketing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive AI suite provides all the tools you need to create, manage, and optimize your marketing
              campaigns with unprecedented precision.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Showcase */}
        <ScrollReveal delay={200}>
          <div className="mb-20">
            <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/20 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">See Your Marketing Transform in Real-Time</h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Watch as our AI analyzes your campaigns, identifies optimization opportunities, and automatically
                    implements improvements that drive results.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">Real-time performance monitoring</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">Automatic bid optimization</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">Predictive audience insights</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Real-time+Marketing+Dashboard"
                    alt="Real-time Marketing Dashboard"
                    className="rounded-2xl shadow-2xl border border-white/10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                  {/* Feature Image */}
                  <div className="mb-6 relative overflow-hidden rounded-xl">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
