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
    <section className="section-padding bg-gradient-to-br from-background to-accent/20">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              See True Prices Instantly
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stop Getting Surprised by
            <span className="text-primary block">Hidden Fees</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Dutix shows you the final price including import duties, VAT, and extra fees before you buy. 
            No more checkout surprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
            <Button className="btn-primary flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add Dutix to Your Browser
            </Button>
            <Button variant="outline" className="btn-secondary">
              Try Demo
            </Button>
          </div>

          <div className="bg-card border rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Try it now - Paste your checkout link</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="https://shop.example.com/checkout/abc123..."
                value={checkoutUrl}
                onChange={(e) => setCheckoutUrl(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleCalculate} className="bg-primary text-primary-foreground hover:bg-primary/90">
                Calculate Final Price
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Get instant calculations for duties, taxes, and shipping fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;