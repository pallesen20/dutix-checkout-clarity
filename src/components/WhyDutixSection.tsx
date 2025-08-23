import { DollarSign, Shield, Clock, Globe } from "lucide-react";

const WhyDutixSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save Money",
      description: "Avoid overpaying by comparing true final prices across different stores and regions.",
      highlight: "Up to 30% savings"
    },
    {
      icon: Shield,
      title: "No Surprises",
      description: "See all costs upfront - duties, VAT, shipping, and handling fees included.",
      highlight: "100% transparency"
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get calculations in real-time as you browse. No waiting, no manual calculations.",
      highlight: "< 1 second"
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Shop from any international store with confidence. Supports 190+ countries.",
      highlight: "190+ countries"
    }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Dutix?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            The smart way to shop internationally with complete price transparency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="modern-card p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="mb-3">
                <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {benefit.highlight}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDutixSection;