"use client"

import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { EnhancedForm } from "@/components/ui/enhanced-form"
import { Toast } from "@/components/ui/toast"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

const contactFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "John Doe",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    placeholder: "john@company.com",
    validation: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value) ? null : "Please enter a valid email address"
    },
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Your Company Inc.",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 (555) 123-4567",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "Tell us about your marketing goals and how we can help...",
  },
]

export function EnhancedContactSection() {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null)

  const handleSubmit = async (data: Record<string, string>) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setToast({
      message: "Thank you for your message! We'll get back to you within 24 hours.",
      type: "success",
    })
  }

  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <MessageCircle className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300 font-medium">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how ADmyBRAND AI Suite can help you achieve your marketing goals. Our team of experts is
              ready to create a custom solution for your business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-2">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <EnhancedForm fields={contactFields} onSubmit={handleSubmit} submitText="Send Message" />
            </GlassCard>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              {/* Contact Methods */}
              <GlassCard className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email Us</h4>
                    <p className="text-gray-300">hello@admybrand.ai</p>
                    <p className="text-sm text-gray-400">We respond within 2 hours</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Call Us</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Visit Us</h4>
                    <p className="text-gray-300">
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Business Hours */}
              <GlassCard className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                  </div>
                </div>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </GlassCard>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Quick Response Guarantee</h4>
                <p className="text-green-300 text-sm">
                  We respond to all inquiries within 2 hours during business hours, guaranteed.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  )
}
