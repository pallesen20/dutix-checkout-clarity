import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-primary/10">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-primary mb-6">Dutix</h3>
            <p className="text-foreground/70 mb-8 max-w-md text-lg leading-relaxed">
              See the true price before you buy. No more surprise fees, duties, or taxes at checkout.
            </p>
            <div className="flex gap-4">
              <Button className="btn-primary">
                Add to Browser
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground">Product</h4>
            <ul className="space-y-3 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors text-lg">How it Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-lg">Supported Stores</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-lg">Countries</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-lg">Features</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground">Company</h4>
            <ul className="space-y-3 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors text-lg">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-lg">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-lg">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-lg">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-foreground/60">&copy; {new Date().getUTCFullYear()} Dutix. All rights reserved.</p>
            <div className="flex gap-8 text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
