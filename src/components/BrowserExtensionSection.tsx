import { Button } from "@/components/ui/button";

const BrowserExtensionSection = () => {
  const browsers = [
    { name: "Chrome", icon: "🌐", users: "2B+ users", color: "bg-blue-50 text-blue-600" },
    { name: "Firefox", icon: "🦊", users: "250M+ users", color: "bg-orange-50 text-orange-600" },
    { name: "Edge", icon: "🔷", users: "600M+ users", color: "bg-blue-50 text-blue-700" },
    { name: "Safari", icon: "🧭", users: "1B+ users", color: "bg-gray-50 text-gray-700" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Available for All Major Browsers
        </h2>
        <p className="text-xl text-foreground/70 mb-16 max-w-3xl mx-auto">
          Install Dutix on your favorite browser and start saving money immediately
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          {browsers.map((browser, index) => (
            <div key={index} className="modern-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-2xl ${browser.color} flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform`}>
                {browser.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{browser.name}</h3>
              <p className="text-sm text-foreground/60">{browser.users}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-3xl p-12 max-w-4xl mx-auto">
          <Button className="btn-primary text-xl px-12 py-6 mb-6">
            🚀 Add to Browser - It's Free
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
    </section>
  );
};

export default BrowserExtensionSection;