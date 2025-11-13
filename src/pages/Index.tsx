import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExtensionDemo from "@/components/ExtensionDemo";
import WhyDutixSection from "@/components/WhyDutixSection";
import ChromeExtensionSection from "@/components/ChromeExtensionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ExtensionDemo />
        <WhyDutixSection />
        <ChromeExtensionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
