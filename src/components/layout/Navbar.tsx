import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();
  const itemCount = items.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-medium">
          <span className="text-akira-gold">A</span>kira
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="hover:text-akira-gold transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-akira-gold transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-akira-gold transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-akira-gold transition-colors">Contact</Link></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Search size={20} />
          </Button>
          <Link to="/account">
            <Button variant="ghost" size="icon" className="text-foreground">
              <User size={20} />
            </Button>
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="text-foreground">
              <ShoppingBag size={20} />
            </Button>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-akira-gold text-white rounded-full text-xs flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
