import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import RateCalculator from "@/components/sections/RateCalculator";
import TrustGuarantees from "@/components/sections/TrustGuarantees";
import SocialProof from "@/components/sections/SocialProof";
import QuoteForm from "@/components/sections/QuoteForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <HowItWorks />
        <RateCalculator />
        <TrustGuarantees />
        <SocialProof />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
