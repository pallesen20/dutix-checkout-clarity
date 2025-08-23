import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyDutixSection from "@/components/WhyDutixSection";
import BrowserExtensionSection from "@/components/BrowserExtensionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyDutixSection />
        <BrowserExtensionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
