import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductList } from "@/components/products/ProductList";
import { getProductsByCategory } from "@/data/products";
import { getCategoryById } from "@/data/categories";
import { Product, Category } from "@/types";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (id) {
      const foundCategory = getCategoryById(id);
      if (foundCategory) {
        setCategory(foundCategory);
        const categoryProducts = getProductsByCategory(id);
        setProducts(categoryProducts);
        setFilteredProducts(categoryProducts);
      } else {
        navigate("/products");
      }
    }
  }, [id, navigate]);

  // Filter products based on search query whenever it changes
  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto py-12 text-center">
          <p>Loading category...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 bg-akira-light">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-serif mb-4">{category.name}</h1>
          {category.description && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {category.description}
            </p>
          )}
        </div>
      </div>

      {/* Search input */}
      <div className="container mx-auto py-6">
        <div className="mb-6 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>
      </div>

      <ProductList
        title=""
        products={filteredProducts}
      />
      
      {filteredProducts.length === 0 && (
        <div className="container mx-auto py-12 text-center">
          <p>No products found. Try a different search term.</p>
        </div>
      )}
    </Layout>
  );
};

export default CategoryPage;