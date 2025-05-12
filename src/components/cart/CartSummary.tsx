import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface CartSummaryProps {
  isCheckoutPage?: boolean;
}

export const CartSummary = ({ isCheckoutPage = false }: CartSummaryProps) => {
  const { items } = useCart();
  
  const totalPrice = items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  const onCheckout = () => {
    // In a real-world scenario, this would handle the checkout process
    // For now, just display a notification
    toast.info("Checkout functionality will be implemented with a payment provider integration.");
  };
  
  return (
    <div className="bg-akira-light p-6 rounded-lg space-y-6">
      <h2 className="text-lg font-medium">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal ({items.length} items)</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Taxes (estimated)</span>
          <span>${(totalPrice * 0.08).toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-200 pt-4 flex justify-between font-medium">
          <span>Total</span>
          <span>${(totalPrice + (totalPrice * 0.08)).toFixed(2)}</span>
        </div>
      </div>
      {isCheckoutPage ? (
        <p className="text-center text-xs text-gray-500">
          Complete your shipping information to place your order.
        </p>
      ) : (
        <>
          <Button 
            asChild
            className="w-full bg-akira hover:bg-akira-dark text-foreground"
            disabled={items.length === 0}
          >
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
          <p className="text-center text-xs text-gray-500">
            By checking out, you agree to our{" "}
            <Link to="/terms" className="underline">Terms</Link> and{" "}
            <Link to="/privacy" className="underline">Privacy Policy</Link>.
          </p>
        </>
      )}
    </div>
  );
};