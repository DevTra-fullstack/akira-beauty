import { Layout } from "@/components/layout/Layout";
import { ShippingForm } from "@/components/checkout/ShippingForm";
import { CartSummary } from "@/components/cart/CartSummary";
import { useCart } from "@/hooks/use-cart";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const CheckoutPage = () => {
  const { items } = useCart();
  
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-serif mb-8">Checkout</h1>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ShippingForm />
            </div>
            <div className="lg:col-span-1">
              <CartSummary isCheckoutPage={true} />
            </div>
          </div>
        ) : (
          <div className="text-center py-16 space-y-6">
            <div className="flex justify-center">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium">Your cart is empty</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. Explore our products to find something you'll love!
            </p>
            <div className="pt-4">
              <Link to="/products" className="bg-akira hover:bg-akira-dark text-foreground py-2 px-4 rounded">
                Browse Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CheckoutPage;