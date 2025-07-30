"use client"

import { useState, useEffect } from "react"
import { ModernCard } from "@/components/ui/modern-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ModernButton } from "@/components/ui/modern-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ChevronLeft, ChevronRight, Quote, Star, Play, TrendingUp, Users, Award } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechFlow",
    content:
      "ADmyBRAND AI Suite completely transformed our marketing strategy. We saw a 400% increase in qualified leads within the first month. The AI insights are incredibly accurate and actionable.",
    rating: 5,
    avatar: "/images/sarah-johnson.png",
    companyLogo: "/placeholder.svg?height=32&width=100&text=TechFlow",
    metrics: {
      improvement: "+400%",
      metric: "Qualified Leads",
    },
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "GrowthLab",
    content:
      "The automation features saved us 25 hours per week. Our campaigns now run themselves and perform better than when we managed them manually. It's like having a team of AI experts.",
    rating: 5,
    avatar: "/images/marcus-rodriguez.png",
    companyLogo: "/placeholder.svg?height=32&width=100&text=GrowthLab",
    metrics: {
      improvement: "25hrs",
      metric: "Time Saved/Week",
    },
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Growth Manager",
    company: "E-commerce Pro",
    content:
      "The customer journey mapping feature helped us identify optimization points we never knew existed. Our conversion rate increased by 180% in just 6 weeks.",
    rating: 5,
    avatar: "/images/emily-watson.png",
    companyLogo: "/placeholder.svg?height=32&width=100&text=E-commerce+Pro",
    metrics: {
      improvement: "+180%",
      metric: "Conversion Rate",
    },
  },
  {
    id: 4,
    name: "David Kim",
    role: "Marketing Director",
    company: "FinanceFlow",
    content:
      "Best marketing investment we've ever made. The AI-generated creatives consistently outperform our manual efforts by 250%. The ROI speaks for itself.",
    rating: 5,
    avatar: "/images/david-kim.png",
    companyLogo: "/placeholder.svg?height=32&width=100&text=FinanceFlow",
    metrics: {
      improvement: "+250%",
      metric: "Creative Performance",
    },
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "CMO",
    company: "RetailMax",
    content:
      "The predictive analytics have revolutionized our campaign planning. We're making data-driven decisions faster and with more confidence than ever before.",
    rating: 5,
    avatar: "/images/lisa-thompson.png",
    companyLogo: "/placeholder.svg?height=32&width=100&text=RetailMax",
    metrics: {
      improvement: "90%",
      metric: "Decision Speed",
    },
  },
  {
    id: 6,
    name: "Alex Johnson",
    
    role: "Head of Digital",
    company: "StartupXYZ",
    content:
      "ADmyBRAND's AI Suite helped us scale from $100K to $1M ARR in 8 months. The platform grows with you and the insights get better over time.",
    rating: 5,
    avatar: "/images/Alex Johnson.png",
    companyLogo: "/placeholder.svg?height=32&width=100&text=StartupXYZ",
    metrics: {
      improvement: "10x",
      metric: "Revenue Growth",
    },
  },
]

const companyLogos = [
  { name: "TechFlow", logo: "/placeholder.svg?height=40&width=120&text=TechFlow" },
  { name: "GrowthLab", logo: "/placeholder.svg?height=40&width=120&text=GrowthLab" },
  { name: "E-commerce Pro", logo: "/placeholder.svg?height=40&width=120&text=E-commerce+Pro" },
  { name: "FinanceFlow", logo: "/placeholder.svg?height=40&width=120&text=FinanceFlow" },
  { name: "RetailMax", logo: "/placeholder.svg?height=40&width=120&text=RetailMax" },
  { name: "StartupXYZ", logo: "/placeholder.svg?height=40&width=120&text=StartupXYZ" },
  { name: "DataCorp", logo: "/placeholder.svg?height=40&width=120&text=DataCorp" },
  { name: "CloudTech", logo: "/placeholder.svg?height=40&width=120&text=CloudTech" },
]

export function ModernTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const featuredTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 backdrop-blur-sm">
              <Quote className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-purple-300 font-medium">Customer Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Loved by <GradientText variant="primary">50,000+ Marketers</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite and
              achieved unprecedented results across every industry.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <ModernCard variant="glass" className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </ModernCard>
            <ModernCard variant="glass" className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">300%</div>
              <div className="text-gray-400 text-sm">Avg ROI Increase</div>
            </ModernCard>
            <ModernCard variant="glass" className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-gray-400 text-sm">Customer Rating</div>
            </ModernCard>
            <ModernCard variant="glass" className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-gray-400 text-sm">Would Recommend</div>
            </ModernCard>
          </div>
        </ScrollReveal>

        {/* Featured Testimonial */}
        <ScrollReveal delay={200}>
          <ModernCard variant="gradient" className="p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-purple-400" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                  "{featuredTestimonial.content}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={featuredTestimonial.avatar || "/placeholder.svg"}
                      alt={featuredTestimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
                    />
                    <div>
                      <div className="text-white font-semibold text-lg">{featuredTestimonial.name}</div>
                      <div className="text-gray-400">{featuredTestimonial.role}</div>
                      <img
                        src={featuredTestimonial.companyLogo || "/placeholder.svg"}
                        alt={featuredTestimonial.company}
                        className="mt-2 h-6 opacity-70"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="inline-flex flex-col items-center lg:items-end">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {featuredTestimonial.metrics.improvement}
                  </div>
                  <div className="text-gray-300 text-sm">{featuredTestimonial.metrics.metric}</div>
                  <div className="mt-4 px-4 py-2 bg-green-500/20 rounded-full">
                    <span className="text-green-400 text-sm font-semibold">Verified Result</span>
                  </div>
                </div>
              </div>
            </div>
          </ModernCard>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <ModernCard
                className={`p-6 h-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "ring-2 ring-purple-500 scale-105" : ""
                }`}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  ))}
                </div>

                <blockquote className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-purple-400/50 mr-3"
                    />
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <img
                    src={testimonial.companyLogo || "/placeholder.svg"}
                    alt={testimonial.company}
                    className="h-6 opacity-60"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-2xl font-bold text-green-400">{testimonial.metrics.improvement}</span>
                  <span className="text-gray-400 text-sm">{testimonial.metrics.metric}</span>
                </div>
              </ModernCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-6 mb-16">
          <ModernButton variant="outline" size="sm" onClick={prevTestimonial}>
            <ChevronLeft className="w-5 h-5" />
          </ModernButton>

          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <ModernButton variant="outline" size="sm" onClick={nextTestimonial}>
            <ChevronRight className="w-5 h-5" />
          </ModernButton>
        </div>

        {/* Company Logos */}
        <ScrollReveal delay={400}>
          <div className="text-center">
            <p className="text-gray-400 mb-8 text-lg">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companyLogos.map((company, index) => (
                <img
                  key={index}
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="h-8 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Video Testimonials CTA */}
        <ScrollReveal delay={500}>
          <div className="text-center mt-16">
            <ModernButton variant="outline" size="lg" className="group">
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Watch Video Testimonials
            </ModernButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
