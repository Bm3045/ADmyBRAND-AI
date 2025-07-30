import { GlassCard } from "./glass-card"
import { Star, Quote } from "lucide-react"

interface EnhancedTestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  companyLogo?: string
}

export function EnhancedTestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  avatar,
  companyLogo,
}: EnhancedTestimonialCardProps) {
  return (
    <GlassCard className="p-8 h-full relative overflow-hidden group hover:scale-105 transition-all duration-300">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-20">
        <Quote className="w-8 h-8 text-purple-400" />
      </div>

      <div className="relative z-10">
        {/* Rating */}
        <div className="flex items-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-500"}`} />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-gray-300 mb-8 leading-relaxed text-lg">"{content}"</blockquote>

        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <img
                src={avatar || "/placeholder.svg"}
                alt={name}
                className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-purple-400/50"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg">{name}</h4>
              <p className="text-gray-400">
                {role} at {company}
              </p>
            </div>
          </div>

          {companyLogo && (
            <img
              src={companyLogo || "/placeholder.svg"}
              alt={company}
              className="h-8 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
      </div>
    </GlassCard>
  )
}
