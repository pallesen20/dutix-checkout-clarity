import { CheckCircle, AlertTriangle } from "lucide-react";

const ExtensionDemo = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/20 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Dutix in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's how Dutix transforms your shopping experience with real-time price transparency
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card border rounded-2xl overflow-hidden shadow-lg">
            {/* Browser Bar */}
            <div className="bg-muted/50 px-4 py-3 border-b flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded px-3 py-1 text-sm text-muted-foreground">
                  https://shop.example.com/product/wireless-headphones
                </div>
              </div>
            </div>

            {/* Product Page Content */}
            <div className="p-6 bg-gradient-to-br from-background to-muted/20">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Product Info */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">Premium Wireless Headphones</h3>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">$299.99</span>
                      <span className="text-sm text-muted-foreground">USD</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Ships from: United States</span>
                    </div>
                    <div className="pt-4">
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dutix Extension Popup */}
                <div className="relative">
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-2 z-10 shadow-lg">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  
                  <div className="bg-white border-2 border-primary rounded-xl p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">D</span>
                      </div>
                      <span className="font-semibold text-primary">Dutix Extension</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-muted-foreground">Product Price</span>
                        <span className="font-semibold">$299.99</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-muted-foreground">Shipping</span>
                        <span className="font-semibold">$24.99</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-muted-foreground">Import Duties</span>
                        <span className="font-semibold text-orange-600">$37.50</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm text-muted-foreground">VAT (20%)</span>
                        <span className="font-semibold text-orange-600">$72.50</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-3 bg-primary/10 rounded-lg px-3">
                        <span className="font-bold text-primary">Total Final Price</span>
                        <span className="font-bold text-xl text-primary">$434.98</span>
                      </div>
                      
                      <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span className="text-sm text-orange-800">
                          <strong>+$134.99</strong> more than displayed price
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Without Dutix, you'd discover these extra costs only at checkout
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Know the true price upfront with Dutix
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionDemo;