import { ProductCard } from "./ProductCard";
import { Product } from "@/types";

interface ProductListProps {
  title: string;
  products: Product[];
}

export const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};