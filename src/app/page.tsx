import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
// import FutureCarePromoModal from "@/components/FutureCarePromoModal";
import BackToTop from "@/components/BackToTop";

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Starting Block Ventures",
  alternateName: "SBV",
  url: "https://sbv.one",
  logo: "https://sbv.one/sbv_logo.png",
  description:
    "Southeast Asia's premier venture studio co-building and scaling high-growth startups.",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Ryan",
      email: "hello@sbv.one",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Taguig City",
    addressRegion: "Metro Manila",
    addressCountry: "PH",
  },
  sameAs: [
    "https://www.linkedin.com/company/starting-block-ventures/",
  ],
  knowsAbout: [
    "Venture Capital",
    "Startup Acceleration",
    "AI Startups",
    "Fintech",
    "Healthtech",
    "Climate Tech",
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        {/* Fixed Header */}
        <Header />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section with Scroll Frame Animation */}
          <HeroSection />

          {/* About Section */}
          <AboutSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Portfolio Section */}
          <PortfolioSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* CTA Section */}
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
      {/* <FutureCarePromoModal /> */}
      <BackToTop />
    </>
  );
}
