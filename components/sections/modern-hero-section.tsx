import { ModernButton } from "@/components/ui/modern-button"
import { GradientText } from "@/components/ui/gradient-text"
import { ModernCard } from "@/components/ui/modern-card"
import { FloatingElements } from "@/components/ui/floating-elements"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ArrowRight, Play, Sparkles, Zap, TrendingUp, Star, Users, Award } from "lucide-react"

export function ModernHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-pink-900/10" />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <ScrollReveal>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-purple-400 mr-3" />
            <span className="text-purple-300 font-medium">Introducing ADmyBRAND AI Suite 2.0</span>
            <div className="ml-3 px-2 py-1 bg-purple-500/30 rounded-full text-xs text-purple-200">NEW</div>
          </div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            The Future of
            <br />
            <GradientText variant="primary" className="text-6xl md:text-8xl lg:text-9xl">
              AI Marketing
            </GradientText>
            <br />
            is Here
          </h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal delay={200}>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your marketing strategy with our revolutionary AI platform that delivers{" "}
            <span className="text-purple-400 font-semibold">10x better results</span> through intelligent automation,
            predictive analytics, and real-time optimization.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <ModernButton size="xl" variant="gradient" className="group min-w-[200px]">
              Start Free Trial
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </ModernButton>
            <ModernButton size="xl" variant="outline" className="group min-w-[200px]">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch Demo
            </ModernButton>
          </div>
        </ScrollReveal>

        {/* Social Proof */}
        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16 text-gray-400">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-slate-900"
                  />
                ))}
              </div>
              <span className="text-sm">Trusted by 50K+ marketers</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm">4.9/5 rating</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <ScrollReveal delay={500}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <ModernCard variant="glass" className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </ModernCard>

            <ModernCard variant="glass" className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">300%</div>
              <div className="text-gray-400 text-sm">ROI Increase</div>
            </ModernCard>

            <ModernCard variant="glass" className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">5 Min</div>
              <div className="text-gray-400 text-sm">Setup Time</div>
            </ModernCard>

            <ModernCard variant="glass" className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </ModernCard>
          </div>
        </ScrollReveal>

        {/* Hero Visual */}
        <ScrollReveal delay={600}>
          <div className="mt-20 relative">
            <ModernCard variant="elevated" className="p-8 max-w-5xl mx-auto">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=1000&text=AI+Marketing+Dashboard+2.0"
                  alt="ADmyBRAND AI Suite Dashboard"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-xl" />

                {/* Floating Metrics */}
                <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-3">
                  <div className="text-green-400 text-sm font-semibold">+47% CTR</div>
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3">
                  <div className="text-blue-400 text-sm font-semibold">AI Optimized</div>
                </div>
                <div className="absolute top-1/2 left-4 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3">
                  <div className="text-purple-400 text-sm font-semibold">Real-time</div>
                </div>
              </div>
            </ModernCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
