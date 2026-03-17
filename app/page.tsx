import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <SocialProof />
      <ContactForm />
      <Footer />
    </main>
  );
}
