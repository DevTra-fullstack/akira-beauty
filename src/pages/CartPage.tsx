import { Layout } from "@/components/layout/Layout";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const CartPage = () => {
  const { items, removeAll } = useCart();

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-serif mb-8">Your Shopping Cart</h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center pb-4 border-b">
                  <h2 className="font-medium">Cart Items ({items.length})</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={removeAll}
                    className="text-red-500 hover:text-red-700"
                  >
                    Clear Cart
                  </Button>
                </div>
                
                <div className="divide-y">
                  {items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary />
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
              <Button asChild className="bg-akira hover:bg-akira-dark text-foreground">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
