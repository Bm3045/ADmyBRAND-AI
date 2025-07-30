import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Linkedin, Twitter, Github } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former Google AI researcher with 10+ years in machine learning and marketing technology.",
    image: "/images/alex-chen.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Williams",
    role: "CTO & Co-Founder",
    bio: "Ex-Facebook engineer specializing in large-scale AI systems and data infrastructure.",
    image: "/images/sarah-williams.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of AI",
    bio: "PhD in Machine Learning from Stanford, previously led AI initiatives at Tesla.",
    image: "/images/marcus-rodriguez.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emily Zhang",
    role: "VP of Product",
    bio: "Former Uber product leader with expertise in user experience and growth marketing.",
    image: "/images/emily-zhang.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Visionaries
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our world-class team combines decades of experience in AI, marketing, and technology to deliver the most
              advanced marketing platform ever built.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <GlassCard className="p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-400/50 group-hover:border-purple-400 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
