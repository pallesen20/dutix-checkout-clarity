import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, ShoppingCart } from "lucide-react";

const HeroSection = () => {
  const [checkoutUrl, setCheckoutUrl] = useState("");

  const handleCalculate = () => {
    if (checkoutUrl) {
      // Placeholder for calculation logic
      alert("Dutix will calculate your final price here!");
    }
  };

  return (
    <section className="section-padding hero-glow relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container relative">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-semibold shadow-lg border border-primary/20">
              <Calculator className="w-4 h-4" />
              ✨ See True Prices Instantly
            </div>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Stop Getting
            <span className="text-gradient block">Surprised by Fees</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Dutix reveals the <strong className="text-primary">true final price</strong> including import duties, VAT, and extra fees before you buy. 
            <br className="hidden md:block" />
            No more checkout surprises.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="btn-primary flex items-center gap-3 text-xl px-10 py-6">
              <ShoppingCart className="w-6 h-6" />
              Add Dutix to Your Browser
            </Button>
            <Button className="btn-secondary text-xl px-10 py-6">
              Watch Demo
            </Button>
          </div>

          {/* Calculator card */}
          <div className="modern-card p-8 max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Try it now</h3>
              <p className="text-foreground/60">Paste any checkout link to see instant price calculations</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <Input
                placeholder="https://shop.example.com/checkout/abc123..."
                value={checkoutUrl}
                onChange={(e) => setCheckoutUrl(e.target.value)}
                className="flex-1 h-14 text-lg border-primary/20 focus:border-primary rounded-xl"
              />
              <Button onClick={handleCalculate} className="btn-primary h-14 px-8 whitespace-nowrap">
                Calculate Final Price
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-primary/10">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Import duties
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                VAT & taxes
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Shipping fees
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;