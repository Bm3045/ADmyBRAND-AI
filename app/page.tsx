import { Navbar } from "@/components/navigation/navbar"
import { ProgressBar } from "@/components/ui/progress-bar"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { AccessibilitySkipLink } from "@/components/ui/accessibility-skip-link"
import { ModernHeroSection } from "@/components/sections/modern-hero-section"
import { ModernFeaturesSection } from "@/components/sections/modern-features-section"
import { ModernAboutSection } from "@/components/sections/modern-about-section"
import { ModernPricingSection } from "@/components/sections/modern-pricing-section"
import { ModernTestimonialsSection } from "@/components/sections/modern-testimonials-section"
import { TeamSection } from "@/components/sections/team-section"
import { FAQSection } from "@/components/sections/faq-section"
import { EnhancedContactSection } from "@/components/sections/enhanced-contact-section"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <>
      <AccessibilitySkipLink />
      <ProgressBar />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <ModernHeroSection />
        <ModernFeaturesSection />
        <ModernAboutSection />
        <ModernPricingSection />
        <ModernTestimonialsSection />
        <TeamSection />
        <FAQSection />
        <EnhancedContactSection />
        <Footer />
      </main>

      <ScrollToTop />
    </>
  )
}
