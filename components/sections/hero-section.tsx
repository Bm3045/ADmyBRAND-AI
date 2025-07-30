import { AnimatedButton } from "@/components/ui/animated-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-float delay-1000" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float delay-2000" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <ScrollReveal>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm text-purple-300 font-medium">AI-Powered Marketing Revolution</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                  Marketing ROI
                </span>
                <br />
                with AI Precision
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                ADmyBRAND AI Suite uses advanced machine learning to optimize your campaigns, predict customer behavior,
                and deliver <span className="text-purple-400 font-semibold">300% better ROI</span> automatically.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <AnimatedButton size="lg" className="group text-lg px-8 py-4">
                  Start Free 14-Day Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg" className="group text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch 2-Min Demo
                </AnimatedButton>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                  <span>Setup in 5 minutes</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                  <span>300% ROI increase</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Placeholder */}
          <ScrollReveal delay={500}>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/placeholder.svg?height=600&width=800&text=AI+Marketing+Dashboard"
                  alt="ADmyBRAND AI Suite Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                +300% ROI
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                AI Optimized
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl -z-10 scale-110" />
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section */}
        <ScrollReveal delay={600}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">$50M+</div>
              <div className="text-gray-400 text-sm">Revenue Generated</div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">300%</div>
              <div className="text-gray-400 text-sm">Avg ROI Increase</div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
