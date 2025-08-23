import { Button } from "@/components/ui/button";
import { Chrome, Globe, Monitor } from "lucide-react";

const BrowserExtensionSection = () => {
  const browsers = [
    { name: "Chrome", icon: <Chrome className="w-8 h-8" />, users: "2B+ users" },
    { name: "Firefox", icon: <Monitor className="w-8 h-8" />, users: "200M+ users" },
    { name: "Edge", icon: <Globe className="w-8 h-8" />, users: "600M+ users" }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Available for All Major Browsers
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Install Dutix on your favorite browser and start shopping with confidence
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {browsers.map((browser, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary mb-4 flex justify-center">
                  {browser.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{browser.name}</h3>
                <p className="text-sm text-muted-foreground">{browser.users}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Shopping Smarter?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of shoppers who save money and avoid surprises with Dutix
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Add to Chrome - It's Free
              </Button>
              <Button variant="outline" className="btn-secondary">
                View All Browsers
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Install in seconds • Works on all shopping sites • 100% free
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowserExtensionSection;