import { useState } from "react";
import { ChevronDown, ChevronUp, Calculator, Shield, Truck, CreditCard, Globe, AlertTriangle } from "lucide-react";
import Footer from "@/components/Footer";

const CrossBorderShoppingTips = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Do I have to pay VAT when buying from EU?",
      answer: "When buying from EU countries, VAT rules depend on your location. If you're in the EU buying from another EU country, you typically pay VAT at the seller's rate for goods under €150. For goods over €150, you may need to pay VAT in your country. Non-EU residents generally don't pay EU VAT but may face import duties and VAT in their home country."
    },
    {
      question: "How to avoid import taxes?",
      answer: "While you cannot legally avoid legitimate import taxes, you can minimize them by: staying within duty-free allowances (typically €22-45 for gifts), choosing products made in countries with trade agreements, buying from local EU/domestic sellers, and understanding de minimis thresholds. Always declare items honestly - false declarations can result in penalties."
    },
    {
      question: "How to calculate customs duty from USA to UK?",
      answer: "UK customs duty from USA is calculated as: (Item Value + Shipping Cost) × Duty Rate. Most goods have 0-12% duty rates. You'll also pay 20% VAT on the total including duty. Use the UK government's trade tariff tool or HMRC's online calculator. Items under £135 are handled by the seller, while items over £135 require you to pay upon delivery."
    },
    {
      question: "How to know if I will pay customs fees online?",
      answer: "Check if you'll pay customs fees by: verifying the seller's location vs. your location, checking item value against your country's duty-free threshold, reviewing the product category for duty rates, and looking for 'DDP' (Delivered Duty Paid) or 'DDU' (Delivered Duty Unpaid) in shipping terms. Many online stores now show total costs including duties at checkout."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-gradient">Dutix</a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="/cross-border-shopping-tips" className="text-primary font-medium">Shopping Tips</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="section-padding hero-glow">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Complete Shopping Guide
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cross-Border Shopping Tips:
                <span className="text-gradient block">Master International Commerce</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Navigate international shopping with confidence. Learn about VAT, customs duties, and hidden fees to make informed purchasing decisions across borders.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Overview Cards */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="modern-card p-6 text-center">
                <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Cost Calculator</h3>
                <p className="text-muted-foreground text-sm">Understand total costs including duties and taxes</p>
              </div>
              <div className="modern-card p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Legal Compliance</h3>
                <p className="text-muted-foreground text-sm">Stay compliant with international trade regulations</p>
              </div>
              <div className="modern-card p-6 text-center">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Shipping Insights</h3>
                <p className="text-muted-foreground text-sm">Optimize shipping methods and understand fees</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* Cross-Border Shopping Tips */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Essential Cross-Border Shopping Tips</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Cross-border shopping opens up a world of products and deals, but it comes with complexities that can turn a bargain into an expensive mistake. Understanding international commerce regulations, tax implications, and hidden fees is crucial for successful cross-border purchases.
                  </p>
                  
                  <div className="modern-card p-6 my-8">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Key Considerations Before You Buy</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Total Cost Calculation:</strong> Always factor in shipping, customs duties, VAT, and handling fees</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Return Policy:</strong> International returns can be costly and complicated</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Delivery Time:</strong> Factor in customs clearance delays</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Warranty Coverage:</strong> Check if international warranties are honored</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* VAT vs Customs Duty */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">VAT vs Customs Duty: Understanding the Difference</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Many shoppers confuse VAT and customs duty, but they serve different purposes and are calculated differently. Understanding both is essential for accurate cost estimation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 my-8">
                    <div className="modern-card p-6">
                      <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                        <CreditCard className="w-5 h-5 mr-2 text-primary" />
                        VAT (Value Added Tax)
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Consumption tax on goods and services</li>
                        <li>• Typically 15-27% depending on country</li>
                        <li>• Applied to total value including shipping and duty</li>
                        <li>• Standard rate varies by country (UK: 20%, Germany: 19%)</li>
                        <li>• Some items may have reduced rates</li>
                      </ul>
                    </div>
                    
                    <div className="modern-card p-6">
                      <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-primary" />
                        Customs Duty
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Import tax on goods from other countries</li>
                        <li>• Varies by product category (0-25%+)</li>
                        <li>• Calculated on item value + shipping</li>
                        <li>• Protects domestic industries</li>
                        <li>• May be reduced by trade agreements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customs Clearance */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Customs Clearance Explained</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Customs clearance is the process where authorities verify your package contents, assess taxes and duties, and determine if items can enter the country. This process can significantly impact delivery times and costs.
                  </p>
                  
                  <div className="modern-card p-6 my-8">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">The Customs Clearance Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">1</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Documentation Review</h4>
                          <p className="text-sm">Customs officials verify shipping documents, invoices, and declarations</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">2</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Physical Inspection</h4>
                          <p className="text-sm">Random or targeted inspection of package contents</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">3</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Tax Assessment</h4>
                          <p className="text-sm">Calculation of applicable duties, taxes, and fees</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">4</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Payment & Release</h4>
                          <p className="text-sm">Payment of fees and release for final delivery</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* International Shipping Cost Breakdown */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">International Shipping Cost Breakdown</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Understanding all components of international shipping costs helps you make informed decisions and avoid surprises. Here's what you might pay beyond the item price:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Base Shipping Costs</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                          <span>Standard International</span>
                          <span className="font-medium">$15-50</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                          <span>Express Delivery</span>
                          <span className="font-medium">$30-100+</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                          <span>Tracking & Insurance</span>
                          <span className="font-medium">$5-20</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Additional Fees</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                          <span>Customs Handling</span>
                          <span className="font-medium">$10-25</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                          <span>Brokerage Fee</span>
                          <span className="font-medium">$15-50</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                          <span>Storage (if delayed)</span>
                          <span className="font-medium">$5-15/day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* International Shopping Guide */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Complete International Shopping Guide</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    This comprehensive guide covers everything you need to know for successful international shopping, from research to delivery.
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">Pre-Purchase Research</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Check seller reputation and reviews</li>
                        <li>• Verify product authenticity and certifications</li>
                        <li>• Compare total costs including all fees</li>
                        <li>• Review return and warranty policies</li>
                        <li>• Check compatibility (electrical, regional variants)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">During Purchase</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Use secure payment methods with buyer protection</li>
                        <li>• Save all transaction records and communications</li>
                        <li>• Verify shipping address and contact information</li>
                        <li>• Choose appropriate shipping method and insurance</li>
                        <li>• Understand Incoterms (DDP, DDU, etc.)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">After Purchase</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Track your shipment regularly</li>
                        <li>• Prepare for customs contact if needed</li>
                        <li>• Inspect items immediately upon delivery</li>
                        <li>• Keep all documentation for returns/warranty</li>
                        <li>• Review and rate your experience</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* UK to EU Tax Rules */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Online Shopping from UK to EU: Tax Rules Post-Brexit</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Brexit significantly changed the tax landscape for UK-EU trade. Understanding these new rules is crucial for both UK and EU shoppers.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-yellow-800 mb-2">Important Change</h3>
                        <p className="text-yellow-700 text-sm">Since January 1, 2021, the UK is treated as a non-EU country for customs and VAT purposes.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="modern-card p-6">
                      <h3 className="text-lg font-semibold mb-4 text-foreground">UK to EU Shopping</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• No UK VAT charged on exports to EU</li>
                        <li>• EU VAT applies on goods entering EU</li>
                        <li>• Customs duties may apply</li>
                        <li>• €22 gift exemption threshold</li>
                        <li>• €150 VAT threshold for distance sales</li>
                      </ul>
                    </div>
                    
                    <div className="modern-card p-6">
                      <h3 className="text-lg font-semibold mb-4 text-foreground">EU to UK Shopping</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• UK VAT (20%) applies on imports</li>
                        <li>• £135 threshold for online sales</li>
                        <li>• Customs duties on goods over £135</li>
                        <li>• £39 gift exemption threshold</li>
                        <li>• Additional handling fees may apply</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* US to EU Customs Calculator */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Shopping from US to EU: Customs Calculator Guide</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Shopping from the US to EU involves understanding complex tariff structures, VAT rates, and customs procedures. Here's how to calculate your total costs:
                  </p>
                  
                  <div className="modern-card p-6 my-8">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Calculation Formula</h3>
                    <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
                      <div>Total Cost = Item Price + Shipping + Customs Duty + VAT + Handling Fees</div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Where: Customs Duty = (Item Price + Shipping) × Duty Rate<br/>
                        VAT = (Item Price + Shipping + Customs Duty) × VAT Rate
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="modern-card p-4">
                      <h4 className="font-semibold text-foreground mb-2">Common Duty Rates</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Electronics</span>
                          <span>0-14%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Clothing</span>
                          <span>12%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Books</span>
                          <span>0%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cosmetics</span>
                          <span>0-6.5%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="modern-card p-4">
                      <h4 className="font-semibold text-foreground mb-2">EU VAT Rates</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Germany</span>
                          <span>19%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>France</span>
                          <span>20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Netherlands</span>
                          <span>21%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Spain</span>
                          <span>21%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="modern-card p-4">
                      <h4 className="font-semibold text-foreground mb-2">Thresholds</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Gifts</span>
                          <span>€45</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Commercial</span>
                          <span>€22</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duty-free</span>
                          <span>€150</span>
                        </div>
                        <div className="flex justify-between">
                          <span>VAT-free</span>
                          <span>€22</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Get answers to common cross-border shopping questions</p>
              </div>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="modern-card">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="modern-card p-12">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Shop Smart Across Borders?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get Dutix browser extension and never be surprised by hidden fees again
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/" className="btn-primary inline-block">
                    Add Dutix to Browser
                  </a>
                  <a href="/" className="btn-secondary inline-block">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CrossBorderShoppingTips;