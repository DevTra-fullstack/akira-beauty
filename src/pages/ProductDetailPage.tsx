import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/use-cart";
import { getProductById } from "@/data/products";
import { Product } from "@/types";
import { Minus, Plus } from "lucide-react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate("/products");
      }
    }
  }, [id, navigate]);

  const onAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
    }
  };

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto py-12 text-center">
          <p>Loading product...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
              <p className="text-2xl text-akira-gold font-medium">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-gray-600">{product.description}</p>

            {product.features && (
              <div>
                <h3 className="font-medium mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <Button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button
                    onClick={() => setQuantity(quantity + 1)}
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>

              <Button
                onClick={onAddToCart}
                className="w-full bg-akira hover:bg-akira-dark text-foreground py-6"
              >
                Add to Cart
              </Button>
            </div>

            <Tabs defaultValue="usage">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent border-gray-200 mb-4">
                {product.usage && <TabsTrigger value="usage" className="data-[state=active]:border-b-2 data-[state=active]:border-akira-gold">How to Use</TabsTrigger>}
                {product.ingredients && <TabsTrigger value="ingredients" className="data-[state=active]:border-b-2 data-[state=active]:border-akira-gold">Ingredients</TabsTrigger>}
              </TabsList>
              {product.usage && (
                <TabsContent value="usage" className="text-gray-600">
                  {product.usage}
                </TabsContent>
              )}
              {product.ingredients && (
                <TabsContent value="ingredients" className="text-gray-600">
                  {product.ingredients}
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;