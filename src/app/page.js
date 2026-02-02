import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import Membership from "@/components/home/Membership";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/shared/CTA";
import BMICalculator from "@/components/widgets/BMICalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Stats />
      <AboutPreview />
      <Services />
      <Membership />
      <Testimonials />
      <BMICalculator />
      <CTA />
    </main>
  );
}
