import { Shield, DollarSign, Eye, Clock } from "lucide-react";

const WhyDutixSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Save Money",
      description: "Avoid unexpected charges and budget accurately for your purchases"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Complete Transparency",
      description: "See all fees upfront - duties, taxes, shipping, and handling charges"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Surprises",
      description: "Know exactly what you'll pay before you commit to buying"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Instant Calculations",
      description: "Real-time price updates as you shop, no manual calculations needed"
    }
  ];

  return (
    <section className="section-padding bg-accent/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dutix?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of smart shoppers who never get surprised by hidden fees
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
            <Shield className="w-4 h-4" />
            Free to use • No hidden costs • Privacy protected
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDutixSection;