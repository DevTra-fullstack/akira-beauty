import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="group product-card overflow-hidden bg-white rounded-lg">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mt-2">{product.name}</h3>
          <p className="text-akira-gold font-medium mt-1">${product.price.toFixed(2)}</p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Button
          onClick={() => addItem(product)}
          className="w-full bg-akira hover:bg-akira-dark text-foreground"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};