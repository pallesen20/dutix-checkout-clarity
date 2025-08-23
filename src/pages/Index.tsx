import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExtensionDemo from "@/components/ExtensionDemo";
import WhyDutixSection from "@/components/WhyDutixSection";
import BrowserExtensionSection from "@/components/BrowserExtensionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ExtensionDemo />
        <WhyDutixSection />
        <BrowserExtensionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
