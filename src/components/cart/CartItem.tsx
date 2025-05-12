import { ShoppingBag, Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product & { quantity: number };
}

export const CartItem = ({ data }: CartItemProps) => {
  const { removeItem, updateQuantity } = useCart();

  const onRemove = () => {
    removeItem(data.id);
  };

  const onDecrement = () => {
    if (data.quantity > 1) {
      updateQuantity(data.id, data.quantity - 1);
    }
  };

  const onIncrement = () => {
    updateQuantity(data.id, data.quantity + 1);
  };

  return (
    <div className="flex items-center py-4 border-b">
      <div className="aspect-square w-20 h-20 rounded-md overflow-hidden relative">
        <img
          src={data.images[0]}
          alt={data.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 ml-4">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium">{data.name}</h3>
          <p className="text-sm font-medium text-akira-gold">
            ${data.price.toFixed(2)}
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-1">Category: {data.category}</p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded-md">
            <Button
              onClick={onDecrement}
              variant="ghost"
              size="icon"
              className="h-8 w-8 p-0"
              disabled={data.quantity <= 1}
            >
              <Minus size={14} />
            </Button>
            <span className="px-2">{data.quantity}</span>
            <Button
              onClick={onIncrement}
              variant="ghost"
              size="icon"
              className="h-8 w-8 p-0"
            >
              <Plus size={14} />
            </Button>
          </div>
          <Button
            onClick={onRemove}
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full p-0 text-red-500"
          >
            <X size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
