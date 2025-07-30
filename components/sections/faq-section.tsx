import { FAQItem } from "@/components/ui/faq-item"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const faqs = [
  {
    question: "How does the AI-powered targeting work?",
    answer:
      "Our AI analyzes millions of data points including user behavior, demographics, interests, and purchase history to identify the most likely customers for your products or services. It continuously learns and optimizes targeting parameters to improve campaign performance.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing tools?",
    answer:
      "Yes! ADmyBRAND AI Suite integrates with over 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Shopify, and many more. Our API also allows for custom integrations.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including 24/7 chat support for Professional and Enterprise plans, extensive documentation, video tutorials, and dedicated account managers for Enterprise customers.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most customers see initial improvements within the first week of implementation. Significant ROI improvements typically occur within 30 days as our AI learns your specific business patterns and optimizes accordingly.",
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer:
      "Absolutely. We use enterprise-grade security with AES-256 encryption, SOC 2 Type II compliance, and GDPR compliance. Your data is never shared with third parties and you maintain full ownership and control.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300">Everything you need to know about ADmyBRAND AI Suite.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <FAQItem {...faq} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
