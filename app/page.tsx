import Benefits from "../src/components/Benefits";
import ContactForm from "../src/components/ContactForm";
import Features from "../src/components/Features";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import HowItWorks from "../src/components/HowItWorks";
import Navbar from "../src/components/Navbar";
import Pricing from "../src/components/Pricing";
import SocialProof from "../src/components/SocialProof";


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
