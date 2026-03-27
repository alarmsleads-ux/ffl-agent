import TrustBar from "@/components/TrustBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredentialsSection from "@/components/CredentialsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import LegalSection from "@/components/LegalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <Header />
      <HeroSection />
      <CredentialsSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <LeadCaptureSection />
      <LegalSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
