# 🚀 ADmyBRAND AI Suite – SaaS Landing Page & Component System

A modern, visually stunning landing page for the fictional **ADmyBRAND AI Suite** – an AI-powered marketing platform – built with **Next.js 14**, **Tailwind CSS**, **TypeScript**, and **Framer Motion**. Includes a reusable component library with 8+ customizable UI elements.

## 🖼️ Preview

> Live Demo: [https://admybrand-ai.vercel.app](https://admybrand-ai.vercel.app)  
> Design: Inspired by 2025 UI/UX trends (glassmorphism, scroll animations, responsive)

![Preview](public/preview.jpg)

---

## 📦 Tech Stack

- **Framework:** Next.js 14 App Router + TypeScript
- **Styling:** Tailwind CSS (Glassmorphism, modern typography)
- **Animations:** Framer Motion
- **Icons:** Lucide + React Icons
- **State/Form:** Client-side validation
- **Deployment:** Vercel (Recommended)

---

## 🌟 Features

### ✅ Core Landing Page Sections

- **Hero Section:** Headline, subtext, CTA button, hero image/video
- **Features Section:** 6+ product highlights with icons and descriptions
- **Pricing Section:** 3-tier pricing cards with feature comparison
- **Testimonials:** Carousel with animated customer reviews
- **FAQ Section:** Interactive accordion-style questions
- **Footer:** Social media links, contact info, legal links

### 🎨 UI/UX Highlights

- Glassmorphism Effects (`backdrop-blur`, transparency)
- Clean, readable font hierarchy (Sora/Inter/Manrope)
- Mobile-first responsive layout
- Subtle **scroll-in animations**
- CTA-focused visual layout for better conversion

### ⚙️ Reusable Component Library (`/app/components`)

| Component        | Features                                  |
|------------------|-------------------------------------------|
| `Button.tsx`     | Primary/secondary + loading state         |
| `Card.tsx`       | Features, pricing, testimonials           |
| `Modal.tsx`      | Newsletter/demo popup                     |
| `Input.tsx`      | Styled input with validation              |
| `Accordion.tsx`  | FAQ collapsible sections                  |
| `Carousel.tsx`   | Testimonial slider (Framer Motion)        |
| `PricingTier.tsx`| Modular pricing cards                     |
| `Navbar.tsx`     | Mobile-responsive navigation              |
| `Footer.tsx`     | Social links, contact info, legal         |

### 💡 Bonus Features

- [ ] **Interactive Pricing Calculator**
- [ ] **Demo Video/Animation Embed**
- [ ] **Blog/Resources Section**
- [ ] **Advanced Animations (GSAP/Framer Motion)**

---

## 📁 Project Structure

```bash
app/
├─ components/     # Reusable UI components
├─ sections/       # Hero, Features, Pricing, etc.
├─ page.tsx        # Main landing page layout
├─ styles/         # Optional custom CSS
public/            # Static assets (images, video)


# 🚀 Getting Started
Follow these steps to set up the project locally:

Clone the Repository

bash
git clone https://github.com/yourname/admybrand-landing.git
cd admybrand-landing
Install Dependencies

bash
npm install
Run the Dev Server

bash
npm run dev
Visit http://localhost:3000 to see the site.
