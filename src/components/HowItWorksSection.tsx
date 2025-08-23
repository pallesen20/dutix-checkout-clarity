import { Search, Calculator, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Shop Online",
      description: "Browse and shop on your favorite international stores as usual"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "See Real Prices",
      description: "Dutix instantly calculates duties, VAT, and fees in real-time"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Buy with Confidence",
      description: "Know the exact final price before clicking purchase"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Dutix Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transparent online shopping
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;