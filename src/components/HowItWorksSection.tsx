import { Download, Search, Eye } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Download,
      number: "01",
      title: "Install Extension",
      description: "Add Dutix to your browser in seconds. Works with Chrome, Firefox, Edge, and Safari."
    },
    {
      icon: Search,
      number: "02", 
      title: "Shop Normally",
      description: "Browse any online store as usual. Dutix works automatically in the background."
    },
    {
      icon: Eye,
      number: "03",
      title: "See Real Prices",
      description: "View final prices with all fees included instantly. No surprises at checkout."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Dutix Works
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Get transparent pricing in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="modern-card w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-lg">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Connection lines */}
        <div className="hidden md:block relative -mt-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3">
            <div className="flex justify-between items-center">
              <div className="w-16 h-0.5 bg-primary/20"></div>
              <div className="w-16 h-0.5 bg-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;