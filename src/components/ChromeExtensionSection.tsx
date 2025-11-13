import { useState } from "react";
import { Chrome, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ComingSoonDialog from "./ComingSoonDialog";

const ChromeExtensionSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const features = [
    "Instant customs duty calculation",
    "Real-time VAT and tax estimates",
    "Shipping fee breakdown",
    "Multi-currency support",
    "Works on all major shopping sites",
    "No account registration needed"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-50 p-6 rounded-3xl">
              <Chrome className="w-16 h-16 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Google Chrome Users
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Join millions of Chrome users who shop smarter with instant price transparency
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="modern-card p-8">
            <h3 className="text-2xl font-bold mb-6">Why Chrome Users Love Dutix</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="modern-card p-8 bg-gradient-to-br from-primary/5 to-primary/10">
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-semibold">Install Extension</h4>
                </div>
                <p className="text-foreground/70 ml-11">Add Dutix to Chrome in one click</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-semibold">Shop Normally</h4>
                </div>
                <p className="text-foreground/70 ml-11">Browse any online store as usual</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-semibold">See True Prices</h4>
                </div>
                <p className="text-foreground/70 ml-11">Get instant calculations with all fees included</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-3xl p-12 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Shop Smarter?</h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Install Dutix for Chrome and never worry about hidden fees again
          </p>
          <Button 
            onClick={() => setIsDialogOpen(true)}
            className="btn-primary text-xl px-12 py-6 mb-6 add-to-browser-btn"
          >
            Add to Chrome - It's Free
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Free forever
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              No account required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Works instantly
            </div>
          </div>
        </div>
      </div>

      <ComingSoonDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default ChromeExtensionSection;
