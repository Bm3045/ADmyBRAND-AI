"use client"

import { useState, useEffect } from "react"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content:
      "ADmyBRAND AI Suite transformed our marketing ROI by 300%. The AI insights are incredibly accurate and actionable. We've never seen results like this before.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100&text=Sarah+J",
    companyLogo: "/placeholder.svg?height=40&width=120&text=TechCorp",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    content:
      "The automation features saved us 20 hours per week. Our campaigns now run themselves and perform better than ever. It's like having a team of experts working 24/7.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100&text=Michael+C",
    companyLogo: "/placeholder.svg?height=40&width=120&text=StartupXYZ",
  },
  {
    name: "Emily Rodriguez",
    role: "Growth Manager",
    company: "E-commerce Plus",
    content:
      "The customer journey mapping feature helped us identify key optimization points we never knew existed. Our conversion rate increased by 150% in just 2 months.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100&text=Emily+R",
    companyLogo: "/placeholder.svg?height=40&width=120&text=E-commerce+Plus",
  },
  {
    name: "David Kim",
    role: "Marketing Manager",
    company: "FinanceFlow",
    content:
      "Best marketing tool we've ever used. The AI-generated creatives consistently outperform our manual efforts by 200%. The ROI speaks for itself.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100&text=David+K",
    companyLogo: "/placeholder.svg?height=40&width=120&text=FinanceFlow",
  },
  {
    name: "Lisa Thompson",
    role: "CMO",
    company: "RetailMax",
    content:
      "The real-time analytics and predictive insights have revolutionized how we approach campaign optimization. We're making data-driven decisions faster than ever.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100&text=Lisa+T",
    companyLogo: "/placeholder.svg?height=40&width=120&text=RetailMax",
  },
]

export function TestimonialsSection() {
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

  return (
    <section className="py-32 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/10" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Quote className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300 font-medium">Customer Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                10,000+ Marketers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite and
              achieved unprecedented results.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Testimonial */}
        <ScrollReveal delay={200}>
          <div className="mb-16">
            <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/20 rounded-3xl p-8 md:p-12 text-center">
              <Quote className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-purple-400"
                />
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-400">{testimonials[currentIndex].role}</div>
                  <img
                    src={testimonials[currentIndex].companyLogo || "/placeholder.svg"}
                    alt={testimonials[currentIndex].company}
                    className="mt-2 h-6 opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className={`transition-all duration-300 ${index === currentIndex ? "scale-105 ring-2 ring-purple-500" : ""}`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Company Logos */}
        <ScrollReveal delay={400}>
          <div className="mt-20 text-center">
            <p className="text-gray-400 mb-8 text-lg">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {testimonials.map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.companyLogo || "/placeholder.svg"}
                  alt={testimonial.company}
                  className="h-8 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
