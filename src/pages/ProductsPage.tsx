import { Layout } from "@/components/layout/Layout";
import { ProductList } from "@/components/products/ProductList";
import { products } from "@/data/products";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Filter products based on both category and search query
  const filteredProducts = products.filter(product => {
    // Check if the product matches the selected category (if any)
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    
    // Check if the product name includes the search query (case insensitive)
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Return true only if both conditions are met
    return matchesCategory && matchesSearch;
  });
  
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  return (
    <Layout>
      <div className="py-12 bg-akira-light">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-serif mb-4">All Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium skincare products designed for young skin.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto py-8">
        {/* Search input */}
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
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            className={selectedCategory === null ? "bg-akira hover:bg-akira-dark text-foreground" : ""}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "bg-akira hover:bg-akira-dark text-foreground" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </div>
      
      <ProductList
        title=""
        products={filteredProducts}
      />

      {filteredProducts.length === 0 && (
        <div className="container mx-auto py-12 text-center">
          <p>No products found. Try a different search or category.</p>
        </div>
      )}
    </Layout>
  );
};

export default ProductsPage;