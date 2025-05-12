import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-akira-light py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl mb-2">
            <span className="text-akira-gold">A</span>kira
          </h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Premium skincare products designed for young skin. Clean, effective formulations for a radiant complexion.
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-akira-gold transition-colors">All Products</Link></li>
            <li><Link to="/category/cleansers" className="hover:text-akira-gold transition-colors">Cleansers</Link></li>
            <li><Link to="/category/serums" className="hover:text-akira-gold transition-colors">Serums</Link></li>
            <li><Link to="/category/moisturizers" className="hover:text-akira-gold transition-colors">Moisturizers</Link></li>
            <li><Link to="/category/treatments" className="hover:text-akira-gold transition-colors">Treatments</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Help</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-akira-gold transition-colors">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-akira-gold transition-colors">Shipping Information</Link></li>
            <li><Link to="/returns" className="hover:text-akira-gold transition-colors">Returns & Exchanges</Link></li>
            <li><Link to="/faq" className="hover:text-akira-gold transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-akira-gold transition-colors">Our Story</Link></li>
            <li><span className="hover:text-akira-gold transition-colors cursor-not-allowed">Ingredients</span></li>
            <li><span className="hover:text-akira-gold transition-colors cursor-not-allowed">Sustainability</span></li>
            <li><span className="hover:text-akira-gold transition-colors cursor-not-allowed">Press</span></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2025 Akira Beauty. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-akira-gold transition-colors">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-akira-gold transition-colors">TikTok</a>
            <a href="#" className="text-gray-500 hover:text-akira-gold transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
