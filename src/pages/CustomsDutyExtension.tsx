import { ChevronDown, Chrome, Download, Calculator, Shield, Zap, CheckCircle, AlertTriangle, Monitor } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CustomsDutyExtension = () => {
  const [openFaq, setOpenFaq] = useState<string | undefined>();

  const features = [
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Real-time Price Calculator",
      description: "Instantly calculate final prices including customs duties, VAT, and shipping fees before you buy."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Accurate Tax Estimates",
      description: "Get precise import tax calculations based on your location and the product's origin country."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "One-Click Installation",
      description: "Install our browser extension in seconds and start seeing true prices immediately."
    }
  ];

  const browsers = [
    {
      name: "Chrome",
      icon: <Chrome className="h-12 w-12 text-blue-500" />,
      users: "2M+ users",
      available: true
    },
    {
      name: "Firefox",
      icon: <Monitor className="h-12 w-12 text-orange-500" />,
      users: "500K+ users", 
      available: true
    }
  ];

  const faqData = [
    {
      question: "How does the browser extension calculate customs duties?",
      answer: "Our extension uses real-time customs data from official government sources and automatically detects your location and the product's origin. It calculates duties based on HS codes, current tariff rates, and applicable trade agreements."
    },
    {
      question: "Is the customs duty extension free to use?",
      answer: "Yes, our basic customs duty calculator extension is completely free. It includes essential features like duty calculation, VAT estimation, and shipping cost breakdown for popular online stores."
    },
    {
      question: "Which online stores are supported by the extension?",
      answer: "Our extension works with major international retailers including Amazon, eBay, AliExpress, Shein, ASOS, and hundreds of other popular online stores. We continuously add support for new retailers."
    },
    {
      question: "How accurate are the customs fee calculations?",
      answer: "Our calculations are highly accurate, typically within 95% of actual fees. We use official customs databases and update rates regularly. However, final fees may vary slightly due to customs officer discretion or product classification differences."
    },
    {
      question: "Can I use the extension for business purchases?",
      answer: "Yes, our extension supports both personal and business purchases. For business users, we offer additional features like duty exemption calculations, commercial invoice generation, and bulk import cost analysis."
    },
    {
      question: "Does the extension work for all countries?",
      answer: "We support customs calculations for 150+ countries and territories. Coverage includes all EU countries, UK, USA, Canada, Australia, and most major trading nations. We're constantly expanding our coverage."
    },
    {
      question: "Will using the extension slow down my browsing?",
      answer: "No, our extension is lightweight and only activates on supported shopping sites. It runs efficiently in the background and typically adds less than 0.1 seconds to page load times."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                Browser Extension for Customs Duty Calculator
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Never get surprised by hidden fees again. Our customs duty chrome extension calculates import taxes, VAT, and final prices instantly while you shop online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="btn-primary text-lg px-8 py-6">
                  <Download className="h-5 w-5 mr-2" />
                  Add to Chrome - Free
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  View Demo
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Free forever
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  No account required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Works instantly
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Shopping Assistant Browser Extension?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our import tax browser extension is the most accurate tool to check customs fees before buying, saving you from unexpected costs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">How Our Price Calculator Browser Extension Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get accurate final prices with our international shopping browser extension in three simple steps.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Install Extension</h3>
                <p className="text-muted-foreground text-lg">
                  Add our customs duty chrome extension to your browser in one click. No registration needed.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Shop Normally</h3>
                <p className="text-muted-foreground text-lg">
                  Browse your favorite online stores. Our extension automatically detects international purchases.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4">See True Prices</h3>
                <p className="text-muted-foreground text-lg">
                  View real-time calculations of customs duties, VAT, and total costs before checkout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Extension Demo */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Extension to Calculate Import Tax at Checkout</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how our tool to check customs fees before buying transforms your shopping experience.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-2xl p-8 border">
                <div className="flex items-center gap-3 mb-6 p-3 bg-gray-100 rounded-lg">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600">amazon.com/product/wireless-headphones</div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-gray-100 rounded-lg p-6 mb-4">
                      <h3 className="text-xl font-bold mb-2">Wireless Headphones</h3>
                      <p className="text-gray-600 mb-4">Premium noise-canceling headphones</p>
                      <div className="text-3xl font-bold text-primary mb-4">$299.99</div>
                      <Button className="w-full">Add to Cart</Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border-2 border-primary/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Calculator className="h-6 w-6 text-primary" />
                      <h4 className="text-lg font-bold">Dutix Extension</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Product Price:</span>
                        <span>$299.99</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span>$15.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Import Duty (8%):</span>
                        <span>$24.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>VAT (20%):</span>
                        <span>$67.80</span>
                      </div>
                      <hr className="border-primary/20" />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Price:</span>
                        <span className="text-primary">$406.79</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded">
                        <AlertTriangle className="h-4 w-4" />
                        <span>+$106.80 in hidden fees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Browser Support */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Available for All Major Browsers</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our customs fees calculator online shopping extension works seamlessly across all popular browsers.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {browsers.map((browser) => (
                <Card key={browser.name} className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      {browser.icon}
                    </div>
                    <CardTitle className="text-2xl">{browser.name}</CardTitle>
                    <CardDescription className="text-lg">{browser.users}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full btn-primary">
                      <Download className="h-4 w-4 mr-2" />
                      Add to {browser.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Use an Import Tax Calculator for Checkout?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our online shopping tax estimate tool helps you make informed decisions and avoid costly surprises.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold mb-2">No Surprises</h3>
                <p className="text-muted-foreground">Know exact costs before purchasing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  $
                </div>
                <h3 className="text-xl font-bold mb-2">Save Money</h3>
                <p className="text-muted-foreground">Compare total costs across retailers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ⚡
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                <p className="text-muted-foreground">Real-time calculations as you browse</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  🛡️
                </div>
                <h3 className="text-xl font-bold mb-2">Accurate Data</h3>
                <p className="text-muted-foreground">Official customs rates and regulations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Calculate Final Price Before Buying
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join millions of smart shoppers who use our browser extension for online shopping to check duties and VAT instantly.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Download className="h-5 w-5 mr-2" />
              Install Free Extension Now
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about our customs duty extension and import tax calculator.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible value={openFaq} onValueChange={setOpenFaq}>
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-b border-border/50">
                    <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CustomsDutyExtension;