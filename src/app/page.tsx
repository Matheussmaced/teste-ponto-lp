import Benefits from "../components/Benefits";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import SocialProof from "../components/SocialProof";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
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
