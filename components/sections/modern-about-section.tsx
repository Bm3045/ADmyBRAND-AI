import { ModernCard } from "@/components/ui/modern-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ModernButton } from "@/components/ui/modern-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Brain, Rocket, Users, Award, Globe, Lightbulb, Shield, TrendingUp, Zap, Heart, Star } from "lucide-react"

const stats = [
  { number: "2019", label: "Founded", icon: Rocket },
  { number: "50K+", label: "Customers", icon: Users },
  { number: "150+", label: "Team Members", icon: Heart },
  { number: "25+", label: "Countries", icon: Globe },
]

const values = [
  {
    icon: Brain,
    title: "Innovation First",
    description: "We push the boundaries of AI technology to create solutions that didn't exist yesterday.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Customer Obsessed",
    description: "Every decision we make starts with our customers' success and satisfaction in mind.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We protect your data with enterprise-grade security and transparent practices.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "We're always learning, improving, and adapting to serve you better.",
    color: "from-yellow-500 to-orange-500",
  },
]

const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Founded by AI researchers from Google and Facebook with a vision to democratize AI marketing.",
    icon: Rocket,
  },
  {
    year: "2020",
    title: "First AI Model",
    description: "Launched our first predictive analytics model, helping 100+ early customers increase ROI by 200%.",
    icon: Brain,
  },
  {
    year: "2021",
    title: "Series A Funding",
    description: "Raised $15M Series A to expand our AI capabilities and grow our team of world-class engineers.",
    icon: TrendingUp,
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded to 15 countries and reached 10,000+ customers, processing $100M+ in ad spend.",
    icon: Globe,
  },
  {
    year: "2023",
    title: "AI Suite 2.0",
    description: "Launched our comprehensive AI Suite with advanced automation and real-time optimization.",
    icon: Zap,
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Became the #1 AI marketing platform with 50,000+ customers and 300% average ROI increase.",
    icon: Award,
  },
]

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former Google AI researcher with 12+ years in machine learning. PhD from Stanford, published 50+ papers on AI.",
    image: "/images/alex-chen.png",
    linkedin: "#",
    achievements: ["Forbes 30 Under 30", "MIT Technology Review Innovator"],
  },
  {
    name: "Sarah Williams",
    role: "CTO & Co-Founder",
    bio: "Ex-Facebook engineering leader who built systems serving 2B+ users. Expert in large-scale AI infrastructure.",
    image: "/images/sarah-williams.png",
    linkedin: "#",
    achievements: ["Top 40 Under 40 CTO", "Women in Tech Award"],
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of AI Research",
    bio: "PhD in Machine Learning from MIT. Previously led AI initiatives at Tesla and published breakthrough research.",
    image: "/images/marcus-rodriguez.png",
    linkedin: "#",
    achievements: ["NIPS Best Paper Award", "AI Research Excellence"],
  },
  {
    name: "Emily Zhang",
    role: "VP of Product",
    bio: "Former Uber product leader with expertise in user experience and growth. Built products used by millions.",
    image: "/images/emily-zhang.png",
    linkedin: "#",
    achievements: ["Product Leader of the Year", "UX Innovation Award"],
  },
]

export function ModernAboutSection() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 backdrop-blur-sm">
              <Heart className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-purple-300 font-medium">Our Story</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Building the <GradientText variant="primary">Future of Marketing</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize AI-powered marketing, making advanced machine learning accessible to
              businesses of all sizes. Our journey started with a simple belief: every marketer deserves the power of
              AI.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <ModernCard key={index} variant="glass" className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </ModernCard>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Mission Statement */}
        <ScrollReveal delay={200}>
          <ModernCard variant="gradient" className="p-8 md:p-12 mb-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <GradientText variant="secondary">Mission</GradientText>
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              To empower every marketer with AI superpowers, transforming how businesses connect with their customers
              through intelligent, data-driven marketing that delivers real results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
                <div className="text-gray-300">Marketers Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">$500M+</div>
                <div className="text-gray-300">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI Increase</div>
              </div>
            </div>
          </ModernCard>
        </ScrollReveal>

        {/* Values */}
        <ScrollReveal delay={300}>
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-white text-center mb-12">
              Our <GradientText variant="accent">Core Values</GradientText>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <ModernCard key={index} className="p-8 group">
                    <div className="flex items-start">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${value.color} mr-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-3">{value.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </ModernCard>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal delay={400}>
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-white text-center mb-12">
              Our <GradientText variant="primary">Journey</GradientText>
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />

              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const Icon = item.icon
                  const isEven = index % 2 === 0
                  return (
                    <div key={index} className={`flex items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                      <div className={`w-1/2 ${isEven ? "pr-8 text-right" : "pl-8 text-left"}`}>
                        <ModernCard className="p-6">
                          <div className="text-purple-400 font-bold text-lg mb-2">{item.year}</div>
                          <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                          <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </ModernCard>
                      </div>

                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className="w-1/2" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Leadership Team */}
        <ScrollReveal delay={500}>
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-white text-center mb-4">
              Meet Our <GradientText variant="secondary">Leadership Team</GradientText>
            </h3>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              World-class leaders with decades of experience in AI, technology, and marketing from top companies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <ModernCard key={index} className="p-6 text-center group">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-400/50 group-hover:border-purple-400 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>

                  <div className="space-y-2 mb-4">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center justify-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-gray-400 text-xs">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <ModernButton variant="outline" size="sm" className="w-full">
                    View LinkedIn
                  </ModernButton>
                </ModernCard>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={600}>
          <ModernCard variant="gradient" className="p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our <GradientText variant="primary">Mission?</GradientText>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for AI and marketing innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ModernButton size="lg" variant="gradient">
                View Open Positions
              </ModernButton>
              <ModernButton size="lg" variant="outline">
                Learn More About Us
              </ModernButton>
            </div>
          </ModernCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
